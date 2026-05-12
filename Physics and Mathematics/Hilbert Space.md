Any wave function that is a solution of the [[Schrödinger Equation]] can be a vector in a vector space. An inner product on this space can also be defined as follows,
$$
\braket{ f | g } =\int_{-\infty}^{+\infty} f^{*}g \, dx
$$
where $f$ and $g$ belong to this vector space. However, this inner product may not always converge. Then, we must consider an subset of the functions that do converge, here they must be square integrable. Therfore the functions all functions $f(x)$ such that 
$$
\int_{-\infty}^{+\infty} |f(x)|^{2} \, dx <\infty
$$
constitute an $L^{2}$ space or a Hilbert space $\mathcal{H}$. Wave functions live on this Hilbert space, and their inner product is defined to be
$$
\braket{ f | g } \equiv \int_{-\infty}^{+\infty} f(x)^{*}g(x) \, dx
$$
where $f,g \in \mathcal{H}$. The inner product also follows the Cauchy-Schwarz inequality.
$$
|\braket{ f | g }|\leq\ \sqrt{ \braket{ f | f } \braket{ g | g }  }
$$
And also has the property,
$$
\braket{ f | g } =\braket{ g | f } ^{*}
$$
Note that the Hilbert Space $\mathcal{H}$ is infinite dimensional, and hence normal rules that work on a finite dimensional space may not work here, so caution is advised.

Links: [[Wave Function]] 
Tags: #QM #Fundamental #Math 
Date created: Tue/05/May/2026