Given that
$$
f(x)=\begin{cases}
\ 1\ ,\ 0\leq x\leq 1 \\
\ 2\ ,\ 1<x\leq 2
\end{cases}
$$
Show that $f(x)\in \mathcal{R}[0,2]$ and  $\int_{0}^{2} f(x) \, dx=3$
#### Proof
Let us define a tagged partition $\dot{\mathcal{P}}$ on $[0,2]$
$$
\dot{\mathcal{P}}=\{([x_{i-1},x_{i}],t_{i})\}_{i=1}^{n}
$$
Assume that for some $\delta>0$, $||\dot{\mathcal{P}}||<\delta$. The Riemann sum of $f$ on $\dot{\mathcal{P}}$ is,
$$
S(f;\dot{\mathcal{P}})=\sum_{i=1}^{n}f(t_{i})(x_{i}-x_{i-1})
$$
##### Case I
If for some integer $0<j<n$, $x_{j}=1$, then
$$
\begin{gather}
S(f;\dot{\mathcal{P}})=\sum_{i=1}^{j}f(t_{i})(x_{i}-x_{i-1})+f(t_{j+1})(x_{j+1}-x_{j})+\sum_{i=j+2}^{n} f(t_{i})(x_{i}-x_{i-1})\\ 
S(f;\dot{\mathcal{P}})=\sum_{i=1}^{j}(x_{i}-x_{i-1})+f(t_{j+1})(x_{j+1}-x_{j})+2\sum_{i=j+2}^{n}(x_{i}-x_{i-1}) \\
S(f;\dot{\mathcal{P}})=x_{j}-x_{0}+f(t_{j+1})(x_{j+1}-x_{j})+2(x_{n}-x_{j+1}) \\
S(f;\dot{\mathcal{P}})=x_{j}+f(t_{j+1})(x_{j+1}-x_{j})+4-2x_{j+1}\ \ (\because x_{0}=0,\ x_{n}=2) \\
S(f;\dot{\mathcal{P}})=3+(f(t_{j+1})-2)(x_{j+1}-x_{j})\ \ (\because x_{j}=1)
\end{gather}
$$
Earlier, we stated that $||\dot{\mathcal{P}}||<\delta \implies x_{j+1}-x_{j}<\delta$ 
$$
\begin{gather}
3-\delta<S(f;\dot{\mathcal{P}})<3+\delta \\
|S(f;\dot{\mathcal{P}})-3|<\delta
\end{gather}
$$
Therefore, $f(x)$ is Riemann integrable in $[0,2]$ and $\int_{0}^{2} f(x) \, dx=3$.              $\square$ 




