import React, { useState } from "react";
import styled from "styled-components";
import {
  Color,
  convertTextOnComponent,
  convertColorsToGradient,
  wrapComponentsToColors,
  chunkBy,
} from "./color";

const words = [
  "Ferme ta gueule",
  "Je t'adore",
  "Il n'en existe qu'un seul ? Comment tu te retrouves avec plusieurs œufs ?",
  "Des œufs de dragons alors",
  "Ce coup ci ta curiosité t'amène à calculer le coup.",
  "Tu vas finir par t'essoufler",
  // "moi",
  // "toi",
  // "Moi",
  // "Toi",
  // "ToiMoi",
  // "MoiToi",
  // "MoiEtToi",
  // "malachite",
  // "valentin",
  // "cielfie",
  // "marmouze",
  // "marine",
  // "te faire rougir",
  // "te fai",
  // "je suis une personne plutot gentil dans le fond, est ce que tu me crois",
];

const App = () => {
  const [word, setWord] = useState("Je veux te faire rougir");

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value;
    if (word.length > 3) {
      setWord(word);
    }
  };

  return (
    <AppStyled className="App">
      {/* <ColorBloc colors={wrapComponentsToColors(convertTextOnComponent(word))}>
        ""
      </ColorBloc> */}

      <input type="text" value={word} onChange={handlerInput} />
      {/* {generateLine(word)} */}

      {words.map((w, index) => generateLine(w, index))}
    </AppStyled>
  );
};

const AppStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const generateLine = (text: string, indexDelta: number) =>
  chunkBy(3)(wrapComponentsToColors(convertTextOnComponent(text))).map(
    (colors, index) => (
      <ColorBloc delta={indexDelta} index={index} colors={colors}>
        {index}
      </ColorBloc>
    )
  );

const ColorBloc = styled.div<{ colors: Color[]; index: number; delta: number }>`
  position: absolute;
  height: 200px;
  width: 200px;
  top: 20px;

  border-radius: ${({ delta, index }) => (index + 4) * (delta + 7)}px;
  left: ${({ delta }) => delta * 80}px;

  top: ${({ index }) => index * 80}px;
  /* left: ${({ index }) => index * 40}px; */

  margin: 8px;
  line-height: 100px;
  text-align: center;

  background: ${({ colors }) => convertColorsToGradient(colors)};
`;
export default App;
