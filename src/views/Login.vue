<template>
  <div class="form-container">
    <header class=" login-header m-0">
      <p class=" text-center">Login</p>
    </header>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" v-model="username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>

      <div class="error-card" v-if="errors.length">
        <p v-for="error in errors" :key="error">error: {{ error }}</p>
      </div>

      <button type="submit" class="btn btn-large">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",

      errors: [],
    };
  },
  methods: {
    async submitForm() {
      this.$store.commit("setIsLoading", true);

      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");

      const formData = {
        username: this.username,
        password: this.password,
      };

      await axios
        .post("/api/v1/token/login/", formData)
        .then((response) => {
          const token = response.data.auth_token;

          axios.defaults.headers.common["Authorization"] = "Token " + token;

          localStorage.setItem("token", token);

          this.$router.push({ path: "/" });
          console.log("logging in");

   
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }
          } else {
            this.errors.push("Something went wrong.Please try again!");
          }
        });

      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  width: 90%;
  max-width: 550px;
  margin: 50px auto;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  @media (max-width: 470px) {
 
    width: 100%;
  }

  .login-header {
    height: 3.2rem;
    background: rgb(255, 102, 0);
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin-top: 10px;
      color: white;
      font-size: 22px;
      font-weight: 600;
    }
  }

  form {
    /* background-color: blue; */
    margin-top: 10px;
    padding: 0px 10px;

    label {
      font-size: 16px;
      font-weight: 600;
      color: rgb(255, 102, 0);
    }
    input {
      height: 50px;
      border: 1px solid black;
      outline: none;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 1px;
      color: #000;
      &:focus {
        outline: none;
      }
    }

    button {
      display: inline-block;
      background: white;
      color: rgb(255, 102, 0);

      border: 3px solid rgb(255, 102, 0);
      padding: 7px 15px;
      margin: 5px;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
      font-size: 18px;
      font-weight: 600;
      font-family: inherit;
      transition: 0.3s all ease;
      &:focus {
        outline: none;
      }

      &:active {
        transform: scale(0.98);
      }
      &:hover {
        color: white;
        background: rgb(255, 102, 0);
      }
    }
  }
}

.error-card {
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  color: rgb(255, 102, 0);
  font-size: 18px;
}
</style>
