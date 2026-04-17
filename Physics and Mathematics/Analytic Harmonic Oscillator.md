The potential of a harmonic oscillator is given by,
$$
V(x)=\frac{1}{2}kx^{2}=\frac{1}{2}m\omega^{2}x^{2}
$$
Since it is independent of time, we can use the [[Time Independent Schrödinger Equation]] to solve this problem.
$$
-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi }{ \partial x^{2} } +\frac{1}{2}m\omega^{2}x^{2}\psi=E\psi
$$
 
Let us define $\xi\equiv \sqrt{ \frac{m\omega}{\hbar}}x$ and $K\equiv \frac{2E}{m\omega}$. In terms of $\xi$ the Schrödinger Equation becomes:
$$
\frac{ \partial ^{2} \psi }{ \partial \xi^{2} } =(\xi^{2}-K)\psi
$$
For $\xi\gg K$, we get
$$
\frac{ \partial ^{2} \psi }{ \partial \xi^{2} } =\xi^{2}\psi
$$
The solution to this equation is
$$
\psi(\xi)=Ae^{ -\frac{1}{2}\xi^{2} }+Be^{ \frac{1}{2}\xi^{2} }
$$
The $B$ term cannot be normalized here, as it shoots up to $\infty$, then it follows that
$$
\psi(\xi)=Ae^{ -\frac{1}{2}\xi^{2} }
$$
Now, we have earlier assumed $\xi$ to be very large which means $e^{ -\frac{1}{2}\xi^{2} }$ is very small, this suggests that we get rid of the exponential, and obtain a simpler function.
$$
\psi(\xi)=h(\xi)e^{ -\frac{1}{2}\xi^{2} }
$$
$$
\frac{d\psi}{d\xi}=\left( \frac{dh}{d\xi}-\xi h \right)e^{ -\frac{1}{2}\xi^{2} }
$$
$$
\frac{d^{2}\psi}{d\xi^{2}}=\left( \frac{d^{2}h}{d\xi^{2}}-2\xi \frac{ d h }{ d \xi } +(\xi^{2}-1)h  \right)e^{ -\frac{1}{2}\xi^{2} }
$$
Therefore, the Schrödinger Equation becomes:
$$
\frac{ d ^{2} h }{ d \xi^{2} } -2\xi \frac{ d h }{ d \xi } +(K-1)h=0
$$
Now, let us consider a power series expansion to $h(\xi)$
$$
h(\xi)=a_{0}+a_{1}\xi +a_{2}\xi^{2}+\dots =\sum_{j=0}^{\infty}a_{j}\xi^{j}
$$
$$
\frac{ d h }{ d \xi } =a_{1}+2a_{2}\xi+3a_{3}\xi^{2}+\dots =\sum_{j=0}^{\infty}ja_{j}\xi^{ j-1 }
$$
$$
\frac{ d ^{2}h }{ d \xi^{2} } =2a_{2}+6a_{3}\xi+12a_{4}\xi^{2}+\dots =\sum_{j=0}^{\infty}(j+2)(j+1)a_{j+2}\xi^{j}
$$
Putting these there into the Schrödinger Equation in $h(\xi)$, we get
$$
\sum_{j=0}^{\infty}((j+2)(j+1)a_{j+2}-2ja_{j}+(K-1)a_{j})\xi^{j} =0
$$
Since $\xi^{j}$ form a basis, this means that coefficients of $\xi^{j}$ must be zero due to the linear independence of a basis.
$$
(j+2)(j+1)a_{j+2}-2ja_{j}+(K-1)a_{j}=0
$$
$$
a_{j+2}=\frac{2j+1-K}{(j+1)(j+2)}a_{j}
$$
From this recursion formula, we get that
$$
a_{2}=\frac{1-K}{2}a_{0},\quad a_{4}=\frac{(5-K)(1-K)}{24}a_{0},\quad \dots 
$$
$$
a_{3}= \frac{{3-K}}{6}a_{1},\quad a_{5}=\frac{(7-K)(3-K)}{120}a_{1},\quad \dots 
$$
We get all the even terms proportional to $a_{0}$ and all the odd terms proportional to $a_{1}$. We write the solution to $h$ as:
$$
h(\xi)=h_{\text{even}}(\xi)+h_{\text{odd}}(\xi)
$$
$$
\text{where}\ h_{\text{even}}(\xi)\equiv a_{0}+a_{2}\xi^{2}+a_{4}\xi^{4}+\dots 
$$
$$
\text{and}\ h_{\text{odd}}(\xi)=a_{1}\xi+a_{3}\xi^{3}+a_{5}\xi^{5}+\dots 
$$
This equation determines $h(\xi)$ in terms of arbitrary constants $a_{0}$ and $a_{1}$. However, not all the solutions to this are normalizable. For a large $j$, the recursion formula becomes
$$
a_{j+2}\approx \frac{2}{j}a_{j}\implies a_{j}\approx \frac{C}{(j/2)!}
$$
For some constant $C$, at large $\xi$ this yields:
$$
h(\xi)\approx  C\sum_{j=0}^{\infty} \frac{1}{(j/2)!}\xi^{j}\approx C\sum_{j=0}^{\infty} \frac{1}{j!}\xi^{2j}=Ce^{ \xi^{2} }
$$
However, the issue is that this $h(\xi)$ implies that $\psi(\xi)=Ce^{ \frac{1}{2}\xi^{2} }$, which is not normalizable as it asymptotes to $\infty$. There is only one way to make this work, and it is that the power series must terminate at some $j=n$, such that the recursion formula spits out $a_{n+2}=0$.
This will truncate the series $h_{\text{even}}$ or $h_{\text{odd}}$, and means that one of them has to be zero from the start ($a_{0}=0$ if $n$ is even and $a_{1}=0$ if $n$ is odd). Therefore, for a physically acceptable solution, it requires that $K=2n+1$. Then, the energy must be
$$
E_{n}=\left( n+\frac{1}{2} \right)\hbar \omega
$$
And the recursion formula becomes
$$
a_{j+2}= \frac{-2(n-j)}{(j+1)(j+2)}a_{j}
$$
If $n=0$, $h(\xi)=a_{0}$, then
$$
\psi_{0}(\xi)=a_{0}e^{ -\frac{1}{2}\xi^{2} }
$$
If $n=1$, $h(\xi)=a_{1}\xi$, then
$$
\psi_{1}(\xi)=a_{1}\xi e^{ -\frac{1}{2}x^{2} }
$$
For $n=2$, $h(\xi)=a_{0}(1-2\xi^{2})$, then
$$
\psi_{2}(\xi)=a_{0}(1-2\xi^{2})e^{ -\frac{1}{2}\xi^{2} }
$$
And so on...
In general, $h(\xi)$ will be a polynomial in $\xi$ of degree $n$, involving only even powers if $n$ is even and odd powers if $n$ is odd. They are the so called Hermite polynomial $H_{n}(\xi)$. By tradition, the arbitrary constant is chosen so that coefficient of highest power of $\xi$ is $2^{n}$. Therefore, our wave function is
$$
\psi_{n}(\xi)=\left( \frac{m\omega}{\pi \hbar} \right)^{\frac{1}{4}} \frac{1}{\sqrt{ 2^{n}n! }}H_{n}(\xi)e^{ -\frac{1}{2}\xi^{2} }
$$
The first few Hermite polynomial are given below:
$$
H_{0}=1
$$
$$
H_{1}=2\xi
$$
$$
H_{2}=4\xi^{2}-2
$$
$$
H_{3}=8\xi^{3}-12\xi
$$
$$
H_{4}=16\xi^{4}-48\xi^{2}+12
$$
$$
H_{5}=32\xi^{5}-160\xi^{3}+120\xi
$$
Links: [[Time Independent Schrödinger Equation]], [[Potentials using Harmonic Oscillator]]
Tags: #QM #TISE #SchEq #Approx 
Date created: Mon/23/Mar/2026
