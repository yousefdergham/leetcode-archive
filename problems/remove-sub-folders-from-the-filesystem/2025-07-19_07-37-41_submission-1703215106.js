/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  let folderSorted = folder.sort((a, b) => a.length - b.length);
  let result = [folderSorted[0]];

  for (let i = 1; i < folderSorted.length; i++) {
    let isSubdir = false;
    for (let parent of result) {
      if (isSubfolder(parent, folderSorted[i])) {
        isSubdir = true;
        break;
      }
    }
    if (!isSubdir) {
      result.push(folderSorted[i]);
    }
  }
  return result;
};

function isSubfolder(parent, child) {
  return child.startsWith(parent + "/");
}