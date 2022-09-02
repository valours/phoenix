import {
  chunkBy,
  Color,
  convertColorToRgb,
  convertLetterToComponent,
  convertTextOnComponent,
  wrapComponentsToColors,
} from "./color";

describe("color", () => {
  describe("convertLetterToColor", () => {
    it("convert A To 0", () => {
      // given
      const letter = "A";

      // when
      const result = convertLetterToComponent(letter); // O/255

      // then
      expect(result).toEqual(0);
    });

    it("convert B To 5", () => {
      // given
      const letter = "B";

      // when
      const result = convertLetterToComponent(letter); // O/255

      // then
      expect(result).toEqual(5);
    });

    it("convert C To 10", () => {
      // given
      const letter = "C";

      // when
      const result = convertLetterToComponent(letter); // O/255

      // then
      expect(result).toEqual(10);
    });

    it("convert a To 130", () => {
      // given
      const letter = "a";

      // when
      const result = convertLetterToComponent(letter); // O/255

      // then
      expect(result).toEqual(130);
    });

    it("convert z to 255", () => {
      // given
      const letter = "z";

      // when
      const result = convertLetterToComponent(letter); // O/255

      // then
      expect(result).toEqual(255);
    });
  });

  describe("convert text on color", () => {
    it("convert 'AA' to [0,0]", () => {
      // given
      const text = "AA";

      // when
      const result = convertTextOnComponent(text);

      // then
      expect(result).toEqual([0, 0]);
    });

    it("convert 'AAA' to [0,0,0]", () => {
      // given
      const text = "AAA";

      // when
      const result = convertTextOnComponent(text);

      // then
      expect(result).toEqual([0, 0, 0]);
    });

    it("convert 'AAAA' to [0,0,0]", () => {
      // given
      const text = "AAAA";

      // when
      const result = convertTextOnComponent(text);

      // then
      expect(result).toEqual([0, 0, 0, 0]);
    });

    it("convert 'zAA' to [0,0,0]", () => {
      // given
      const text = "zAA";

      // when
      const result = convertTextOnComponent(text);

      // then
      expect(result).toEqual([255, 0, 0]);
    });
  });

  describe("wrapComponentToColor", () => {
    it("'zAAzAA' should return a Color", () => {
      // given
      const text = "zAAzAA";
      const components = convertTextOnComponent(text);

      // when
      const result = wrapComponentsToColors(components);

      // then
      expect(result).toEqual([
        [255, 0, 0],
        [255, 0, 0],
      ]);
    });

    it("'zAAzAAzAA' should return a Color", () => {
      // given
      const text = "zAAzAA";
      const components = convertTextOnComponent(text);

      // when
      const result = wrapComponentsToColors(components);

      // then
      expect(result).toEqual([
        [255, 0, 0],
        [255, 0, 0],
      ]);
    });
  });

  describe("convertColorToRGB", () => {
    it("should return a Color", () => {
      // given
      const color: Color = [255, 0, 0];

      // when
      const result = convertColorToRgb(color);

      // then
      expect(result).toEqual("rgb(255,0,0,0.8)");
    });
  });

  describe("chunkBy", () => {
    it("chunk an array by 3", () => {
      // given
      const array = ["a", "a", "a", "b", "b", "b"];

      // when
      const result = chunkBy(3)(array);

      // then
      expect(result).toEqual([
        ["a", "a", "a"],
        ["b", "b", "b"],
      ]);
    });

    it("chunk an array by 4", () => {
      // given
      const array = ["a", "a", "a", "a", "b", "b", "b", "b"];

      // when
      const result = chunkBy(4)(array);

      // then
      expect(result).toEqual([
        ["a", "a", "a", "a"],
        ["b", "b", "b", "b"],
      ]);
    });
  });

  // describe("convertColorsToGradient", () => {
  //   it("bonjour", () => {
  //     // given
  //     const text = "te faire rougir";
  //     const components = convertTextOnComponent(text);
  //     const colors = wrapComponentsToColors(components);

  //     // when
  //     const result = convertColorsToGradient(colors);

  //     // then
  //     expect(result).toBeFalsy();
  //   });
  // });
});
