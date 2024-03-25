<template>
  <div class="container">
    <div class="wrapper-img">
      <div>
        <span class="cheese-img">
          <label for="login-chk" class="cheese-label">
            <img src="@/pages/assets/icons8-cheese-64.png" alt="이미지 설명" />
            <span class="login-top">
              <span>DeliMap</span>
            </span>
          </label>
        </span>
      </div>
    </div>
    <div class="wrapper">
      <div class="title">
        <h1>로그인</h1>
      </div>
      <div class="login-bottom">
        <div class="login-id">
          <input type="text" class="login-neccessary" placeholder="아이디" />
        </div>
        <div class="login-pw">
          <input
            type="password"
            class="login-neccessary"
            placeholder="비밀번호"
          />
        </div>
        <div class="login-btn">
          <button>로그인</button>
        </div>
        <div class="login-save">
          <label for="login-chk">
            <input type="checkbox" name="keeplogin" />
            <span>로그인 유지</span>
          </label>
          <a href="#" class="join">회원가입</a>
        </div>
        <div class="find">
          <a href="#" class="find-id">아이디 찾기 </a>
          <span> | </span>
          <a href="#" class="find-pw"> 비밀번호 찾기</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ultra&display=swap");
.container {
  height: 100%;
  display: flex;
  margin: 0 auto;
  padding-bottom: 30px;
}
.wrapper-img {
  display: flex;
  width: 50%;
  background-color: rgb(248, 179, 60);
  position: relative;
}
.cheese-img {
  justify-content: center;
  position: absolute;
  top: 38%;
  left: 22%;
}
.cheese-label {
  display: flex;
  align-items: center;
}
.login-top {
  padding: 40px 0;
  color: white;
  margin-left: 20px;
}
.login-top span {
  margin: 0 auto;
  font-size: 60px;
  font-family: "Ultra", serif;
  font-style: normal;
}
.wrapper {
  width: 50%;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  max-width: 330px;
  flex-direction: column;
  position: relative;
}
.title {
  text-align: center;
  margin-bottom: 20px;
}
.login-bottom {
  flex-direction: column;
}
.login-bottom input {
}
.login-id {
  margin-bottom: 10px;
}
.join-id {
  width: 100%;
  height: 45px;
  padding: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  color: #696969;
}
.join-id:focus {
  border: none;
  outline: 2px solid rgb(248, 179, 60);
}
.login-neccessary {
  width: 100%;
  border-bottom: 1px solid rgb(218, 218, 218);
  padding: 10px;
  color: black;
  font-size: 15px;
}
.login-neccessary::placeholder {
  color: #a2a2a1;
  font-size: 14px;
}
.login-btn {
  width: 100%;
  border: 1px solid rgb(247, 160, 8);
  padding: 8px;
  margin-top: 50px;
  margin-bottom: 15px;
  text-align: center;
  background-color: rgb(248, 179, 60);
  cursor: pointer;
  border-radius: 4px;
}
.login-btn button {
  font-size: 25px;
  color: white;
  text-align: center;
}
.login-save {
  margin-top: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}
.login-save label {
  display: flex;
  align-items: center;
}
.join {
  text-decoration-line: none;
}
.join:link {
  color: black;
}
.join:visited {
  color: black;
}
.login-save input {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-right: 10px;
}
.find {
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
}
.find-id {
  font-size: 14px;
  text-decoration-line: none;
}
.find-id:link {
  color: black;
}
.find-id:visited {
  color: black;
}
.find-pw {
  font-size: 14px;
  text-decoration-line: none;
}
.find-pw:link {
  color: black;
}
.find-pw:visited {
  color: black;
}
.kakaoLogin img {
  width: 100%;
  height: 56px;
  cursor: pointer;
}
hr {
  border: 0.1px solid grey;
}
</style>
<script setup></script>
