books = dict()
book = int(input())
for _ in range (book):
    b = input()
    if b in books:
        books[b] +=1
    else:
        books[b] = 1

# 5
# top
# top
# top
# top
# kimtop
# print(books)
# print(books.keys())  books 딕셔너리의 키값들만 보여줌 dict_keys(['top', 'kimtop'])
# print(books.values())  books 딕셔너리의 벨류값들만 보여줌 dict_values([4, 1])
# print(books.items()) books 딕서너릐의 키와벨류값 둘다 묶어서 보여줌 dict_items([('top', 4), ('kimtop', 1)])

max = max(books.values()) 
# print(max)

candi = []
for k,v in books.items():
    if v == max:
        candi.append(k)

print(sorted(candi)[0])
# candi.sort()
# print(candi[0])
