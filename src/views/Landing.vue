<template>
  <div class="wrapper">
    <div class="intro">
      <div class="centered">
        <h3>Blog Website</h3>

        <router-link to="/login" class="btn landing-btn"> Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 93vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(10, 10, 10);
}
.intro {
  width: 400px;
  min-width: 300px;
  height: 400px;
  min-height: 300px;
  background-color: rgb(255, 102, 0);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  margin-bottom: 130px;

  .centered {
    width: 80;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    h3 {
      margin-bottom: 40px;
      font-size: 35px;
      font-weight: bold;
      color: #fff;
    }
    .landing-btn {
      display: block;
      background: #000;
      color: #fff;
      width: 80px;
      margin: 0 auto;

      padding: 7px 15px;

      border-radius: 1px;
      cursor: pointer;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 15px;

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
        color: white;
        background: rgb(255, 102, 0);
      }
    }
  }
}
</style>
