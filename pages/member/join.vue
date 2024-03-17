<template>
  <div class="container">
    <div class="wrapper">
      <div class="login-top">
        <h1>DeliMap</h1>
      </div>
      <div class="login-bottom">
        <div class="login-id">
          <input type="text" class="login-neccessary" placeholder="아이디">
        </div>
        <div class="login-pw">
          <input type="password" class="login-neccessary" placeholder="비밀번호">
        </div>
        <div class="login-btn">
          <button>로그인</button>
        </div>
        <div class="login-save">
          <input type="checkbox" name="keeplogin">
          <span>로그인 유지</span>
        </div>
        <hr/>
        <div class="find-member">
          <a href="" class="find-id">아이디 찾기</a>
          <span>|</span>
          <a href="" class="find-pw">비밀번호 찾기</a>
          <span>|</span>
          <a href="" class="join">회원가입</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:30px;
  padding-bottom: 30px;
}
.wrapper {
  width: 30vw;
  display:flex;
  flex-direction: column;
}
.login-top {
  text-align: center;
  font-size:38px;
  padding:30px;
  color:rgb(248, 179, 60);
  font-weight: 700;
}
.login-bottom {
  display:flex;
  flex-direction: column;
}
.login-bottom input {
  outline: none;
}
.login-id {
  margin-bottom:10px;
}
.login-neccessary {
  border-bottom:1px solid rgb(218, 218, 218);
  width:100%; 
  padding:10px;
}
.login-btn {
  border:1px solid rgb(247, 160, 8);
  padding: 30px;
  text-align: center;
  font-size:30px;
  margin-top: 50px;
  margin-bottom: 30px;
  background-color: rgb(248, 179, 60);
  color:white;
}
.login-save input {
  width:24px;
  height: 24px;
  border-radius: 10px;
  margin-right:10px;
}
.login-save {
  margin-bottom: 30px;
}
.find-member {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap:30px;
  
}
</style>
