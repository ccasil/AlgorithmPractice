def almostIncreasingSequence(sequence):
    for i in range(len(sequence) - 1):
        if sequence[i + 1] <= sequence[i]:
            if i == 0:
                sequence.pop(i)
            elif sequence[i + 1] > sequence[i - 1]:
                sequence.pop(i)
            else:
                sequence.pop(i + 1)
            for e in range(len(sequence) - 1):
                if sequence[e + 1] <= sequence[e]:
                    print (0)
                    return 0
            break
    print (1)
    return 1

almostIncreasingSequence([10, 1, 2, 3, 4, 5])

# Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.