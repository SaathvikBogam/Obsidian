The classical harmonic oscillator is described as a mass $m$ on a spring of force constant $k$. Its motion is governed by Hooke's law:
$$
F=-kx=m\ddot{x}
$$
Its solution is given by $x(t)=A\cos \omega t+B\sin \omega t$, where $\omega\equiv \sqrt{ \frac{k}{m} }$, with its potential energy given by $V(x)=\frac{1}{2}kx^{2}$, whose curve is a parabola.
Any potential $V(x)$ can be approximated as a parabola in the neighborhood of a local minimum. Consider the Taylor series expansion of $V(x)$ about a local minimum $x_{0}$
$$
V(x)=\sum_{n=0}^{\infty} \frac{1}{n!}V^{(n)}(x_{0})(x-x_{0})^{n}=V(x_{0})+V'(x_{0})(x-x_{0})+ \frac{1}{2}V''(x_{0})(x-x_{0})^{2}+\dots
$$
We can subtract $V(x_{0})$ as this does not affect the force, and $V(x_{0})=0$ since we took that $x_{0}$ is a local minimum, and neglecting the higher order terms as long as $(x-x_{0})$ stays small, we obtain the following approximation for the potential:
$$
V(x)\approx\frac{1}{2}V''(x_{0})(x-x_{0})^{2}
$$
This implies that we can write any potential $V(x)$ as a harmonic oscillator with a force constant of $k=V''(x_{0})$. Any motion is approximately simple harmonic, as long as the amplitude is small enough.


Links: [[Algebraic Harmonic Oscillator]] , [[Analytic Harmonic Oscillator]] 
Tags: #QM #Oscillator #Approx 
Date created: Sun/22/Mar/2026

