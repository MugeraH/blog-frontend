<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >Blog Website</router-link
        >
      </div>

      <div class="nav-links">
        <ul v-show="!mobileNav && !mobile">
          <router-link class="link" to="#">Home</router-link>
          <router-link class="link" to="#">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" to="#">Login/Register</router-link>
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
        <router-link class="link" to="#">Home</router-link>
        <router-link class="link" to="#">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" to="#">Login/Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import closeMenuIcon from "../assets/Icons/close.svg";
export default {
  name: "navigation",
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
  background-color: #fff;
  padding: 0 25px;
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
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-size: 24px;
        color: #000;
        font-weight: 600;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;
        .link {
          margin-right: 32px;
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
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
    transition: 0.3s ease;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: white;
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
}
</style>
