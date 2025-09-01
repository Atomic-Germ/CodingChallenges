#!/usr/bin/env python3

def find_duplicates(arr):
    sorted_array = sorted(arr)
    result = []

    for i in range(len(sorted_array)-1):  # to avoid IndexError when comparing with next element
      if sorted_array[i] == sorted_array[i+1]:
        if not sorted_array[i] in result:  # to avoid adding duplicates
          result.append(sorted_array[i])

    return result

print(find_duplicates([0,0,2,3,3]))   # It should output [0,3]
print(find_duplicates([3,4,5,4,5,5]))  # It should output [4,5]
print(find_duplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4])) # It should output [2,-6,0,2,4,5]

