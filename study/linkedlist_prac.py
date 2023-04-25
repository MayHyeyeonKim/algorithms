class Node:
    def __init__ (self, value=0, next=None):
        self.value = value
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
        else:
            current_pointer = self.head
            while(current_pointer.next):
                current_pointer = current_pointer.next
            current_pointer.next = new_node
    
    def __str__(self):
        node_values = []
        current_pointer = self.head
        while current_pointer:
            node_values.append(str(current_pointer.value))
            current_pointer = current_pointer.next
        return "->".join(node_values)

test = LinkedList()
test.append(1)
test.append(2)
test.append(3)
test.append(4)

