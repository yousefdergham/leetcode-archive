var backspaceCompare = function (s, t) {
  let str1 = "",
    str2 = "";
  let stk = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#" && stk.length !== 0) stk.pop();
    else if (s[i] !== "#") stk.push(s[i]);
  }

  while (stk.length > 0) {
    str1 += stk.pop();
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] == "#" && stk.length !== 0) stk.pop();
    else if (t[i] != "#") stk.push(t[i]);
  }

  while (stk.length > 0) {
    str2 += stk.pop();
  }

  return str1 == str2;
};