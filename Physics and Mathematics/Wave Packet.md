A wave packet is a group of closely packed waves that are contained within an "envelope". The velocity at which the waves themselves travel is the phase velocity $v_{p}$, whereas the group of waves travels at the group velocity $v_{g}$. The wave packet is just a superposition of many travelling waves. For a [[Free Quantum Particle]], we saw that the phase velocity was half the particle velocity, which seems paradoxical. However, the particle actually travels at the group velocity, which in this case is twice the phase velocity. Now, to determine the group velocity of a wave packet with the generic form:
$$
\Psi(x,t)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{+\infty} \phi(k)e^{ i(kx-\omega t) } \, dk
$$
In the free particle case, $\omega= \frac{{\hbar k^{2}}}{2m}$, but let us try to solve for the general case. Assume that $\phi(k)$ is narrowly peaked about some $k_{0}$. Since the integrand is negligible except in the neighbourhood of $k_{0}$, apply a Taylor series expansion on $\omega(k)$,
$$
\omega(k)\approx \omega{(k_{0})}+(k-k_{0})\omega'(k_{0}),\quad \text{where }\omega'= \frac{ d \omega }{ d k } 
$$

Performing the substitution $s=k-k_{0}$, the integral becomes:
$$
\Psi(x,t)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{+\infty} \phi(k_{0}+s)e^{ i[(k_{0}+s)x-(\omega(k_{0})+\omega'(k_{0})s)t] } \, ds 
$$
$$
\Psi(x,t)=\frac{1}{\sqrt{ 2\pi }}e^{ i(k_{0}x-\omega(k_{0})t) }\int_{-\infty}^{+\infty} \phi(k_{0}+s)e^{ is(x-\omega'(k_{0})t) } \, ds 
$$
The term in the form is a sinusoidal wave, travelling at $\frac{\omega(k_{0})}{k_{0}}$, modulated by the integral (envelope), which is a function of $x-\omega'(k_{0})t$, and propagates at the velocity $\omega'(k_{0})$. Therefore,
$$
v_{p}=\frac{\omega}{k}\ \ \text{and}\ \ v_{g}=\frac{d\omega}{dk}
$$
In the case of the [[Free Quantum Particle]], we get that $v_{p}=\frac{{\hbar k}}{2m}$ and $v_{g}=\frac{{\hbar k}}{m}$, which confirms that the group velocity is twice the phase velocity and equal to the particle velocity.
$$
v_{\text{classical}}=v_{g}=2v_{p}
$$


Links: [[Free Quantum Particle]], [[Waves]], [[Fourier Transform]]
Tags: #QM #Wave 
Date created: Mon/23/Mar/2026