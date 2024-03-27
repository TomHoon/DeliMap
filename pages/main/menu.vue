<script setup lang="ts">
import login1 from './member/login1.vue'
import Modal from "~/pages/main/board/modal.vue";
import boardInsert from "./board/boardInsert.vue";
import { ref } from 'vue';

const boardModal = ref(false);
const reviewModal = ref(false);
const deli_content = ref('내용 여긴 식당내용');
const showFavorite = ref(true);
const showFavoriteRed = ref(false);

const copyUrl =  () => {
  const url: string = location.href;
  try {
    navigator.clipboard.writeText(url);
    // 복사 성공 시 알림 표시
    alert('URL이 복사되었습니다!');
  } catch {
    // 복사 실패 시 알림 표시
    alert('URL 복사에 실패했습니다!');
  }
};

const router = useRouter()
const goLogin = () => {
  router.addRoute({ name: 'login1', path: '/login1', component: login1 });
  router.push('/login1')
}
const tastyInsert = () => {
  router.addRoute({ name: 'boardInsert', path: '/boardInsert', component: boardInsert });
  router.push('/boardInsert')
}
</script>
<template>
    <div>
        <div class="menu-btns">
            <div class="btns-wrapper">
                <button class="btn-border active">지도</button>
                <button class="btn-border" @click="boardModal = true">게시판</button>
                <button class="btn-border">채팅</button>
                <button class="btn-border">내정보수정</button>
                <button class="btn-border" @click="tastyInsert">맛집추가</button>
                <button class="btn-border" @click="goLogin">로그인(임시)</button>
            </div>
        </div>
    </div>
    <Modal v-if="boardModal" @close="boardModal = false">

      <template v-slot:header>
        <label class="member_profile">
          <span class="member_profile-img"></span>
          <span class="member_nickname">단무지</span>
        </label>
      </template>
      <template v-slot:body>
        <div class="deli_info drag-disable">
          <label>
            <span class="backIcon"><img src="../assets/icons8-back-64.png" alt="이전" title="이전"></span>
            <span class="deli-img"></span>
            <span class="nextIcon"><img src="../assets/icons8-forward-64.png" alt="다음" title="다음"></span>
          </label>
        </div>
        <div class=" deli_body">
          <div class="deli_content">{{ deli_content }}
            <a href="#" v-if="deli_content.length > 50">...더보기</a>
          </div>
          <div class="deli_tag">
            <div class="deli_hashtag">#맛집 #고기 #분위기</div>
            <div class="deli_pin drag-disable">
              <img src="../assets/icons8-mappin-40.png" alt="핀">
              <span class="deli_pin_between">ㅡ</span>
              <img src="../assets/icons8-mappin-40.png" alt="핀">
              <span class="deli_pin_between">ㅡ</span>
              <img src="../assets/icons8-mappin-40.png" alt="핀">
            </div>
          </div>
          <div class="deli_favorite drag-disable">
            <img src="../assets/icons8-favorite-24.png" v-show="showFavorite"
                 @click="showFavorite = false; showFavoriteRed = true" alt="좋아요" title="좋아요">
            <img src="../assets/icons8-favorite_red-24.png" v-show="showFavoriteRed"
                 @click="showFavorite = true; showFavoriteRed = false" alt="좋아요" title="좋아요">
            <div class="deli_share" @click="copyUrl">
              <img src="../assets/icons8-share-24.png" alt="공유하기" title="공유하기">
            </div>
            <div class="deli_review">
              <button class="deli_review_btn" @click="reviewModal = true; boardModal = false">리뷰 쓰기</button>
            </div>
          </div>
          <div class="borderLine"/>

          <div class="comment_body">
            <div class="comment_title">방문자 리뷰</div>
            <label class="comment_member_profile">
              <span class="comment_member_profile-img"></span>
              <span class="comment_member_nickname">단무지</span>
            </label>
            <div class="comment_content">
              댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용
            </div>
            <label class="comment_member_profile">
              <span class="comment_member_profile-img"></span>
              <span class="comment_member_nickname">단무지</span>
            </label>
            <div class="comment_content">
              댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
      </template>
    </Modal>

  <Modal v-if="reviewModal" @close="reviewModal = false">
    <template v-slot:header>
      <label class="member_profile">
        <span class="member_profile-img"></span>
        <span class="member_nickname">단무지</span>
      </label>
    </template>
  </Modal>

</template>

<style scoped>
.menu-btns {
    position: absolute;
    top:20px;
    right:100px;
    z-index:99999;
}
.menu-btns .active{
    color: white;
    background-color:LightSkyBlue;
}
.menu-btns .btns-wrapper {
    display: flex;
    background: white;
    /* padding:10px; */
    box-shadow: 0px 0px 5px #444;
    border-radius: 10px;
    padding:5px;
}
.menu-btns ul li{
    margin-left: 20px;
}
.btn-border {
    /* box-shadow: 0px 0px 5px #444; */
    padding:10px;
    border-radius: 10px;
}

/*----------------------------모 달 창--------------------------------------*/
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
.deli_info label{
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
.deli_body {
  margin: 0 auto;
}
.deli_content {
  width: 80%;
  margin: 10px auto 5px auto;
  padding-left: 10px;
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
.deli_favorite {
  display: flex;
  margin: 0 auto;
  padding-left: 10px;
  width: 80%;
}
.deli_favorite img{
  cursor: pointer;
}
.deli_share {
  margin-left: 10px;
}
.deli_review {
  display: flex;
  justify-content: right;
  margin-left: auto;
}
.deli_review_btn {


}
.borderLine {
  border: rgba(105, 105, 105, 0.5) 7px solid;
  margin: 20px 0;
}
.comment_body {
  width: 80%;
  margin: 0 auto;
}
.comment_title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}
.comment_member_profile {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.comment_member_profile-img {
  border: 1px solid black;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.comment_content {
  margin-left: 10px;
  margin-bottom: 20px;
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