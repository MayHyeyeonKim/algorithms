class MyCalendar:
    def __init__(self):
        self.books = []

    def book(self, start, end):
        for s, e in self.books:
            if s < end and start < e: #newStart가 oldEnd보다 앞에 있고, newEnd가 oldStart보다 oldStart보다 뒤에 있으면 오버랩
                return False
        self.books.append((start, end))
        return True

my_calendar = MyCalendar()
print(my_calendar.book(10, 20))  # True 반환; 10부터 20까지 일정 추가
print(my_calendar.book(15, 25))  # False 반환; 15부터 25까지는 10부터 20까지의 일정과 겹침
print(my_calendar.book(20, 30))  # True 반환; 20부터 30까지 일정 추가, 20은 겹치지 않음(이전 일정은 20에서 종료)
print(my_calendar.book(5, 10))   # True 반환; 5부터 10까지 일정 추가, 10은 겹치지 않음(이전 일정은 10에서 시작)

# 겹친다는 것은 한 일정의 시작 시간이 다른 일정의 종료 시간 이전에 있고, 그 일정의 종료 시간이 다른 일정의 시작 시간 이후에 있어야 한다는 것을 의미한다.
# 두 조건이 모두 만족될 때만 일정이 서로 겹치게 되며, 그렇지 않은 경우에는 겹치지 않음.