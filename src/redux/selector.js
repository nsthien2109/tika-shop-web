export const openNavbarSelector = (state) => state.ui.openNavbarMobile;
export const openMenuSelector = (state) => state.ui.openMenuSettings;

/** Authentication selector */

export const accountSelector = (state) => state.auth.login.currentUser;
export const authMessageSelector =  (state) => state.auth.message;