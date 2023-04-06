testCase1 = ["abc", "def", "hello", "python", "puppy is cute"]
testCase2 = 'Life is short, you need Python'.split()
testCase3 = list(zip('abcde', [1,2,5,4,3]))

print(sorted(testCase1, key=len, reverse=True)) #['puppy is cute', 'python', 'hello', 'abc', 'def']
print(sorted(testCase2, key=str.lower)) #['is', 'Life', 'need', 'Python', 'short,', 'you']
print(sorted(testCase3, key=lambda x:x[1])) #[('a', 1), ('b', 2), ('e', 3), ('d', 4), ('c', 5)]