Any observable of a particle, like position, momentum or energy, has an expectation value that can be calculated as follows.
$$
\langle Q \rangle =\int_{-\infty}^{+\infty} \Psi^{*}\hat{Q}\Psi \, dx =\braket{ \Psi | \hat{Q}\Psi }
$$
Observables are a real, measureable quantity, therefore $\langle Q \rangle=\langle Q \rangle^{*}$.
$$
\begin{gather*}
\langle Q \rangle =\langle Q \rangle ^{*}\implies \braket{ \Psi | \hat{Q}\Psi } = \braket{ \hat{Q}\Psi | \Psi } 
\end{gather*}
$$
Any operator that obeys this for all $\Psi$ is called a Hermitian operator. If the operator is not hermitian, then $\hat{Q}^{\dagger}$ is an operator such that
$$
\braket{ \hat{Q}^{\dagger}\Psi | \Psi } =\braket{ \Psi | \hat{Q}\Psi }
$$
The operator $\hat{Q}^{\dagger}$ is called the hermitian conjugate/adjoint of $\hat{Q}$. Therefore, a hermitian operator is simply an operator such that
$$
\hat{Q}^{\dagger}=\hat{Q}
$$
From this, we learn that any observable $Q(x,p)$ in Quantum Mechanics is represented by a hermitian operator $\hat{Q}(\hat{x},\hat{p})$ and the expectation value of $Q$ is given by
$$
\langle Q \rangle =\braket{ \Psi | \hat{Q}\Psi }
$$


Links: [[Hilbert Space]]
Tags: #QM #Fundamental #Operators #Math 
Date created: Tue/05/May/2026