The potential associated with the finite square well is as follows
$$
V(x)=\begin{cases}
-V_{0},\ |x|<a \\
\ \ \ 0,\ |x|\geq a
\end{cases}
$$
#### *Bound State*
Consider the bound state condition $E<0$,
In the region $x\leq-a$, the [[Time Independent Schrödinger Equation]] is,
$$
\begin{gather}
-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi }{ \partial x^{2} }=E\psi \implies  \frac{ \partial ^{2} \psi  }{ \partial x^{2} }=\kappa^{2} \psi \\
\text{where }\kappa^{2}\equiv -\frac{2mE}{\hbar^{2}}  \\
\psi(x)=Ae^{ \kappa x }+Be^{ -\kappa x }\quad (x<-a)
\end{gather}
$$
For a physical solution, we get
$$
\psi(x)=Be^{ -\kappa x }\quad (x<-a)
$$
In the region $|x|<a$,
$$
\begin{gather}
-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi }{ \partial x^{2} } -V_{0}\psi =E\psi \implies \frac{ \partial ^{2} \psi }{ \partial x^{2} }=-k^{2}\psi \\
\text{where }k^{2}\equiv \frac{2m(E+V_{0})}{\hbar^{2}} \\
\psi(x)=C\sin (kx)+D\cos(kx)\quad (|x|<a)
\end{gather}
$$
In the region $x>a$,
$$
\begin{gather}
-\frac{\hbar^{2}}{2m}\frac{ \partial ^{2} \psi }{ \partial x^{2} } =E\psi \implies \frac{ \partial ^{2} \psi }{ \partial x^{2} }=\kappa^{2}\psi \\
\psi(x)=Fe^{ \kappa x }+Ee^{ -\kappa x }\quad (x>a)
\end{gather}
$$
For a physically admittable solution,
$$
\psi(x)=Fe^{ -\kappa x }\quad (x>a)
$$
Now, one must remember that for an even potential, the solutions to the Schrödinger Equation are either even or odd. Therefore,
$$
\begin{gather}
\psi(-x)=\pm \psi(x) \\
\implies B= F,\ C=0\ \text{if solution is even} \\
\implies B=-F,\ D=0\ \text{if solution is odd}
\end{gather}
$$
Consider the even solution, i.e. $B=F$ and $C=0$.
$$
\begin{gather}
\psi(x)=Be^{ \kappa x }\quad (x<-a) \\
\psi(x)=D\cos(kx)\quad (|x|<a) \\
\psi(x)=Be^{ -\kappa x }\quad (x>a)
\end{gather}
$$
Now, imposing the continuity of $\psi$ and $\frac{ d \psi }{ d x }$, we obtain the following:
$$
\begin{gather}
Be^{ -\kappa a }=D\cos(ka)\ \ (\text{from }\psi)\\
\kappa Be^{ -\kappa a }=Dk\sin(ka)\ \ \left( \text{from }\frac{ d \psi }{ d x }  \right)\\
\implies \kappa =k\tan(ka)
\end{gather}
$$
Now, from the definitions of $k$ and $\kappa$, we get that
$$
\begin{gather}
k^{2}+\kappa^{2}=\frac{2mV_{0}}{\hbar^{2}} \\
\implies ka\tan(ka)=\sqrt{ -k^{2}a^{2}+\frac{2mV_{0}a^{2}}{\hbar^{2}} }
\end{gather}
$$
Let $z\equiv ka$ and $z_{0}^2\equiv \frac{2mV_{0}a^{2}}{\hbar^{2}}$, then
$$
z\tan z=\sqrt{ z_{0}^{2}-z^{2} }
$$
Similarly, for the odd case i.e. $C=0$ and $B=-F$, we get 

$$
\begin{gather}
-z\cot z=\sqrt{ z_{0}^{2}-z^{2} }
\end{gather}
$$
This is a transcendental equation that cannot be solved analytically, so we solve it numerically or graphically.
```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5, >=stealth]

    % Define boundaries
    \def\xmax{5.5}
    \def\ymax{5}
    \def\R{4.2}

    % Grid and Axes
    \draw[very thin, gray!20] (0,0) grid (\xmax,\ymax);
    \draw[->, thick] (0,0) -- (\xmax+0.5,0) node[right] {$z$};
    \draw[->, thick] (0,0) -- (0,\ymax+0.5) node[above] {$\eta$};
    
    % Clip the curves so they don't bleed outside the grid
    \begin{scope}
        \clip (0,0) rectangle (\xmax,\ymax);

        % Draw the circle: z^2 + eta^2 = R^2
        \draw[blue, thick] (0,0) ++(90:\R) arc (90:0:\R);
        \node[blue, rotate=-45] at ({0.75*\R}, {0.75*\R}) [above] {$\sqrt{z_{0}^{2}-z^2}$};

        % Even Solutions: eta = z * tan(z)
        \draw[samples=200, domain=0:1.314797, smooth, variable=\x, red, thick] 
            plot ({\x}, {\x*tan(\x r)});
        \draw[samples=200, domain=3.142:4.035, smooth, variable=\x, red, thick] 
            plot ({\x}, {\x*tan(\x r)});

        % Odd Solutions: eta = -z * cot(z)
        \draw[samples=200, domain=1.5701:2.655, smooth, variable=\x, orange, thick] 
            plot ({\x}, {-\x/tan(\x r)});
        \draw[samples=200, domain=4.7125:5.4559, smooth, variable=\x, orange, thick] 
            plot ({\x}, {-\x/tan(\x r)});
% --- INTERSECTION POINTS --- 
% Point 1 (Even) 
\filldraw[black] (1.265, 4.005) circle (1.5pt) node[right, xshift=2pt, scale=0.6] {$$}; 
% Point 2 (Odd) 
\filldraw[black] (2.503, 3.373) circle (1.5pt) node[right, xshift=2pt, scale=0.6] {$$}; 
% Point 3 (Even) 
\filldraw[black] (3.656, 2.067) circle (1.5pt) node[right, xshift=2pt, scale=0.6] {$$};
        
    \end{scope}

    % Asymptotes (Labelled outside the clip)
    \draw[dashed, gray] ({pi/2}, 0) -- ({pi/2}, \ymax) node[below, pos=0, scale=0.8] {$\pi/2$};
    \draw[dashed, gray] ({pi}, 0) -- ({pi}, \ymax) node[below, pos=0, scale=0.8] {$\pi$};
    \draw[dashed, gray] ({3*pi/2}, 0) -- ({3*pi/2}, \ymax) node[below, pos=0, scale=0.8] {$3\pi/2$};

    % Legend placed to the right to avoid overlap
    \matrix [draw, fill=white, cells={anchor=west}, right] at (\xmax+0.2, \ymax/2) {
      \node [red, thick] {---}; & \node[scale=0.8] {Even: $z \tan z$}; \\
      \node [orange, thick] {---}; & \node[scale=0.8] {Odd: $-z \cot z$}; \\
      \node [blue, thick] {---}; & \node[scale=0.8] {$\sqrt{z_{0}^2 - z^2}$}; \\
    };

    \node[below left] at (0,0) {0};

\end{tikzpicture}
\end{document}
```
We see that the wave function has discrete energy levels, and the larger the value of $z_{0}$, the more states there are. One should also notice that for $z_{0}<\pi/2$, the odd state has no solutions, whereas the even state always has a solution.
#### **Scattering State**
Consider the scattering state solution $E>0$,
For $x\leq-a,\ V(x)=0$,
$$
\begin{gather}
\psi(x)=Ae^{ i\kappa x }+Be^{ -i\kappa x }\quad (x\leq -a) \\
\text{where }\kappa\equiv \frac{\sqrt{ 2mE }}{\hbar}
\end{gather}
$$
Inside the well, $|x|<a,\ V(x)=-V_{0}$,
$$
\begin{gather}
\psi(x)=C\sin(kx)+D\sin(kx)\quad (|x|<a) \\
\text{where }k\equiv \frac{\sqrt{ 2m(E+V_{0}) }}{\hbar}
\end{gather}
$$
For $x\geq a,\ V(x)=0$, and assuming there is no wave coming in from the right,
$$
\begin{gather}
\psi(x)=Fe^{ i\kappa x }\quad (x\geq a)
\end{gather}
$$
Now, applying the continuity of the wave function,
$$
\begin{gather}
Ae^{ -i\kappa a }+Be^{ i\kappa a }=-C\sin(ka)+D\cos(ka) \\
Fe^{ i\kappa a }=C\sin(ka)+D\cos(ka)
\end{gather}
$$
And the continuity of $\frac{ d \psi }{ d x }$,
$$
\begin{gather}
i\kappa[Ae^{ -i\kappa a  }-Be^{ i\kappa a } ]=k[C\cos(ka)+D\sin(ka)] \\
i\kappa Fe^{ i\kappa a }=k[C\cos(ka)-D\sin(ka)]
\end{gather}
$$

Solving the four equations, we get that
$$
\begin{gather}
F=\frac{e^{ -2i\kappa a }A}{\cos (2ka)-\frac{i(k^{2}+\kappa^{2})}{2k\kappa} \sin(2ka)}
\end{gather}
$$
Therefore, since $T=|F|^{2}/|A|^{2}$,we get
$$
\begin{gather}
\frac{1}{T}=1+\frac{V_{0}}{4E(E+V_{0})}\sin ^{2}\left( \frac{2a}{\hbar}\sqrt{ 2m(E+V_{0}) } \right)
\end{gather}
$$
and at $T=1$ occurs when $\sin$ argument is zero, then
$$
\begin{gather}
\frac{2a}{\hbar}\sqrt{ 2m(E+V_{0}) }=n\pi \\
\therefore E_{n}+V_{0}=\frac{n^{2}\pi^{2}\hbar^{2}}{4ma^{2}}
\end{gather}
$$
The left side expression is the same energy as that of an infinite square well of width $2a$.
```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5, >=stealth]

    % Coordinates for the axes
    \def\xmax{8}
    \def\ymax{3.5}
    \def\tval{3} % This represents T=1 on the y-axis for proper scaling

    % Draw axes with arrowheads
    \draw[->, thick] (-0.5,0) -- (\xmax,0) node[below] {$E$};
    \draw[->, thick] (0,-0.5) -- (0,\ymax) node[left] {$T$};
    
    % Draw the origin label
    \node[below left] at (0,0) {0};

    % Draw the T=1 dashed line
    \draw[dashed, gray] (0,\tval) -- (\xmax-0.5,\tval);
    
    % Draw the y-axis tick mark and label '1'
    \draw (2pt, \tval) -- (-2pt, \tval) node[left] {1};

    % Draw the transmission coefficient function.
    % The form [1 + C/(E^2) * sin^2(k*sqrt(E))]^(-1) creates multiple
    % damped oscillations that start from 0 and approach T=1.
    % 'deg()' is needed to use degrees inside pgfmath.
    % We start the plot at a very small non-zero value to avoid numerical issues at E=0.
    \draw[thick, samples=400, domain=0.02:7.5, smooth, variable=\x] 
        plot (\x, { 
            \tval / (1 + 1.5/(\x^2) * (sin(deg(1.8*3.14159*sqrt(\x)))^2)) 
        });

\end{tikzpicture}
\end{document}
```

Links: [[Time Independent Schrödinger Equation]], [[Infinite Square Well]] 
Tags: #QM #SchEq #TISE 
Date created: Tue/28/Apr/2026