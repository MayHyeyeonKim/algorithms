class Solution:
    def romanToInt(self, s: str) -> int:
        roman_dict = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
        result = 0
        prev = 0
        for c in s:
            current = roman_dict[c]
            if prev == roman_dict['I'] and current == roman_dict['V']:
                result += 3
            elif prev == roman_dict['I'] and current == roman_dict['X']:
                result += 8
            elif prev == roman_dict['X'] and current == roman_dict['L']:
                result += 30
            elif prev == roman_dict['X'] and current == roman_dict['C']:
                result += 80
            elif prev == roman_dict['C'] and current == roman_dict['D']:
                result += 300
            elif prev == roman_dict['C'] and current == roman_dict['X']:
                result += 800
            elif current == roman_dict['I']:
                result += 1
            elif current == roman_dict['V']:
                result += 5
            elif current == roman_dict['X']:
                result += 10
            elif current == roman_dict['L']:
                result += 50
            elif current == roman_dict['C']:
                result += 100
            elif current == roman_dict['D']:
                result += 500
            elif current == roman_dict['M']:
                result += 1000
            prev = current
        return result


#TestCase3 -> Wrong Answer
# Input
# s = "MCMXCIV"
# Output
# 2194
# Expected
# 1994