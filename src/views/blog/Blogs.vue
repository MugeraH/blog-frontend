<template>
  <div class="blogs-wrapper m-0">
    <div class="categories">
      <button @click="getBlogs" class="category-link">
        All
      </button>
      <button @click="setCategoryLife" class="category-link">
        Life
      </button>
      <button @click="setCategoryEnt" class="category-link">
        Entertainment
      </button>
      <button @click="setCategoryBusiness" class="category-link">
        Business
      </button>
      <button @click="setCategoryTravel" class="category-link">Travel</button>
      <button @click="setCategoryCarrer" class="category-link">Carrer</button>
      <button @click="setCategoryRandom" class="category-link">
        Random Thoughts
      </button>
    </div>
    <div class="blog-post-wrapper">
      <div class="card" v-for="post in posts" :key="post.id">
        {{ post.title }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Blogs",

  data() {
    return {
      posts: {},
      category: "",
    };
  },
  mounted() {
    this.getBlogs();
  },
  methods: {
    async getBlogs() {
      this.$store.commit("setIsLoading", true);

      await axios
        .get("/api/v1/blogs")
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },

    async getBlogsCategory(category) {
      this.$store.commit("setIsLoading", true);

      await axios
        .get(`/api/v1/blogs/${category}`)
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },

    setCategoryLife() {
      this.category = "life";
      this.getBlogsCategory(this.category);
    },
    setCategoryRandom() {
      this.category = "random_thoughts";
      this.getBlogsCategory(this.category);
    },
    setCategoryBusiness() {
      this.category = "business";
      this.getBlogsCategory(this.category);
    },
    setCategoryTravel() {
      this.category = "travel";
      this.getBlogsCategory(this.category);
    },
    setCategoryEnt() {
      this.category = "entertainmet";
      this.getBlogsCategory(this.category);
    },
    setCategoryCarrer() {
      this.category = "carrer";
      this.getBlogsCategory(this.category);
    },
  },
};
</script>

<style lang="scss" scoped>
.blogs-wrapper {
  background: rgb(255, 102, 0);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .categories {
    align-self: center;
    margin: 25px auto;
    display: flex;
    gap: 10px;
    .category-link {
      color: white;
      background: rgb(255, 102, 0);
      border: none;
      outline: none;
      font-size: 20px;
      padding-right: 10px;
      border-right: 3px solid white;
      transition: all 0.5s ease;
      &:hover {
        color: rgb(2, 2, 2);
      }

      &:last-child {
        border-right: none;
      }
    }
  }

  .blog-post-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
    align-items: center;

    width: 70%;
    .card {
      width: 300px;
    }
  }
}
</style>
