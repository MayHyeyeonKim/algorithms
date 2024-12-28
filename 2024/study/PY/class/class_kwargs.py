# 클래스의 생성자에서 **kwargs를 사용하면, 딕셔너리 형태로 인자를 받아와서 객체의 속성으로 저장할 수 있습니다. 
# 이 때 딕셔너리의 키(key)는 객체의 속성명이 되고, 값(value)은 속성값이 됩니다. 
# 아래는 Student 클래스의 생성자에서 **kwargs를 사용하여 딕셔너리 형태의 인자를 받아와서 객체의 속성으로 저장하는 예시입니다.

class Student:
    def __init__(self, name, age, **kwargs):
        self.name = name
        self.age = age
        for key, value in kwargs.items():
            setattr(self, key, value)
            
    def get_name(self):
        return self.name
    
    def get_age(self):
        return self.age
    
    def print_info(self):
        info = f"이름: {self.name}, 나이: {self.age}"
        for key, value in vars(self).items():
            if key not in ('name', 'age'):
                info += f", {key}: {value}"
        print(info)

# 객체를 생성할 때, 딕셔너리 형태로 인자를 전달할 수 있습니다.
s1 = Student("Tom", 20, nationality='USA')
s1.print_info()  # 이름: Tom, 나이: 20, nationality: USA

s2 = Student("Jane", 22, nationality='Korea', major='Computer Science')
s2.print_info()  # 이름: Jane, 나이: 22, nationality: Korea, major: Computer Science