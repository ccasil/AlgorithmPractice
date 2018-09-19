def adjacentElementsProduct(inputArray):
    product = inputArray[0] * inputArray[1]
    for i in range(1, len(inputArray) - 1):
        if (inputArray[i - 1] * inputArray[i]) > product:
            product = (inputArray[i - 1] * inputArray[i])
        elif (inputArray[i + 1] * inputArray[i]) > product:
            product = (inputArray[i + 1] * inputArray[i])
    print (product)
    return product

adjacentElementsProduct([3, 6, -2, -5, 7, 3])