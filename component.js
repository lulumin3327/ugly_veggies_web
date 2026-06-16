/* components.js — Injects shared nav + footer */

const NAV_HTML = `
<nav class="nav" role="navigation" aria-label="主選單">
  <div class="nav__inner">

    <a href="index.html" class="nav__logo" aria-label="回到首頁">
     <img class="nav__logo-img" src="assets/logo.svg" alt="Ugly Veggie">
    </a>

    <!-- Desktop Links -->
    <ul class="nav__links" role="list">
      <li><a href="index.html"    class="nav__link">首頁</a></li>
      <li><a href="magazine.html" class="nav__link">雜誌</a></li>
      <li><a href="calendar.html" class="nav__link">桌曆</a></li>
      <li><a href="about.html"    class="nav__link">關於我們</a></li>
      <li><a href="contact.html"  class="nav__link nav__cta">購買 / 聯絡</a></li>
    </ul>

    <!-- Hamburger -->
    <button class="nav__hamburger" aria-label="開啟選單" aria-expanded="false" aria-controls="mobile-menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  <!-- Mobile Drawer -->
  <div class="nav__mobile" id="mobile-menu" role="menu">
    <a href="index.html"    class="nav__mobile-link">首頁</a>
    <a href="magazine.html" class="nav__mobile-link">雜誌</a>
    <a href="calendar.html" class="nav__mobile-link">桌曆</a>
    <a href="about.html"    class="nav__mobile-link">關於我們</a>
    <a href="contact.html"  class="nav__mobile-link nav__mobile-cta">購買 / 聯絡</a>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__inner">
      <div class="footer__brand">
        <div class="footer__logo">醜蔬果誌</div>
        <p class="footer__tagline">
          每一顆歪瓜裂棗，都有屬於自己的故事。<br>
          我們替被忽視的蔬果說話。
        </p>
      </div>
      <div>
        <p class="footer__heading">內容</p>
        <ul class="footer__links">
          <li><a href="magazine.html" class="footer__link">雜誌系列</a></li>
          <li><a href="calendar.html" class="footer__link">桌曆系列</a></li>
        </ul>
      </div>
      <div>
        <p class="footer__heading">關於</p>
        <ul class="footer__links">
          <li><a href="about.html"   class="footer__link">品牌故事</a></li>
          <li><a href="contact.html" class="footer__link">聯絡我們</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 醜蔬果誌. All rights reserved.</span>
      <span>Made with ♥ for imperfect vegetables</span>
    </div>
  </div>
</footer>
`;

function injectSharedComponents() {
  // Nav
  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.outerHTML = NAV_HTML;

  // Footer
  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;
}

injectSharedComponents();
