def makeArrayConsecutive2(statues):
    small = statues[0]
    big = statues[0]
    for i in range(len(statues)):
        if statues[i] < small:
            small = statues[i]
        if statues[i] > big:
            big = statues[i]
    amt = len(range(small, big))
    print (amt - len(statues) + 1)
    return (amt - len(statues) + 1)

makeArrayConsecutive2 ([5, 4, 6])

# Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.