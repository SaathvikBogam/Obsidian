$$
\begin{gather*}
\psi(x)= \frac{\sqrt{ m\alpha }}{\hbar}e^{ -m\alpha|x|/\hbar^{2} }\\
\langle p^{2} \rangle =\int_{-\infty}^{+\infty} \psi ^{*}(-\hbar^{2}\partial^{2}_{x} )\psi \, dx =-m\alpha\int_{-\infty}^{+\infty} e^{ -m\alpha|x| /\hbar^{2} }\partial^{2}_{x} (e^{ -m\alpha |x| /\hbar^{2}}) \, dx \\
\langle p^{2} \rangle =-m\alpha \int_{-\infty}^{+\infty} e^{ -m\alpha |x| /\hbar^{2}}\partial_{x} \left( -\frac{m\alpha}{\hbar^{2}} \frac{|x|}{x} e^{ -m\alpha |x| /\hbar^{2} }\right)  \, dx \\
\langle p^{2} \rangle =\frac{m^{2}\alpha^{2}}{\hbar^{2}}\int_{-\infty}^{+\infty} e^{ -2m\alpha |x| /\hbar^{2} }\left( -\frac{m\alpha}{\hbar^{2}} \frac{|x|}{x}+\partial_{x} \left( \frac{|x|}{x} \right) \right) \, dx \\
\langle p^{2} \rangle =\frac{m^{2}\alpha^{2}}{\hbar^{2}}\int_{-\infty}^{+\infty} -\frac{m\alpha}{\hbar^{2}} \underbrace{ \frac{|x|}{x}e^{ -2m\alpha |x| /\hbar^{2} } }_{ I_{1} }+\underbrace{ \partial_{x}\left( \frac{|x|}{x} \right)e^{ -2m\alpha |x| /\hbar^{2} }  }_{ I_{2} } \, dx \\
\langle p^{2} \rangle =-\frac{m^{3}\alpha^{3}}{\hbar^{4}}I_{1}+\frac{m^{2}\alpha^{2}}{\hbar^{2}}I_{2}\\
\end{gather*}
$$