import"./style-CTfVKPeI.js";const a="/interpolations-bezier-demo/";document.getElementById("nav-container").innerHTML=`
<nav class="navbar navbar-expand-xl navbar-light bg-light">
<a class="navbar-brand" href="#">CG3</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
    <li class="nav-item ">
        <a class="nav-link selected" href="${a}interpolateByPolynomial.html">Interpolationspolynom<span
            class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="${a}rungeFunction.html">Runge Funktion</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="${a}hermiteInterpolation.html">Hermite-Interpolation</a>
    </li>
    <li class="nav-item active">
        <a class="nav-link" href="${a}index.html">2D-Bézier-Kurve & De Castlejau</a>
    </li>
</ul>
</div>
</nav>`;const l=document.getElementById("cubicrBezierCurve"),n=l.getContext("2d"),e=document.getElementById("bernsteinpolynomials"),t=e.getContext("2d");n.translate(0,e.height);n.scale(1,-1);t.translate(0,e.height);t.scale(1,-1);n.lineWidth=2;t.lineWidth=2;
