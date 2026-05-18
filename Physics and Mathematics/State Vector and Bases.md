A quantum mechanical described by a state vector $\ket{\mathcal{S}(t)}$ that is independent of any basis. From this state ket, we can derive any property of the state. The wave function $\Psi(x,t)$ is actually just the state in the position basis, whereas the momentum space wave function $\Phi(p,t)$ is the state in the position basis. The action of the bra $\bra{\alpha}$ on the state ket gives the wave function in the $\alpha$ basis.
$$
\Psi(x,t)=\braket{ x | \mathcal{S}(t) } 
$$
$$
\Phi(p,t)=\braket{ p | \mathcal{S}(t) }
$$
The action of the bra $\bra{\alpha}$ on a basis ket $\ket{\beta}$ produces the eigenfunction of $\beta$ in the basis $\alpha$, since $\ket{\beta}$ is the eigenket.
$$
\braket{ x | p } =f_{p}(x)
$$
$$
\hat{p}f_{p}(x)=pf_{p}(x)\iff \hat{p}\ket{p} =p\ket{p}
$$
#### Change of Basis
Since a state vector $\ket{\mathcal{S}(t)}$ can be represented in any basis $\ket{\alpha}$ by taking $\braket{ \alpha | \mathcal{S}(t) }$, we can interconvert between basis.
$$
\ket{\mathcal{S}(t)} = \mathbf{1}\ket{\mathcal{S}(t)} =\left( \int_{-\infty}^{+\infty} \ket{x} \bra{x}  \, dx  \right)\ket{\mathcal{S}(t)} =\int_{-\infty}^{+\infty} \Psi(x,t)\ket{x}  \, dx
$$
$$
\ket{\mathcal{S}(t)} =\int_{-\infty}^{+\infty} \Phi(p,t)\ket{p}  \, dp
$$
For example, let us convert from the position to momentum basis. Let the position basis function and momentum basis function be $\Psi(x,t)$ and $\Phi(p,t)$, then
$$
\Phi(p,t)=\braket{ p | \mathcal{S}(t) } =\bra{p} (\ket{\mathcal{S}(t)} )
$$
$$
\Phi(p,t)=\bra{p} \left( \int_{-\infty}^{+\infty} \Psi(x,t)\ket{x}  \, dx  \right)=\int_{-\infty}^{+\infty} \braket{ p | x } \Psi(x,t) \, dx
$$
$\braket{ p | x  }$ is the conjugate momentum eigenfunction in the position basis $f_{p}(x)$ 
$$
\hat{p}f_{p}(x)=pf_{p}(x)\implies -i\hbar\partial_{x}f_{p}(x)=pf_{p}(x)
$$
$$
f_{p}(x)=\frac{1}{\sqrt{ 2\pi \hbar }}e^{ ipx /\hbar }=\braket{ p | x } ^{*}
$$
$$
\therefore \Phi(p,t)=\int_{-\infty}^{+\infty} \frac{1}{\sqrt{ 2\pi \hbar }}e^{ -ipx /\hbar }\Psi(x,t) \, dx
$$


Links: [[Hilbert Space]], [[Dirac Notation]]
Tags: #QM #LinAlg #Fundamental #Math 
Date created: Mon/18/May/2026