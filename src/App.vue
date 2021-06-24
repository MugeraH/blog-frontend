<template>
  <div class="app">
    <Navbar />
    <div
      class="loader-wrapper"
      v-bind:class="{ 'is-loading': $store.state.isLoading }"
    >
      <div class="loader"></div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import axios from "axios";
export default {
  name: "App",
  components: {
    Navbar,
    // Footer,
  },
  beforeCreate() {
    this.$store.commit("initializeStore");

    if (this.$store.state.token) {
      axios.defaults.headers.common["Authorization"] =
        "Token " + this.$store.state.token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.loader-wrapper {
  color: white;
  display: flex;
  justify-content: center;
  height: 0;
  width: 0;
  overflow: hidden;

  &.is-loading {
    height: 80px;
    width: 50px;
  }
}

.loader {
  border: 6px solid rgb(255, 102, 0);
  border-top: 6px solid #fff;

  border-radius: 50%;
  margin: 30px;

  animation: spin 1s linear infinite;
  height: 80px;
  width: 50px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.arrow {
  font-size: 20px;
  font-weight: bold;
  margin-left: 8px;
  width: 12px;
  path {
    fill: #000;
  }
}

.arrow-light {
  path {
    fill: #fff;
  }
}
* {
  scrollbar-width: thin;
  scrollbar-color: rgb(255, 102, 0) transparent;
  scroll-behavior: smooth;
}

*::-webkit-scrollbar {
  width: 10px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: rgb(255, 102, 0);
  border-radius: 20px;
  border: transparent;
}
</style>
