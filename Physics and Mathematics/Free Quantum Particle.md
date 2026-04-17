The free particle is classically just motion at constant velocity and $V(x)=0$ for all $x$. This case may seem to be the simplest, however it is deceptively tricky. According to the [[Time Independent Schrödinger Equation]],
$$
-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi }{ \partial x^{2} } =E\psi
$$
The solution to this, let us write in terms of exponentials,
$$
\psi(x)=Ae^{ ikx }+Be^{ -ikx }\quad,\text{where }k\equiv \frac{\sqrt{ 2mE }}{\hbar}
$$
Since there are boundary conditions to limit the possible values of $k$, the free particle can carry any positive energy. Adding on the time dependence, we get
$$
\Psi(x,t)=Ae^{ ik\left( x-\frac{{\hbar k}}{2m}t \right) }+Be^{ -ik\left( x+\frac{{\hbar k}}{2m}t \right) }
$$
This function represents a traveling wave in $\pm x$ direction, of unchanging shape. A fixed point on the waveform corresponds to a fixed value of the argument, and hence to $x$ and $t$ such that $x\pm vt$ is constant. Then, the left side term represents a wave traveling in the $+x$ direction, and right side term represents one in the $-x$ direction. Since they only differ by the sign in front of $k$, let us rewrite it as:
$$
\Psi_{k}(x,t)=Ae^{ i\left( kx-\frac{{\hbar k^{2}}}{2m}t \right) },\quad \text{where }k\equiv \begin{cases}
+\frac{\sqrt{ 2mE }}{\hbar},\ \text{travelling in }+x\ \text{direction}\\
-\frac{\sqrt{ 2mE }}{\hbar},\ \text{travelling in }-x\ \text{direction}
\end{cases}
$$
The stationary states of the particle are propagating waves, with wavelength $\lambda=\frac{2\pi}{|k|}$ with momentum $p=\hbar k$. The speed of these waves is given by:
$$
v_{\text{quantum}}=\frac{{\hbar |k|}}{2m}=\sqrt{ \frac{E}{2m} }
$$
The classical speed however, is given by $v_{\text{classical}}=\sqrt{ \frac{2E}{m} }$,
$$
\therefore v_{\text{classical}}=2v_{\text{quantum}}
$$
Note that $\Psi(x,t)$ is not normalizable, as an attempt to do so will shoot up to infinity.
However, these separable solutions are still useful to us, despite being unable to represent something physically. The general solution to the time dependent [[Schrödinger Equation]] is still a linear combination of separable solutions, just in this case it is continuous rather than discrete. Therefore, the general solution is given by the following integral:
$$
\Psi(x,t)= \frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{+\infty} \phi(k)e^{ i\left( kx-\frac{{\hbar k^{2}}}{2m}t \right) } \, dk 
$$
The role that $c_{n}$ played in the discrete case is played by $\frac{1}{\sqrt{ 2\pi }}\phi(k)dk$ here. Now, this wave function can be normalized for appropriate $\phi(k)$. But, since it carries a range of waves and hence a range of energies and momenta, we shall call it a *wave packet*.
Now to find the appropriate $\phi(k)$, take $t=0$,
$$
\Psi(x,0)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{+\infty} \phi(k)e^{ ikx } \, dk 
$$
By [[Plancherel's Theorem]], 
$$
\phi(k)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{+\infty} \Psi(x,0)\ e^{ ikx } \, dx 
$$
Here, $\phi(k)$ is the [[Fourier Transform]] of $\Psi(x,0)$, which is the inverse Fourier Transform of $\phi(k)$. 

Links: [[Wave Packet]] 
Tags: #QM #TISE #SchEq 
Date created: Mon/23/Mar/2026
