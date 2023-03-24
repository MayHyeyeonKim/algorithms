class KoreanClass:
    var = '안녕하세요! 만나서 반가워요. (7번라인과 10번라인)'
    def sayHello(self):
        캐쥬얼한인사 = '안녕 (4번라인)'
        self.글로벌한인사 = 'Hi (5번라인)'
        print(캐쥬얼한인사)
        print(self.var)

다나카 = KoreanClass()
print(다나카.var)
다나카.sayHello()
print(다나카.글로벌한인사)

# `캐쥬얼한인사` 변수는 sayHello() 메소드 내부에서만 사용되기 때문에, 객체에서는 직접적으로 접근할 수 없다.
# 하지만 self.글로벌한인사 변수는 메소드 내부에서 self를 사용하여 인스턴스 변수로 선언되었기 때문에, 객체에서 접근이 가능하다.


class KoreanClass:
    var = '안녕하세요! 만나서 반가워요.'
    def sayHello(self):
        print(self.var)

객체 = KoreanClass()  #KoreanClass인스턴스 객체가 생성됨
print(객체.var)  #'안녕하세요! 만나서 반가워요.'
객체.sayHello()  #'안녕하세요! 만나서 반가워요.'