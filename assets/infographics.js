(function () {
  'use strict';

  const carousels = document.querySelectorAll('[data-infographic-carousel]');

  carousels.forEach(function (carousel) {
    const total = Number(carousel.dataset.slideCount || 0);
    const pattern = carousel.dataset.slidePath || '';
    const title = carousel.dataset.title || 'Infographic';
    const isPortuguese = document.documentElement.lang.toLowerCase().startsWith('pt');
    const stage = carousel.querySelector('.carousel-stage');
    const image = carousel.querySelector('.carousel-slide');
    const slideButton = carousel.querySelector('.carousel-slide-button');
    const previous = carousel.querySelector('.carousel-prev');
    const next = carousel.querySelector('.carousel-next');
    const close = carousel.querySelector('.carousel-close');
    const counter = carousel.querySelector('.carousel-counter');
    const openButtons = carousel.querySelectorAll('[data-open-carousel]');
    let current = 0;
    let pointerStartX = null;

    function slidePath(index) {
      return pattern.replace('{NN}', String(index + 1).padStart(2, '0'));
    }

    function preload(index) {
      if (index < 0 || index >= total) return;
      const preloadImage = new Image();
      preloadImage.src = slidePath(index);
    }

    function render() {
      image.src = slidePath(current);
      image.alt = title + ' - slide ' + (current + 1) + (isPortuguese ? ' de ' : ' of ') + total;
      counter.textContent = (current + 1) + ' / ' + total;
      previous.hidden = current === 0;
      next.hidden = current === total - 1;
      previous.disabled = current === 0;
      next.disabled = current === total - 1;
      preload(current - 1);
      preload(current + 1);
    }

    function goTo(index) {
      if (index < 0 || index >= total || index === current) return;
      current = index;
      render();
    }

    function isExpanded() {
      return stage.classList.contains('is-expanded');
    }

    function openViewer() {
      if (isExpanded()) return;
      stage.classList.add('is-expanded');
      document.body.classList.add('carousel-expanded');
      window.requestAnimationFrame(function () {
        close.focus();
      });
    }

    function closeViewer() {
      stage.classList.remove('is-expanded');
      document.body.classList.remove('carousel-expanded');
      slideButton.focus();
    }

    previous.addEventListener('click', function (event) {
      event.stopPropagation();
      goTo(current - 1);
    });

    next.addEventListener('click', function (event) {
      event.stopPropagation();
      goTo(current + 1);
    });

    slideButton.addEventListener('click', openViewer);
    close.addEventListener('click', closeViewer);
    openButtons.forEach(function (button) {
      button.addEventListener('click', openViewer);
    });

    stage.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goTo(current - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goTo(current + 1);
      } else if (event.key === 'Home') {
        event.preventDefault();
        goTo(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        goTo(total - 1);
      } else if (event.key === 'Escape' && stage.classList.contains('is-expanded')) {
        closeViewer();
      }
    });

    stage.addEventListener('pointerdown', function (event) {
      pointerStartX = event.clientX;
    });

    stage.addEventListener('pointerup', function (event) {
      if (pointerStartX === null) return;
      const distance = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(distance) < 60) return;
      goTo(distance > 0 ? current - 1 : current + 1);
    });

    render();
  });
})();
