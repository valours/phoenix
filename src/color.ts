export type ColorComponent = number; // 0/255;
export type Color = [ColorComponent, ColorComponent, ColorComponent];

export const convertLetterToComponent = (letter: string): ColorComponent => {
  if (letter.length > 1) {
    throw Error("sorry, you just pass one letter");
  }
  const codeAscii = letter.charCodeAt(0);
  let colorElement = 0;

  if (codeAscii >= 65 && codeAscii <= 90) {
    colorElement = (codeAscii - 65) * 5;
  }
  if (codeAscii >= 97 && codeAscii <= 122) {
    colorElement = (codeAscii - 97 + 26) * 5;
  }
  return colorElement;
};

export const convertTextOnComponent = (text: string): ColorComponent[] =>
  text.split("").map(convertLetterToComponent);

export const chunkBy =
  (chunkSize: number) =>
  <Element>(elements: Element[]): Array<Array<Element>> => {
    const elementsByChunck = [];
    for (let i = 0; i < elements.length; i += chunkSize) {
      let chunk = elements.slice(i, i + chunkSize);
      if (chunk.length === chunkSize) {
        elementsByChunck.push(chunk);
        // const lastColor = colors[colors.length - 1];
        // const lastComponents = lastColor.slice(
        //   chunk.length - 3
        // ) as ColorComponent[];
        // chunk = [...lastComponents, ...chunk];
      }
    }
    return elementsByChunck;
  };

export const wrapComponentsToColors = (components: ColorComponent[]): Color[] =>
  chunkBy(3)(components) as Color[];

export const convertColorToRgb = ([red, green, blue]: Color): string =>
  `rgb(${red},${green},${blue},0.8)`;

export const convertColorsToGradient = (colors: Color[]): string => {
  if (colors[1] === undefined || colors[1][0] === undefined) {
    return convertColorToRgb(colors[0]);
  }

  const rbgs = colors.map(convertColorToRgb);
  return `linear-gradient(90deg,${rbgs.join(",")})`;
};
