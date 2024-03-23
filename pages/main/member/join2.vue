<template>
  <div class="container">
    <div class="wrap-join">
      <div class="wrapper">
      <div class="login-top">
        <span>DeliMap</span>
      </div>
      <div class="login-bottom">
        <div class="join-Form">
          <label for="join-id" class="label-text">아이디</label>
          <input type="text" id="join-id" class="join-id" placeholder="아이디를 입력해주세요">
          <div class="id_check_memo">아이디는 영문+숫자 포함 6~12자 이하</div>
          <div class="join-id-btn">
            <button>아이디중복확인</button>
          </div>
        </div>
        <div class="join-Form">
          <label for="join-pw" class="label-text">비밀번호</label>
          <input type="password" id="join-pw" class="join-pw" placeholder="비밀번호를 입력해주세요">
          <div class="pw_check_memo">비밀번호는 영문+숫자+특수기호 포함 8자 이상</div>
        </div>
        <div class="join-Form">
          <label for="join-name" class="label-text">이름</label>
          <input type="text" id="join-name" class="join-name" placeholder="이름을 입력해주세요">
        </div>
        <div class="join-Form">
          <label for="join-nickname" class="label-text">닉네임</label>
          <input type="text" id="join-nickname" class="join-nickname" placeholder="닉네임을 입력해주세요">
        </div>
        <div class="join-Form">
          <label for="join-phone" class="label-text">휴대폰번호</label>
          <input type="text" id="join-phone" class="join-phone" placeholder="전화번호를 입력해주세요">
          <input type="text" class="join-phone-cert" placeholder="인증번호">
          <span class="phone-cert-btn">
            <button>인증번호 확인</button>
          </span>
        </div>
        <div class="join-Form">
          <label for="join-email" class="label-text">이메일</label>
          <input type="text" id="join-email" class="join-email" placeholder="이메일을 입력해주세요">
          <div class="email_check_memo">올바른 이메일 형식이 아닙니다. 예시) example@email.com</div>
        </div>
        <div class="join-btn">
          <button>회원가입</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Ultra&display=swap');
.container {
  display: flex;
  margin: 0 auto;
  padding-top:30px;
  padding-bottom: 30px;
}
.wrap-join {
  display: flex;
  border: 1px solid #c0c0c0 ;
  width: 700px;
  margin: 0 auto;
  border-radius: 20px;

}
.wrapper {
  display: flex;
  margin: 0 auto;
  max-width: 400px;
  flex-direction: column;
}
.login-top {
  padding:40px 0;
  color:rgb(248, 179, 60);
  text-align: center;
}
.login-top span{
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
.join-Form {
  margin-bottom:10px;
}
.join-id-btn {

}
.join-id-btn>button {
  width: 100%;
  background-color: rgb(248, 179, 60);
  color: white;
  height: 45px;
  border-radius: 5px;
}
.join-id {
  width: 100%;
  height: 45px;
  padding: 10px 10px 10px 15px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  color: #696969;
  margin-top: 5px;
  margin-bottom:5px;
  display: inline-block;
}
.join-id:focus {
  border: none;
  outline: 2px solid rgb(248, 179, 60);
}
.join-id::placeholder {
  color: #A2A2A1;
  font-size: 14px;
}
.id_check_memo {
  font-size: 12px;
  margin-bottom: 5px;
  margin-left: 5px;
}
.join-pw {
  width: 100%;
  height: 45px;
  padding: 10px 10px 10px 15px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  color: #696969;
  margin-bottom:5px;
  margin-top: 5px;
}
.join-pw:focus {
  border: none;
  outline: 2px solid rgb(248, 179, 60);
}
.join-pw::placeholder {
  color: #A2A2A1;
  font-size: 14px;
}
.pw_check_memo {
  font-size: 12px;
  margin-bottom: 5px;
  margin-left: 5px;
}
.join-name {
  width: 100%;
  height: 45px;
  padding: 10px 10px 10px 15px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  color: #696969;
  margin-bottom:10px;
  margin-top: 5px;
}
.join-name:focus {
  border: none;
  outline: 2px solid rgb(248, 179, 60);
}
.join-name::placeholder {
  color: #A2A2A1;
  font-size: 14px;
}
.join-nickname {
  width: 100%;
  height: 45px;
  padding: 10px 10px 10px 15px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  color: #696969;
  margin-bottom:10px;
  margin-top: 5px;
}
.join-nickname:focus {
  border: none;
  outline: 2px solid rgb(248, 179, 60);
}
.join-nickname::placeholder {
  color: #A2A2A1;
  font-size: 14px;
}
.join-phone {
  width: 100%;
  height: 45px;
  padding: 10px 10px 10px 15px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  color: #696969;
  margin-bottom:10px;
  margin-top: 5px;
}
.join-phone:focus {
  border: none;
  outline: 2px solid rgb(248, 179, 60);
}
.join-phone::placeholder {
  color: #A2A2A1;
  font-size: 14px;
}
.join-phone-cert {
  width: 62%;
  height: 45px;
  padding: 10px 10px 10px 15px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
}
.phone-cert-btn>button{
  background-color: rgb(248, 179, 60);
  color: white;
  width: 130px;
  height: 45px;
  margin-left: 22px;
  border-radius: 5px;
}

.join-email {
  width: 100%;
  height: 45px;
  padding: 10px 10px 10px 15px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  color: #696969;
  margin-bottom:5px;
  margin-top: 5px;
}
.join-email:focus {
  border: none;
  outline: 2px solid rgb(248, 179, 60);
}
.join-email::placeholder {
  color: #A2A2A1;
  font-size: 14px;
}
.email_check_memo {
  font-size: 12px;
  margin-bottom: 5px;
  margin-left: 5px;
}
.join-btn {
  width: 100%;
  border:1px solid rgb(247, 160, 8);
  padding: 8px;
  margin-top: 50px;
  margin-bottom: 35px;
  text-align: center;
  background-color: rgb(248, 179, 60);
  cursor: pointer;
  border-radius: 4px;
}
.join-btn button {
  font-size: 25px;
  color:white;
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
  margin-right:10px;
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
/*-------------------------------------------------------------------------------------------------------------------------------*/
.label-text {
  margin-left: 7px;
  font-size: 15px;
  font-weight: 600;
}

</style>
<script setup>
</script>
