def valuesGreaterThanSecond(arr):
    high = arr[1]
    count = 0
    for i in range(len(arr)):
        if arr[i] > high:
            print(arr[i])
            count += 1
    print(count)

valuesGreaterThanSecond([1, 3, 5, 7, 9, 13])