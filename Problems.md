The generalized Ehrenfest principle, where $Q$ is an observable, is
$$
D_{t}\langle Q \rangle = \frac{i}{\hbar}\langle [\hat{H},\hat{Q}] \rangle +\langle \partial_{t} \hat{Q} \rangle
$$
(a) $Q=1$
$$
D_{t}\langle 1 \rangle =\frac{i}{\hbar}\langle [\hat{H},1] \rangle +\langle \partial_{t} 1 \rangle
$$
$$
\implies 0=0
$$
(b) $Q=H=\frac{p^{2}}{2m}+V(x)$
$$
D_{t}\langle H \rangle =\frac{i}{\hbar}\langle [\hat{H},\hat{H}] \rangle+\langle \partial_{t} \hat{H} \rangle
$$
$$
D_{t}\langle H \rangle =\langle \partial_{t} \hat{H} \rangle \ (\because[\hat{H},\hat{H}]=0)
$$
Consider $\langle \partial_{t}\hat{H} \rangle$,
$$
\langle \partial_{t} \hat{H} \rangle =\braket{ \Psi | \partial_{t}\hat{H}\Psi  }
$$
$$
\langle \partial_{t} \hat{H} \rangle =\int_{-\infty}^{+\infty}\Psi^{*}\partial_{t} \hat{H}\Psi \, dx 
$$
And now consider $D_{t}\langle H \rangle$,
$$
D_{t}\langle H \rangle =D_{t}\braket{ \Psi | \hat{H}\Psi } =D_{t}\int_{-\infty}^{+\infty} \Psi^{*}\hat{H}\Psi \, dx
$$
From the Feynman/Leibniz Rule,
$$
D_{t}\langle H \rangle =\int_{-\infty}^{+\infty} \partial_{t} (\Psi^{*}\hat{H}\Psi) \, dx =\int_{-\infty}^{+\infty} \partial_{t} \Psi^{*}\hat{H}\Psi +\Psi^{*}\partial_{t} \hat{H}\Psi\, dx 
$$
Now, equating the two, we obtain,
$$
\int_{-\infty}^{+\infty} \partial_{t} \Psi^{*}\hat{H}\Psi \, dx =0
$$
From the Schrödinger Equation, $\hat{H}\Psi=i\hbar \partial_{t}\Psi$
$$
\int_{-\infty}^{+\infty} |\partial_{t} \Psi|^{2} \, dx =0
$$
