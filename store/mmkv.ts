import { MMKV } from "react-native-mmkv";

export const appStorage = new MMKV({
  id: "app-storage",
});

export const zustandStorage = {
  setItem: (name: string, value: string) => {
    return appStorage.set(name, value);
  },
  getItem: (name: string) => {
    const value = appStorage.getString(name);
    return value ?? null;
  },
  removeItem: (name: string) => {
    return appStorage.delete(name);
  },
};
