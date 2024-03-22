interface Typography {
  children: string;
}

export const Typography = ({ children }: Typography) => {
  return <span>{children}</span>;
};
