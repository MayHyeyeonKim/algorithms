def isPalindrome(s):
    s = "".join(filter(str.isalnum, s)).lower()  # 알파벳과 숫자만 고려하고 소문자로 변환
    left, right = 0, len(s) - 1  # 왼쪽과 오른쪽 포인터 초기화
    while left < right:
        if s[left] != s[right]:  # 문자가 다르면 False 반환
            return False
        left += 1
        right -= 1
    return True
