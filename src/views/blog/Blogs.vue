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
    <div class="blog-post-wrapper mt-2">
      <BlogCard :post="post" v-for="post in posts" :key="post.id" />
    </div>
  </div>
</template>

<script>
import BlogCard from "./BlogCard.vue";

import axios from "axios";

export default {
  name: "Blogs",
  components: {
    BlogCard,
  },

  data() {
    return {
      posts: {},
      images: {},
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
          this.images = this.posts.map((post) => {
            return post.image_url;
          });

          console.log(this.images.length);
        })
        .catch((error) => {
          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },

    async getBlogsCategory(category) {
      this.$store.commit("setIsLoading", true);

      await axios
        .get(`/api/v1/blogs-category/${category}`)
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
  height: 100%;
  width: 100%;
  display: flex;
  padding-bottom: 30px;

  align-items: center;
  flex-direction: column;

  .categories {
    align-self: center;
    margin: 25px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .category-link {
      color: rgb(255, 102, 0);
      background: white;
      border: none;
      outline: none;
      font-size: 20px;
      font-weight: bold;
      padding-right: 10px;
      border-right: 3px solid rgb(255, 102, 0);
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
    gap: 5px;
    flex-wrap: wrap;
    align-items: center;
    width: 80%;
  }
}
</style>
