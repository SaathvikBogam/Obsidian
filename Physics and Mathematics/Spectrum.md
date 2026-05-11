The collection of all eigenvalues of an operator is called its spectrum. If two or more linearly independent eigenfunctions share the same eigenvalues, then the spectrum is degenerate. The spectrum can either be discrete, the eigenfunctions live in the Hilbert space and are physically realizable or continuous where the eigenfunctions are not normalizable. However, linear combinations of eigenfunctions of continuous spectra may be normalizable.
### Discrete Spectra
Consider the eigenvalue equation.
$$
\begin{gather*}
\hat{Q}f=qf
\\\braket{ f | \hat{Q}f } = \braket{ \hat{Q}f | f } \ (\because\hat{Q}\text{ is hermitian})\\
\implies \braket{ f | qf } =\braket{ qf | f }\\
\implies q\braket{ f | f } =q^{*}\braket{ f | f } \\
\implies q=q^{*}\implies q\ \text{is real}
\end{gather*}
$$
Therefore we see that the eigenvalues are always real. Now consider two distinct eigenvalue equations, 
$$
\begin{gather*}
\hat{Q}f=qf\quad \hat{Q}g=q'g\\
\text{Since }\hat{Q}\ \text{is hermitian, }\braket{ \hat{Q}f | g } =\braket{ f | \hat{Q}g } \\
\implies \braket{ qf | g } =\braket{ f | q'g } \\
\implies q\braket{ f | g } =q'\braket{ f | g } 
\end{gather*}
$$
Since $q$ and $q'$ are distinct eigenvalues, they cannot be equal. The only way for the equality to be correct is if $\braket{ f | g }=0$. Therfore, the eigenfunctions of distinct eigenvalues are orthogonal. They can be orthonormalized by Gram-Schmidt Orthonormalization if needed, then$$
\braket{ f_{m} | f_{n} } =\delta_{m,n}
$$The eigenfunctions are also complete i.e. they span the Hilbert space $\mathcal{H}$.
We conclude that an eigenfunction of a determinate state must have the following properties:
1. Reality: The eigenvalues must be real
2. Orthonormality: Eigenfunctions of the observable must be orthonormal, i.e.
$$
\braket{ f_{m} | f_{n} } =\delta_{m,n}
$$
3. Completeness: Eigenfunctions are complete, any function $f(x)$ in the Hilbert space $\mathcal{H}$ can be represented by a linear combination of determinate states.
$$
f(x)=\sum_{n=1}^{\infty} c_{n}f_{n}(x)
$$
#### Continuous Spectra
If the spectrum of an observable is continuous, then the eigenfunctions may not be normalizable and the inner products may not exist too. But we can still recover orthonormality, reality and completeness. Consider the the momentum operator $\hat{p}$. The eigenvalue equation is,
$$
\begin{gather*}
\hat{p}f_{p}=pf_{p}\implies -i\hbar \partial_{x} f_{p}=pf_{p}\\
\partial_{x} f_{p}=\frac{ip}{\hbar}f_{p}\implies f_{p}(x)=Ae^{ \frac{ip}{\hbar}x }
\end{gather*}
$$
Restricting ourselves to real eigenvalues $p$, let us take the inner product of two eigenfunctions with distinct eigenvalues,
$$
\begin{gather*}
\braket{ f_{p'} | f_{p} } =\int_{-\infty}^{+\infty} |A|^{2}e^{ ix(p-p')/\hbar } \, dx =2\pi \hbar |A|^{2}\delta(p-p')\\
\text{Let }A= \frac{1}{\sqrt{ 2\pi \hbar }}\implies f_{p}(x)=\frac{1}{\sqrt{ 2\pi \hbar }}e^{ ipx/\hbar }\\
\text{then }\braket{ f_{p'} | f_{p} }=\delta(p-p') 
\end{gather*}
$$
Thus, we have recovered a pseudo-orthonormality by restricting ourselves to real eigenvalues. The eigenfunctions are now also complete, the sum being replace by an integral in this case. Therefore, we have reconstructed the three properties:
1. Reality: The eigenvalues are restricted to be real
2. Orthonormality: The inner product of any two eigenfunctions is given by
$$
\braket{ f_{m} | f_{n} } =\delta(n-m)
$$
3. Completeness: Any function $f(x)$ in the Hilbert space $\mathcal{H}$ can be represented as follows:
$$
f(x)=\int_{-\infty}^{+\infty} c(q)f_{q}(x) \, dk
$$

Links: [[Determinate States]]
Tags: #Fundamental #Math #Operators #QM #Property 
Date created: Tue/05/May/2026