<template>
  <div class="form-container">
    <header class=" form-header m-0">
      <p class=" text-center">Edit Blog</p>
    </header>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" v-model="post.title" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" v-model="post.description" />
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <select class="form-control" v-model="post.category">
          <option value="life">Life</option>
          <option value="Business">Business</option>
          <option value="random_thoughts">Random_thoughts</option>
          <option value="travel">Travel</option>
          <option value="carrer">Carrer</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>

      <div class="form-group">
        <label for="blog_content">Blog </label>
        <textarea class="form-control" v-model="post.blog_content"></textarea>
      </div>
      <div class="form-group">
        <label for="image_url">Image url</label>
        <input type="text" class="form-control" v-model="post.image_url" />
      </div>

      <button type="submit" class="btn btn-large">Update</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditBlog",
  data() {
    return {
      post: {},
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
        })
        .catch((error) => {
          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },
    async submitForm() {
      this.$store.commit("setIsLoading", true);
      const postID = this.$route.params.id;

      await axios
        .put(`/api/v1/blogs/${postID}`, this.post)
        .then((response) => {
          console.log(response);
          this.$router.push({ path: `/blogs/${postID}` });
        })
        .catch((error) => {
          console.log(error);
        });
      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  width: 90%;
  max-width: 580px;
  margin: 20px auto;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  @media (max-width: 470px) {
    width: 100%;
  }

  .form-header {
    height: 3.2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin-top: 10px;
      color: rgb(255, 102, 0);
      font-size: 22px;
      font-weight: 600;
    }
  }

  form {
    margin-top: 10px;
    padding: 0px 10px;

    label {
      font-size: 16px;
      font-weight: 600;
      color: rgb(255, 102, 0);
    }
    input,
    textarea {
      border: 1px solid black;
      outline: none;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 1px;
      color: #000;
      &:focus {
        outline: none;
      }
    }

    textarea {
      height: 200px;
    }

    button {
      display: inline-block;

      color: white;
      background: rgb(255, 102, 0);

      border: 3px solid rgb(255, 102, 0);
      padding: 5px 10px;
      margin: 5px;
      border-radius: 1px;
      cursor: pointer;
      text-decoration: none;
      font-size: 18px;
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
        color: rgb(255, 102, 0);
        background: white;
      }
    }
  }
}
</style>
