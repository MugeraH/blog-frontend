<template>
  <div class="blog-wrapper">
    <div class="content-wrapper">
      <span class="category">{{ post.category }}</span>
      <p class="title">{{ post.title }}</p>
      <p class="description">
        {{ post.description }}
      </p>
      <router-link
        class="btn post-btn"
        :to="{ name: 'Blog', params: { id: post.id } }"
      >
        Read <Arrow class="arrow arrow-light" />
      </router-link>
    </div>
    <div class="image-container">
      <img :src="image" alt="" class="img-responsive" />
    </div>
  </div>
</template>

<script>
import Arrow from "../../assets/Icons/arrow-right-light.svg";
import moment from "moment";
export default {
  name: "BlogPost",
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
.blog-wrapper {
  margin: 30px auto;

  height: 550px;
  width: 70%;

  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  @media (max-width: 850px) {
    background-color: grey;
    flex-direction: column;
    padding: 10px;
  }
  @media (max-width: 520px) {
    flex-direction: column;
    padding: 10px;
    width: 100%;
  }

  .image-container {
    flex: 3;
    order: 1;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content-wrapper {
    background-color: #fff;
    flex: 2;
    order: 1;
    padding: 10px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    .category {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      align-self: flex-start;
    }
    .title {
      font-size: 25px;
      font-weight: 600;
      align-self: flex-start;
    }
    .description {
      font-size: 18px;
      font-weight: 500;
      line-height: 16px;
      align-self: flex-start;
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
      }
    }
  }

  &:nth-child(even) {
    @media (max-width: 850px) {
      background-color: grey;
      flex-direction: column;
    }
    @media (max-width: 520px) {
      flex-direction: column;
      padding: 10px;
      width: 100%;
    }
    .image-container {
      order: 1;
    }
    .content-wrapper {
      background-color: #fff;
      order: 2;
      align-items: start;
    }
  }
}
</style>
