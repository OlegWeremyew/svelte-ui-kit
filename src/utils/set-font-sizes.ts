export function setFontSizes(...equalizeFontSizeSelectors: string[]): void {
  setTimeout(() => {
    const els = document.querySelectorAll(".divtext") as NodeListOf<HTMLElement>;

    let refFontSize = 100;
    els.forEach((element: HTMLElement): void => {
      element.removeAttribute("style");

      refFontSize = parseFloat(
        window
          .getComputedStyle(element, null)
          .getPropertyValue("font-size")
      );

      element.style.fontSize = `${refFontSize}px`;

      while (element.clientWidth > (element.parentNode as HTMLElement).clientWidth) {
        refFontSize--;
        element.style.fontSize = `${refFontSize}px`;

        if (refFontSize <= 4) break;
      }
    });

    if (equalizeFontSizeSelectors.length > 0) {
      equalizeFontSizeSelectors.forEach((selector: string): void => {
        const textElements = document
          .querySelectorAll(`${selector} .divtext`) as NodeListOf<HTMLElement>;

        equalizeFonts(textElements);
      });
    }
  }, 0);
}

/* equalize fonts for the same positions in banner */
function equalizeFonts(elements: NodeListOf<HTMLElement>): void {
  let minFontSize: number = parseFloat(
    window
      .getComputedStyle(elements[0], null)
      .getPropertyValue("font-size")
  );

  elements.forEach((element: HTMLElement): void => {
    const currentFontSize: number = parseFloat(
      window
        .getComputedStyle(element, null)
        .getPropertyValue("font-size")
    );

    if (minFontSize > currentFontSize) minFontSize = currentFontSize;
  });

  elements.forEach((element: HTMLElement): void => {
    element.style.fontSize = `${minFontSize}px`;
  });
}
