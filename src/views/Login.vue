<template>
  <div class="form-container">
    <header class=" login-header m-0">
      <p class=" text-center">Login</p>
    </header>
    <form>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" />
      </div>

      <button type="submit" class="btn btn-large">Login</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form-container {
  width: 90%;
  max-width: 550px;
  margin: 50px auto;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  @media (max-width: 470px) {
    background-color: blue;
    width: 100%;
  }

  .login-header {
    height: 3.2rem;
    background: rgb(255, 102, 0);
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin-top: 10px;
      color: white;
      font-size: 22px;
      font-weight: 600;
    }
  }

  form {
    /* background-color: blue; */
    margin-top: 10px;
    padding: 0px 10px;

    label {
      font-size: 16px;
      font-weight: 600;
      color: rgb(255, 102, 0);
    }
    input {
      height: 50px;
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

    button {
      display: inline-block;
      background: white;
      color: rgb(255, 102, 0);

      border: 2px solid rgb(255, 102, 0);
      padding: 7px 15px;
      margin: 5px;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
      font-size: 18px;
      font-family: inherit;
      &:focus {
        outline: none;
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }
}
</style>
