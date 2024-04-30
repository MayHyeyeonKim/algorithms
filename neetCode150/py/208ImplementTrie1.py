class Trie:
    def __init__(self):
        self.dic = {}

    def insert(self, word): #O(1) O(n)
        self.dic[word] = True

    def search(self, word):#O(1) O(1)
        if word in self.dic:
            return True
        return False

    def startsWith(self, prefix):#O(n) O(1)
        l = len(prefix)
        for k, v in self.dic.items():
            if prefix == k[:l]:
                return True
        return False

# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)

sol = Trie()
print(sol.insert("apple"))
print(sol.search("app"))
print(sol.search("apple"))
print(sol.startsWith("bee"))
print(sol.insert("appt"))
print(sol.startsWith("ap"))
