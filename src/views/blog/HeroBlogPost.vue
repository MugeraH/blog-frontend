<template>
  <div class="wrapper">
    <img :src="image" alt="" class="img-responsive" />

    <div class="centered">
      <p class="post_title">{{ post.title }}</p>
      <p class="post_desc">{{ post.description }}</p>
      <router-link
        :to="{ name: 'Blog', params: { id: post.id } }"
        class="btn post-btn"
      >
        Read <Arrow class="arrow " />
      </router-link>
    </div>

    <div class="top-left">
      <span class="text-white h6">
        Posted on {{ callDate(post.created_at, "fullDate") }}
      </span>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Arrow from "../../assets/Icons/arrow-right-light.svg";
export default {
  name: "HeroBlogPost",
  data() {
    return {
      image: "",
    };
  },
  components: {
    Arrow,
  },
  props: ["post"],
  updated() {
    this.getImageUrl();
  },
  methods: {
    getImageUrl() {
      this.image = this.post.image_url;
    },

    callDate(date, dateType) {
      const date1 = new Date(date);
      if (dateType === "fullDate") {
        return moment(date1).format("ddd, MMMM Do YYYY");
      } else {
        return moment(date1).format("HH:mm");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  text-align: center;
  background-color: rgb(0, 0, 0);
  height: 70vh;
  @media (max-width: 550px) {
    height: 550px;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.5;
    transition: all 0.3s ease;
    @media (max-width: 470px) {
      height: 100%;
      width: 100%;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  p {
    color: white;
  }

  .post_title {
    font-size: 40px;
    font-weight: 600;
  }
  .post_desc {
    font-size: 30px;
  }

  .post-btn {
    display: inline-block;
    background: #fff;
    color: #000;

    padding: 7px 15px;

    border-radius: 1px;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;

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
      color: #000;
      background: rgb(255, 102, 0);
    }
  }
}
.top-left {
  position: absolute;
  top: 13px;
  left: 16px;
}

.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}
</style>
