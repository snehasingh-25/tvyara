import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Navbar from '../components/Nav-bar';

const TaskA = () => {
  const codeString = `
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

  const explanation = `
- Keep two pointers: slow and fast
  - slow moves 1 step at a time
  - fast moves 2 steps at a time

- Detect if a cycle exists
  - Loop while fast and fast.next are not null
  - Move slow by 1 and fast by 2
  - If slow equals fast → cycle exists
  - If fast reaches the end → no cycle

- Find the start of the cycle
  - Reset slow to the head
  - Keep fast at meeting point
  - Move both 1 step at a time
  - Where they meet → start of the cycle
`;

  return (
    <div className="h-screen bg-onahau-950 font-inter">
      <Navbar />

      <h1 className="text-center text-4xl font-bold mt-6 mb-6 text-primary">
        Task A
      </h1>

      <div className="flex flex-row justify-center p-6 space-x-6">
        
        <div className="flex-1 rounded-xl overflow-auto bg-secondary border border-onahau-200">
          <SyntaxHighlighter
            language="java"
            style={docco}
            customStyle={{
              backgroundColor: 'var(--color-primary)',
              padding: '1rem',
              borderRadius: '0.75rem',
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>

        <div className="flex-1 rounded-xl p-6 shadow-md border border-onahau-200 bg-primary text-secondary whitespace-pre-line">
          {explanation}
        </div>
      </div>
    </div>
  );
};

export default TaskA;
