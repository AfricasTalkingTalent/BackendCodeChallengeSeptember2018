#!/ysr/bin/env python2

# 1. All primes from 0 to n
def allPrimesToN(n):
    """ Assumes input is an whole number n.
        Returns a list of integers which are prime (n is included if it is prime) or an empty list if no prime numbers exist between 0 and n.
    """
    res = [] # results kept here
    l = [True for i in range(n + 1)] # initialize primal
    l[0] = l[1] = False
    for i in range(2, n):
        # Check all multiples of i as non prime
        for j in range(2 * i, n + 1, i):
            l[j] = False
    for i in range(len(l)):
        if l[i]:
            res += [i] # Add to list if prime
    return res


# 2. All factorials from 0 to n
def allFactToN(n):
    """ Assumes input is a whole number n.
        Returns a list of all factorials of the numbers 0 through n (inclusive)
    """
    if n == 0: # Base case: if n is zero return a list with only 1 as its element
        return [1]
    ret = allFactToN(n - 1)
    # multiply the last element of ret with n and append it onto the ret
    return ret + [ret[-1] * n]
