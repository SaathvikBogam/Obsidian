$$
\begin{gather*}
\Psi(x,t)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{+\infty} \phi(k)e^{ ikx -i\frac{{\hbar k^{2}}}{2m}t } \, dk \\
\Phi(p,t)=\frac{1}{\sqrt{ 2\pi \hbar }}\int_{-\infty}^{+\infty} \Psi(x,t)e^{ -\frac{ip}{\hbar}x } \, dx \\
\Phi(p,t)=\frac{1}{2\pi \sqrt{ \hbar }}\int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} \phi(k)e^{ -\frac{ip}{\hbar}x }e^{ ikx }e^{ -\frac{i{\hbar k^{2}}}{2m}t } \, dk  \, dx\\
\Phi(p,t)=\frac{1}{2\pi \sqrt{ \hbar }}\int_{-\infty}^{+\infty} \phi(k)e^{ -\frac{i{\hbar k^{2}}}{2m}t }\underbrace{ \int_{-\infty}^{+\infty} e^{ i\left( k-\frac{p}{\hbar} \right) } \, dx }_{ 2\pi\delta\left( k-\frac{p}{\hbar} \right) }  \, dk \\
\Phi(p,t)=\frac{1}{\sqrt{ \hbar }}\int_{-\infty}^{+\infty} \phi(k)e^{ -i \frac{{\hbar k^{2}}}{2m}t }\delta\left( k-\frac{p}{\hbar} \right) \, dk \\
\Phi(p,t)=\frac{1}{\sqrt{ \hbar }}\phi\left( \frac{p}{\hbar} \right)e^{ -i \frac{p^{2}}{2m\hbar}t }\implies |\Phi(p,t)|^{2}=\frac{1}{\hbar}\left|\phi\left( \frac{p}{\hbar} \right)\right|^{2}
\end{gather*}
$$
