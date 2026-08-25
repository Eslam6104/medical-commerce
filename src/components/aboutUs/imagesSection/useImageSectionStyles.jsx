export const ImgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  m: 0,
};

export const useImageSectionStyles = () => ({
  mainContainerSx: {
    display: "grid",
    gridTemplateColumns: "1fr",
    columnGap: 4,
    rowGap: 4,
    "@media (min-width:769px)": {
      gridTemplateColumns: "1fr 1fr",
      alignItems: "stretch",
      px: "8%",
    },
  },
  leftColumnSx: {
    minWidth: 0,
    minHeight: 0,
    "@media (min-width:769px)": {
      aspectRatio: "4 / 3",
    },
  },
  rightColumnSx: {
    minWidth: 0,
    minHeight: 0,
    display: "grid",
    gridTemplateAreas: `"top" "bottomLeft" "bottomRight"`,
    gridTemplateColumns: "1fr",
    columnGap: 4,
    rowGap: 4,
    "@media (min-width:769px)": {
      aspectRatio: "4 / 3",
      gridTemplateAreas: `"top top" "bottomLeft bottomRight"`,
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
    },
  },
});
