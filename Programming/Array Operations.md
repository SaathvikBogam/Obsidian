The following operations on arrays can be done in NumPy:
```py
import numpy as np

a = np.array([1,2,3,4,5,6])
b = np.array([True,False,True,False,True,False])

print(2*a)
>>> [2 4 6 8 10 12]
print(a[1])
>>> [2]
print(a[1:5])
>>> [2 3 4 5 6]
print(a[b])
>>> [1 3 5]
print(np.invert(b))
>>> [False,True,False,True,False,True]

```

Links: [[NumPy]], [[NumPy Arrays]]
Date created: Mon/02/Mar/2026