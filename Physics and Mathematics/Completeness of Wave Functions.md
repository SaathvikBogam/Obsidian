A function is said to be complete if any function $f(x)$ can be written as a linear combination of that function.
In Quantum Mechanics, completeness is a property of many of the solutions to the [[Schrödinger Equation]]. Consider the [[Infinite Square Well]], for example.
$$
\psi_{n}(x)=\sqrt{ \frac{2}{a} }\sin\left( \frac{n\pi}{a}x \right)
$$
This wave function is also complete, i.e.
$$
f(x)=\sum_{n=1}^{\infty}c_{n}\psi_{n}=\sqrt{ \frac{2}{a} }\sum_{n=1}^{\infty} c_{n}\sin\left( \frac{n\pi}{a}x \right)
$$
Now, consider $\int_{-\infty}^{+\infty} \psi_{m }^{*}(x)f(x) \, dx$
$$
\int_{-\infty}^{+\infty} \psi_{m}^{*}(x)f(x) \, dx=\sum_{n=1}^\infty c_{n}\int_{-\infty}^{+\infty} \psi ^{*}_{m}\psi_{n} \, dx  =\sum_{n=1}^{\infty}c_{n}\delta_{m,n}=c_{m}
$$
The Kronecker Delta eliminates every term where $m\ne n$, and only leaves the term where $m=n$. This is one of the powerful uses of the Kronecker Delta. Therefore, each coefficient can be written as,
$$
c_{n}=\int_{-\infty}^{+\infty} \psi_{n}^{*}(x)f(x) \, dx 
$$

The most general solution to [[Time Independent Schrödinger Equation]] this is given by,
$$
\Psi(x,t)=\sum_{n=1}^{\infty}c_{n}\psi_{n}(x)e^{ -iE_{n}t/\hbar }
$$
To obtain $c_{n}$, set $t=0$.
$$
\Psi(x,0)=\sum_{n=1}^{\infty}c_{n}\psi_{n}(x)
$$
And now we can take $\int_{-\infty}^{+\infty} \psi_{m}^{*}\Psi(x,0) \, dx$ to exploit the orthonormality of wave functions to get 
$$
c_{n}=\int_{-\infty}^{+\infty} \psi_{n}^{*}(x)\Psi(x,0) \, dx 
$$

Links: [[Orthonormality of Wave Functions]], [[Infinite Square Well]] 
Tags: #QM #Property 
Date created: Sat/21/Mar/2026