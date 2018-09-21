def countingTheDojoWay():
    for i in range(1, 100):
        if i % 5 == 0:
            print('coding')
        if i % 10 == 0:
            print('dojo')
        else:
            print(i)

countingTheDojoWay()