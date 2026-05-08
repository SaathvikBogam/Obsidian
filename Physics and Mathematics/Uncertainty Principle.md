Consider any observables $A$ and $B$, their uncertainties are given by
$$
\begin{gather*}
\sigma^{2}_{A}=\braket{ (\hat{A}-\langle A \rangle )\Psi | (\hat{A}-\langle A \rangle )\Psi } =\braket{ f | f }\\
\text{where }f\equiv (\hat{A}-\langle A \rangle )\Psi\\
\sigma^{2}_{B}=\braket{ g | g } \\
\text{where }g\equiv (\hat{B}-\langle B \rangle )\Psi
\end{gather*}
$$
Invoking the Cauchy-Schwarz Inequality, we get
$$
\begin{gather*}
\braket{ f | f } \braket{ g | g } \geq |\braket{ f | g }|^{2}\implies \sigma^{2}_{A}\sigma^{2}_{B}\geq |\braket{ f | g } |^{2}
\end{gather*}
$$
For any complex number $z$,
$$
|z|^{2}\geq [\mathrm{Im}(z)]^{2}=\left[ \frac{1}{2i}(z-z^{*}) \right]^{2}
$$
Let $z=\braket{ f | g }$,
$$
\begin{gather*}
|\braket{ f | g } |^{2}\geq \left[ \frac{1}{2i}(\braket{ f | g } -\braket{ g | f } ) \right]^{2}\\
\implies \sigma^{2}_{A}\sigma^{2}_{B}\geq \left[ \frac{1}{2i}(\braket{ f | g } -\braket{ g | f } ) \right]^{2}
\end{gather*}
$$
Consider $\braket{ f | g }$,
$$
\begin{gather*}
\braket{ f | g } =\braket{ (\hat{A}-\langle A \rangle )\Psi | (\hat{B}-\langle B \rangle )\Psi } =\braket{ \Psi | (\hat{A}-\langle A \rangle )(\hat{B}-\langle B \rangle )\Psi }\\
\braket{ f | g } =\braket{ \Psi | (\hat{A}\hat{B}-\hat{A}\langle B \rangle -\hat{B}\langle A \rangle +\langle A \rangle \langle B \rangle )\Psi }\\
\braket{ f | g } =\braket{ \Psi | \hat{A}\hat{B}\Psi } -\langle B \rangle \braket{ \Psi | \hat{A}\Psi } -\langle A \rangle \braket{ \Psi | \hat{B}\Psi } +\langle A \rangle \langle B \rangle \braket{ \Psi | \Psi } \\
\braket{ f | g } =\langle \hat{A}\hat{B} \rangle -\langle B \rangle \langle A \rangle \cancel{ -\langle A \rangle \langle B \rangle +\langle A \rangle \langle B \rangle  }\\
\therefore \braket{ f | g } =\langle \hat{A}\hat{B} \rangle -\langle A \rangle \langle B \rangle \\
\braket{ g | f } =\langle \hat{B}\hat{A} \rangle -\langle A \rangle \langle B \rangle \\
\implies \braket{ f | g } -\braket{ g | f } =\langle \hat{A}\hat{B} \rangle -\langle \hat{B}\hat{A} \rangle =\langle [\hat{A},\hat{B}] \rangle 
\end{gather*}
$$
Therefore, from this we conclude that
$$
\sigma_{A}^{2}\sigma_{B}^{2}\geq \left( \frac{1}{2i}\langle [\hat{A},\hat{B}] \rangle  \right)^{2}
$$
This the Generalized Uncertainty Principle for observables $A$ and $B$. The Heisenberg Uncertainty Principle can be derived by using $\hat{A}=x$ and $\hat{B}=\hat{p}=-i\hbar \partial_{x}$. We know from the canonical commutator relation that $[\hat{x},\hat{p}]=i\hbar$, then
$$
\begin{gather*}
\sigma^{2}_{x}\sigma^{2}_{p}\geq \left( \frac{1}{2i}i\hbar \right)^{2}=\frac{\hbar^{2}}{4}\\
\boxed{\therefore \sigma_{x}\sigma _{p}\geq \frac{\hbar}{2}}
\end{gather*}
$$
There exists an uncertainty principle for every pair of observables that do not commute, and we call them incompatible observables. Compatible observables have complete sets of simultaneous eigenfunctions, a measurement in one observable will always guarentee that the corresponding eigenvalue of a compatible observable is measured.

Links: [[Generalized Statistical Interpretation]]
Tags: #QM #Fundamental #Property 
Date created: Tue/05/May/2026