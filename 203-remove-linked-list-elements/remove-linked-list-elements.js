/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) {
        return head;
    };

    while (head) {
        if (head.val === val) {
            head = head.next;
        } else {
            break;
        }
    };

    let current = head?.next;
    let previous = head;

    while (current) {
        if (current.val === val) {
            previous.next = current.next;
            current = current.next;
        } else {
            previous = current;
            current = current.next;
        }
    };

    return head;
};
