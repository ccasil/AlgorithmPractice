import math

def candies(n, m):
    print (math.floor(m / n) * n)
    return math.floor(m / n) * n

candies(3, 10)
# n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.