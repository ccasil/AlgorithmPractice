def findPairGivenSumArray(arr, sum):
    for i in range(len(arr)):
        for j in range(i, len(arr)):
            if (arr[i] + arr[j] == sum):
                print ('pair found', i, j)
    print ('pair not found')


findPairGivenSumArray([8, 7, 2, 5, 3, 1], 10)