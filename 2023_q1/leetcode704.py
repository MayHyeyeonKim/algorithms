#바이너리 O(log n)
#배열의 첫번째 인덱스랑 마지막 인덱스 기억하기!

#1.중간인덱스 계산하고, target(찾고자하는 값)비교하기!
#2.중간인덱스 = target이면 고대로 반환!
#3.중간인덱스 값 > target이면 마지막인덱스를 중간인덱스-1
#4.중간인덱스 값 < tartget이면 첫번째인덱스를 중간인덱스 +1

#1~4반복하기
#target없으면 -1 리턴하기

def search(nums, target):
    first_index,last_index = 0, len(nums)-1

    while first_index <= last_index:
        mid_index = (first_index+last_index)//2
        if target == nums[mid_index]:
            return mid_index
        elif nums[mid_index] > target:
            last_index = mid_index-1
        else:
            first_index = mid_index+1
    return -1