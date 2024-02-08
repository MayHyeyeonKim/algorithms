class Solution:
    
    def encode(self, strs):
        res = ""
        for s in strs:
            res += str(len(s)) + "#" + s
        return res

    def decode(self, s):
        res = []
        i = 0
        
        while i < len(s):
            j = i
            while s[j] != '#':
                j += 1
            length = int(s[i:j])
            i = j + 1
            j = i + length
            res.append(s[i:j])
            i = j
            
        return res

solution = Solution()
original_strings = ["apple", "banana", "orange"]

encoded_string = solution.encode(original_strings)
print("Encoded string:", encoded_string)

decoded_strings = solution.decode(encoded_string)
print("Decoded strings:", decoded_strings)