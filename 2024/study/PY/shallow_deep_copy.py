# a =[1,2,3]
# b = a #단순할당
# print(a)
# print(b)
# print(id(a))
# print(id(b))
# b.append(4)
# print(a)
# print(b)
# print(id(a))
# print(id(b))

a =[1,2,3]
b = a[:] #얕은 복사
print(id(a)) #4368831936
print(id(b)) #4368899712 
# a와 b가 바라보고 있는 참조 값의 주소가 달라짐
a.append('a')
print(a) #[1, 2, 3, 'a']
print(b) #[1, 2, 3]
b.append('b')
print(a) #[1, 2, 3, 'a']
print(b) #[1, 2, 3, 'b']