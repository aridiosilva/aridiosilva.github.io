(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const root = document.documentElement;
  const syncHeaderHeight = () => {
    const height = Math.ceil(header.getBoundingClientRect().height);
    root.style.setProperty('--site-header-height', `${height}px`);
  };

  syncHeaderHeight();
  window.addEventListener('load', syncHeaderHeight, { once: true });

  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);
  }
})();
