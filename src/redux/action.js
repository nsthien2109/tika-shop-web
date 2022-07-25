const OPEN_NAVBAR = "ui/openNavbar";
const OPEN_MENU_SETTING = "ui/openMenuSettings";

export const openNavbar = () => {
  return {
    type: OPEN_NAVBAR,
  };
};

export const openMenuSettings = () => {
  return {
    type: OPEN_MENU_SETTING,
  };
};
