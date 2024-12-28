class Account:
    def __init__(self, owner, account_number, balance=0):
        self.owner = owner
        self.account_number = account_number
        self.balance = balance
        
    def deposit(self, amount):
        self.balance += amount
        print(f"{amount}원이 입금되었습니다. 잔액은 {self.balance}원입니다.")
        
    def withdraw(self, amount):
        if amount > self.balance:
            print("잔액이 부족합니다.")
        else:
            self.balance -= amount
            print(f"{amount}원이 출금되었습니다. 잔액은 {self.balance}원입니다.")
            
    def get_balance(self):
        print(f"현재 잔액은 {self.balance}원입니다.")

# Account 클래스를 사용하여 계좌 객체 생성할 때
# 1. my_account = Account("John Smith", "123-456-789", 10000) -> 유효함
# 2. my_account = Account("May", "111-2222-3333") -> 유효함
# 3. my_account = Account("May") -> 에러남
# 이유)첫 번째와 두 번째 경우는 유효한 경우.하지만 
# 세 번째 경우는 __init__ 메소드에서 인자를 모두 입력받도록 정의되어 있지만, 객체 생성시 인자가 없기 때문에 에러가 발생함. 따라서 세 번째 경우는 유효하지 않음.


# 입금 수행
my_account.deposit(5000)
# 출금 수행
my_account.withdraw(2000)
# 현재 잔액 조회
my_account.get_balance()

print("")
print(f"통장 주인: {my_account.owner}")
print(f"계좌번호: {my_account.account_number}")
print(f"잔액: {my_account.balance}원")



