<template>
<div id="app">
<button @click="showModal = true">모달 열기</button>
<Modal v-if="showModal" @close="showModal = false">

  <template v-slot:header>
    <label class="member_profile">
      <span class="member_profile-img"></span>
      <span class="member_nickname">단무지</span>
    </label>
  </template>
  <template v-slot:body>
    <div class="deli_info drag-disable">
      <lable>
        <span class="backIcon"><img src="@/pages/assets/icons8-back-64.png" alt="이전"></span>
        <div class="deli-img">여기는 이미지 공간</div>
        <span class="nextIcon"><img src="@/pages/assets/icons8-forward-64.png" alt="다음"></span>
      </lable>
    </div>
    <div class="deli_content">{{deli_content}}
      <a href="#" v-if="deli_content.length > 50">...더보기</a>
    </div>
    <div class="deli_tag">
      <div class="deli_hashtag">#맛집 #고기 #분위기맛집</div>
      <div class="deli_pin drag-disable">
        <img src="@/pages/assets/icons8-mappin-40.png" alt="핀">
        <span class="deli_pin_between">ㅡ</span>
        <img src="@/pages/assets/icons8-mappin-40.png" alt="핀">
        <span class="deli_pin_between">ㅡ</span>
        <img src="@/pages/assets/icons8-mappin-40.png" alt="핀">
      </div>
    </div>
  </template>
  <template v-slot:footer>
  </template>
</Modal>
</div>
</template>
<script>
import Modal from "./board/modal.vue";
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      deli_content: '내용내용 여긴 식당 내용 여긴 식당 내용내용내용 여긴 식당 내용내용내용 여긴 식당 내용내용내용 여긴 식당 내용내용내용 여긴 식당 내용',
    };
  },
});
</script>

<style>
.member_profile {
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 20px;
}
.member_profile-img {
  border: 1px solid black;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  display: inline-block;

}
.member_nickname {
  margin-left: 20px;
}
.deli_info lable{
  display: flex;
  align-items: center;
}
.deli-img {
  border: 1px solid black;
  border-radius: 20px;
  margin: 0 auto;
  width: 80%;
  height: 250px;
}
.backIcon img{
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.nextIcon img{
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.deli_content {
  width: 80%;
  margin: 20px auto;
  padding: 0 6px ;
}
.deli_content a {
  color: grey;
}
.deli_tag {
  width: 80%;
  margin: 0 auto 20px auto;
}
.deli_hashtag {
  color: rgba(0, 0, 0, 0.34);
  padding: 0 0 10px 10px;
}
.deli_pin{
  display: flex;
  justify-content: space-between;
}
.deli_pin_between {
  font-size: 20px;
  color: rgba(128, 128, 128, 0.5);
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