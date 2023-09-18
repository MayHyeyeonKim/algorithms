def decodeString(s):
    stack = []
    current_num = 0
    currnet_str = ""

    for char in s:
        if char.isdigit():
            current_num = current_num * 10 + int(char)
        elif char == "[":
            stack.append(currnet_str, current_num)
            current_num = 0
            current_str = []
        elif char == "]":
            prev_str, num = stack.pop()
            current_str = prev_str + current_str * num
        else:
            current_str += char
    return current_str


# T.C : O(n) / S.C : O(n)
