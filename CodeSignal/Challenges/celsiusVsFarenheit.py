def celsiusVsFahrenheit(yourTemps, friendsTemps):
    count = 0
    for i in range(len(yourTemps)):
        yourTemps[i] = 9 * yourTemps[i] / 5 + 32
        if yourTemps[i] < friendsTemps[i]:
            count += 1
    print(count)
    return (count)

celsiusVsFahrenheit([25, 32, 31, 27, 30, 23, 27], [78, 83, 86, 88, 86, 89, 79])

# Your friend lives in Palau (where the Fahrenheit system is used), and you've been trying to find out which of you lives in a warmer climate, so you've each kept track of your respective daily temperatures for the past n days.

# Given two arrays of integers yourTemps and friendsTemps (each of length n), representing the local daily temperatures (in Celsius and Fahrenheit, respectively), find how many days were hotter in Palau.