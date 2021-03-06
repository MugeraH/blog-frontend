<template>
  <header class="m-0">
    <nav class="container-fluid m-0 p-0">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >Blog Website</router-link
        >
      </div>

      <div class="nav-links">
        <ul v-show="!mobileNav && !mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>

          <template v-if="!$store.state.isAuthenticated">
            <router-link class="link" :to="{ name: 'Register' }"
              >Register</router-link
            >
            <router-link class="link" :to="{ name: 'Login' }"
              >Login</router-link
            >
          </template>
          <template v-else>
            <router-link class="link" :to="{ name: 'AddBlog' }"
              >Create Post</router-link
            >

            <button class="link" to="#" @click="logout">Logout</button>
          </template>
        </ul>
      </div>
    </nav>
    <transition name="mobile-icon">
      <menuIcon
        @click="toogleMobileNav"
        v-show="!mobileNav && mobile"
        class="menu-icon"
      />
    </transition>

    <transition name="mobile-icon">
      <closeMenuIcon
        @click="toogleMobileNav"
        class="menu-icon"
        v-show="mobileNav && mobile"
      />
    </transition>
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link
          class="link"
          @click.native="toogleMobileNav"
          :to="{ name: 'Home' }"
          >Home</router-link
        >
        <router-link
          class="link"
          :to="{ name: 'Blogs' }"
          @click.native="toogleMobileNav"
          >Blogs</router-link
        >
        <template v-if="!$store.state.isAuthenticated">
          <router-link
            class="link"
            :to="{ name: 'Register' }"
            @click.native="toogleMobileNav"
            >Register</router-link
          >
          <router-link
            class="link"
            @click.native="toogleMobileNav"
            :to="{ name: 'Login' }"
            >Login</router-link
          >
        </template>
        <template v-else>
          <router-link
            class="link"
            :to="{ name: 'AddBlog' }"
            @click.native="toogleMobileNav"
            >Create Post</router-link
          >

          <button class="link" @click="logout">Logout</button>
        </template>
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import closeMenuIcon from "../assets/Icons/close.svg";
import axios from "axios";

export default {
  name: "Navbar",
  components: {
    menuIcon,
    closeMenuIcon,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreenWidth);
    this.checkScreenWidth();
  },
  methods: {
    async logout() {
      await axios
        .post("/api/v1/token/logout/")
        // eslint-disable-next-line no-unused-vars
        .then((response) => {})
        .catch((error) => {
          console.log(JSON.stringify(error));
        });

      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");
      this.$store.commit("removeToken");

      this.$router.push("/");
    },
    checkScreenWidth() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toogleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgb(10, 10, 10);
  width: 100%;
  padding: 4px 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }
  nav {
    display: flex;
    padding: 15px 0;
    width: 100%;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-size: 25px;
        color: rgb(255, 102, 0);
        font-weight: 700;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      padding: 15px 0px 0px 0px;

      ul {
        margin-right: 32px;
        .link {
          margin-right: 32px;
          color: rgb(255, 102, 0);
          font-weight: 600;
          transition: 0.1s all ease;
          padding: 0px 0px 5px 0px;
          border: none;

          &:hover {
            border: none;
            text-decoration: none;
            color: #fff;
          }
        }
        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 25px;
    height: 29px;
    width: auto;
    transition: 0.3s ease;

    path {
      fill: rgb(255, 102, 0);
    }
  }

  .mobile-nav {
    padding: 70px 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: rgb(10, 10, 10);
    top: 0;
    left: 0;

    .link {
      margin-top: 20px;
      padding: 30px 0;
      color: rgb(255, 102, 0);
      font-weight: 600;
      transition: 0.5s all ease;
      padding: 0px 0px 5px 0px;
      font-size: 20px;

      &:hover {
        text-decoration: none;
        font-size: 28px;
      }
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 0.8s ease;
  }
  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0px);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }

  .mobile-icon-enter-active,
  .mobile-icon-leave-active {
    opacity: 1;
    transition: all 0s ease;
  }
  .mobile-icon-enter {
    transform: opacity;
  }

  .mobile-icon-enter-to {
    transform: opacity;
  }

  .mobile-icon-leave-to {
    transform: opacity;
  }

  button.link {
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    text-align: initial;
  }
}
</style>
