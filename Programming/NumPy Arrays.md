An array in NumPy can be created using multiple ways. Here are some of them:
```py
import numpy as np

# List to array
a = np.array([1,2,3,4])
# Array of 11 elements between 0,1 (incl.)
b = np.linspace(0,1,11)
# Array of elements between 0 (incl.) and 10 (excl.) with spacing of 2
c = np.arange(0,10,2)
# Array of 10 random numbers between 0 and 1
d = np.random.random(10)
# Array of 10 random numbers with mean = 0 and standard deviation = 1
e = np.random.randn(10)
# 'Empty' array, filled with 10 random floats, has to be filled later
f = np.empty(10)
# 3x3 array filled with 10s
g = np.full((3,3),10)
```

Links: [[Array Operations]], [[NumPy]] 
Date created: Mon/02/Mar/2026
