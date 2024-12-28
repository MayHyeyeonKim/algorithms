text = input("문자나 숫자를 입력해 주세요.")
for char in text:
    ascii_code = ord(char)
    print(f"{char}의 아스키코드는 {ascii_code}입니다.")

    char_back = chr(ascii_code)
    print(f"{ascii_code}의 문자는 {char}입니다.")