The collection of all eigenvalues of an operator is called its spectrum. If two or more linearly independent eigenfunctions share the same eigenvalues, then the spectrum is degenerate. The spectrum can either be discrete, the eigenfunctions live in the Hilbert space and are physically realizable or continuous where the eigenfunctions are not normalizable. However, linear combinations of eigenfunctions of continuous spectra may be normalizable.
### Discrete Spectra
The spectrum consists of only real values, i.e. the eigenvalues are real. This can be proved by considering the eigenvalue equation.
$$
\begin{gather*}
\hat{Q}f=qf
\\\braket{ f | \hat{Q}f } = \braket{ \hat{Q}f | f } \ (\because\hat{Q}\text{ is hermitian})\\
\implies \braket{ f | qf } =\braket{ qf | f }\\
\implies q\braket{ f | f } =q^{*}\braket{ f | f } \\
\implies q=q^{*}\implies q\ \text{is real}
\end{gather*}
$$
Eigenfunctions of distinct eigenvalues are also orthogonal.
$$
\begin{gather*}
\hat{Q}f=qf\quad \hat{Q}g=q'g\\
\text{Since }\hat{Q}\ \text{is hermitian, }\braket{ \hat{Q}f | g } =\braket{ f | \hat{Q}g } \\
\implies \braket{ qf | g } =\braket{ f | q'g } \\
\implies q\braket{ f | g } =q'\braket{ f | g } 
\end{gather*}
$$
Since $q$ and $q'$ are distinc