const { atom } = require("recoil");

const showToastState = atom({
  key: "showToastState",
  default: false,
});

const toastTypeState = atom({
  key: "toastTypeState",
  default: "success",
});

const toastMessageState = atom({
  key: "toastMessageState",
  default: "Text Success",
});

const toastRefState = atom({
  key: "toastRefState",
  default: null,
});

export { showToastState, toastTypeState, toastMessageState, toastRefState };
