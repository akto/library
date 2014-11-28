#-------------------------------------------------------------------------------
# Name:        My Python Math library
# Purpose:
#
# Author:      Egemen Akto
#
# Created:     22.07.2011
# Copyright:   
# Licence:     <your licence>
#-------------------------------------------------------------------------------

#get sqrt of a number
def sqrt(i):
    return i*i
# give us sum of a range of numbers
def sum(num):
    top = 0
    for j in range(1,num+1):
        top+=j
    return top
#give us sum of sqrt range of numbers
def sqrtsum(num):
    top = 0
    for i in range(1,num+1):
        top+=sqrt(i)
    return top
print(sqrt(sum(100))-sqrtsum(100))

# prime numbers from 2 to n, it returns an array of prime numbers
# ex:
# print(asal(100))
def prime(n):
    result=[]
    for i in range(2,n):
        a = 0
        for k in range(1,i):
            if i%k == 0:
                a +=1
                if a!= 1:
                    break
        if a == 1:
            result.append(i)
    return result
# what are the divisors of number, it returns an array of divisors
# you can get divisor like that whatIsDivisor(100)[2]
# whatIsDivisor(100)[2] is third biggest divisor.[0] is smallest divisor
#if it has 4 divisor, [3]'ll be the biggest divisor.
# ex:
# print(whatIsDivisor(147))
def whatIsDivisor(number):
    i = 1
    result=[]
    num, newNum = number, 0
    while i<num:
        if num % i == 0:
            newNum = number/i
            num = newNum
            result.append(i)
        i+=1
    return result
# if num is prime return true, if not it is false
# ex:
# print(isPrime(99923))
def isPrime(num):
    ii = 1
    sum = 0
    ret = 'true'
    while ii<num:
        if num % ii == 0:
            sum +=1
            if sum!= 1:
                ret = 'false'
                break
        ii+=1
    return ret