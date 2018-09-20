def zeroSumSubarray(arr):
    dict = {}
    dict[0] = 0
    sum = 0
    for i in range(len(arr)):
        sum += arr[i]
        if sum in dict:
            print ('Subarray Exists')
            return True
        dict[sum] = sum
    print ('Subarray Does Not Exist')
    return False

zeroSumSubarray([4, -6, 3, -1, 4, 2, 7])