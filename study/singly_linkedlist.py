#Singly Linked List 
#노드 만들기 

class Node :
    def __init__(self, value = 0, next = None):
        self.value = value
        self.next = next

first = Node(1)
second = Node(2)
third = Node(3)
first.next = second
second.next = third
first.value = 8

# class LinkedList(object):
#     def __init__(self):
#         self.head = None 
#     def append(self, value):
#         pass
#     def get(self, idx):
#         pass
#     def insert(self, idx, value):
#         pass
#     def delete(self, idx):
#         pass


class LinkedList(object):
    def __init__(self):
        self.head = None

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while(current.next):
                current = current.next
            current.next = new_node
# 위의 append는 O(n)이고,
# 아래의 append는 O(1)임.
    # def __init__(self):
    #     self.head = None
    #     self.tail = None
    # def append(self, value):
    #     new_node = Node(value)
    #     if self.head is None:
    #         self.head = new_node
    #         self.tail = new_node
    #     else: 
    #         self.tail.next = new_node
    #         self.tail = self.tail.next

    def insert(self, idx, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            i = 0
            while current.next is not None and i < idx-1:
                current = current.next
                i += 1
            print(f"insert {value} at index {idx}")
            new_node.next = current.next
            current.next = new_node

    def __str__(self):
        current = self.head
        node_values = []
        while current:
            node_values.append(current.value)
            current = current.next
        return ' -> '.join(map(str, node_values))

ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.insert(2,8)

print(ll)