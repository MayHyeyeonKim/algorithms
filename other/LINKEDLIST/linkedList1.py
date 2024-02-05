# 노드 클래스 하나 만들기
# 노드의 맴버 : 벨류 넥스트가 있다
# 맴버는 self.뒤에 붙는 속성을 말한다.
# = 업데이트 일때도 있지만 향하게 할 수 도 있다.
# new_node = Node(val)


class Node:
    def __init__(self, val):  # self를 넣어줘라!!
        self.val = val
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def addHead(self, node: Node):  # 노드를 하나 만들어서 걔를 0번 인덱스에 넣는 것
        if self.head is None:
            self.head = node
        else:
            node.next = self.head  # 노드의넥스트는 self.head를 가리킨다
            self.head = node

    def insertAfter(self, node: Node, new_node: Node):
        new_node.next = node.next
        node.next = new_node

    def print(self):  # 모든 벨류를 프린트하고 싶다.
        curr = self.head
        while curr:
            print(curr.val)
            curr = curr.next


ans = LinkedList()
ans.addHead(Node(1))
star = Node(2)
ans.addHead(star)
ans.addHead(Node(3))

ans.insertAfter(star, Node(4))
ans.print()
