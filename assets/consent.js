/* ============================================================
   CONSENTIMIENTO DE COOKIES  ·  Factura IA de Grupo Consiti

   Objetivo: consentimiento PREVIO. El Meta Pixel y Google Analytics
   NO se cargan al entrar; solo se cargan si la persona ACEPTA. Con eso
   el sitio deja de instalar cookies de rastreo sin permiso (aviso de
   privacidad, §5).

   Cada pagina define, antes de incluir este archivo:
     window.CONSENT_CFG = { pixelId: "...", ga4Id: "" };
   - pixelId vacio  -> no carga Pixel
   - ga4Id vacio    -> no carga GA4
   El token de CAPI sigue viviendo solo en variables de entorno de Vercel,
   y api/capi.js solo debe recibir eventos cuando hay consentimiento
   (el cliente ya no llama a /api/capi si window.__consentGranted es falso).

   Estado guardado en localStorage("consent_dte_v1"): "granted" | "denied".
   window.__consentGranted queda en true/false para que el resto del codigo
   (Lead, ViewContent, CAPI) sepa si puede disparar.
   Reabrir el panel: window.openCookiePrefs().
   ============================================================ */
(function () {
  var KEY = "consent_dte_v1";
  var CFG = window.CONSENT_CFG || {};
  window.__consentGranted = false;

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  var loaded = false;
  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    window.__consentGranted = true;
    /* Meta Pixel */
    if (CFG.pixelId) {
      !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
        t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
      }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
      window.fbq("init", CFG.pixelId);
      window.fbq("track", "PageView");
    }
    /* Google Analytics 4 */
    if (CFG.ga4Id) {
      var g = document.createElement("script");
      g.async = true;
      g.src = "https://www.googletagmanager.com/gtag/js?id=" + CFG.ga4Id;
      document.head.appendChild(g);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", CFG.ga4Id);
    }
  }

  var el = null;
  function remove() { if (el && el.parentNode) { el.parentNode.removeChild(el); } el = null; }

  function injectStyles() {
    if (document.getElementById("ck-st")) return;
    var s = document.createElement("style");
    s.id = "ck-st";
    s.textContent =
      ".ck-banner{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;" +
      "background:#fff;border:1px solid rgba(20,10,46,.14);border-radius:14px;" +
      "box-shadow:0 16px 44px rgba(20,10,46,.22);animation:ckup .25s ease both}" +
      "@keyframes ckup{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}" +
      ".ck-in{display:flex;flex-wrap:wrap;align-items:center;gap:14px 22px;padding:16px 20px;max-width:1180px;margin:0 auto}" +
      ".ck-tx{margin:0;flex:1 1 340px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Instrument Sans',system-ui,sans-serif;" +
      "font-size:.9rem;line-height:1.5;color:#140A2E}" +
      ".ck-tx a{color:#5216E7;font-weight:600;text-decoration:underline}" +
      ".ck-bt{display:flex;gap:10px;flex:none}" +
      ".ck-b{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;font-weight:700;font-size:.88rem;" +
      "padding:11px 22px;border-radius:999px;cursor:pointer;border:1.5px solid transparent;min-height:44px;transition:background .15s,border-color .15s,color .15s}" +
      ".ck-yes{background:#5216E7;color:#fff}.ck-yes:hover{background:#4712C7}" +
      ".ck-no{background:transparent;color:#140A2E;border-color:rgba(20,10,46,.22)}" +
      ".ck-no:hover{border-color:#5216E7;color:#5216E7}" +
      ".ck-b:focus-visible{outline:3px solid #8B62FF;outline-offset:2px}" +
      "@media(max-width:560px){.ck-bt{width:100%}.ck-b{flex:1}}" +
      "@media(prefers-reduced-motion:reduce){.ck-banner{animation:none}}";
    document.head.appendChild(s);
  }

  function show() {
    injectStyles();
    el = document.createElement("div");
    el.className = "ck-banner";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-label", "Aviso de cookies");
    el.innerHTML =
      '<div class="ck-in">' +
      '<p class="ck-tx">Usamos cookies propias y de terceros para medir el uso del sitio y mejorar su experiencia. ' +
      'Puede aceptarlas o rechazarlas; si las rechaza, no se activa ninguna cookie de medición. ' +
      '<a href="/terminos#cookies">Más información</a>.</p>' +
      '<div class="ck-bt">' +
      '<button type="button" class="ck-b ck-no">Rechazar</button>' +
      '<button type="button" class="ck-b ck-yes">Aceptar</button>' +
      '</div></div>';
    document.body.appendChild(el);
    el.querySelector(".ck-yes").addEventListener("click", function () { set("granted"); loadAnalytics(); remove(); });
    el.querySelector(".ck-no").addEventListener("click", function () { set("denied"); window.__consentGranted = false; remove(); });
  }

  /* Reabrir preferencias (para un enlace "Preferencias de cookies") */
  window.openCookiePrefs = function () { remove(); show(); };

  function start() {
    var choice = get();
    if (choice === "granted") { loadAnalytics(); }
    else if (choice === "denied") { /* no se carga nada */ }
    else { show(); }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
