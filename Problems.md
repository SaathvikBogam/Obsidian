\subsection*{Problem 3.23}
If $\ket{\alpha}$ is normalized vector, then the projection operator is given by

$$
\hat{P}=\ket{\alpha} \bra{\alpha}
$$
Consider $\hat{P}^{2}$
$$
\hat{P}^{2}=\hat{P}\hat{P}=(\ket{\alpha} \bra{\alpha} )(\ket{\alpha} \bra{\alpha})=\ket{\alpha}  \underbrace{ (\braket{ \alpha | \alpha } ) }_{ 1 }\bra{\alpha}
$$
$$
\therefore \hat{P}^{2}=\ket{\alpha} \bra{\alpha} =\hat{P}
$$
Therefore, the projection operator is idempotent.
\subsection*{Problem 3.24}
Given that the operator $\hat{Q}$ is hermitian, its matrix elements in an orthonormal basis ${\ket{e_{n}}}$ are given by
$$
\hat{Q}=1\hat{Q}1=\left( \sum_{n=1}\ket{e_{n}} \bra{e_{n}}  \right)\hat{Q}\left( \sum_{m=1}\ket{e_{m}} \bra{e_{m}}  \right)
$$
$$
\hat{Q}=\sum_{n,m=1}\ket{e_{n}} \bra{e_{n}} \hat{Q}\ket{e_{m}} \bra{e_{m}} =\sum_{n,m=1}Q_{nm}\ket{e_{n}} \bra{e_{m}}
$$
$$
Q_{nm}=\bra{e_{n}} \hat{Q}\ket{e_{m}}=\braket{ e_{n} | \hat{Q}e_{m} } 
$$
And $Q_{mn}$ is given by,
$$
Q_{mn}=\bra{e_{m}} \hat{Q}\ket{e_{n}} =\braket{ e_{m} | \hat{Q}e_{n} }
$$
Since $\hat{Q}$ is hermitian, we can write $Q_{mn}$ as
$$
Q_{mn}=\braket{ \hat{Q}e_{n} | e_{m} }^{*}=\braket{ e_{n} | \hat{Q} e_{m}}^{*}=Q_{nm}^{*}
$$
$$
\therefore Q_{mn}=Q_{nm}^{*}
$$
\subsection*{Problem 3.25}
The Hamiltonian for a certain two level system is given by:
$$
\hat{H}=\epsilon(\ket{1} \bra{1} -\ket{2} \bra{2} +\ket{1} \bra{2} +\ket{2} \bra{1} )
$$
where $\ket{1}$ and $\ket{2}$ are orthonormal and $\epsilon$ is constant with the dimensions of energy. The components of the matrix $H$ is given by:
$$
H_{nm}=\bra{n} \hat{H}\ket{m}
$$
$$
H_{11}=\epsilon\bra{1}(\ket{1} \bra{1} -\ket{2} \bra{2} +\ket{1} \bra{2} +\ket{2} \bra{1} )\ket{1}
$$
$$
H_{11}=\epsilon \bra{1} (\ket{1} +\ket{2} )=\epsilon
$$
$$
H_{12}=\epsilon \bra{1} (\ket{1} \bra{1} -\ket{2} \bra{2} +\ket{1} \bra{2} +\ket{2} \bra{1})\ket{2}
$$
$$
H_{12}=\epsilon \bra{1} (\ket{1} -\ket{2} )=\epsilon
$$
$$
H_{21}=\epsilon \bra{2} (\ket{1} \bra{1} -\ket{2} \bra{2} +\ket{1} \bra{2} +\ket{2} \bra{1})\ket{1}
$$
$$
H_{21}=\epsilon \bra{2} (\ket{1} +\ket{2} )=\epsilon
$$
$$
H_{22}=\epsilon \bra{2} (\ket{1} \bra{1} -\ket{2} \bra{2} +\ket{1} \bra{2} +\ket{2} \bra{1})\ket{2}
$$
$$
H_{22}=\epsilon \bra{2} (\ket{1} -\ket{2} )=-\epsilon
$$
$$
\therefore H=\epsilon\begin{pmatrix}
1 & 1 \\
1 & -1 
\end{pmatrix}
$$
The eigenvalue equation for the Hamiltonian is:
$$
\hat{H}\ket{\psi} =E\ket{\psi}
$$
$$
\epsilon \begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix}\ket{\psi} =E\ket{\psi }
$$
The eigenvalues $E$ are given by the solution to $\det(\hat{H}-E\hat{I})=0$
$$
\det \begin{pmatrix}
\epsilon-E & \epsilon \\
\epsilon & -\epsilon-E
\end{pmatrix}=0\implies E^{2}-2\epsilon^{2}=0
$$
$$
\therefore E=\pm \sqrt{ 2 }\epsilon
$$
The eigenvalues are therefore $\pm \sqrt{ 2 }\epsilon$. Now, finding the eigenvectors,
$$
\begin{pmatrix}
\epsilon & \epsilon  \\
\epsilon & -\epsilon
\end{pmatrix}\ket{\psi} =\pm \sqrt{ 2 }\epsilon \ket{\psi}
$$
$$
\begin{pmatrix}
(1\mp \sqrt{ 2 }\epsilon)\epsilon & \epsilon  \\
\epsilon & (-1\mp \sqrt{ 2 }\epsilon) 
\end{pmatrix}\ket{\psi}  =\ket{0} 
$$
Let $\ket{\psi}=\begin{pmatrix}x \\ y\end{pmatrix}$
$$
\epsilon \begin{pmatrix}
1\mp \sqrt{ 2 } & 1  \\
1 & -1\mp \sqrt{ 2 }
\end{pmatrix}\begin{pmatrix}
x \\
y 
\end{pmatrix}=\begin{pmatrix}
0 \\
0
\end{pmatrix}
$$
$$
(1\mp \sqrt{ 2 })x+y=0\qquad x+(-1\mp \sqrt{ 2 })y=0
$$
Solving the system of linear equation we get $x=$