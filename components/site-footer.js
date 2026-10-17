(function () {
  var HTML = '<footer class="site-footer"><div class="footer-inner">' +
    '<div class="social" aria-label="Redes sociais">' +
    '<a href="https://www.instagram.com/atletica_nutricao" target="_blank" rel="noopener" aria-label="Instagram da atlética Devoradores">' +
    '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>' +
    '</a>' +
    '<a class="footer-mail" href="https://mail.google.com/mail/?view=cm&fs=1&to=atletica.demolidoress%40gmail.com" target="_blank" rel="noopener" aria-label="Escrever e-mail no Gmail para a atlética Devoradores">' +
    '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>' +
    '</a>' +
    '</div>' +
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
