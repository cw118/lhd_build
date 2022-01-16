# Python script to calculate Pi to the nth digit using the Nilakantha Series (converges faster than the Leibniz series)
# Thanks to https://www.mathscareers.org.uk/calculating-pi/ for ways to calculate Pi
from math import factorial
from decimal import Decimal, getcontext # Decimal module allows for more precision in floats/decimals

def main():
    # Get number n from user input
    print("How many digits of Pi (starting after the decimal) would you like to see?")
    # Emulate do while loop until proper integer input is received
    while True:
        try:
            n = int(input("> "))
            break
        except:
            print("Please input an integer.")

    print(nilakantha(n)) # Call function that calculates Pi

"""
Preview of the Nilakantha Series:

3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - ...

- Notice that the numerator is always 4
- Addition and subtraction of terms is alternating
  - Disregarding the first 3 in the beginning, all terms with an even index (e.g. 4/(2*3*4) is the 0th term with zero-indexing) are added, odd indexes are subtracted
- For the denominator (a*b*c), it always follows the pattern/can be represented by: (x!) / (x-3)!
  - The c value increases by 2 per term (4 -> 6 -> 8 and so on)
"""

def nilakantha(n):
    getcontext().prec = n + 1 # Set decimal precision to user input + 1 due to zero-indexing and since the first 3 (in 3.14) isn't counted

    pi = 3 # Initialize at 3 and add decimal values as we go (this also eliminates need for a +3 at the beginning or end of the program)
    numerator = 4 # Numerator remains constant throughout the series used
    last_factor = 4 # This is the first "c" value in (a*b*c), see the denominator explanation above

    print("Hang on, we're calculating your digits (more iterations/time = more accuracy!).")

    # Loop the Nilakantha Series lots of times for more precision
    for i in range(15000):
        denominator = (factorial(last_factor)) / (factorial(last_factor - 3))

        # Even indexes are added, odd indexes are subtracted (see above for more details)
        if (i % 2) == 0:
            pi += Decimal(numerator) / Decimal(denominator)
        else:
            pi -= Decimal(numerator) / Decimal(denominator)
        
        last_factor += 2 # Increase the c value at then end for subsequent terms

    return pi

if __name__ == "__main__":
    main()