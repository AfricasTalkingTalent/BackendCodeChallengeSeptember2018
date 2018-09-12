
def choice(x):
    if x == 1:
        print("<<----------------------------->>");
        print("<<----------------------------->>");
        print("Testing for Prime Numbers\n")
        print(list_of_primes(int(input("enter an integer to test: "))))
    elif x == 2:
        print("<<----------------------------->>");
        print("<<----------------------------->>");
        print("Testing for Factorials\n")
        print(factorial(int(input("enter an integer to test: "))))
    elif x == 3:
        print("<<----------------------------->>");
        print("<<----------------------------->>");
        print("Challenge #5\n")
        Challenge5(name = input("enter name: "),age  = int(input("enter age: ")))

    else:
        print("<<----------------------------->>");
        print("<<----------------------------->>");
        print("CHOICE IS OUT OF RANGE!! CHOOSE AGAIN\n")
        print("<<----------------------------->>");
        print("<<----------------------------->>");
        print("<<-- Submission by Bochiedev -->>");
        print("1 -> Prime numbers");
        print("2 -> factorial");
        choice(int(input("choose a test: ")))

# CHALENGE #1
# GET PRIME NUMBERS LIST
def list_of_primes(n):
    prime_numbers = []
    # prime numbers are > 1 so we start our range at 2
    # for looop to pick all numbers from 2 to n
    for i in range (2, n):

        # for looop to pick all numbers from 2 to y and divide to get reminder
        for z in range(2, i):
            if i % z == 0:
                break
        else:
            prime_numbers.append(y)

    #function to sort them in line from smallest
    prime_numbers.sort()
    return prime_numbers


# CHALENGE #2
# GET FACTORIAL
def factorial(n):
    product = 1
    for i in range(n):
        product = product * (i + 1)
    return product


# CHALENGE #5
def Challenge5(name,age):
    class Person:
        def __init__(self):
            self.name = name
            self.age = age

    if age < 0:
        print("Age cannot be less than 0!")
    else:
        person = Person()
        print(person.__dict__)



print("<<----------------------------->>");
print("<<----------------------------->>");
print("<<-- Submission by Bochiedev 254722241161 -->>");
print("<<----------------------------->>");
print("<<----------------------------->>");
print("TESTS CHOICE");
print("1 -> Prime numbers");
print("2 -> factorial");
print("3 -> Challenge 5");

choice(int(input("choose a test: ")))
