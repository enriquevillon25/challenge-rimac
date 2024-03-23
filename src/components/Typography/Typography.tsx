import "./Typography.styles.scss";
// 12 14 16 18 32 40

type familyFont = "lato" | "space";
type size = "xs" | "s" | "m" | "l" | "lg" | "xl" | "xxl";
type weight = "normal" | "semi-bold" | "bold" | "black";
type letterSpacing = 1 | 2 | 4 | 6;
type lineHeight = 16 | 20 | 24 | 40;
type color = "white" | "primary-black";
type align = "start" | "end" | "center";

interface Typography {
  children: string;
  fontFamily?: familyFont;
  size?: size;
  weight?: weight;
  letterSpacing?: letterSpacing;
  lineHeight?: lineHeight;
  color?: color;
  align?: align;
}

export const Typography = ({
  children,
  fontFamily = "lato",
  size = "m",
  weight = "normal",
  letterSpacing = 1,
  lineHeight = 20,
  color = "primary-black",
  align = "start",
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
                  typography--align-${align}`}
    >
      {children}
    </span>
  );
};
