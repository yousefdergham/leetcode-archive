# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        # Initialize a dummy node with a value of 0
        dummy_node = ListNode(0)
        current_node = dummy_node
        carry = 0
        
        # Iterate through both linked lists until we reach the end of both lists
        while l1 or l2:
            # Extract the values of the current nodes, or set them to 0 if the current node is None
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0
            
            # Add the values of the current nodes and the carry, and calculate the new carry
            sum = val1 + val2 + carry
            carry = sum // 10
            
            # Append the sum modulo 10 to the current node
            current_node.next = ListNode(sum % 10)
            current_node = current_node.next
            
            # Move to the next node in both lists
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        
        # If there is a carry remaining, append it to the current node
        if carry > 0:
            current_node.next = ListNode(carry)
        
        # Return the next node after the dummy node, which is the head of the resulting linked list
        return dummy_node.next