# 2진수, 8진수, 16진수, 10진수, 10진수를 아스키로, 아스키를 10진수로

print(hex(65)) #hex(65)는 16진수로 65를 표현한 것을 반환합니다. 즉, '0x41'을 출력합니다.
print(oct(65)) #oct(65)는 8진수로 65를 표현한 것을 반환합니다. 즉, '0o101'을 출력합니다.
print(bin(65)) #bin(65)는 2진수로 65를 표현한 것을 반환합니다. 즉, '0b1000001'을 출력합니다.
print(int(65)) #int(65)는 정수형으로 65를 반환합니다. int() 함수에 아무 인자도 주지 않을 경우, 기본값으로 10진수를 가정합니다.
print(chr(int(65))) #chr(int(65))는 인자로 주어진 정수 값을 해당하는 아스키 코드 문자로 변환합니다. 따라서, 'A'를 출력합니다.
print(ord('A')) #ord('A')는 인자로 주어진 문자의 아스키 코드 값을 반환합니다. 따라서, 65를 출력합니다.





