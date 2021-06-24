<template>
  <div class="wrapper">
    <!-- <img :src="require(`{{post.image_url}}`)" alt="image" /> -->

    <h2>{{ post.title }}</h2>

    <div class="centered">
      <span>
        {{ post.created_at }}
      </span>
    </div>
  </div>
</template>

<script>
 import moment from "moment";
export default {
  name: "HeroBlogPost",
  props: ["post"],
};
</script>

<style>
.wrapper {
  position: relative;
  text-align: center;
  background-color: blue;
  height: 80vh;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
