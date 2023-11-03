import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const profileNameAtom = atom({
  key: "nameAtom",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
