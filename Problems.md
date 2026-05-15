$$
\begin{gather*}

\hat{Q} = \partial_{\phi}^{2} \\

f\left(\phi + 2\pi\right) = f\left(\phi\right) \\

\braket{\hat{Q}f|f} = \int_{0}^{2\pi} \left(\partial_{\phi}^{2}f\right)^{*}f d\phi = \int_{0}^{2\pi} \left(\partial_{\phi}^{2}f^{*}\right)f d\phi \\

= \left|\left[f\partial_{\phi}f^{*} - f^{*}\partial_{\phi}f\right]\right|_{0}^{2\pi} - \int_{0}^{2\pi} \left|\partial_{\phi}f\right|^{2} d\phi \\

\braket{\hat{Q}f|f} = -\int_{0}^{2\pi} \left|\partial_{\phi}f\right|^{2} d\phi \\

\braket{\f|\hat{Q}f} = \int_{0}^{2\pi} f^{*}\partial_{\phi}^{2}f d\phi = -\int_{0}^{2\pi} \left|\partial_{\phi}f\right|^{2} d\phi \\

\implies \braket{f|\hat{Q}f} = \braket{\hat{Q}f|f} = -\int_{0}^{2\pi} \left|\partial_{\phi}f\right|^{2} d\phi \\

\implies \hat{Q} = \partial_{\phi}^{2} \text{ is a hermitian operator}

\end{gather*}
$$