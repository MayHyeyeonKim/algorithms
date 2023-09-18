class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseList(self, head):
        prev = None
        current = head

        while current is not None:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node

        return prev


# 테스트용 입력값 생성
# 1 -> 2 -> 3 -> 4 -> 5 형태의 연결 리스트 생성
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))

# Solution 클래스 인스턴스 생성
solution = Solution()

# 연결 리스트 뒤집기
new_head = solution.reverseList(head)

# 뒤집힌 연결 리스트 출력
while new_head is not None:
    print(new_head.val, end=" -> ")
    new_head = new_head.next

# T.C : O(n) / S.C : O(1)
