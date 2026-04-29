$$
\begin{gather*}
V(x)=\begin{cases}
\ 0\ ,\ |x|\geq a \\
V_{0},\ |x|\leq a
\end{cases}
\end{gather*}
$$
For $x\leq a$,
$$
\begin{gather*}
-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi }{ \partial x^{2} } =E\psi \implies \frac{ \partial ^{2} \psi }{ \partial x^{2} } =-\alpha^{2}\psi \\
\text{where }\alpha^{2}\equiv \frac{2mE}{\hbar^{2}} \\
\psi(x)=Ae^{ i\alpha x }+Be^{ -i\alpha x }\quad (x\leq -a)
\end{gather*}
$$
For $|x|<a$,
$$
\begin{gather*}
-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi }{ \partial x^{2} } +V_{0}\psi =E\psi \implies \frac{ \partial ^{2} \psi }{ \partial x^{2} } =\frac{2m}{\hbar^{2}}(V_{0}-E)\psi \\
\beta^{2}=\frac{2m}{\hbar^{2}}|V_{0}-E| \\
\frac{ \partial ^{2} \psi }{ \partial x^{2} }=\begin{cases}
\beta^{2}\psi,\ E<V_{0} \\
\ \ 0\ \ ,\ E=V_{0} \\
-\beta^{2}\psi,\ E>V_{0}
\end{cases} \implies \psi(x)=\begin{cases}
Ce^{ \beta x }+De^{ -\beta x },\ E<V_{0} \\
Cx+D,\ E=V_{0} \\
Ce^{ i\beta x }+De^{ i\beta x },\ E>V_{0}
\end{cases}\quad (|x|<a) \\
\end{gather*}
$$
For $x\geq a$, and assuming there no wave from the left,
$$
\begin{gather}
\frac{ \partial ^{2} \psi }{ \partial x^{2} } =-\alpha^{2}\psi \implies \psi(x)=Fe^{ i\alpha x }\quad (x\geq a)
\end{gather}
$$
For $E>V_{0}$,
$$
\begin{gather*}
\psi(x)=\begin{cases}
Ae^{ i\alpha x }+Be^{ -i\alpha x },\ x\leq -a \\
Ce^{ i\beta x }+De^{ -i\beta x },\ |x|<a \\
Fe^{ i\alpha x },\ x\geq a
\end{cases} \\
\frac{ d \psi }{ d x } (x)=\begin{cases}
i\alpha[Ae^{ i\alpha x }-Be^{ -i\alpha x }],\ x\leq -a \\
i\beta[Ce^{ i\beta x }-De^{ -i\beta x }],\ |x|<a \\
i\alpha Fe^{ i\alpha x },\ x\geq a
\end{cases} 
\end{gather*}
$$
Applying the continuity of $\psi$ and $\frac{ d \psi }{ d x }$ at $\pm a$,
$$
\begin{gather*}
Ae^{ -i\alpha a }+Be^{ i\alpha a }=Ce^{ -i\alpha a }+De^{ i\alpha a } \\
i\alpha[Ae^{ -i\alpha a }-Be^{ i\alpha a }]=i\beta[Ce^{ -i\alpha a }-De^{ i\alpha a }] \\
Ce^{ i\beta a}+De^{ -i\beta a }=Fe^{ i\alpha a } \\
i\beta[Ce^{ i\beta a }-De^{ -i\beta a }]=i\alpha Fe^{ i\alpha a }
\end{gather*}
$$
From the above equations, we get that
$$
\begin{gather*}
C=\left( 1+\frac{\alpha}{\beta} \right) \frac{1}{2}Fe^{ i(\alpha-\beta) a},\ D=\left( 1-\frac{\alpha}{\beta} \right) \frac{1}{2}Fe^{ i(\alpha+\beta)a }\\
A=\frac{F}{4\alpha\beta}[(\alpha+\beta)^{2}e^{ i(\alpha-\beta)a }-(\alpha-\beta)^{2}e^{ i(3\alpha+\beta)a }]
\\T=\left|\frac{F}{A}\right|^{2}\implies \frac{1}{T}=\frac{1}{16\alpha^{2}\beta^{2}}[(\alpha+\beta)^{4}+(\alpha-\beta)^{4}-2(\alpha^{2}-\beta^{2})^{2}\cos(2a(\alpha+\beta))]
\\ \implies T^{-1}= 1 + \frac{V_{0}^{2}}{8E(E-V_{0})}(1-\cos(2a(\alpha+\beta)))
\\ \boxed{\therefore T^{-1}=1+\frac{V_{0}^{2}}{4E(E-V_{0})}\sin ^{2}((\alpha+\beta)a)}
\end{gather*}
$$
For $E=V_{0}$,
$$
\begin{gather*}
\psi(x)=\begin{cases}
Ae^{ i\alpha x }+Be^{ -i\alpha x },\ x\leq -a \\
Cx+D,\ |x|<a \\
Fe^{ i\alpha x },\ x\geq a
\end{cases}\\
\frac{ d \psi }{ d x } =\begin{cases}
i\alpha[Ae^{  i\alpha x }-Be^{ -i\alpha x } ],\ x\leq -a \\
C,\ |x|<a \\
i\alpha Fe^{ i\alpha x },\ x\geq a
\end{cases}
\end{gather*}
$$
Applying continuity of $\psi$ and $\frac{ d \psi }{ d x }$ at $\pm a$,
$$
\begin{gather*}
Ae^{ -i\alpha a }+Be^{ i\alpha a }=D-aC\\
Fe^{ i\alpha a }=D+aC \\
i\alpha[Ae^{ -i\alpha a }-Be^{ i\alpha a }]=C
\\ i\alpha Fe^{ i\alpha a }=C
\end{gather*}
$$
From the obtained relations, we get
$$
\begin{gather*}

\end{gather*}
$$