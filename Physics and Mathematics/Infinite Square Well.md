Consider the case where 
$$
V(x)=\begin{cases}
0\ ,\ 0<x<a\\
\infty,\ \text{otherwise}
\end{cases}
$$
From this, we can see that particles cannot exist outside $0<x<a$. 
Consider the Time Independent Schrödinger Equation.
$$
-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi }{ \partial x^{2} }+\cancelto{0}{V\psi}=E\psi
$$
$$
\frac{ \partial ^{2} \psi }{ \partial x^{2} } +\frac{2mE}{\hbar}\psi=0
$$
The solution of this equation would be of the form
$$
\psi(x)=A\cos \sqrt{ \frac{2mE}{\hbar} }x+B\sin \sqrt{ \frac{2mE}{\hbar} }x
$$
Applying the boundary conditions that $\psi(0)=\psi(a)=0$,
$$
A(1)+B(0)=0\qquad A\cos \sqrt{ \frac{2mE}{\hbar} }a+B\sin \sqrt{ \frac{2mE}{\hbar} }a=0
$$
$$
\implies A=0\qquad \sqrt{ \frac{2mE}{\hbar} }=\frac{n\pi}{a}\qquad(n \in \mathbb{Z})
$$

Therefore, the time-independent wave function is,
$$
\psi(x)=B\sin\left( \frac{n\pi}{a}x \right)
$$
Now, let us normalize the wave function
$$
\int_{-\infty}^{+\infty} |\psi|^{2} \, dx =1\implies \int_{0}^{a} B^{2}\sin ^{2}\left( \frac{2n\pi}{a}x \right) \, dx =1
$$
$$
\frac{B^{2}}{2} \frac{a}{n\pi}\left( \frac{n\pi}{a}x-\frac{1}{2}\cos\left( \frac{2n\pi}{a}x \right) \right)\bigg|_{0}^{a}=1
$$
$$
\implies \frac{B^{2}}{2} \frac{a}{n\pi}(n\pi)=1
$$
$$
\therefore  B = \sqrt{ \frac{2}{a} }
$$
From above, we got that,
$$
\sqrt{ \frac{2mE}{\hbar} }=\frac{n\pi}{a}
$$
$$
\therefore E_{n}=\frac{{n^{2}\hbar \pi^{2}}}{2ma}
$$

Links: [[Time Independent Schrödinger Equation]]
Tags: #QM #TISE #SchEq 
Date created: Sat/21/Mar/2026
