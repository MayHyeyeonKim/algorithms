year = int(input("Enter any year that is to be checked for leap year: "))

if year < 0:
    print("Invalid input: The year must be a positive integer")
elif (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print(year, "is a leap year")
else:
    print(year, "is not a leap year")
