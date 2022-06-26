import { createApp } from "vue";
// import App from "./App.vue";
// import NewApp1 from "./components/NewApp1.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import MyComponent from "./components/MyComponent.vue";
import AddCake from "./components/AddCake.vue";
import Login from "./components/Login.vue";
import Search from "./components/Search.vue";
import CakeDetail from "./components/CakeDetail.vue";
import PageNotFound from "./components/PageNotFound.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import Checkout from "./components/Checkout.vue";
import Summary from "./components/Summary.vue";
import Address from "./components/Address.vue";
import Payment from "./components/Payment.vue";
import Orders from "./components/Orders.vue";

import Admin from "./components/Admin.vue";
import Edit from "./components/Edit.vue";
import { createPinia } from "pinia";
// import { CartStore } from "./stores/CartStore";

var MyApp = createApp(MyComponent);

var routes = [
  { path: "/", component: Home },
  { path: "/mycomponent", component: MyComponent },
  { path: "/addcake", component: AddCake },
  { path: "/login", component: Login },
  { path: "/search", component: Search },
  { path: "/detail/:cakeid", component: CakeDetail },
  { path: "/:pathMatch(.*)*", component: PageNotFound },
  {
    path: "/cart",
    beforeEnter: () => {
      if (!localStorage.token) {
        router.push("/");
        return false;
      }
    },
    component: ShoppingCart,
  },

  {
    path: "/checkout",
    component: Checkout,
    children: [
      { path: "", redirect: "/checkout/summary" },
      { path: "summary", component: Summary },
      { path: "address", component: Address },
      { path: "payment", component: Payment },
      { path: "order", component: Orders },
     
    ],
  },
  // { path: "/NewApp1", component: Home },
  { path: "/admin", component: Admin },
  { path: "/edit/:cakeid", component: Edit },
  
];

var router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

// router.beforeEach(()=>{
//   alert("before entering into any route this will be called")
// })

MyApp.directive("highlight", {
  mounted: (element) => {
    console.log("we got the element", element);

    element.style.color = "red";
    element.style.color = "red";
  },
});

MyApp.use(router);
MyApp.use(createPinia());

MyApp.mount("#app");

// createApp(App).mount("#app");
