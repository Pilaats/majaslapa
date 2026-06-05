const prefersFinePointer = !('ontouchstart' in window) && window.matchMedia('(pointer: fine)').matches;

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $all(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function scrollToElement(element, offset = 80) {
  if (!element) return;
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.pageYOffset - offset,
    behavior: 'smooth',
  });
}

function createRevealObserver(className = 'vis', threshold = 0.1, rootMargin) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(className);
        observer.unobserve(entry.target);
      });
    },
    { threshold, ...(rootMargin ? { rootMargin } : {}) }
  );
  return observer;
}
