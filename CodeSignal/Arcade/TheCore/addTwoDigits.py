def addTwoDigits(n):
    s = str(n)
    sp = list(s)
    sum = 0
    for i in range(len(sp)):
        sum += int(sp[i])
    print(sum)
    return (sum)

addTwoDigits(29)