#기억나는대로

diffs = [-1000,-500]

res = []
init = 1500
if len(diffs) > 0:
    for num in diffs:
        init += num
        res.append(init)
    my_list = [max(res), max(res)-abs(res[-1])]
    if len(diffs) == 2: 
        my_list = [max(res), min(res)]
else:
    my_list = [init, init]
print(my_list)