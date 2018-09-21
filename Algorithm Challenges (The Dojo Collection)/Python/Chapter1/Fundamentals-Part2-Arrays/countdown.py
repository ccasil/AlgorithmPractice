def countdown(high):
    newarr = []
    while high >= 0:
        newarr.append(high)
        high -= 1
    print(newarr)

countdown(5)
