const base = import.meta.env.BASE_URL;
document.getElementById("nav-container").innerHTML = `
<nav class="navbar navbar-expand-xl navbar-light bg-light">
<a class="navbar-brand" href="#">CG3</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
    <li class="nav-item ">
        <a class="nav-link selected" href="${base}interpolateByPolynomial.html">Interpolationspolynom<span
            class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="${base}rungeFunction.html">Runge Funktion</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="${base}hermiteInterpolation.html">Hermite-Interpolation</a>
    </li>
    <li class="nav-item active">
        <a class="nav-link" href="${base}index.html">2D-Bézier-Kurve & De Castlejau</a>
    </li>
</ul>
</div>
</nav>`