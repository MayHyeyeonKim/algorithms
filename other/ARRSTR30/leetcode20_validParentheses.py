# Example 1:

# Input: s = "()"
# Output: true
# Example 2:

# Input: s = "()[]{}"
# Output: true
# Example 3:

# Input: s = "(]"
# Output: false

# "("과 ")" 짝이 맞을 때만 반환하라. 어떻게 풀래?


def is_valid(s):
    stk = []
    for c in s:
        if c in ["(", "{", "["]:
            stk.append(c)
        else:
            if not stk:
                return False
            if c == ")" and stk[-1] == "(":
                stk.pop()
            else:
                return False
    return not stk


s = "(())"
result = is_valid(s)

# 결과 출력
print(result)
