\subsection*{Problem 3.32}
A anti/skew--hermitian operator is an operator that is equal to the negative of its hermitian, i.e.
$$
\hat{Q}=-\hat{Q}^{\dagger}
$$
(a) The expectation value of the skew--hermitian operator is,
$$
\langle Q \rangle =\braket{ \psi | \hat{Q}\psi } =\braket{ -\hat{Q}\psi | \psi }\implies \braket{ \psi | \hat{Q}\psi } =-\braket{ \psi | \hat{Q}\psi }^{*}  
$$
$$
\mathrm{Re}\langle Q \rangle =-\mathrm{Re}\langle Q \rangle \implies \mathrm{Re}\langle Q \rangle =0
$$
Therefore, since it has no real part, the expectation value $\langle Q \rangle$ must be purely imaginary.\\\\
(b) The eigenvalue equation for a skew--hermitian operator is:
$$
\hat{Q}\ket{Q} =q\ket{Q} 
$$

Multiply both sides with the bra $\bra{Q}$,
$$
\bra{Q} \hat{Q}\ket{Q} =q\braket{ Q | Q } \implies \braket{ Q | \hat{Q}Q } =q\braket{ Q | Q } 
$$
Exploiting the skew--hermiticity of $\hat{Q}$,
$$
-\braket{ \hat{Q}Q | Q } =q\braket{ Q | Q } \implies -\braket{ Q | \hat{Q}Q } ^{*}=q\braket{ Q | Q } 
$$
$$
-q^{*}\braket{ Q | Q } =q\braket{ Q | Q }\implies q=-q^{*}
$$
Therefore, the eigenvalues $q$ of a skew--hermitian operator $\hat{Q}$ are imaginary.\\\\
(c) Consider two distinct eigenvalues $q,q'$ with eigenkets $\ket{Q},\ket{Q'}$
$$
\hat{Q}\ket{Q} =q\ket{Q} \qquad \hat{Q}\ket{Q'} =q'\ket{Q'}
$$
Multiplying the first with $\bra{Q'}$ and the second with $\bra{Q}$,
$$
\braket{ Q' | \hat{Q}Q } =q\braket{ Q' | Q } \qquad \braket{ Q | \hat{Q}Q' }=q'\braket{ Q | Q' }
$$
By the skew--hermiticity of $\hat{Q}$ on the first equation,
$$
-\braket{ \hat{Q}Q '| Q } =q\braket{ Q' | Q } \implies -\braket{ Q | \hat{Q}Q' } ^{*}=q\braket{ Q' | Q }
$$
$$
(q')^{*}\braket{ Q' | Q } =q\braket{ Q' | Q }
$$
Since $q$ and $q'$ are distinct eigenvalues, the above equation is valid if and only if $\braket{ Q' | Q }=0$. Therefore, the eigenvectors of distinct eigenvalues of a skew--hermitian operator $\hat{Q}$ are orthogonal.\\\\
(d) Consider two hermitian operators $\hat{P}$ and $\hat{R}$. Their commutator is
$$
[\hat{P},\hat{R}]=\hat{P}\hat{R}-\hat{R}\hat{P}
$$
Consider the hermitian adjoint of the commutator,
$$
[\hat{P},\hat{R}]^{\dagger}=(\hat{P}\hat{R}-\hat{R}\hat{P})^{\dagger}=\hat{R}^{\dagger}\hat{P}^{\dagger}-\hat{P}^{\dagger}\hat{R}^{\dagger}
$$
But $\hat{P}$ and $\hat{R}$ are hermitian, so
$$
[\hat{P},\hat{R}]^{\dagger}=\hat{R}\hat{P}-\hat{P}\hat{R}=-[\hat{P},\hat{R}]
$$
Therefore, the commutator of two hermitian operators is skew--hermitian.\\
Now consider two skew--hermitian operators $\hat{A},\hat{B}$ with commutator $[\hat{A},\hat{B}]$. The hermitian adjoint of the commutator is
$$
[\hat{A},\hat{B}]^{\dagger}=(\hat{A}\hat{B}-\hat{B}\hat{A})^{\dagger}=\hat{B}^{\dagger}\hat{A}^{\dagger}-\hat{A}^{\dagger}\hat{B}^{\dagger}
$$
Since $\hat{A},\hat{B}$ are skew--hermitian,
$$
[\hat{A},\hat{B}]=(-\hat{B})(-\hat{A})-(-\hat{A})(-\hat{B})=\hat{B}\hat{A}-\hat{A}\hat{B}=-[\hat{A},\hat{B}]
$$
Therefore, the commutator of two skew--hermitian operators is skew--hermitian.\\\\
(e) 