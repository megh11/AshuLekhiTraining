import { defineStore } from "pinia";

export var userstore = defineStore("userstore", {
  state: () => ({
    isLog: false,
    token: "",
  }),

  actions: {
    loginUser(token) {
      (this.isLog = true), (this.token = token);
    },
    logoutUser() {
      this.isLog = false;
      this.token = "";
    },
  },
});
