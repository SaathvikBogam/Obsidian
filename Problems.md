\subsection*{Problem 3.20}
The initial wave function given is 
$$
\Psi(x,0)=A[\psi_{1}(x)+\psi_{2}(x)]
$$
From Problem 2.5, we got that
$$
\Psi(x,t)=\frac{1}{\sqrt{ a }}\left[ \sin\left( \frac{\pi x}{a} \right)e^{ -i\omega t }+\sin\left( \frac{2\pi x}{a} \right)e^{ -4i\omega t } \right]\quad \left( \because\omega\equiv \frac{E_{1}}{\hbar} \right)
$$
$$
\langle x \rangle =\frac{a}{2}\left[ 1-\frac{32}{9\pi^{2}}\cos(3\omega t) \right]
$$
$$
\langle H \rangle =\frac{1}{2}(E_{1}+E_{2})=\frac{5}{2}E_{1}\quad \left( \because E_{n}=n^{2}E_{1}=\frac{n^{2}\hbar^{2}\pi^{2}}{2ma^{2}} \right)
$$
Now, calculating $\langle x^{2} \rangle$ and $\langle H^{2} \rangle$,
$$
\langle x^{2} \rangle =\int_{-\infty}^{+\infty} x^{2}|\Psi|^{2} \, dx
$$
$$
\langle x^{2} \rangle =\frac{1}{a}\int_{0}^{a} \underbrace{ x^{2}\sin ^{2}\left( \frac{\pi x}{a} \right) }_{ I_{1} }+\underbrace{ x^{2}\sin ^{2}\left( \frac{2\pi x}{a} \right) }_{ I_{2} }+\underbrace{ 2x^{2}\sin\left( \frac{\pi x}{a} \right)\sin\left( \frac{2\pi x}{a} \right) }_{ I_{3} } \cos(3\omega t) \, dx 
$$
$$
I_{1}=\int_{0}^{a} x^{2}\sin ^{2}\left( \frac{\pi x}{a} \right) \, dx =\frac{1}{2}\int_{0}^{a} x^{2}-x^{2}\cos\left( \frac{2\pi x}{a} \right) \, dx 
$$
$$
I_{1}=\frac{1}{2}\left[ \frac{x^{3}}{3}-\frac{a}{2\pi}x^{2}\sin\left( \frac{2\pi x}{a} \right)-\frac{a^{2}}{2\pi^{2}}x\cos\left( \frac{2\pi x}{a} \right)+\frac{a^{3}}{4\pi^{3}}\sin\left( \frac{2\pi x}{a} \right) \right]\bigg|_{0}^{a}
$$
$$
I_{1}=\frac{1}{2}\left[ \frac{a^{3}}{3}-\frac{a^{3}}{2\pi}\sin(2\pi)-\frac{a^{3}}{2\pi^{2}}\cos(2\pi)+\frac{a^{3}}{4\pi^{3}}\sin(2\pi) \right]=a^{3}\left[ \frac{1}{6}-\frac{1}{4\pi^{2}} \right]
$$
$$
I_{2}=\int_{0}^{a} x^{2}\sin\left( \frac{2\pi x}{a} \right) \, dx =\frac{1}{2}\int_{0}^{a} x^{2}-x^{2}\cos\left( \frac{4\pi x}{a} \right) \, dx
$$
$$
I_{2}= \frac{1}{2}\left[ \frac{x^{3}}{3}-\frac{a}{4\pi}x^{2}\sin\left( \frac{4\pi x}{a} \right)-\frac{a^{2}}{8\pi^{2}}x\cos\left( \frac{4\pi x}{a} \right)+\frac{a^{3}}{32\pi^{3}}\sin\left( \frac{4\pi x}{a} \right) \right]\bigg|_{0}^{a}
$$
$$
I_{2}=\frac{1}{2}\left[ \frac{a^{3}}{3}-\frac{a^{3}}{4\pi}\sin(4\pi)-\frac{a^{3}}{8\pi^{2}}\cos(4\pi)+\frac{a^{3}}{32\pi^{3}}\sin(4\pi) \right]=a^{3}\left[ \frac{1}{6}-\frac{1}{16\pi^{2}} \right]
$$
$$
I_{3}=2\int_{0}^{a} x^{2}\sin\left( \frac{\pi x}{a} \right)\sin\left( \frac{2\pi x}{a} \right) \, dx =\int_{0}^{a} x^{2}\cos\left( \frac{\pi x}{a} \right)-x^{2}\cos\left( \frac{3\pi x}{a} \right) \, dx
$$
$$
I_{3}=\frac{a}{\pi}x^{2}\sin\left( \frac{\pi x}{a} \right)-\frac{2a^{2}}{\pi^{2}}x\cos\left( \frac{\pi x}{a} \right)-\frac{2a^{3}}{\pi^{3}}\sin\left( \frac{\pi x}{a} \right)-\frac{a}{3\pi}x^{2}\sin\left( \frac{3\pi x}{a} \right)-\frac{2a^{2}}{9\pi^{2}}\cos\left( \frac{3\pi x}{a} \right)-\frac{2a^{3}}{27\pi^{3}}\sin\left( \frac{3\pi x}{a} \right)\bigg|_{0}^{a}
$$
$$
I_{3}=\frac{a^{3}}{\pi}\sin \pi-\frac{2a^{3}}{\pi^{2}}\cos \pi-\frac{2a^{3}}{\pi^{3}}\sin \pi-\frac{a^{3}}{3\pi}\sin{3}\pi 

$$