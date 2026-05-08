$$
V(x)=-\alpha[\delta(x+a)+\delta(x-a)]\\
$$
\subsubsection*{Bound State -- $E<0$}
For $x<-a$,
$$
\begin{gather*}
\partial^{2}_{x}\psi=-\frac{2mE}{\hbar^{2}}\psi=\kappa^{2}\psi\\
\text{where }\kappa^{2}=-\frac{2mE}{\hbar^{2}}\\
\psi(x)=Ae^{ \kappa x }+Be^{ -\kappa x }\\
\psi(x)=Ae^{ \kappa x }\ (x<-a)\ (\because \text{for normalizability})
\end{gather*}
$$
For $|x|<a$,
$$
\begin{gather*}
\partial^{2}_{x} \psi=\kappa^{2}\psi\\
\psi(x)=Ce^{ \kappa x }+De^{ -\kappa x }\ (|x|<a)
\end{gather*}
$$
For $x>a$,
$$
\begin{gather*}
\partial^{2}_{x} \psi=\kappa^{2}\psi\\
\psi(x)=Fe^{ -\kappa x }+Ge^{ \kappa x }\\
\psi(x)=Fe^{ -\kappa x }\ (x>a)\ (\because \text{for normalizablity})
\end{gather*}
$$
$$
\begin{gather*}
\psi(x)=\begin{cases}
Ae^{ \kappa x },\ x<-a \\
Ce^{ \kappa x }+De^{ -\kappa x },\ |x|<a \\
Fe^{ -\kappa x },\ x>a
\end{cases}\\
\psi'(x)=\begin{cases}
\kappa Ae^{ \kappa x },\ x<-a \\
\kappa[Ce^{ \kappa x }-De^{ -\kappa x }],\ |x|<a \\
-\kappa Fe^{ -\kappa x },\ x>a
\end{cases}\\
\end{gather*}
$$
Applying the continuity requirement at $\pm a$,
$$
\begin{gather*}
Ae^{ -\kappa a }=Ce^{ -\kappa a }+De^{ \kappa a }\implies De^{ 2\kappa a }=A-C\\
Fe^{ -\kappa a }=Ce^{ \kappa a }+De^{ -\kappa a }\implies Ce^{ 2\kappa a }=F-D\\
\Delta \psi'|_{\pm a}=-\frac{2m\alpha}{\hbar^{2}}\psi(\pm a)\\
De^{ 2\kappa a }+A-C=-\frac{2m\alpha}{\kappa\hbar^{2}}A\implies De^{ 2\kappa a }=-\frac{m\alpha}{\kappa\hbar^{2}}A\\
Ce^{ 2\kappa a }+F-D=-\frac{2m\alpha}{\kappa \hbar^{2}}F\implies Ce^{ 2\kappa a }=-\frac{m\alpha}{\kappa \hbar^{2}}F\\
\end{gather*}
$$
From all the above relations, we obtain the following equation:
$$
\left( \frac{m\alpha}{\kappa \hbar^{2}}-1 \right)Ae^{ 2\kappa a }=\frac{m\alpha}{\kappa \hbar^{2}}F
$$Since the potential is even, the wave function is either odd or even.
\subsubsubsection*{Even Solution}
If the wave function is even, then
$$
\begin{gather*}
A=F\\
e^{ -2\kappa a }=\frac{\kappa \hbar^{2}}{m\alpha}-1\\
z\equiv 2\kappa a,\ c\equiv \frac{\hbar^{2}}{2m\alpha a}\\
\boxed{\therefore e^{ -z }=cz-1}
\end{gather*}
$$
This is a transcendental equation, the graphical solution is given below.
```tikz

```
