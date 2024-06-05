/* export function buttonActive() {
  const handleClick = (elements: NodeListOf<Element>, targetClass: string) => {
    elements.forEach((element) => {
      element.addEventListener('click', () => {
        document.querySelectorAll(`.${targetClass}`).forEach((bg) => {
          bg.classList.remove('is-active');
        });
        const backgroundButton = element.querySelector(`.${targetClass}`);
        if (backgroundButton) {
          backgroundButton.classList.add('is-active');
        }
      });
    });
  };

  handleClick(document.querySelectorAll('.hero_number'), 'hero_number-background');
  handleClick(document.querySelectorAll('.hero-canvas_c-button'), 'hero_number-background');
}
 */

export function buttonActive() {
  const handleClick = (elements: NodeListOf<Element>) => {
    elements.forEach((element) => {
      element.addEventListener('click', () => {
        elements.forEach((el) => el.classList.remove('is-active'));
        element.classList.add('is-active');
      });
    });
  };

  handleClick(document.querySelectorAll('.hero_number'));
}

export function controlsActive() {
  const handleClick = (elements: NodeListOf<Element>) => {
    elements.forEach((element) => {
      element.addEventListener('click', () => {
        elements.forEach((el) => el.classList.remove('is-active'));
        element.classList.add('is-active');
      });
    });
  };

  handleClick(document.querySelectorAll('.hero-canvas_c-button'));
}
