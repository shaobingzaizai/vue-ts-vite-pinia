import { defineStore } from "pinia";

export default defineStore({
  id: "app",
  state: () => {
    return {
      selectTheme: "default",
      themeObject: {},
    } as {
      selectTheme: String;
      themeObject: any;
    };
  },
  actions: {
    SET_SELECT_THEME(str: string) {
      this.selectTheme = str || "default";
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "selectTheme",
        storage: localStorage,
        paths: ["selectTheme"],
      },
    ],
  },
});
