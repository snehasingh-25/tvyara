import { useNavigate } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const TaskA = () => {
  const codeString = `
  /**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode slow=head;
        ListNode fast=head;
        while(fast!=null && fast.next!=null){
            fast=fast.next.next;
            slow=slow.next;
            if(slow==fast){
                break;
            }
        }
        if(fast==null || fast.next==null) return null;
        slow=head;
        while(true){
            if(fast==slow) return slow;
            slow=slow.next;
            fast=fast.next;
        }
    }
}
  `;

  const navigate=useNavigate();
  function handle(){
    navigate('/taskb');
  }
  return (
    <>
    <h1>Task A</h1>
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
    <button onClick={handle}>TaskB</button>
    </>
  );
};

export default TaskA
