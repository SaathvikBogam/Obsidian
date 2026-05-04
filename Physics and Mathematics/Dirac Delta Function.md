The [[Dirac Delta Function]] is an infinitely high spike at $x=0$, and everywhere else it is zero. Its integral in any region containing $x=0$ is 1
$$
\delta(x)\equiv \begin{cases}
0\ ,\ \ x ≠ 0\\
\infty,\ x=0 
\end{cases}\ \ \text{with}\ \int_{-\infty}^{+\infty} \delta(x) \, dx =1
$$
Technically, it is not a function, but rather a distribution since it is not finite at $x=0$. 
Notice that $\delta(x-a)=\infty$ at $x=a$, and we can write $f(x)\delta(x-a)=f(a)\delta(x-a)$ and by taking the integral, 
$$
\int_{-\infty}^{+\infty} \delta(x-a)f(x) \, dx=f(a) 
$$
Another way to represent the [[Dirac Delta Function]] is through Fourier Transforms,
$$
\begin{gather*}
\phi(k)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{+\infty} \delta(x-a)e^{ -ikx } \, dx =\frac{1}{\sqrt{ 2\pi }}e^{ -ika }\\
\delta(x-a)=\frac{1}{2\pi}\int_{-\infty}^{+\infty} e^{ ik(x-a) } \, dk 
\end{gather*}
$$
Links: [[Delta Function Potential]]
Tags: #QM #Fundamental #Math 
Date created: Tue/31/Mar/2026