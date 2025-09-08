(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const a="/interpolations-bezier-demo/";document.getElementById("nav-container").innerHTML=`
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
</nav>`;const d=document.getElementById("cubicrBezierCurve"),l=d.getContext("2d"),s=document.getElementById("bernsteinpolynomials"),i=s.getContext("2d");l.translate(0,s.height);l.scale(1,-1);i.translate(0,s.height);i.scale(1,-1);l.lineWidth=2;i.lineWidth=2;
