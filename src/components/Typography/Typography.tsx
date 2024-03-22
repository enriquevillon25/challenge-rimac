import "./Typography.styles.scss";
// 12 14 16 18 32 40

type familyFont = "lato" | "space";
// type size = 12 | 14 | 16 | 18 | 32 | 40;
type size = "xs" | "s" | "m" | "l" | "xl" | "xxl";
type weight = "normal" | "semi-bold" | "bold" | "black";

interface Typography {
  children: string;
  fontFamily?: familyFont;
  size?: size;
  weight?: weight;
}

export const Typography = ({
  children,
  fontFamily = "lato",
  size = "m",
  weight = "normal",
}: Typography) => {
  return (
    <span
      className={`typography typography--fontFamily-${fontFamily} typography--size-${size} typography--weight-${weight}`}
    >
      {children}
    </span>
  );
};
