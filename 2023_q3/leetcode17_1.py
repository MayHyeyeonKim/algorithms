def letterCombinations(digits):
    if not digits:
        return []

    phone_dict = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }

    def backtrack(combination, next_digits):
        # 더 이상 숫자가 없으면 조합을 결과 리스트에 추가
        if not next_digits:
            output.append(combination)
        else:
            # 다음 숫자의 모든 문자들에 대해 재귀적으로 조합을 생성
            for letter in phone_dict[next_digits[0]]:
                backtrack(combination + letter, next_digits[1:])

    output = []
    backtrack("", digits)
    return output
