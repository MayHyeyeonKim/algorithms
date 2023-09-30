class Student:
    def __init__(self, *args):
        if len(args) == 0:
            self.name = ""
            self.age = 0
            self.grade = 0
        elif len(args) == 1:
            self.name = args[0]
            self.age = 0
            self.grade = 0
        elif len(args) == 2:
            self.name = args[0]
            self.age = args[1]
            self.grade = 0
        else:
            self.name = args[0]
            self.age = args[1]
            self.grade = args[2]
            
    def get_name(self):
        return self.name
    
    def get_age(self):
        return self.age
    
    def get_grade(self):
        return self.grade
    
    def print_info(self):
        print(f"이름: {self.name}, 나이: {self.age}, 학년: {self.grade}")
# 이 클래스를 활용하여 객체를 생성할 때, 인수의 개수에 따라 다양한 방법으로 객체를 생성할 수 있다.


# 인수를 아무것도 넘기지 않은 경우
s1 = Student()
s1.print_info()  # 이름: , 나이: 0, 학년: 0

# 이름만 넘긴 경우
s2 = Student("Tom")
s2.print_info()  # 이름: Tom, 나이: 0, 학년: 0

# 이름과 나이를 넘긴 경우
s3 = Student("Jane", 20)
s3.print_info()  # 이름: Jane, 나이: 20, 학년: 0

# 이름, 나이, 학년을 모두 넘긴 경우
s4 = Student("Mike", 19, 3)
s4.print_info()  # 이름: Mike, 나이: 19, 학년: 3

s5 = Student("Mike", 19, 3, 'Korea')
s5.print_info()  # 이름: Mike, 나이: 19, 학년: 3 까지만 나옴. 왜냐면 국적 인자를 함수로 만들어 두지 않아서