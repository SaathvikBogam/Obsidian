$$
\braket{ \hat{Q}^{\dagger}\psi | \psi } =\braket{ \psi | \hat{Q}\psi }
$$
If $\hat{Q}^{\dagger}=\hat{Q}$, then the operator $\hat{Q}$ is said to be a Hermitian operator.
Let $\hat{Q}=D_{\phi}^{2}$, then consider $\braket{ \hat{Q}f | f }$, where $f(\phi)=f(\phi+{2\pi})$. 
$$
\braket{ \hat{Q}f | f }=\int_{0}^{2\pi} (\hat{Q}f)^{*}f \, dx =\int_{0}^{2\pi} (D^{2}_{\phi} f^{*})f  \, d\phi  =\cancel{ D_{\phi} f^{*}f\bigg|_{0}^{2\pi} }-\int_{0}^{2\pi} |D_{\phi} f|^{2} \, d\phi 
$$
$$
\braket{ \hat{Q}f | f } =-\int_{0}^{2\pi} |D_{\phi} f|^{2} \, d\phi
$$
Now consider $\braket{ f | \hat{Q}f }$,
$$
\braket{ f | \hat{Q}f } =\int_{0}^{2\pi} f^{*}(\hat{Q}f) \, d\phi =\int_{0}^{2\pi} f^{*}D^{2}_{\phi}f \, d\phi=  \cancel{ f^{*}D_{\phi}f\bigg|_{0}^{2\pi} }-\int_{0}^{2\pi} |D_{\phi}f|^{2} \, d\phi
$$
$$
\braket{ f | \hat{Q}f } =-\int_{0}^{2\pi} |D_{\phi}f|^{2} \, d\phi
$$
Since $\braket{ f | \hat{Q}f }=\braket{ \hat{Q}f | f }$, $\hat{Q}=D^{2}_{\phi}$ is a hermitian operator.