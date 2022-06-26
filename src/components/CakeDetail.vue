<script setup>
import { useRoute } from "vue-router";
import { cartstore } from "../stores/CartStore";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

var store = cartstore();

var route = useRoute();
var router = useRouter();

var cakeid = route.params.cakeid;

var cake = ref({
  cakeid: "",
  name: "",
  image: "",
  price: "",
  description: "",
  weight: "",
  type: "",
  flavour: "",
  ingredient: "",
});

var cakeid = route.params.cakeid;
axios({
  method: "get",
  url: "https://apifromashu.herokuapp.com/api/cake/" + cakeid,
}).then(
  (response) => {
    console.log("response from api", response);
    cake.value = response.data.data;
    console.log(cake.value);
  },
  (error) => {
    console.log("error from CakeDetail api", error);
  }
);

// function addToCart() {
//   // var formdata = new FormData();
//   // formdata.append("file", image);
//   var cake1=ref({
//     cakeid:"",
//      name: "",
//   image: "",
//   price: "",
//   weight: "",

//   })

//   axios({
//     method: "post",
//     url: "https:/apifromashu.herokuapp.com/api/addcaketocart",
//     // data: formdata,

//     headers: {
//       authtoken: localStorage.token,
//     },
//   }).then(
//     (response) => {
//       console.log("Response from image upload api", response.data);
//       cake1.value = response.data.data;
//     },
//     (error) => {
//       console.log("error from image upload", error);
//     }
//   );
// }
//  var cake1 = {
//   cakeid: "",
//   name: "",
//   image: "",
//   price: "",
//   weight: "",
// }

function returnToLogin() {
  console.log("Into function gotologin");
  if (!localStorage.token) {
    router.push({
      path: "/login",
    });
  } else {
    var cake1 = {
      cakeid: cake.value.cakeid,
      name: cake.value.name,
      image: cake.value.image,
      price: cake.value.price,
      weight: cake.value.weight,
    };

    axios({
      method: "post",
      url: "https://apifromashu.herokuapp.com/api/addcaketocart",
      data: cake1,

      headers: {
        authtoken: localStorage.token,
      },
    }).then(
      (response) => {
        console.log("Response from image upload api", response.data);
        cake1 = response.data.data;
        
        store.addcartitem(cakeid);

        router.push("/cart");
      },
      (error) => {
        console.log("error from image upload", error);
      }
    );
  }
}
</script>

<template>
  <div>
    <!-- <h1>here wie will show the details of {{ cakeid }} cake</h1> -->
    <!-- <h2>{{ cake.name }}</h2> -->
    <div class="mt-4 mx-4">
      <div class="row">
        <div class="col">
          <img :src="cake.image" alt="" />
          <p
            class="abc"
            _ngcontent-wqt-c30=""
            style="font-size: 15px; user-select: auto"
          >
            <span
              _ngcontent-wqt-c30=""
              style="font-weight: bold; font-size: 15px; user-select: auto"
              >Note:</span
            >
            Design and icing of cake may vary from the image shown here since
            each chef has his/her own way of baking and designing a cake.
          </p>
          <!-- <img
            _ngcontent-wqt-c30=""
            src="	http://neoangularwebsite.herokuapp.com/assets/hygienic.webp"
            style="user-select: auto"
          /> -->
        </div>
        <div class="col">
          <div _ngcontent-wqt-c30="" class="col-sm-12">
            <div
              _ngcontent-wqt-c30=""
              style="margin-top: 30px; user-select: auto"
            >
              <h3 _ngcontent-wqt-c30="" style="user-select: auto">
                {{ cake.name }}
              </h3>
              <p _ngcontent-wqt-c30="" style="user-select: auto">4.5 ratings</p>
              <h2 _ngcontent-wqt-c30="" style="user-select: auto">
                <i
                  _ngcontent-wqt-c30=""
                  aria-hidden="true"
                  class="fa fa-inr"
                  style="user-select: auto"
                ></i>
                {{ cake.price }}
              </h2>
              <p _ngcontent-wqt-c30="" style="user-select: auto">
                inclusive of all taxes.
              </p>
              <ul _ngcontent-wqt-c30="" style="user-select: auto">
                <li _ngcontent-wqt-c30="" style="user-select: auto">
                  Cake Flavour : {{ cake.flavour }}
                </li>
                <li _ngcontent-wqt-c30="" style="user-select: auto">
                  Type of Cake : {{ cake.type }}
                </li>
                <li _ngcontent-wqt-c30="" style="user-select: auto">
                  Minimum Weight : {{ cake.weight }}
                </li>
                <li _ngcontent-wqt-c30="" style="user-select: auto">
                  Description : {{ cake.description }}
                </li>
              </ul>
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="0.5"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 500 gm &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="1"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 1 kg &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="1.5"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 1.5 kg &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="2"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 2 kg &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="2.5"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 2.5 kg &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="3"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 3 kg &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="4"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 4 kg &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="5"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 5 kg &nbsp;&nbsp;</label
              >
            </div>
            <!---->
            <div
              _ngcontent-wqt-c30=""
              style="margin-top: 30px; user-select: auto"
            >
              <div
                _ngcontent-wqt-c30=""
                style="display: inline; user-select: auto"
              >
                <input
                  _ngcontent-wqt-c30=""
                  type="checkbox"
                  class="form-check-input"
                  value="true"
                  style="user-select: auto"
                /><label
                  _ngcontent-wqt-c30=""
                  class="form-check-label"
                  style="user-select: auto"
                  >&nbsp;&nbsp;&nbsp;
                  <b _ngcontent-wqt-c30="" style="user-select: auto">Eggless</b>
                  &nbsp;&nbsp;&nbsp;
                </label>
              </div>
              <div
                _ngcontent-wqt-c30=""
                style="display: inline; user-select: auto"
              >
                <input
                  _ngcontent-wqt-c30=""
                  type="checkbox"
                  class="form-check-input"
                  value="true"
                  style="user-select: auto"
                /><label
                  _ngcontent-wqt-c30=""
                  class="form-check-label"
                  style="user-select: auto"
                  >&nbsp;&nbsp;&nbsp; Heart Shape &nbsp;&nbsp;&nbsp;
                </label>
              </div>
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: block; margin-top: 30px; user-select: auto"
            >
              <input
                _ngcontent-wqt-c30=""
                type="text"
                placeholder="Message on cake"
                class="form-control"
                style="user-select: auto"
              />
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="margin-top: 30px; user-select: auto"
            >
              <div
                _ngcontent-wqt-c30=""
                style="
                  display: inline;
                  margin-top: 20px;
                  padding: 0px;
                  user-select: auto;
                "
              >
                <button
                  _ngcontent-wqt-c30=""
                  type="button"
                  class="btn btn-warning"
                  style="user-select: auto"
                  @click="returnToLogin"
                >
                  ADD TO CART
                </button>
              </div>
              <div
                _ngcontent-wqt-c30=""
                style="
                  display: inline;
                  margin-top: 20px;
                  margin-left: 20px;
                  user-select: auto;
                "
              >
                <button
                  _ngcontent-wqt-c30=""
                  type="button"
                  class="btn btn-success"
                  style="user-select: auto"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <!-- <img
            _ngcontent-wqt-c30=""
            src="http://neoangularwebsite.herokuapp.com/assets/assured_secure_payments.png"
            style="user-select: auto"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 400px;
}

.abc {
  margin-top: 3px;
}
</style>
