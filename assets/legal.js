/* Menú móvil · idéntico a la página principal */
(function(){
  var b=document.getElementById('burger'), d=document.getElementById('drawer');
  if(!b||!d) return;
  b.addEventListener('click',function(){
    var abierto=d.classList.toggle('abierto');
    b.setAttribute('aria-expanded',abierto?'true':'false');
  });
  d.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){ d.classList.remove('abierto'); b.setAttribute('aria-expanded','false'); });
  });
})();

/* Índice lateral de documentos legales · resalta la sección visible */
(function(){
  var enlaces = [].slice.call(document.querySelectorAll('.toc nav a'));
  var secciones = enlaces
    .map(function(a){ return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);
  if(!secciones.length || !('IntersectionObserver' in window)) return;

  function activar(id){
    enlaces.forEach(function(a){
      a.classList.toggle('activo', a.getAttribute('href') === '#' + id);
    });
  }

  var visibles = {};
  var o = new IntersectionObserver(function(entradas){
    entradas.forEach(function(e){ visibles[e.target.id] = e.isIntersecting; });
    // primera sección visible en orden del documento
    for (var i = 0; i < secciones.length; i++){
      if (visibles[secciones[i].id]) { activar(secciones[i].id); break; }
    }
  }, { rootMargin: '-80px 0px -65% 0px', threshold: 0 });

  secciones.forEach(function(s){ o.observe(s); });
})();
