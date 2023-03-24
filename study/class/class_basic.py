class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def introduce(self):
        print(f"안녕하세요, 제 이름은 {self.name}이고, 나이는 {self.age}살입니다.")

person1 = Person("홍길동", 30)
person1.introduce()  # 출력: 안녕하세요, 제 이름은 홍길동이고, 나이는 30살입니다.