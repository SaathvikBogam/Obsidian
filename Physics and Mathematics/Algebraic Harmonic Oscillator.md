The potential of a harmonic oscillator is given by,
$$
V(x)=\frac{1}{2}kx^{2}=\frac{1}{2}m\omega^{2}x^{2}
$$
Since it is independent of time, we can use the [[Time Independent Schrödinger Equation]] to solve this problem.
$$
-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi }{ \partial x^{2} } +\frac{1}{2}m\omega^{2}x^{2}\psi=E\psi
$$

Rewriting the equation in a more suggestive form, we get
$$
\frac{1}{2m}\left[\hat{p}^{2}+(m\omega \hat{x})^{2}\right]\psi=E\psi
$$
From this, we can write the Hamiltonian as
$$
\hat{H}=\frac{1}{2m}[\hat{p}^{2}+(m\omega \hat{x})^{2}]
$$

If $\hat{p}$ and $\hat{x}$ were variables, we could use the fact that $a^{2}+b^{2}=(a+bi)(a-bi)$
However, they are operators, not variables. Operators generally do not commute, i.e. $\hat{x}\hat{p}\ne \hat{p}\hat{x}$. Let us describe a quantity that measures the commutativity of two operators.
This is called the commutator, and measures how much two operators fail to commute.
$$
[\hat{A},\hat{B}]=\hat{A}\hat{B}-\hat{B}\hat{A}
$$
Now, consider the quantity $\hat{a}_{\pm}$, which we define to be:
$$
\hat{a}_{\pm}\equiv \frac{1}{\sqrt{ 2\hbar m\omega }}(\pm i\hat{p}+m\omega \hat{x})
$$
$$
\hat{a}_{-}\hat{a}_{+}=\frac{1}{2\hbar m\omega}(-i\hat{p}+m\omega \hat{x})(i\hat{p}+m\omega \hat{x})
$$

$$
\implies \hat{a}_{-}\hat{a}_{+}=\frac{1}{2\hbar m \omega}(\hat{p}^{2}+m^{2}\omega^{2}\hat{x}^{2}-im\omega[\hat{x},\hat{p}])
$$
To calculate $[\hat{x},\hat{p}]$, it is suggestive to operate the commutator on a test function and then get the result, as operator notation can be iffy.
$$
[\hat{x},\hat{p}]f=\hat{x}(\hat{p}f)-\hat{p}(\hat{x}f)=x\left( -i\hbar \frac{ \partial f }{ \partial x }  \right)-\left(-i\hbar \frac{ \partial (xf) }{ \partial x }  \right)
$$
$$
[\hat{x},\hat{p}]=-i\hbar x\frac{ \partial f }{ \partial x } +i\hbar x\frac{ \partial f }{ \partial x } +i\hbar f=i\hbar f
$$
$$
\therefore [\hat{x},\hat{p}]=i\hbar
$$

The above relation is known as the canonical commutator relation. With this, our equation becomes,
$$
\hat{a}_{-}\hat{a}_{+}=\frac{1}{2\hbar m\omega}(\underbrace{\hat{p}^{2}+m^{2}\omega^{2}\hat{x}^{2}}_{2m\hat{H}}+\hbar m\omega)
$$
$$
\implies \hat{a}_{-}\hat{a}_{+} = \frac{1}{\hbar \omega}\hat{H}+\frac{1}{2}
$$
$$
\implies \hat{H}=\hbar \omega\left( \hat{a}_{-}\hat{a}_{+}-\frac{1}{2} \right)=\hbar \omega\left( \hat{a}_{+}\hat{a}_{-}+\frac{1}{2} \right)
$$
Note that $[\hat{a}_{-},\hat{a}_{+}]=1\implies \hat{a}_{-}\hat{a}_{+}=1+\hat{a}_{+}\hat{a}_{-}$
Therefore, the Schrödinger Equation can be written as follows:
$$
\hbar \omega\left( \hat{a}_{\pm}\hat{a}_{\mp}\pm \frac{1}{2} \right)\psi=E\psi
$$
Consider the quantity $\hat{H}(\hat{a}_{+}\psi)$
$$
\hat{H}(\hat{a}_{+}\psi)=\hbar \omega\left( \hat{a}_{+}\hat{a}_{-}+\frac{1}{2} \right)(\hat{a}_{+}\psi)=\hbar \omega\left(\hat{a}_{+}\hat{a}_{-}( \hat{a}_{+}\psi)+\frac{1}{2}(\hat{a}_{+}\psi) \right)
$$
$$
\hat{H}(\hat{a}_{+}\psi)=h\omega \hat{a}_{+}\left( \hat{a}_{-}\hat{a}_{+}+\frac{1}{2} \right)\psi=\hat{a}_{+}\left[ \hbar \omega\left( \hat{a}_{+}\hat{a}_{-}+1+ \frac{1}{2} \right)\psi  \right]=\hat{a}_{+}[\hat{H}+\hbar \omega]\psi
$$
$$
\therefore \hat{H}(\hat{a}_{+}\psi)=(E+\hbar \omega)(\hat{a}_{+}\psi)
$$
Similarly,
$$
\therefore \hat{H}(\hat{a}_{-}\psi)=(E-\hbar \omega)(\hat{a}_{-}\psi)
$$
Notice that operating $\hat{a}_{-}$ and $\hat{a}_{+}$ on the wave function lowers and increases the energy of the system respectively, by a factor of $\hbar \omega$. Thus, these operators are called ladder operators,  $\hat{a}_{+}$ being the raising operator and $\hat{a}_{-}$ being the lowering operator.
However, we know that the energy of the system cannot be $\leq{0}$ . It follows that you can only apply the lowering operator only a limited amount of times. Consider this "lowest rung" to be $\psi_{0}$. It follows that:
$$
\hat{a}_{-}\psi_{0}=0
$$
$$
\frac{1}{\sqrt{ 2\hbar m\omega }}(-i\hat{p}+m\omega \hat{x})\psi_{0}=0
$$
$$
i\hat{p}\psi_{0}=m\omega \hat{x}\psi_{0}
$$
$$
\implies -\hbar \frac{ \partial \psi_{0} }{ \partial x } =m\omega x\psi_{0} \implies \int \frac{d\psi_{0}}{\psi_{0}}=-\frac{m\omega}{\hbar}\int x\ dx
$$
$$
\ln \psi_{0}=- \frac{m\omega}{\hbar}\frac{x^{2}}{2}+c \implies \psi_{0}=ce^{ -m\omega x^{2}/2\hbar }
$$
Normalizing the wave function,
$$
\int_{-\infty}^{+\infty} c^{2} e^{ -m\omega x^{2}/\hbar } \, dx=c^{2} \sqrt{ \frac{\hbar\pi}{m\omega} } =1
$$
$$
\therefore c=\left( \frac{m\omega}{\hbar \pi} \right)^{\frac{1}{4}}
$$
Therefore, our lowest rung wave function comes out to be:
$$
\psi_{0}(x)=\left( \frac{m\omega}{\hbar \pi} \right)^{\frac{1}{4}}e^{ -m\omega x^{2}/2\hbar }
$$
This state of the wave function is called ground state, since it has the lowest energy. The ground state energy level can be found out by applying the Hamiltonian,
$$
\hat{H}\psi_{0}={\hbar \omega}\left( \hat{a}_{+}\hat{a}_{-}+\frac{1}{2} \right)\psi_{0}=\frac{1}{2}\hbar \omega \psi_{0}
$$
Therefore, the solution to the case of the Harmonic oscillator is given by:
$$
\psi_{n}(x)=A_{n}(\hat{a}_{+})^{n}\psi_{0}(x)\quad \text{with}\quad  E_{n}=\left( n+\frac{1}{2} \right)\hbar \omega
$$
$$
\text{where}\ \psi_{0}(x)=\left( \frac{m\omega}{\hbar \pi} \right)^{\frac{1}{4}}e^{ -m\omega x^{2}/2\hbar }
$$
Now, to find the normalization constant $A_{n}$, consider the fact that $\hat{a}_{+}\psi_{n}$ is proportional to $\psi_{n+1}$, and $\hat{a}_{-}\psi_{n}$ is proportional to $\psi_{n-1}$.
$$
\hat{a}_{+} \psi_{n}=c_{n}\psi_{n+1}\quad\quad  \hat{a}_{-} \psi_{n}=d_{n}\psi_{n-1}
$$
Consider $\int_{-\infty}^{+\infty} \psi ^{*}(\hat{a}_{\pm}\psi) \, dx$
$$
\int_{-\infty}^{+\infty} \psi ^{*}(\hat{a}_{\pm}\psi) \, dx=\frac{1}{\sqrt{ 2\hbar m\omega }}\int_{-\infty}^{+\infty} \psi ^{*} \left( \mp \hbar \frac{ \partial }{ \partial x } +m\omega x \right)\psi  \, dx 
$$
Integrating by parts on $\int_{-\infty}^{+\infty} \psi ^{*}\left( \mp\hbar \frac{ \partial \psi }{ \partial x } \right) \, dx$ , we get
$$
\int_{-\infty}^{+\infty} \psi ^{*}(\hat{a}_{\pm}\psi) \, dx =\frac{1}{\sqrt{ 2\hbar m\omega }}\left( \cancelto{0}{\mp \hbar\psi ^{*}\psi \big|_{-\infty}^{+\infty}}\pm \hbar\int_{-\infty}^{+\infty} \psi \frac{ \partial \psi ^{*} }{ \partial x }  \, dx +\int_{-\infty}^{+\infty} m\omega x\psi \psi ^{*} \, dx  \right)
$$
$$
\int_{-\infty}^{+\infty} \psi ^{*}(\hat{a}_{\pm}\psi) \, dx = \int_{-\infty}^{+\infty}  \frac{1}{\sqrt{ 2\hbar m\omega }} \left( \pm \hbar \frac{ \partial \psi  }{ \partial x } +m\omega x\psi  \right)^{*}\psi \, dx 
$$
$$
\therefore \int_{-\infty}^{+\infty} \psi ^{*}(\hat{a}_{\pm}\psi) \, dx =\int_{-\infty}^{+\infty} (\hat{a}_{\mp}\psi)^{*}\psi \, dx 
$$
This identity is true for any function $f(x)$ and $g(x)$, i.e.
$$
\int_{-\infty}^{+\infty} f^{*}(\hat{a}_{\pm}g) \, dx =\int_{-\infty}^{+\infty} (\hat{a}_{\mp}f)^{*}g \, dx 
$$
This is because $\hat{a}_{\pm}$ is the Hermitian conjugate/adjoint of $\hat{a}_{\mp}$
In particular,
$$
\int_{-\infty}^{+\infty} (\hat{a}_{\pm}\psi_{n})^{*}(\hat{a}_{\pm}\psi_{n}) \, dx =\int_{-\infty}^{+\infty} (\hat{a}_{\mp}\hat{a}_{\pm}\psi_{n} )^{*}\psi_{n} \, dx 
$$
But, we know that 
$$
\hbar \omega\left( \hat{a}_{\pm}\hat{a}_{\mp}\pm\frac{1}{2} \right)\psi_{n}=E_{n}\psi_{n} \quad \text{and}\quad E_{n}= \hbar \omega\left( n+\frac{1}{2} \right)
$$
$$
\hat{a}_{+} \hat{a}_{-} \psi_{n}=n\psi_{n}\quad \text{and}\quad \hat{a}_{-} \hat{a}_{+}\psi_{n} =(n+1)\psi_{n}
$$
It follows that
$$
\int_{-\infty}^{+\infty} (\hat{a}_{+} \psi_{n} )^{*}(\hat{a}_{+} \psi_{n}) \, dx=\int_{-\infty}^{+\infty} (\hat{a}_{-} \hat{a}_{+} \psi_{n})^{*}\psi_{n} \, dx =\int_{-\infty}^{+\infty} n\psi_{n}^{*}\psi_{n} \, dx =n 
$$
$$
\int_{-\infty}^{+\infty} (\hat{a}_{-} \psi_{n})^{*}(\hat{a}_{-} \psi_{n}) \, dx =\int_{-\infty}^{+\infty} (\hat{a}_{+} \hat{a}_{-} \psi_{n})^{*}\psi_{n} \, dx =\int_{-\infty}^{+\infty} (n-1)\psi ^{*}_{n}\psi_{n} \, dx =n+1
$$
However, remember that we let $\hat{a}_{+}\psi_{n}=c_{n}\psi_{n+1}$ and $\hat{a}_{-}\psi_{n}=d_{n}\psi_{n-1}$, from there, we get
$$
c_{n}=\sqrt{ n +1}\quad \text{and}\quad d_{n}=\sqrt{ n}
$$
$$
\hat{a}_{+} \psi_{n}=\sqrt{ n+1 }\psi_{n+1}\quad \text{and}\quad \hat{a}_{-} \psi_{n}=\sqrt{ n }\psi_{n-1}
$$
Thus,
$$
\psi_{1}=\hat{a}_{+} \psi_{0},\quad \psi_{2}=\frac{1}{\sqrt{ 2 }}\hat{a}_{+} \psi_{1}=\frac{1}{\sqrt{ 2\cdot 1 }}(\hat{a}_{+} )^{2}\psi_{0},\quad \psi_{3}=\frac{1}{\sqrt{ 3 }}\hat{a}_{+} \psi_{2}=\frac{1}{\sqrt{ 3\cdot2 \cdot 1}}(\hat{a}_{+} )^{3}\psi_{0},\dots
$$
Therefore, we can finally write our wave function as,
$$
\psi_{n}(x)=\frac{1}{\sqrt{ n! }}(\hat{a}_{+} )^{n}\psi_{0}
$$
The solutions to this case are also orthonormal i.e. 
$$
\int_{-\infty}^{+\infty} \psi_{m}^{*}\psi_{n} \, dx = \delta_{m,n}
$$
To simplify some matters, we take 
$$
\alpha\equiv\left( \frac{m\omega}{\hbar \pi} \right)^{\frac{1}{4}}\quad \text{and}\quad \xi\equiv \sqrt{ \frac{m\omega}{\hbar} }x
$$

Links: [[Potentials using Harmonic Oscillator]], [[Time Independent Schrödinger Equation]]
Tags: #QM #Oscillator #TISE #SchEq #Operators  
Date created: Sun/22/Mar/2026




