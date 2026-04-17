The solutions of the [[Time Independent Schrödinger Equation]] are said to be called [[Stationary States]]. This is because the probability density $|\Psi|^{2}$ is independent of time.
Given below is the proof:

Consider a solution to the [[Time Independent Schrödinger Equation]].
$$
\Psi(x,t)=\psi(x)e^{ -iEt/\hbar }
$$
$$
\implies |\Psi|^{2}=\Psi^{*}\Psi=\psi ^{*}(x)e^{ iEt/\hbar }\psi(x)e^{ -iEt/\hbar }
$$
$$
\implies |\Psi|^{2}=|\psi(x)|^{2}e^{ 0 }=|\psi(x)|^{2}
$$
The same is the case when calculating the expectation value of a dynamical variable, since we have linear operators here.
$$
\langle Q(x,p) \rangle =\int_{-\infty}^{+\infty} \psi ^{*}\left[ Q\left( x,-i\hbar \frac{ \partial  }{ \partial x }  \right) \right]\psi \, dx 
$$
Another property of these stationary states is that they are also stationary in Energy.
The standard deviation/uncertainty in $E$ is zero. The proof is trivial, and left because I'm lazy af.

The stationary states can also be added up to give a linear combination of stationary states, which would be a general solution to the [[Time Independent Schrödinger Equation]]. Each stationary state would have a different amount of energy associated with it, hence:
$$
\Psi=\sum _{n=1}^{\infty}c_{n}\psi_{n}e^{ -iE_{n}t/\hbar }
$$
Since the above has to be normalized to represent a particle physically, we get
$$
\int_{-\infty}^{+\infty} \sum_{n=1}^{\infty}c_{n}^{*}\psi_{n}^{*}\sum_{n=1}^{\infty}c_{n}\psi_{n} \, dx =1
$$
$$
\implies \sum_{n=1}^{\infty}c_{n}^{*}c_{n}\int_{-\infty}^{+\infty} \psi ^{*}\psi \, dx =1
$$
$$
\therefore \sum_{n=1}^{\infty}|c_{n}|^{2}=1
$$
Here, each $|c_{n}|^{2}$ represents the probability of the corresponding stationary state to be measured.

Links: [[Time Independent Schrödinger Equation]]
Tags: #QM #TISE #SchEq #Property 
Date created: Sat/21/Mar/2026