<script setup>
import join2 from "~/pages/main/member/join2.vue";

const router = useRouter();
const goJoin = () => {
  router.addRoute({ name: "join2", path: "/join2", component: join2 });
  router.push("/join2");
};
</script>
<template>
  <div class="container">
    <div class="wrapper">
      <div class="login-top">
        <span>DeliMap</span>
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
          <button @click="goJoin" class="join">회원가입</button>
        </div>
        <div class="find">
          <button class="find-id">아이디 찾기</button>
          <span>|</span>
          <button class="find-pw">비밀번호 찾기</button>
        </div>
      </div>
      <div class="kakaoLogin">
        <label for="login-chk">
          <span
            ><img src="@/pages/assets/icons8-kakao-30.png" alt="카카오 로그인"
          /></span>
          <button>카카오 로그인</button>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ultra&display=swap");
.container {
  display: flex;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
}
.wrapper {
  display: flex;
  margin: 0 auto;
  max-width: 330px;
  flex-direction: column;
  position: relative;
}
.login-top {
  padding: 40px 0;
  color: rgb(248, 179, 60);
  text-align: center;
}
.login-top span {
  margin: 0 auto;
  font-size: 60px;
  font-family: "Ultra", serif;
  font-style: normal;
}
.login-bottom {
  flex-direction: column;
}
.login-bottom input {
  outline: none;
}
.login-id {
  margin-bottom: 10px;
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
  border-radius: 4px;
  cursor: pointer;
}
.login-btn button {
  font-size: 25px;
  color: white;
  text-align: center;
}
.login-save {
  margin: 10px 5px 30px 5px;
  display: flex;
  justify-content: space-between;
}
.login-save label {
  display: flex;
  align-items: center;
}
.login-save span {
  font-size: 14px;
}
.login-save input {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-right: 7px;
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
.find {
  display: flex;
  justify-content: space-around;
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
.kakaoLogin {
  width: 100%;
  height: 54px;
  padding: 8px;
  margin-top: 50px;
  margin-bottom: 15px;
  text-align: center;
  background-color: #fee500;
  border-radius: 4px;
  position: relative;
}
.kakaoLogin label {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.kakaoLogin img {
  display: inline;
  width: 25px;
  height: 25px;
  margin-right: 5px;
}
.kakaoLogin button {
  text-align: center;
  color: rgba(0, 0, 0, 0.85);
  line-height: 37px;
  font-weight: 600;
}
</style>
