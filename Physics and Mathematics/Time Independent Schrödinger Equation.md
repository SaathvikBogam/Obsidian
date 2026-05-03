Consider a case of the [[Schrödinger Equation]], where the potential is a function of only space, $V(x)$. Therefore:
$$
i\hbar \frac{ \partial \Psi }{ \partial t }(x,t)=-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \Psi }{ \partial x^{2} }(x) +V(x)\Psi(x,t) 
$$
Let us perform an ansatz that $\Psi(x,t)=\psi(x)\varphi(t)$.
$$
i\hbar \psi(x)\frac{ \partial \varphi }{ \partial t } (t)=-\frac{\hbar^{2}}{2m}\varphi(t)\frac{ \partial ^{2} \psi }{ \partial x^{2} } (x)+V(x)\psi(x)\varphi(x)
$$
$$
\implies i\hbar \frac{1}{\varphi(t)}\frac{ \partial \varphi }{ \partial t }(t)=-\frac{\hbar^{2}}{2m} \frac{1}{\psi(x)}\frac{ \partial ^{2} \psi }{ \partial x^{2} } (x)+V(x) 
$$
The left and right hand sides of the equation are now purely in functions of time and space. Should they be equal, both sides have to equate to a constant.
$$
i\hbar \frac{1}{\varphi(t)}\frac{ \partial \varphi(t) }{ \partial t } =A\qquad -\frac{\hbar^{2}}{2m} \frac{1}{\psi(x)}\frac{ \partial ^{2} \psi(x) }{ \partial x^{2} } +V(x)=A
$$
Consider the time part of the equation,
$$
\frac{ \partial \varphi(t) }{ \partial t } =-\frac{i}{\hbar}A\varphi(t)
$$
Solving the equation, we get
$$
\varphi(t)=e^{ -iAt/\hbar }
$$
Then, our wave function has become $\Psi(x,t)=\psi(x)e^{ -iAt/\hbar }$
Now, consider the Energy operator, which we can derive from the position and momentum operators.
$$
E(x,p)=T(x,p)+V(x,p)
$$
$$
\hat{E}=\frac{p^{2}}{2m}+V(x)=\frac{\left( -i\hbar \frac{ \partial  }{ \partial x }  \right)^{2}}{2m}+V(x)
$$
$$
\hat{E}=-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2}  }{ \partial x^{2} } +V(x)
$$
Applying this operator to $\psi(x)$,
$$
\hat{E}\psi(x)=-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi(x) }{ \partial x^{2} } +V(x)\psi(x)
$$
However, the total energy $E$ is a constant, so the output of this operation should produce a constant $E$ times the wave function.
So therefore, our constant $A$ that we assumed is the Energy of the system.

$$
\therefore A=E
$$
The time component of the wave function becomes,
$$
\varphi(t)=e^{ -iEt/\hbar }
$$
In classical mechanics, the sum of kinetic and potential energies is also called the Hamiltonian. So, the Hamiltonian operator would be,
$$
\hat{H}=-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2}  }{ \partial x^{2} } +V(x)
$$
And we get the following equation,
$$
\hat{H}\psi=E\psi
$$
This is the [[Time Independent Schrödinger Equation]].


Links: [[Schrödinger Equation]]
Tags: #QM #Fundamental #TISE #SchEq 
Date created: Sat/21/Mar/2026