const regEx = /\d+/gm

function convertPrice(arrayPriceElements) {
  let convertPrice: any = '';
  if (
    arrayPriceElements.length > 1 &&
    arrayPriceElements[arrayPriceElements.length - 1].length <= 2
  ) {
    arrayPriceElements.forEach((el, index) => {
      if (index === arrayPriceElements.length - 1) {
        convertPrice = convertPrice.split();
        convertPrice.push(el);
        convertPrice = convertPrice.join('.');
      } else {
        convertPrice += el;
      }
    });
  } else if (arrayPriceElements.length > 1) {
    arrayPriceElements.forEach((el) => {
      convertPrice += el;
    });
  } else if (arrayPriceElements.length === 1) {
    arrayPriceElements.forEach((el) => {
      convertPrice = parseInt(el);
    });
  }
  return parseFloat(convertPrice);
}

export function calculateSale(weekPrice: string, yearPrice: string): number {
  const weekPriceFloat: number = convertPrice(weekPrice.match(regEx))
  const yearPriceFloat: number = convertPrice(yearPrice.match(regEx))
  const calculatedYearPrice: number = weekPriceFloat * 365 / 7

  return parseInt(`${100 - yearPriceFloat * 100 / calculatedYearPrice}`)
}
