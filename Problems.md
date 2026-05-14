The set of all square integrable functions on $(a,b)$ is an $L^{2}(a,b)$ space or a Hilbert space $\mathcal{H}(a,b)$.\\
Let $f,g\in \mathcal{H}(a,b)$. Then, consider their sum $f+g$. Consider its square integral on $({a,b})$.
$$
\int_{a}^{b} |f+g|^{2} \, dx=\int_{a}^{b} (f^{*}+g^{*})(f+g) \, dx
$$
$$
=\int_{a}^{b} |f|^{2}+|g|^{2}+f^{*}g+g^{*}f \, dx=\int_{a}^{b}|f|^{2}  \, dx+\int_{a}^{b} |g|^{2} \, dx +\int_{a}^{b} f^{*}g \, dx +\int_{a}^{b} g^{*}f \, dx
$$
Since $f,g\in \mathcal{H}(a,b)$, the first two integrals converge by definition. Now by the Cauchy--Schwarz ineqaulity,
$$
\left|\int_{a}^{b} f^{*}g \, dx \right|\leq \sqrt{ \int_{a}^{b} |f|^{2} \, dx \int_{a}^{b} |g|^{2} \, dx  }
$$
And the same applies to $\int_{a}^{b} g^{*}f \, dx$, and they both converge. Therefore, if $f,g\in \mathcal{H}(a,b)$, then $f+g\in \mathcal{H}(a,b)$.\\\\
Consider the square integral of $\alpha f$ where $\alpha$ is an arbitrary complex number.
$$
\int_{a}^{b} |\alpha f|^{2} \, dx =|\alpha|^{2}\int_{a}^{b} |f|^{2} \, dx
$$
The integral converges. Therefore, 