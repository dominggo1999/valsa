import { themes } from './themes.json';

const createStyle = () => {
  let styles = '';

  themes.forEach((i) => {
    const {
      primary,
      accent,
      accentHover,
    } = i.colors;

    const attributes = `
    --primary : ${primary};
    --accent : ${accent};
    --accent-hover : ${accentHover};
    `;

    styles += `
      .${i.name} {
        ${attributes}
      }
    `;
  });

  return styles;
};

export default createStyle;
