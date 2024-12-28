# wrong one but wanna keep it.
def split_string(str,range_str):
    result=[]

    rangedata=list(map(int,range_str.split("-")))
    if(len(rangedata)==2):
        start_len = rangedata[0]
        end_len = rangedata[1]
    else:
        end_len = start_len = rangedata[0]

    str.replace(" ", "")

    flag=1
    pos = 0
    while (pos < len(str)):
        if(flag==0):
            length = start_len
            flag=1
        else:
            length = end_len
            flag=0

        if (pos + length > len(str)):
            length = len(str) - pos

        word = str[pos:pos+length]
        result.append(word)
        pos += length


    result.sort()
    return result