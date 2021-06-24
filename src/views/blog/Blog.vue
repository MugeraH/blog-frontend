<template>
  <div class="container mt-2">
    <div class="blog-header">
      <div class="header">
        <p class="title m-0 p-0">{{ post.title }}</p>
        <p class="date ">
          Posted on {{ callDate(post.created_at, "fullDate") }}
        </p>
      </div>
      <div class="buttons">
        <router-link
          class="btn btn-info mr-3"
          :to="{ name: 'EditBlog', params: { id: post.id } }"
          >Edit Post</router-link
        >
        <button class="btn btn-danger" @click="deletePost">Delete Post</button>
      </div>
    </div>

    <div class="blog-image">
      <img :src="image" alt="" class="img-responsive" />
    </div>
    <div class="blog-content ">
      <p class="m-0 p-0 text-center post-desc">
        <span>"</span> {{ post.description }}<span>"</span>
      </p>
      <p class="blog mt-2">
        {{ post.blog_content }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "Blog",
  data() {
    return {
      post: {},
      image: "",
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    async getPost() {
      this.$store.commit("setIsLoading", true);
      const postID = this.$route.params.id;

      await axios
        .get(`/api/v1/blogs/${postID}`)
        .then((response) => {
          this.post = response.data;

          this.image = this.post.image_url;
        })
        .catch((error) => {
          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },
    async deletePost() {
      if (confirm("Are you sure you want to delete this post")) {
        console.log("sure");
        const postID = this.$route.params.id;

        await axios
          .delete(`/api/v1/blogs/${postID}`)
          // eslint-disable-next-line no-unused-vars
          .then((response) => {
            alert("Post deleted succesfully");
            this.$router.push({ path: "/blogs" });
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
.container {
  .blog-header {
    margin: 40px 0px 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 850px) {
    }
    @media (max-width: 470px) {
      flex-direction: column;
      justify-content: center;
    }

    .title {
      font-size: 28px;
      font-weight: 600;
      text-transform: capitalize;
    }
    .date {
      color: rgb(61, 61, 61);
    }
  }
  .blog-image {
    height: 480px;
    width: 100%;
    @media (max-width: 470px) {
      height: 300px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .blog-content {
    margin: 20px 0px;
    padding: 0 20px;
    .post-desc {
      font-size: 25px;
      font-weight: 600;
    }
    .blog {
      font-size: 22px;
      line-height: 20px;
      text-transform: capitalize;
    }
  }
}
</style>
