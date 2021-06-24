<template>
  <div class="">
    <HeroBlogPost :post="heroPost" />
    <BlogPost :post="post" v-for="(post, index) in posts" :key="index" />
  </div>
</template>

<script>
import HeroBlogPost from "./blog/HeroBlogPost.vue";
import BlogPost from "./blog/BlogPost.vue";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      heroPost: {},

      posts: {},
    };
  },
  mounted() {
    this.getBlogs();
  },
  methods: {
    async getBlogs() {
      this.$store.commit("setIsLoading", true);

      await axios
        .get("/api/v1/latest_blog")
        .then((response) => {
          this.heroPost = response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .get("/api/v1/blogs")
        .then((response) => {
          this.posts = (response.data).slice(0,(response.data).length-1);
        })
        .catch((error) => {
          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },
  },

  components: {
    // eslint-disable-next-line vue/no-unused-components
    HeroBlogPost,

    // eslint-disable-next-line vue/no-unused-components
    BlogPost,
  },
};
</script>

<style lang="scss" scoped></style>
