class TrieNode:
    def __init__(self): #O(1), O(1)
        self.children = {}
        self.endOfWord = False

class Trie:
    def __init__(self): #O(1), O(1)
        self.root = TrieNode()

    def insert(self, word: str) -> None: #O(단어의길이), O(trie의 깊이(트라이에 저장된 총 문자의 수)) 
        cur = self.root

        for c in word:
            if c not in cur.children:
                cur.children[c] = TrieNode()
            cur = cur.children[c]
        cur.endOfWord = True

    def search(self, word): # O(단어의길이), O(1) 
        cur = self.root
        for c in word:
            if c not in cur.children:
                return False
            cur = cur.children[c]
        return cur.endOfWord

    def startsWith(self, prefix): #O(접두사의길이), O(1)
        cur = self.root

        for c in prefix:
            if c not in cur.children:
                return False
            cur = cur.children[c]
        return True
        


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
