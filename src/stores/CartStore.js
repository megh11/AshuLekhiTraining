import { defineStore } from "pinia";

export var cartstore = defineStore("cartstore", {
  state: () => ({
    cartitems: [],
  }),
  getters: {
    cartcount: (state) => state.cartitems.length,
  },
  actions: {
    addcartitem(item) {
      this.cartitems.push(item);
    },
    setcartitem(item) {
      this.cartitems = item;
    },
  },
});

// import { defineStore } from "pinia";

// export var cartstore = defineStore ('cartstore', {
//   state :()=>({
//     cartitems:[]
//   }),
//   getters:{
//     cartcount : (state)=>state.cartitems.length
//   },
//   actions :{
//     addcartitem(item){
//       this.cartitems.push(item)
//     },
//     setcartitem(item){
//       this.cartitems = item
//     }
//   }
// })
