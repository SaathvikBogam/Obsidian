Let us consider the time derivative of the expectation value,
$$
\frac{d}{dt}\langle x \rangle =\frac{d}{dt}\int_{-\infty}^{+\infty}x|\Psi|^2\ dx=\int_{-\infty}^{+\infty}x\frac{ \partial |\Psi|^2 }{ \partial t }\ dx
$$
From [[Normalization]], we can apply the result of $\frac{ \partial |\Psi|^2 }{ \partial t }$
$$
\frac{i\hbar}{2m}\int_{-\infty}^{+\infty}x \frac{ \partial  }{ \partial x } \left( \Psi^{*}\frac{ \partial \Psi }{ \partial x } -\Psi\frac{ \partial \Psi^{*} }{ \partial x }  \right)\ dx \ \xrightarrow{IBP}
-\frac{i\hbar}{2m}\int_{-\infty}^{+\infty} \left( \Psi^{*}\frac{ \partial \Psi }{ \partial x } -\Psi\frac{ \partial \Psi^{*} }{ \partial x }  \right)\ dx
$$
Performing integration by parts once more, we get
$$
\frac{{d\langle x \rangle}}{dt}=-\frac{i\hbar}{2m}\int_{-\infty}^{+\infty}\Psi^{*}\frac{ \partial \Psi }{ \partial x } \ dx
$$
This quantity is the velocity of the expectation value of position, not the velocity, however it is still called the expectation velocity of $\Psi$. Since it is more customary to work with momentum rather than velocity,
$$
\langle p \rangle =m \frac{d\langle x \rangle }{dt}=-\frac{i\hbar}{2}\int_{-\infty}^{+\infty}\Psi^{*}\frac{ \partial \Psi }{ \partial x } dx
$$
Let us write it in a more suggestive way, where we think of $[x]$ representing position and $[-i\hbar(\partial/\partial x)]$ representing momentum as operators on the wave function. To calculate the position and momentum we "sandwich" the operator with $\Psi^{*}$ and $\Psi$. 
$$
\langle x \rangle =\int_{-\infty}^{+\infty} \Psi^{*}[x]\Psi \, dx\ \ ;\ \ \langle  p\rangle=\int_{-\infty}^{+\infty} \Psi^{*}[-i\hbar(\partial/\partial x)]\Psi \, dx  
$$
Using this way of representing position and momentum as operators, we can express all classical dynamical variables in terms of position and momentum. To calculate the expectation value of such a quantity $Q(x,p)$, we simply do the same "sandwiching".
$$
\langle Q(x,p) \rangle =\int_{-\infty}^{+\infty} \Psi ^{*} [Q(x,-i\hbar(\partial/\partial x))]\Psi \, dx 
$$
For example, the kinetic energy and its expectation value can be given by:
$$
T = \frac{p^2}{2m}\ \ ;\ \ \langle T \rangle =-\frac{\hbar^2}{2m}\int_{-\infty}^{+\infty} \Psi^{*}\frac{ \partial ^2 \Psi }{ \partial x^2 }  \, dx 
$$


Links: [[Wave Function]], [[Schrödinger Equation]]
Tags: #QM #SchEq #Statistics 
Date created: Mon/16/Mar/2026