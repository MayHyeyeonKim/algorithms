def longestCommonPrefix(strs):
    for i in range(len(strs[0])):
        for tempStr in strs:
            if len(tempStr) == i or tempStr[i] != strs[0][i]:
                return strs[0][:i]
    return strs[0]
        
strs = ["flower","flow","flight"]
print(longestCommonPrefix(strs))

#가장 긴 공통된 접두사 찾기
#먼저 기준이 되는 단어를 하나 콕!해준다. 그 단어의 길이만큼 돌아보며 다음단어들의 철자를 하나하나 살펴본다.
#다음단어들의 철자 길이가 i만큼이라면 i미만 끊어서 바로 반환해줘야한다. 왜냐하면 철자가 i미만까지밖에 없는 거니까.
#다음단어가 i이상 철자가 더 있다면 살펴봐야한다. 어떻게 살펴보냐하면, 그 단어의 i번째가 기준이 되는 단어의 i번째랑 다르면 i미만 끊어서 바로 반환해야한다.
#이 위의 조건들이 다 참이 아니라면 기준이 되는 단어의 길이 끝까지 돌아보는 꼴이 되니 기준이 되는 그 단어 자체를 반환하면 된다.

#뭔 말인지 헷갈리겠지만...