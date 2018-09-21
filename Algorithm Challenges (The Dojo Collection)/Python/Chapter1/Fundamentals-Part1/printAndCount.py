def printAndCount():
    count = 0
    for i in range (512, 4096):
        if i % 5 == 0:
            count +=1
            print(i)
    print(count)

printAndCount()