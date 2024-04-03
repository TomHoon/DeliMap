<script setup lang="ts">
import { ref } from 'vue';
const image = ref('');
const insert_title = ref('');
const insert_content = ref('');
const insert_address = ref('');
const insert_phone = ref('');
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
        <div class="tasty_file">
          <label for="insert_file">사진<span>(대표이미지 1장을 입력해주세요)</span></label>
          <input type="file" id="insert_file" class="insert_file drag-disable" accept="image/*" @change="onFileChange">
        </div>
        <div class="tasty_title">
          <label for="insert_title">맛집 이름</label>
          <input type="text" id="insert_title" class="insert_title" autocomplete="off" v-model="insert_title" placeholder="맛집 이름을 입력해주세요">
        </div>
        <div class="tasty_content">
          <label for="insert_content">맛집 설명</label>
          <textarea id="insert_content" class="insert_content" autocomplete="off" v-model="insert_content" placeholder="맛집 설명을 입력해주세요"></textarea>
        </div>
        <div class="tasty_address">
          <label for="insert_address">맛집 주소</label>
          <input type="text" id="insert_address" class="insert_address" autocomplete="off" v-model="insert_address" placeholder="맛집 주소를 입력해주세요">
        </div>
        <div class="tasty_phone">
          <label for="insert_phone">맛집 전화번호</label>
          <input type="text"  id="insert_phone" class="insert_phone" maxlength="13" autocomplete="off" v-model="insert_phone" placeholder="맛집 전화번호를 입력해주세요">
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
    <div class="show_wrapper drag-disable">
      <div class="show_tasty_info">
        <div class="show_insert_file">
          <img v-if="image" :src="image" alt="대표이미지" class="insert_image drag-disable">
        </div>
        <div class="show_insert_title">
          <span>{{insert_title}}</span>
        </div>
        <div class="show_insert_content">
          <span>{{insert_content}}</span>
        </div>
        <div class="show_insert_score">
          <label>
            <span class="show_insert_score_left">
              <img src="@/pages/assets/free-icon-save-instagram-5662990.png" alt="저장" title="저징">
              <span class="show_insert_share" >
                <img src="@/pages/assets/icons8-share-24.png" alt="공유하기" title="공유하기">
              </span>
            </span>
            <span class="show_insert_score_right">
              <img src="@/pages/assets/icons8-binstar-48.png" class="score1" alt="별점">
              <img src="@/pages/assets/icons8-binstar-48.png" class="score2" alt="별점">
              <img src="@/pages/assets/icons8-binstar-48.png" class="score3" alt="별점">
              <img src="@/pages/assets/icons8-binstar-48.png" class="score4" alt="별점">
              <img src="@/pages/assets/icons8-binstar-48.png" class="score5" alt="별점">
              <span>0점</span>
            </span>
          </label>
        </div>
        <div class="show_insert_address">
          <img src="@/pages/assets/icons8-map-marker-24.png" alt="주소" v-show="insert_address != ''">
          <span>{{insert_address}}</span>
        </div>
        <div class="show_insert_phone">
          <img src="@/pages/assets/icons8-phone-24.png" alt="전화 번호" v-show="insert_phone != ''">
          <span>{{insert_phone}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-width: 425px;
}
.wrapper {
  border: 1px solid rgb(248, 179, 60);
  border-radius: 20px;
  padding: 20px;
  display: inline-block;
  width: 50%;
}
.tasty_info {
  display: inline-block;
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
.tasty_content {
  margin: 15px 15px 15px 20px;
}
.tasty_content label {
  font-size: 17px;
}
.insert_content {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 15px 5px 5px 5px;
  height: 70px;
  resize: none;
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}
.insert_content::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
}
.insert_content:focus {
  outline: none;
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
.insert_phone:focus {
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
  height: 180px;
  border-radius: 20px 20px 0 0 ;
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
.show_wrapper {
  display: none;
}
/*-------------------------------- show -----------------------------------*/
@media (min-width: 1100px) {

  .show_wrapper {
    width: 50%;
    display: flex;
    align-items: center;
  }
  .show_tasty_info {
    border: 1px solid rgb(248, 179, 60);
    border-radius: 20px;
    width: 500px;
    height: 600px;
    margin: 0 auto;
  }
  .show_insert_file {
    border-radius: 20px 20px 0 0 ;
    width: 498px;
    height: 180px;
    border-bottom: 1px solid rgb(248, 179, 60);
  }
  .show_insert_title {
    margin: 20px 0 10px 15px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px
  }
  .show_insert_content {
    width: 85%;
    margin: 15px;
    color: gray;
    font-size: 15px;
  }
  .show_insert_score_left {
    padding-left: 20px;
  }
  .show_insert_score label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .show_insert_score img{
    display: inline;
    width: 30px;
    height: 30px;
  }
  .show_insert_score span {
    font-size: 20px;
    margin: 0 20px 0 10px;
  }
  .show_insert_address {
    margin: 30px 15px 15px 15px;
  }
  .show_insert_address img {
    display: inline-block;
    margin-right: 10px;
  }
  .show_insert_phone {
    margin: 30px 15px 15px 15px;
  }
  .show_insert_phone img{
    display: inline-block;
    margin-right: 10px;
  }
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