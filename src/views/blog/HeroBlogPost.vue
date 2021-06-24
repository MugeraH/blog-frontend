<template>
  <div class="wrapper">
    <!-- <img src=require("@/assets/assets/design-for-everyone.jpg")> alt="" /> -->

    <h2 class="centered" :post="post">{{ post.title }}</h2>
  </div>
</template>

<script>
export default {};
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
