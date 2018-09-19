def compareIntegers(a, b):
    a = int(a)
    b = int(b)
    if a > b:
        print ('greater')
        return 'greater'
    if a < b:
        print ('less')
        return 'less'
    else:
        print ('equal')
        return 'equal'

compareIntegers(29, 105)