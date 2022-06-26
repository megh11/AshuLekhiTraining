import { defineStore } from "pinia";
export var Address = defineStore("cartaddress", {
  state: () => ({
    useraddress: {},
  }),
  actions: {
    addAddress(item) {
      this.useraddress = item;
    },
  },
});
