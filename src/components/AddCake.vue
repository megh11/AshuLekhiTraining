<script setup>
import { ref } from "vue";
import axios from "axios";

var cakes = ref([]);
var cake = ref({
  name: "",
  image: "",
  price: "",
  description: "",
  weight: "",
  flavour: "",
  eggless: "",
  ingredients: "",
  type: "",
});

let image;
// function addCake() {
//   if (cake.value) {
//     cakes.value = [...cakes.value, cake.value];
//     cake.value = "";
//   }
// }

function imageStore(event) {
  image = event.target.files[0];
}

function upload() {
  var formdata = new FormData();
  formdata.append("file", image);

  axios({
    method: "post",
    url: "https://apifromashu.herokuapp.com/api/upload",
    data: formdata,

    headers: {
      authtoken: localStorage.token,
    },
  }).then(
    (response) => {
      console.log("Response from image upload api", response.data);
      cake.value.image = response.data.imageUrl;
    },
    (error) => {
      console.log("error from image upload", error);
    }
  );
}

function addCake() {
  axios({
    method: "post",
    url: "https://apifromashu.herokuapp.com/api/addcake",
    data: cake.value,

    headers: {
      authtoken: localStorage.token,
    },
  }).then(
    (response) => {
      console.log("Response from image upload api", response.data);
    },
    (error) => {
      console.log("error from image upload", error);
    }
  );
}
</script>

<template>

  <div class="mx-auto">
    <form class="row g-3 m-4">
      <h1 class="text-right">Add Cake</h1>
      <!-- <div>Cake Image</div> -->
      <!-- <div class="input-group mb-3">
        <input type="file" class="form-control" id="inputGroupFile02" />
        <label class="input-group-text" for="inputGroupFile02">Upload</label>
      </div> -->
      <div class="col-md-10">
        <label for="formFile" class="form-label">Cake Image</label>
        <input
          class="form-control"
          type="file"
          id="formFile"
          @change="imageStore"
        />
      </div>
      <div class="col-md-2">
        <button @click="upload" type="button" class="btn mt-4 btn-primary">
          Upload
        </button>
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Cake Name</label>
        <input
          v-model="cake.name"
          name="name"
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="cake name"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Price</label>
        <input
          v-model="cake.price"
          name="price"
          type="number"
          class="form-control"
          id="inputPassword4"
          placeholder="cake price"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Description</label
        >
        <textarea
          v-model="cake.description"
          name="description"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">weight (kg)</label>
        <input
          v-model="cake.weight"
          name="weight"
          type="number"
          class="form-control"
          id="inputEmail4"
          placeholder="cake weight"
        />
      </div>
      <div class="col-md-6">
        Type of Cake:
        <select
          v-model="cake.type"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Select Type</option>
          <option></option>
          <option>Pound Cake</option>
          <option>Butter Cake</option>
          <option>Sponge Cake</option>
          <option>Biscuit Cake</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Flavour</label>
        <input
          v-model="cake.flavour"
          name="flavour"
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Add Flavour"
        />
      </div>
      <div class="form-check col-md-3">
        <label class="form-check-label" for="gridCheck"> Eggies </label>
        <input
       
          name="eggies"
          class="form-check-input"
          type="checkbox"
          id="gridCheck"
        />
      </div>
      <div class="form-check col-md-3">
        <label class="form-check-label" for="gridCheck"> Veg</label>
        <input
             v-model="cake.eggless"
          name="eggless"
          class="form-check-input"
          type="checkbox"
          id="gridCheck"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Ingredients</label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="plus"
          viewBox="0 0 448 512"
        >
          <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z"
          />
        </svg>
        <input
          v-model="cake.ingredients"
          name="ingredients"
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Cake Ingredients"
        />
      </div>
      <div class="col-md-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="delete_icon"
          viewBox="0 0 448 512"
        >
          <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
          />
        </svg>
      </div>
      <div class="d-grid">
        <button @click="addCake" type="button" class="btn btn-success">
          Add Cake
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.plus {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-bottom: 8px;
  cursor: pointer;
}
.delete_icon {
  width: 18px;
  height: 18px;
  margin-left: 4px;
  margin-top: 40px;
  cursor: pointer;
}
.flex {
  display: flex;
}
img {
  max-width: 180px;
}
</style>
