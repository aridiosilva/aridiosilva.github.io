(function () {
  const root = document.documentElement;
  const body = document.body;
  const content = document.querySelector('.article-body');
  const decrease = document.getElementById('articleFontDecrease');
  const increase = document.getElementById('articleFontIncrease');
  const easyRead = document.getElementById('articleEasyRead');
  const listen = document.getElementById('articleListen');
  const isPortuguese = root.lang.toLowerCase().startsWith('pt');
  const labels = isPortuguese
    ? { listen: '🔊 Ouvir', stop: '⏹ Parar', speechLanguage: 'pt-BR' }
    : { listen: '🔊 Listen', stop: '⏹ Stop', speechLanguage: 'en-US' };

  let scale = 1;
  let speaking = false;

  try {
    scale = parseFloat(localStorage.getItem('article-scale')) || 1;
    body.setAttribute('data-easy-read', localStorage.getItem('article-easy') === 'true' ? 'true' : 'false');
  } catch (error) {
    // Storage is optional; the controls continue to work for the current page.
  }

  function apply() {
    root.style.fontSize = `${16 * scale}px`;
    listen.textContent = speaking ? labels.stop : labels.listen;
    listen.setAttribute('aria-pressed', speaking ? 'true' : 'false');
    easyRead.setAttribute('aria-pressed', body.getAttribute('data-easy-read') === 'true' ? 'true' : 'false');
    try {
      localStorage.setItem('article-scale', scale);
      localStorage.setItem('article-easy', body.getAttribute('data-easy-read'));
    } catch (error) {
      // Storage is optional; the controls continue to work for the current page.
    }
  }

  function stop() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    speaking = false;
    apply();
  }

  decrease.addEventListener('click', function () {
    scale = Math.max(.9, scale - .08);
    apply();
  });
  increase.addEventListener('click', function () {
    scale = Math.min(1.4, scale + .08);
    apply();
  });
  easyRead.addEventListener('click', function () {
    body.setAttribute('data-easy-read', body.getAttribute('data-easy-read') === 'true' ? 'false' : 'true');
    apply();
  });
  listen.addEventListener('click', function () {
    if (!window.speechSynthesis || !content) return;
    if (speaking) {
      stop();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(content.innerText);
    utterance.lang = labels.speechLanguage;
    utterance.onend = stop;
    utterance.onerror = stop;
    speaking = true;
    apply();
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  });

  apply();
}());
