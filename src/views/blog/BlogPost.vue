<template>
  <div >

  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "BlogPost",
  props: ["post"],
  data() {
    return {
      image: "",
    };
  },

  updated() {
    this.getImageUrl();
  },
  methods: {
    getImageUrl() {
      console.log(this.post.image_url);
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

<style></style>
