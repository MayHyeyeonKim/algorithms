class Car:
    def __init__(self, *args, **kwargs):
        self.brand = kwargs.get("brand", "")
        self.model = kwargs.get("model", "")
        self.color = kwargs.get("color", "")
        self.options = list(args)
        
    def add_option(self, option):
        self.options.append(option)
        
    def print_info(self):
        print(f"Brand: {self.brand}, Model: {self.model}, Color: {self.color}")
        print("Options:", ", ".join(self.options))

# Car 객체 생성
c1 = Car(color="Blue", model="SUV", brand="Hyundai")
c1.add_option("Navigation")
c1.print_info()  # Brand: Hyundai, Model: SUV, Color: Blue, Options: Navigation

print("\n")

c2 = Car('Bluetooth', 'Sunroof', color='silver', brand='Kia', model='Sedan')
c2.add_option('Navigation')
c2.print_info()  # Brand: Hyundai, Model: SUV, Color: blue, Options: Bluetooth, Sunroof, Navigation

print("\n")

# c3 = Car(color="Blue", model="SUV", brand="Hyundai", 'Bluetooth', 'Sunroof')
# c3.add_option("Navigation")
# c3.print_info()  # c3은 에러남
