(function () {
  async function loadFooter() {
    var footerContainer = document.getElementById('footer');

    if (!footerContainer) {
      return;
    }

    var footerPaths = ['footer.html', '../footer.html', '/footer.html'];

    for (var i = 0; i < footerPaths.length; i++) {
      try {
        var response = await fetch(footerPaths[i], { cache: 'no-cache' });
        if (response.ok) {
          var html = await response.text();
          footerContainer.innerHTML = html;
          return;
        }
      } catch (error) {
        // Try the next path.
      }
    }

    console.error('Footer could not be loaded from footer.html.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
  } else {
    loadFooter();
  }
})();
