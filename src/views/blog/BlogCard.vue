<template>
  <div>
    <div class="blog-card">
      <img :src="image" alt="" class="img-responsive" />

      <div class="card-body">
        <p class="header m-0">
          {{ post.title }}
        </p>

        <span> Posted on {{ callDate(post.created_at, "fullDate") }}</span>

        <p class="card-text">
          {{ post.description }}
        </p>
        <router-link
          class="btn post-btn"
          :to="{ name: 'Blog', params: { id: post.id } }"
        >
          Read <Arrow class="arrow arrow-light " />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "../../assets/Icons/arrow-right-light.svg";
import moment from "moment";
export default {
  name: "BlogCardlog",
  props: ["post"],
  components: {
    Arrow,
  },
  data() {
    return {
      image: "",
    };
  },
  mounted() {
    this.getImage();
  },
  methods: {
    getImage() {
      this.image = this.post.image_url;
      console.log(this.image);
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
.blog-card {
  width: 400px;
  border: none;
  border-radius: 7px;
  overflow: hidden;

  @media (max-width: 934px) {
    width: 100%;
    margin: 0px auto;
  }
  @media (max-width: 470px) {
    width: 100%;
    margin: 0 auto;
  }

  .header {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  }
  span {
    font-size: 12px;
    color: rgb(61, 60, 60);
  }

  img {
    height: 180px;
    width: 100%;
    object-fit: cover;
  }
  .card-body {
    background: rgb(255, 102, 0);
  }
  .card-text {
    height: 60px;
    color: #fff;
  }

  .post-btn {
    align-self: flex-start;
    display: inline-block;
    background: #000;
    color: #fff;

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
      color: white;
      background: rgb(255, 102, 0);
      border: 2px solid white;
    }
  }
}
</style>
