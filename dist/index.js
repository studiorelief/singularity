"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/tricks.ts
  function buttonActive() {
    const handleClick = (elements, targetClass) => {
      elements.forEach((element) => {
        element.addEventListener("click", () => {
          document.querySelectorAll(`.${targetClass}`).forEach((bg) => {
            bg.classList.remove("is-active");
          });
          const backgroundButton = element.querySelector(`.${targetClass}`);
          if (backgroundButton) {
            backgroundButton.classList.add("is-active");
          }
        });
      });
    };
    handleClick(document.querySelectorAll(".hero_number"), "hero_number-background");
    handleClick(document.querySelectorAll(".hero-canvas_c-button"), "hero_number-background");
  }

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    buttonActive();
  });
})();
//# sourceMappingURL=index.js.map
