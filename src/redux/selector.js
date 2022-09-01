export const openNavbarSelector = (state) => state.ui.openNavbarMobile;
export const openMenuSelector = (state) => state.ui.openMenuSettings;

/** Authentication selector */

export const accountSelector = (state) => state.auth.login?.currentUser;
export const authMessageSelector = (state) => state.auth.message;

/** User */

export const usersListSelector = (state) => state.users?.users;
export const userAllowedMessageSelector = (state) => state.users?.message;

/** Category  */

export const categoryListSelector = (state) => state.categories?.categories;
export const categoryMessageSelector = (state) => state.categories?.message;

/** Banner */
export const bannerListSelector = (state) => state.banners?.banners;

/** Store */

export const listStores = (state) => state.stores?.stores?.data;
