Dirac Notation is an abstract way to represent states in Quantum Mechanics. It involves two mains symbols: kets $\ket{\cdot}$ in the Hilbert space and bras $\bra{\cdot}$ in the Hilbert dual space, which are hermitian conjugates of each other. The product of bra with a ket is the inner product $\braket{ \cdot | \cdot }=\bra{\cdot}\ket{\cdot}$ which is a function and the product of ket with a bra is the outer product $\ket{\cdot} \bra{\cdot}$ which is an operator. Operators act on kets in Dirac notation and they produce another ket.
In a finite dimensional vector space, the kets are column vectors are bras are the transpose conjugate/hermitian adjoint row vectors. Operators are represented by square matrices.
$$
\ket{v} =\begin{pmatrix}
v_{1} \\
v_{2} \\
\vdots  \\
v_{n}
\end{pmatrix}\quad \bra{v} =\ket{v} ^{\dagger}=\begin{pmatrix}
v_{1}^{*} & v_{2}^{*} & \dots  & v_{n}^{*}
\end{pmatrix}
$$
$$
\braket{ v | w }=\sum_{i,j=1}v_{i}^{*}w_{j}
$$
$$
\ket{v} \bra{w}=\begin{pmatrix}
v_{1}^{*}w_{1} &  \dots  & v_{1}^{*}w_{n} \\
\vdots & \ddots &  \vdots \\
v_{n}^{*}w_{1} & \dots  & v_{n}^{*}w_{n} 
\end{pmatrix}
$$

The projection operator on a normalized vector $\ket{\alpha}$ picks out the part of the vector that lies along $\ket{\alpha}$.
$$
\hat{P}=\ket{\alpha} \bra{\alpha} 
$$
#### Discrete Basis
For a discrete orthonormal basis $\{\ket{e_{n}}\}$, the relation between the basis is
$$
\braket{ e_{n} | e_{m} } =\delta_{nm}
$$
The identity operator is defined as follows:
$$
\mathbf{1}=\sum_{n=1}\ket{e_{n}} \bra{e_{n}}
$$
The components $v_{n}$ of a ket $\ket{v}$ can be given by
$$
\ket{v} =\mathbf{1}\ket{v} =\left( \sum_{n=1}\ket{e_{n}} \bra{e_{n}}  \right)\ket{v} =\sum_{n=1}\braket{ e_{n} | v } \ket{e_{n}} 
$$
$$
\ket{v} =\sum_{n=1}v_{n}\ket{e_{n}} ,\ \text{where }v_{n}=\braket{ v | e_{n} }
$$
Similarly, the components $A_{nm}$ of an operator $\hat{A}$ are given by
$$
\hat{A}=\mathbf{1}\hat{A}\mathbf{1}=\left( \sum_{n=1}\ket{e_{n}} \bra{e_{n}}  \right)\hat{A}\left( \sum_{m=1}\ket{e_{m}} \bra{e_{m}}  \right)=\sum_{n,m=1}\bra{e_{n}} \hat{A}\ket{e_{m}} \ket{e_{n}} \bra{e_{m}}  
$$
$$
\hat{A}=\sum_{n,m=1}A_{nm}\ket{e_{n}} \bra{e_{m}}\ \text{where }A_{nm}=\bra{e_{n}} \hat{A}\ket{e_{m}}
$$
#### Continuous Basis
If we have a continuous dirac orthonormalized basis $\{\ket{e_{z}}\}$, then
$$
\braket{ e_{z} | e_{z'} } =\delta(z-z')
$$
and the identity operator is defined as
$$
\mathbf{1}= \int_{-\infty}^{+\infty} \ket{e_{z}} \bra{e_{z}}  \, dz
$$


Links: [[Hilbert Space]] 
Tags: #QM #Math #Fundamental #Operators #LinAlg 
Date created: Mon/18/May/2026