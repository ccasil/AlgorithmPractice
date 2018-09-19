def checkPalindrome(inputString):
    count = len(inputString)
    for i in range(len(inputString)):
        if inputString[i] == inputString[len(inputString) - 1 - i]:
            count = count - 1
    if count == 0:
        print ('palindrome')
        return True
    else:
        print ('not palindrome')
        return False

checkPalindrome("aabaa")
checkPalindrome("abac")