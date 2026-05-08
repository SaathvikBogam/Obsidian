From the [[Generalized Statistical Interpretation]], we know that any eigenfunction of the momentum operator $\hat{p}=-i\hbar \partial_{x}$ is $f_{p}(x)=\frac{1}{\sqrt{ 2\pi \hbar }}e^{ -ipx/\hbar }$ and the $c(p)$ is given by
$$
c(p)=\braket{ f_{p} | \Psi } =\frac{1}{\sqrt{ 2\pi \hbar }}\int_{-\infty}^{+\infty} e^{ -ipx/\hbar }\Psi(x,t) \, dx 
$$
The process of finding $c(p)$ is very similar to the [[Fourier Transform]] that we used in the Free Particle case. Infact, we can consider as a form of the Fourier Transform. Since we are eliminating $x$ and we get a function in $p$ and $t$, we call it a Momentum Space transform, whereas the original $\Psi(x,t)$ is called the Position Space.
$$
\begin{gather*}
\Phi(p,t)=\frac{1}{\sqrt{ 2\pi \hbar }}\int_{-\infty}^{+\infty} e^{ -ipx /\hbar }\Psi(x,t) \, dx \\
\Psi(x,t)=\frac{1}{\sqrt{ 2\pi \hbar }}\int_{-\infty}^{+\infty} e^{ ipx /\hbar }\Phi(p,t) \, dp 
\end{gather*}
$$
According to the [[Generalized Statistical Interpretation]], the probability of obtaining a momentum measurement in the range $dp$ is $|\Phi(p,t)|^{2}dp$. The expectation value of position $x$ in momentum space is given by,
$$
\langle x \rangle =\braket{ \Phi | \hat{x}\Phi },\ \text{where }\hat{x}=i\hbar \partial_{p}
$$

Links: [[Fourier Transform]]
Tags: #QM #Math 
Date created: Tue/05/May/2026