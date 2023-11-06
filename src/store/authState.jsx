const { atom } = require("recoil");

const userTokenState = atom({
  key: "userTokenState",
  default: null,
});

const userIdState = atom({
  key: "userIdState",
  default: null,
});

const loadingState = atom({
  key: "loadingState",
  default: false,
});

export { userTokenState, userIdState, loadingState };
