year = int(input("Enter any year that is to be checked for leap year: "))

if year <= 0:
    print("Invalid input: The year must be a positive integer")
elif year % 4 == 0:
    if year % 100 == 0:
        if year % 400 == 0:
            print("The given year is a leap year")
        else:
            print("It is not a leap year")
    else:
        print("The given year is a leap year")
else:
    print("It is not a leap year")