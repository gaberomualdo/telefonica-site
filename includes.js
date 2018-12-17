function includeCode(code){
  switch (code) {
    case "nav":
      document.write(`
        <nav>
          <a class="logo" href="index.html" style="font-family: 'Charm'; font-style: oblique;">TelCentral</a>
          <ul>
            <a href="stocks.html">Telefonica Stock</a>
            <a href="news.html">Telefonica News</a>
          </ul>
        </nav>
      `);
      break;
    case "footer":
      document.write(`
        <footer>
          <p class="left">TelCentral is not associated with Telefonica in any way.</p>
          <p class="right">&copy; 2018</p>
        </footer>
      `);
      break;
    default:
      console.error("Code " + code + " not found.");
  }
}
