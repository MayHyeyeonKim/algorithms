#가장 많이 등장한 문자의 빈도수 반환
#근데 나 엣지케이스를 못찾아서 6점만점에 3점
#아니 엣지케이스는 text = "aaabbb"일 때 먼저 나온 문자를 반환해야할 것같은데 솔루션이 잘못된 것 같음

# Complete the 'maximumOccurringCharacter' function below.
# The function is expected to return a CHARACTER.
# The function accepts STRING text as parameter.
def maximumOccurringCharacter(text):
    text = text.lower()
    ch_counts = {}
    max_char = ''
    max_count = 0
    for ch in text:
        if ch in ch_counts:
            ch_counts[ch] +=1
        else:
            ch_counts[ch] = 1
        if ch_counts[ch] == max_count and ord(ch) < ord(max_char):
            max_char = ch
        elif ch_counts[ch] > max_count:
            max_count = ch_counts[ch]
            max_char = ch
    return max_char