<script setup lang="ts">
import { ref } from 'vue';
const image = ref('');
const goInsert = () => {
  alert('등록');
}
const onFileChange: (event: Event) => void = (event) => {
  const file = (event.target as HTMLInputElement).files![0];
  const reader = new FileReader();

  reader.onload = (e) => {
    image.value = e.target!.result as string;
  };

  reader.readAsDataURL(file);
};
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <div class="tasty_info">
        <div class="mainTitle">DeliMap 정보입력</div>
        <div class="tasty_title">
          <label for="insert_title">맛집 이름</label>
          <input type="text" id="insert_title" class="insert_title" autocomplete="off" placeholder="맛집 이름을 입력해주세요">
        </div>
        <div class="tasty_address">
          <label for="insert_address">맛집 주소</label>
          <input type="text" id="insert_address" class="insert_address" autocomplete="off" placeholder="맛집 주소를 입력해주세요">
        </div>
        <div class="tasty_phone">
          <label for="insert_phone">맛집 전화번호</label>
          <input type="text" id="insert_phone" class="insert_phone" autocomplete="off" placeholder="맛집 전화번호를 입력해주세요">
        </div>
        <div class="tasty_time">
          <label for="insert_time">영업시간</label>
          <span>월요일 : </span><input type="text" id="insert_time" class="insert_time" autocomplete="off" placeholder="예) 09:00 ~ 22:00">
          <span>화요일 : </span><input type="text" id="insert_time" class="insert_time" autocomplete="off" placeholder="예) 09:00 ~ 22:00">
          <span>수요일 : </span><input type="text" id="insert_time" class="insert_time" autocomplete="off" placeholder="예) 09:00 ~ 22:00">
          <span>목요일 : </span><input type="text" id="insert_time" class="insert_time" autocomplete="off" placeholder="예) 09:00 ~ 22:00">
          <span>금요일 : </span><input type="text" id="insert_time" class="insert_time" autocomplete="off" placeholder="예) 09:00 ~ 22:00">
          <span>토요일 : </span><input type="text" id="insert_time" class="insert_time" autocomplete="off" placeholder="예) 11:00 ~ 20:00">
          <span>일요일 : </span><input type="text" id="insert_time" class="insert_time" autocomplete="off" placeholder="예) 휴무일">
        </div>
        <div class="tasty_file">
          <label for="insert_file">사진<span>(대표이미지 1장을 입력해주세요)</span></label>
          <input type="file" id="insert_file" class="insert_file drag-disable" accept="image/*" @change="onFileChange">
          <img v-if="image" :src="image" alt="대표이미지" class="insert_image drag-disable">
        </div>
        <div class="tasty_num">
          <label for="insert_num">사업자 번호</label>
          <input type="text" id="insert_num" class="insert_num" autocomplete="off" placeholder="사업자 번호를 입력해주세요">
        </div>
        <div class="goInsert">
          <button @click="goInsert" class="goInsert_btn">등록</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.container {
}
.wrapper {
  border: 1px solid rgb(248, 179, 60);
  border-radius: 20px;
  width: 700px;
  padding: 20px;
}
.mainTitle {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
.tasty_title {
  margin: 15px 15px 15px 20px;
}
.tasty_title label {
  font-size: 17px;
}
.insert_title {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 3px;
}
.insert_title:focus {
  outline: none ;
}
.tasty_address {
  margin: 15px 15px 15px 20px;
}
.tasty_address label {
  font-size: 17px;
}
.insert_address {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 3px;
}
.insert_address:focus {
  outline: none ;
}
.tasty_phone {
  margin: 15px 15px 15px 20px;
}
.tasty_phone label {
  font-size: 17px;
}
.insert_phone {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 3px;
}
.insert_phone:focus {
  outline: none ;
}
.tasty_time {
  margin: 15px 15px 15px 20px;
}
.tasty_time label {
  font-size: 17px;
  display: block;
}
.tasty_time span {
  font-size: 14px;
}
.insert_time {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 80%;
  padding: 3px;
  font-size: 15px;
}
.insert_time::placeholder {
  font-size: 15px;
}
.insert_time:focus {
  outline: none ;
}
.tasty_file {
  margin: 15px 15px 15px 20px;
}
.tasty_file span {
  color: gray;
  font-size: 15px;
}
.tasty_file label {
  font-size: 17px;
}
.insert_file {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 3px;
}
.insert_file:focus {
  outline: none ;
}
.insert_image {
  width: 100%;
  height: 200px;
}
.tasty_num {
  margin: 15px 15px 15px 20px;
}
.tasty_num label {
  font-size: 17px;
}
.insert_num {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 3px;
}
.insert_num:focus {
  outline: none ;
}
.goInsert {
  text-align: center;
  margin: 20px auto;
}
.goInsert_btn {
  background-color: rgb(248, 179, 60);
  font-size: 20px;
  color: white;
  border-radius: 20px;
  width: 100px;
  height: 40px;
  margin-top: 30px;
}
/*드래그 금지*/
.drag-disable {
  -ms-user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  -moz-user-select:none;
  -webkit-touch-callout: none;
}
</style>