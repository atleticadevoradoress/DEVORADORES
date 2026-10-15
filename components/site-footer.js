/* ============================================================
   RODAPÉ — usado em todas as páginas.
   Para usar:   <script src="components/site-footer.js"></script>   (no <head>)
                <site-footer></site-footer>                         (onde o rodapé deve aparecer)
   Para mudar o Instagram, o mascote ou o texto, edite só este arquivo.
   ============================================================ */
(function () {
  var HTML = '<footer class="site-footer"><div class="footer-inner">' +
    '<div class="social" aria-label="Redes sociais">' +
    '<a href="https://www.instagram.com/atleticadevoradores_votu" target="_blank" rel="noopener" aria-label="Instagram da atlética Devoradores">' +
    '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>' +
    '</a></div>' +
    '<div class="footer-brand"><img src="assets/crocodilo.png" alt="Mascote Devoradores" width="62" height="75"><p class="footer-title"><span>DEVORADORES |</span> <span>A.A.A.N.U.V</span></p></div>' +
    '</div></footer>';

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      var tpl = document.createElement('template');
      tpl.innerHTML = HTML;
      this.replaceWith(tpl.content);
    }
  }
  if (!customElements.get('site-footer')) customElements.define('site-footer', SiteFooter);
})();
