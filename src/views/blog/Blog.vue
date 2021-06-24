<template>
  <div>
    <h2>
      {{ post.title }}
    </h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Blog",
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    this.getLead();
  },
  methods: {
    async getLead() {
      this.$store.commit("setIsLoading", true);
      const postID = this.$route.params.id;

      await axios
        .get(`/api/v1/blogs/${postID}`)
        .then((response) => {
          this.post = response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>

<style></style>
