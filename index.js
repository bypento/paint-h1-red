export function makeH1Red() {
  // Ensure code is running in a browser environment
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const headings = document.querySelectorAll('h1');
    headings.forEach(h1 => {
      h1.style.color = 'red';
    });
  } else {
    console.warn('paint-h1-red: This package only works in a browser environment.');
  }
}
