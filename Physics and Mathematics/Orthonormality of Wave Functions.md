Consider the wave function associated with the [[Infinite Square Well]].
$$
\Psi_{n}(x,t)=\sqrt{ \frac{2}{a} }\sin\left( \frac{n\pi}{a}x \right)e^{ -iE_{_{n}}t/\hbar }
$$
$$
\text{where }E_{n}=\frac{n^{2}\pi^{2}\hbar^{2}}{2ma}
$$
Consider the following integral
$$
\int_{-\infty}^{+\infty} \psi_{n}\psi_{m} ^{*}\, dx =\int_{0}^{a} \frac{2}{a}\sin\left( \frac{n\pi}{a}x \right) \, d\sin\left( \frac{m\pi}{a}x \right) \ dx
$$
$$
\implies \int_{0}^{a} \frac{1}{a}\left( \cos\left( \frac{{n-m}}{a}\pi x \right) -\cos\left( \frac{{n+m}}{a}\pi x \right)\right) \, dx 
$$
$$
\implies \frac{1}{a}\left( \frac{1}{\pi}\frac{a}{n-m}\sin\left( \frac{{n-m}}{a}\pi x \right)-\frac{1}{\pi} \frac{a}{n+m}\sin\left( \frac{{n+m}}{a}\pi x \right) \right)\bigg|_{0}^{a}
$$
$$
\implies\frac{1}{\pi}\left( \frac{1}{n-m}\sin((n-m)\pi)-\frac{1}{n+m}\sin((n+m)\pi) \right)
$$
Consider the case where $n\neq m$
$$
\frac{1}{\pi}\left( \frac{1}{n-m}\sin((n-m)\pi)-\frac{1}{n+m}\sin((n+m)\pi) \right)=0
$$
If $n=m$,
$$
\lim_{ n \to m } \frac{1}{\pi}\left( \frac{1}{n-m}\sin((n-m)\pi)-\frac{1}{n+m}\sin((n+m)\pi) \right)=1
$$
Therefore, we can write these two cases as a singular function
$$
\delta_{n,m}=\int_{-\infty}^{+\infty} \psi ^{*}_{n}\psi_{m} \, dx = \begin{cases}
0\ ,\ n\neq m\\
1\ ,\ n=m
\end{cases}
$$
This function is called the *Kronecker Delta*. It is the function that describes the orthonormality of the wave function.

Links: [[Infinite Square Well]] 
Date created: Sat/21/Mar/2026