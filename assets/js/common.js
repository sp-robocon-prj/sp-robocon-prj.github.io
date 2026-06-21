window.onload = () => {
  document.head.innerHTML += `<meta name="viewport" content="width=device-width, initial-scale=1">`;
  document.body.innerHTML = `
  <header>
    <div>
      <a href="/" id="header-icon"></a>
      <div id="header-buttons">
        <a href="/">ホーム</a>
        <a href="/about.html">活動内容</a>
        <a href="/robot.html">ロボットたち</a>
        <a href="/news.html">お知らせ</a>
        <a href="/contact.html">お問い合わせ</a>
      </div>
    </div>
  </header>
  ${document.body.innerHTML}
  <footer>
    <div class="footerColumn">
      <p><a href="/about.html">私たちについて</a></p>
    </div>
    <div class="footerColumn">
      <p><a href="/agreement.html">プライバシーポリシーと利用規約</a></p>
      <div class="year-s">
        <p>&copy; &#160;<div>2026</div><div id="year"></div></p>
      </div>
      <p>thinking All rights reserved.</p>
    </div>
  </footer>
  `;
  date = new Date();
  year = date.getFullYear();
  document.getElementById("year").innerHTML = "-" + year;

  if (year === 2026) {
    document.getElementById("year").innerHTML = "";
  }

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let header = document.getElementsByTagName('header')[0];
    if (header) {
      if (scrollTop > 100) {
        header.style.height = '40px';
      } else {
        header.style.height = '60px';
      }
    }
  });

  if (typeof initCursor !== 'undefined') {
    initCursor();
  }
}