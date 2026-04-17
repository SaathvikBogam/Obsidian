From the [[Born Interpretation]], we know that the amplitude squared of the wave function is the probability density. Since the particle has to exist somewhere in space, i.e. in $(-\infty,\infty)$, we can write: 
$$
\int_{-\infty}^{\infty}|\Psi(x,t)|^2 \,dx=1
$$
This process is called normalization of the wave function. It can help us find any arbitrary constants present in our wave function. From the [[Schrödinger Equation]], we can see that since it is linear, if $\Psi$ is a solution, then $A\Psi$ would also be a solution. We can find this constant $A$ using normalization.
An inherent property of this interpretation is that the normalization is constant over time, and can be proved as follows:
$$
\text{Consider}\quad \frac{d}{dt} \int_{-\infty}^{\infty} |\Psi|^2\ dx=\int_{-\infty}^{\infty} \frac{\partial}{\partial t}(\Psi\Psi^{*})\ dx
$$
$$
\frac{\partial}{\partial t}\Psi\Psi^{*}= \Psi^{*}\frac{\partial\Psi}{\partial t}+\Psi  \frac{\partial\Psi^{*}}{\partial t}
$$
From the [[Schrödinger Equation]], we can write $\frac{\partial\Psi}{\partial t}$ as:
$$
\frac{ \partial \Psi }{ \partial t } =\frac{i\hbar}{2m}\frac{ \partial^2 \Psi }{ \partial x^2 } -\frac{i}{\hbar}V\Psi
$$
$$
\frac{ \partial \Psi^{*} }{ \partial t } =-\frac{i\hbar}{2m}\frac{ \partial ^2 \Psi }{ \partial x^2 } + \frac{i}{\hbar}V\Psi
$$
Substituting into the integral,
$$
\frac{ \partial |\Psi|^2 }{ \partial t } =\Psi^{*}\left( \frac{i\hbar}{2m}\frac{ \partial ^2 \Psi }{ \partial x^2 } -\frac{i}{\hbar}V\Psi \right)+\Psi\left( -\frac{i\hbar}{2m}\frac{ \partial ^2 \Psi }{ \partial x^2 } +\frac{i}{\hbar}V\Psi \right)
$$
$$
\int_{-\infty}^{\infty} \frac{i\hbar}{2m}\left( \Psi^{*}\frac{ \partial ^2 \Psi }{ \partial x^2 } - \Psi \frac{ \partial ^2 \Psi^{*} }{ \partial x^2 }  \right)\ dx=\frac{i\hbar}{2m}\ \left( \Psi^{*}\frac{ \partial ^2 \Psi }{ \partial x^2 } - \Psi \frac{ \partial ^2 \Psi^{*} }{ \partial x^2 }  \right) \bigg|_{-\infty}^{+\infty}=0
$$
The above integral is zero at the infinities since the integral would otherwise diverge. So this follows that:
$$\frac{d}{dt} \int_{-\infty}^{\infty}|\Psi|^2\ dx=0
$$
So therefore, since the integral is constant in time, if $\Psi$ is normalized at $t=0$, it stays normalized for all future time. $\text{QED.}$ 


Links: [[Born Interpretation]], [[Schrödinger Equation]] 
Tags: #QM #Fundamental 
Date created: Mon/16/Mar/2026


