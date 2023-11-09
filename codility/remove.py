# 문제 2
# (문자열 삭제 및 맞추기):
# 길이가 N인 문자열이 주어지며,
# 이 문자열에서 특정 문자를 몇 개 삭제하고 나머지 문자를 맞추어야 합니다.
# 이 문제의 정확한 요구사항이 더 자세히 필요합니다.
# 문자열의 어떤 문자를 삭제해야 하는지, 어떤 문자로 맞추어야 하는지, 그리고 어떤 조건 아래에서 몇 개의 문자를 삭제하고 맞추어야 하는지 등에 대한 정보가 필요합니다.


def modify_string(input_string, to_remove, to_match):
    # 문자열에서 지정된 문자(to_remove)를 모두 제거
    cleaned_string = input_string.replace(to_remove, "")

    # 나머지 문자를 지정된 문자(to_match)로 대체
    modified_string = cleaned_string.replace(cleaned_string, to_match)

    return modified_string


# 예제 문자열
original_string = "Hello, World!"
char_to_remove = "o"
char_to_match = "*"

result_string = modify_string(original_string, char_to_remove, char_to_match)
print(result_string)  # "Hell*, W*rld!"
