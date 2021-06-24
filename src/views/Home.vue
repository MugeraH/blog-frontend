<template>
  <div class=""></div>
</template>

<script>
import HeroBlogPost from "./blog/HeroBlogPost.vue";
import BlogPost from "./blog/BlogPost.vue";

export default {
  name: "Home",
  data() {
    return {
      heroPost: {},
      posts: {},
    };
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
