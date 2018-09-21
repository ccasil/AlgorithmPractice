def reverseArray(arr):
    for i in range(len(arr) / 2):
        temp = arr[i]
        arr[i] = arr[len(arr) - 1 - i]
        arr[len(arr) - 1 - i] = temp
    print(arr)

reverseArray([3, 1, 6, 4, 2])