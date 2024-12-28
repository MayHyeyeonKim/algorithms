class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = False

class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word):
        cur = self.root
        for c in word:
            if c not in cur.children:
                cur.children[c] = TrieNode()
            cur = cur.children[c]
        cur.word = True

    def search(self, word):
        def dfs(j, root):
            cur = root

            for i in range(j, len(word)):
                c = word[i]
                if c == ".":
                    for child in cur.children.values():
                        if dfs(i + 1, child):
                            return True
                    return False
                else:
                    if c not in cur.children:
                        return False
                    cur = cur.children[c]
            return cur.word
        
        return dfs(0,self.root)

word_dict = WordDictionary()

word_dict.addWord("apple")
word_dict.addWord("banana")
word_dict.addWord("car")

print(word_dict.search("c.."))    # True (c로 시작하는 3글자인 단어가 존재함)
print(word_dict.search("d.."))  
print(word_dict.search("apple"))  # True
print(word_dict.search("app"))    # False
print(word_dict.search("banana")) # True
print(word_dict.search("ban"))    # False
print(word_dict.search("car"))    # True
print(word_dict.search("b.n"))    # True (b로 시작하고 n으로 끝나는 3글자인 단어가 존재함)
