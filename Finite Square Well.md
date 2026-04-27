The potential associated with the finite square well is as follows
$$
V(x)=\begin{cases}
-V_{0},\ |x|<a \\
\ \ \ 0,\ |x|\geq a
\end{cases}
$$
#### *Bound State*
Consider the bound state condition $E<0$,
In the region $x\leq-a$, the [[Time Independent Schrödinger Equation]] is,
$$
\begin{gather}
-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi }{ \partial x^{2} }=E\psi \implies  \frac{ \partial ^{2} \psi  }{ \partial x^{2} }=\kappa^{2} \psi \\
\text{where }\kappa^{2}\equiv -\frac{2mE}{\hbar^{2}}  \\
\psi(x)=Ae^{ \kappa x }+Be^{ -\kappa x }\quad (x<-a)
\end{gather}
$$
For a physical solution, we get
$$
\psi(x)=Be^{ -\kappa x }\quad (x<-a)
$$
In the region $|x|<a$,
$$
\begin{gather}
-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi }{ \partial x^{2} } -V_{0}\psi =E\psi \implies \frac{ \partial ^{2} \psi }{ \partial x^{2} }=-k^{2}\psi \\
\text{where }k^{2}\equiv \frac{2m(E+V_{0})}{\hbar^{2}} \\
\psi(x)=C\sin (kx)+D\cos(kx)\quad (|x|<a)
\end{gather}
$$
In the region $x>a$,
$$
\begin{gather}
-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi }{ \partial x^{2} } =E\psi \implies \frac{ \partial ^{2} \psi }{ \partial x^{2} }=\kappa^{2}\psi \\
\psi(x)=Fe^{ \kappa x }+Ee^{ -\kappa x }\quad (x>a)
\end{gather}
$$
For a physically admittable solution,
$$
\psi(x)=Fe^{ -\kappa x }\quad (x>a)
$$
Now, one must remember that for an even potential, the solutions to the Schrödinger Equation are either even or odd. Therefore,
$$
\begin{gather}
\psi(-x)=\pm \psi(x) \\
\implies B= F,\ C=0\ \text{if solution is even} \\
\implies B=-F,\ D=0\ \text{if solution is odd}
\end{gather}
$$
Consider the even solution, i.e. $B=F$ and $C=0$.
$$
\begin{gather}
\psi(x)=Be^{ \kappa x }\quad (x<-a) \\
\psi(x)=D\cos(kx)\quad (|x|<a) \\
\psi(x)=Be^{ -\kappa x }\quad (x>a)
\end{gather}
$$
Now, imposing the continuity of $\psi$ and $\frac{ d \psi }{ d x }$, we obtain the following:
$$
\begin{gather}
Be^{ -\kappa a }=D\cos(ka)\ \ (\text{from }\psi)\\
\kappa Be^{ -\kappa a }=Dk\sin(ka)\ \ \left( \text{from }\frac{ d \psi }{ d x }  \right)\\
\implies \kappa =k\tan(ka)
\end{gather}
$$
Now, from the definitions of $k$ and $\kappa$, we get that
$$
\begin{gather}
k^{2}+\kappa^{2}=\frac{2mV_{0}}{\hbar^{2}} \\
\implies ka\tan(ka)=\sqrt{ -k^{2}a^{2}+\frac{2mV_{0}}{\hbar^{2}a^{2}} }
\end{gather}
$$
Let $z\equiv ka$ and $z_{0}^2\equiv \frac{2mV_{0}}{\hbar^{2}}$, then
$$
z\tan z=\sqrt{ z_{0}^{2}-z^{2} }
$$
This is a transcendental equation that cannot be solved analytically, so we solve it numerically or graphically.
```functionplot
---
title: 
xLabel: z
yLabel: f(z)
bounds: [0,5,0,3]
disableZoom: true
grid: false
---
f(x) = tan(x)
g(x) = (3-x^2)^(1/2)
h(x) = (11-x^2)^(1/2)
```
The green plot has a larger value of $z_{0}$ than the red plot.
We see that the wave function has discrete energy levels, and the larger the value of $z_{0}$, the more states there are.