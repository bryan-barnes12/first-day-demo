def isPrime(x):
    x = input("Number:")
    first_factor = None
    i = None
    while i < x:
        searcher = x % i
        if searcher == 0 and first_factor != 0:
            break
        else:
            first_factor = i

        if first_factor == (x - 1):
            print('The number is prime.')
        else:
            print('The number is not prime.')


