import { StylesConfig, GroupBase } from "react-select";

type OptionType = {
  label: string;
  value: string | number;
};

export const AppDropdownStyle: StylesConfig<OptionType, false, GroupBase<OptionType>> = {
  singleValue: (provided: any) => ({
    ...provided,
    color: "#D7D8ED",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    padding: "5px 15px",
    height: "auto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    borderRadius: "6px",
    backgroundColor: "transparent",
    textTransform: "capitalize",
    width: "100%",
    color: "#D7D8ED",
    boxShadow: "none !important",
    border: state.isFocused ? "1px solid #fff !important" : "1px solid #595b75 !important",
    paddingRight: "6px",
  }),
  menu: (provided: any) => ({
    ...provided,
    background: "#000",
    color: "#fff",
    zIndex: 1000,
    paddingRight: "7px",
  }),
  option: (provided: any) => ({
    ...provided,
    background: "#000",
    color: "#fff",
    paddingLeft: "20px",
    "&:hover": {
      backgroundColor: "#0d6efd",
    },
  }),
  input: (provided: any) => ({
    ...provided,
    color: "#D7D8ED",
  }),
  groupHeading: (provided: any) => ({
    ...provided,
    color: "#fff",
    backgroundColor: "#30334e",
    padding: "14px 8px",
    fontWeight: "600",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    color: "#fff !important",
    paddingRight: "0 !important",
  }),
  menuList: (provided: any) => ({
    ...provided,
    paddingLeft: "10px",
  }),
};
