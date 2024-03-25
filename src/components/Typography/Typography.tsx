import "./Typography.styles.scss";
// 12 14 16 18 32 40

type familyFont = "lato" | "space";
type size = 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 40;
type weight = "normal" | "semi-bold" | "bold" | "black";
type letterSpacing = -6 | -4 | -2 | -1 | 1 | 2 | 4 | 6 | 8;
type lineHeight = 16 | 20 | 24 | 28 | 32 | 40 | 48;
type color = "white" | "primary-black" | "primary-dark-blue" | "violet";
type align = "start" | "end" | "center";

interface Typography {
  children: string | JSX.Element;
  fontFamily?: familyFont;
  size?: size;
  weight?: weight;
  letterSpacing?: letterSpacing;
  lineHeight?: lineHeight;
  color?: color;
  align?: align;
  underlined?: boolean;
}

export const Typography = ({
  children,
  fontFamily = "lato",
  size = 14,
  weight = "normal",
  letterSpacing = 1,
  lineHeight = 20,
  color = "primary-black",
  align = "start",
  underlined = false,
}: Typography) => {
  return (
    <span
      className={`typography 
                  typography--fontFamily-${fontFamily} 
                  typography--size-${size} 
                  typography--weight-${weight}
                  typography--letterSpacing-${letterSpacing} 
                  typography--lineHeight-${lineHeight}
                  typography--color-${color}
                  typography--align-${align}
                  typography--underlined-${underlined}
                  `}
    >
      {children}
    </span>
  );
};
