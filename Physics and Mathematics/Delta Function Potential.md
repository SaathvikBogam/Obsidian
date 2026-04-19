Consider a potential $V(x)=-\alpha\delta(x)$. Let us try to solve the [[Time Independent Schrödinger Equation]] in this case.
$$
-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi }{ \partial x^{2} } -\alpha\delta(x)\psi(x)=E\psi(x)
$$
We see that it gives both a bound state ($E<0$) and a scattering state ($E>0$).
#### *Bound State*
$$
\frac{ \partial ^{2} \psi }{ \partial x^{2} } =-\frac{2mE}{\hbar^{2}}\psi
$$
The general solution to this is $\psi(x)=Ae^{ \frac{\sqrt{-2mE}}{\hbar}x }+Be^{ -\frac{\sqrt{-2mE}}{\hbar}x }$. Since the $B$ term blows up to infinity, we choose $B=0$.
$$
\psi(x)=Ae^{ \frac{\sqrt{ -2mE }}{\hbar}x }\quad (x<0)
$$
For $x>0\implies V(x)=0$, the solution for this state is $\psi(x)=Fe^{ \frac{\sqrt{-2mE}}{\hbar}x }+Ge^{ -\frac{\sqrt{-2mE}}{\hbar}x }$ and since $F$ term goes to $-\infty$, we choose $F=0$.
$$
\psi(x)=Ge^{ -\frac{\sqrt{ -2mE }}{\hbar} x}\quad (x>0)
$$
Since $\psi(x)$ has to be a continuous function, and $\frac{ d \psi }{ d x }$ is continuous everywhere except where $V(x)\rightarrow \pm\infty$, then this tells us that $A=G$ and:
$$
\psi(x)=\begin{cases}
Ae^{ \kappa x }\ ,\ \ (x\leq 0)
\\Ae^{ -\kappa x   },\ (x\geq 0)
\end{cases}
$$
where $\kappa=\frac{\sqrt{ -2mE }}{\hbar}$

Let us integrate the [[Schrödinger Equation]] between $-\epsilon$ and $+\epsilon$.
$$
-\frac{\hbar^{2}}{2m}\int_{-\epsilon}^{+\epsilon} \frac{ d ^{2} \psi }{ d x^{2} }    \, dx+\int_{-\epsilon}^{+\epsilon} V(x)\psi(x) \, dx =E\int_{-\epsilon}^{+\epsilon} \psi(x) \, dx  
$$
In the limit that $\epsilon \rightarrow 0$, the last integral is zero, the first one is nothing but $\frac{ d \psi }{ d x }$.
$$
\Delta\left( \frac{ d \psi }{ d x }  \right)\equiv \lim_{ \epsilon \to 0 } \left( \frac{ d \psi }{ d x } \bigg|_{-\epsilon}^{+\epsilon} \right)=-\frac{2m\alpha}{\hbar^{2}}\lim_{ \epsilon \to 0 } \int_{-\epsilon}^{+\epsilon} \delta(x)\psi(x) \, dx 
$$
And by the properties of the delta function, we get:
$$
\Delta\left( \frac{ d \psi }{ d x }  \right)=-\frac{2m\alpha}{\hbar^{2}}\psi(0)
$$
In our case, 
$$
\frac{ d \psi }{ d x } =\begin{cases}
-A\kappa e^{ -\kappa x }\quad (x<0)
\\+A\kappa e^{ +\kappa x }\quad (x>0)
\end{cases}
$$
From this, $\Delta\left( \frac{ d \psi }{ d x } \right)=-2A\kappa$ and $\psi(0)=A$ since $\psi$ is continuous. Therefore,
$$
-2A\kappa=-\frac{2m\alpha}{\hbar^{2}}A\implies \kappa=\frac{m\alpha}{\hbar^{2}}
$$
And we know that $\kappa=\frac{\sqrt{ -2mE }}{\hbar}$, therefore the allowed energy is
$$
E=-\frac{m\alpha^{2}}{2\hbar^{2}}
$$
Now, we normalize $\psi$,
$$
\int_{-\infty}^{+\infty} |\psi|^{2} \, dx =2|A|^{2}\int_{0}^{\infty} e^{ -2\kappa x } \, dx =\frac{|B|^{2}}{\kappa}=2
$$
$$
B=\sqrt{ \kappa }=\frac{\sqrt{ m\alpha }}{\hbar}
$$
Therefore, the bound state for the delta function well is:
$$
\psi(x)=\frac{\sqrt{ m\alpha }}{\hbar}e^{ -m\alpha |x|/\hbar^{2} }\quad ;\quad E=-\frac{m\alpha^{2}}{2\hbar^{2}}
$$

#### __Scattering State__
Now let us look at the scattering state $E>0$. For $x<0,$
$$
\frac{ d ^{2} \psi }{ d x^{2} } =-\frac{2mE}{\hbar^{2}}\psi
$$
The solution to this is $\psi(x)=Ae^{ ikx }+Be^{ -ikx }$, with $\psi'(x)=ik(Ae^{ ikx }-Be^{ -ikx })$
For $x<0,$
$$
\frac{ d ^{2} \psi }{ d x^{2} } =-\frac{2mE}{\hbar^{2}}\psi 
$$
The solution to this is $\psi(x)=Ce^{ ikx }+De^{ -ikx }$, with $\psi'(x)=ik(Ce^{ ikx }-De^{ -ikx })$
For continuity at $x=0$, we get the following conditions,
$$
A+B=C+D\quad (1)
$$
$$
\Delta\left( \frac{ d \psi }{ d x }  \right)\equiv \lim_{ \epsilon \to 0 } \left( \frac{ d \psi }{ d x } \bigg|_{-\epsilon}^{+\epsilon} \right)=-\frac{2m\alpha}{\hbar^{2}}\lim_{ \epsilon \to 0 } \int_{-\epsilon}^{+\epsilon} \delta(x)\psi(x) \, dx 
$$
$$
\implies ik(C-D-A+B)=-\frac{2m\alpha}{\hbar^{2}}(A+B)
$$
$$
\implies C-D=A(1+2i\beta)-B(1-2i\beta),\quad \text{where}\ \beta\equiv \frac{m\alpha}{\hbar^{2}k}\quad (2)
$$
Now, we must remind ourselves of the fact that $\psi(x)$ for the scattering state is a wave, with $e^{ ikx }$ being one moving rightward and $e^{ -ikx }$ moving leftward. It is in essence just a superposition of waves, with $A,B,C$ and $D$ being amplitudes of each of the waves.

Let us consider a scattering experiment where a wave is moving rightward. That means $D=0$, and there is no wave coming from the right. $A$ is the amplitude of the incident wave, $B$ is that of the reflection and $C$ is that of the transmitted. Solving eqn $(1)$ and $(2)$, we get:
$$
B=\frac{i\beta}{1-i\beta}A\ ,\ \ C=\frac{1}{1-i\beta}A
$$
The probability that a particle is at a specified location is given $|\Psi|^{2}$, so the relative probability that an incident particle will be reflected back is
$$
R\equiv \frac{{|B|^{2}}}{|A|^{2}}=\frac{\beta^{2}}{1+\beta^{2}}
$$
Here, $R$ is called the reflection coefficient. Similarly, the probability that a particle is transmitted through i.e. the transmission coefficient is
$$
T\equiv \frac{{|C|^{2}}}{|A|^{2}}=\frac{1}{1+\beta^{2}}
$$
$$
\therefore R+T=1
$$
Notice that $R$ and $T$ are functions of $\beta$, substituting it in,
$$
R=\frac{1}{1+\left( \frac{2\hbar^{2}E}{m\alpha^{2}} \right)},\quad T=\frac{1}{1+\left( \frac{m\alpha^{2}}{2\hbar{^{2}}E} \right)}
$$
Let us take a case $V(x)=\alpha\delta(x)$. Here, the bound state disappears, and only the scattering state remains. You see that the reflection and transmission coefficients remain the same, since they are in terms of $\alpha^{2}$. The implication that a particle can even be transmitted over the infinite potential barrier at $x=0$ leads to the phenomenon of **tunneling**, where quantum particles can seemingly cross over any energy barrier, even if it is infinite.

Links: [[Dirac Delta Function]], [[Time Independent Schrödinger Equation]]
Tags: #QM #SchEq #TISE #Wave 
Date created: Thu/02/Apr/2026