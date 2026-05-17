\subsection{Problem 3.26}
A three-dimensional vector space spanned by an orthonormal basis $\ket{1},\ket{2},\ket{3}$. The kets $\ket{\alpha}$ and $\ket{\beta}$ are given by:
$$
\ket{\alpha} =i\ket{1} -2\ket{2} -i\ket{3} \quad \ket{\beta} =i\ket{1} +2\ket{3}
$$
(a) The duals of $\ket{\alpha}$ and $\ket{\beta}$ are their hermitian conjugates,
$$
\bra{\alpha} =\ket{\alpha} ^{\dagger}=(i\ket{1} -2\ket{2} -i\ket{3} )^{\dagger}
$$
$$
\therefore \bra{\alpha} =-i\bra{1} -2\bra{2} +i\bra{3}
$$
$$
\bra{\beta} =\ket{\beta} ^{\dagger}=(i\ket{1} +2\ket{3} )^{\dagger}
$$
$$
\therefore \bra{\beta} =-i\bra{1} +2\bra{3}
$$
(b) 
$$
\braket{ \alpha | \beta } =(-i\bra{1} -2\bra{2} +i\bra{3} )(i\ket{1} +2\ket{3} )
$$
$$
\braket{ \alpha | \beta } =1+2i
$$
$$
\braket{ \beta | \alpha } =(-i\bra{1} +2\bra{3} )(i\ket{1} -2\ket{2} -i\ket{3} )
$$
$$
\braket{ \beta | \alpha } =1-2i
$$
Notice that indeed $\braket{ \alpha | \beta }=\braket{ \beta | \alpha }^{*}$.\\\\
(c) Given that the operator $\hat{A}=\ket{\alpha} \bra{\beta}$. The matrix elements of $A$ are given by,
$$
A_{nm}=\bra{n} \hat{A}\ket{m} =\braket{ n | \alpha } \braket{ m | \beta } 
$$
$$
A_{nm}=(i\delta_{n1}-2\delta_{n2}-i\delta _{n3})(-i\delta _{m1}+2\delta_{m 3})
$$
$$
\therefore A=\begin{pmatrix}
1 & 0 & 2i \\
-2-i & 0 & -4 \\
-1 & 0 & -2i
\end{pmatrix}
$$
No it is not hermitian, since $A^{\dagger}\neq A$.