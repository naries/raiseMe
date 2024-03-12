type ColorValue = string;
type NestedColorObject = Record<string, ColorValue>;
type ColorsType = Record<string, ColorValue | NestedColorObject>;

export const Colors: ColorsType = {
  darker: '#333',
  lighter: '#BFCFE7',
  primary: '#525CEB',
  secondary: '#3D3B40',
  appBackground: '#F8EDFF',
  textInput: {
    border: '#BFCFE7',
  },
};
