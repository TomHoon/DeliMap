<script setup lang="ts">
import login1 from './member/login1.vue'
import Modal from "~/pages/main/board/modal.vue";
import boardInsert from "./board/boardInsert.vue";
import { ref} from 'vue';
const boardModal = ref(false);
const reviewModal = ref(false);
const deli_content = ref('내용 여긴 식당리뷰 내용');
const board_address = ref('서울특별시 영등포구 여의도동 123번길 45');
const showFavorite = ref(true);
const showFavoriteRed = ref(false);
const showNotSave = ref(true);
const showIsSave = ref(false);
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
const copyAddress =  () => {
  try {
    navigator.clipboard.writeText(board_address.value);
    // 복사 성공 시 알림 표시
    alert('주소가 복사되었습니다!');
  } catch {
    // 복사 실패 시 알림 표시
    alert('주소복사에 실패했습니다!');
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
                <button class="btn-border" @click="boardModal = true;">게시판</button>
                <button class="btn-border">채팅</button>
                <button class="btn-border">내정보수정</button>
                <button class="btn-border" @click="tastyInsert">맛집추가</button>
                <button class="btn-border" @click="goLogin">로그인(임시)</button>
            </div>
        </div>
    </div>
    <Modal v-if="boardModal" @close="boardModal = false">
      <template v-slot:header>
        <div class="board_wrapper">
          <div class="board_image">
            <img src="@/pages/assets/고양이1.jpeg" alt="사진">
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div class="board_title">
          <span>고양시 고양이</span>
        </div>
        <div class="board_content">
          <span>고양이가 귀엽고 음식이 친절해요</span>
        </div>
        <div class="board_score">
          <label>
          <span class="board_score_left">
            <img src="../assets/free-icon-save-instagram-5662990.png" v-show="showNotSave"
                 @click="showNotSave = false; showIsSave = true" alt="저장" title="저징">
            <img src="../assets/free-icon-save-instagram-5668020.png" v-show="showIsSave"
                 @click="showNotSave = true; showIsSave = false" alt="저장" title="저장">
            <span class="board_share" @click="copyUrl">
              <img src="../assets/icons8-share-24.png" alt="공유하기" title="공유하기">
            </span>
          </span>
            <span class="board_score_right">
            <img src="../assets/icons8-binstar-48.png" id="score1" class="score1" alt="별점">
            <img src="@/pages/assets/icons8-binstar-48.png" class="score2" alt="별점">
            <img src="@/pages/assets/icons8-binstar-48.png" class="score3" alt="별점">
            <img src="@/pages/assets/icons8-binstar-48.png" class="score4" alt="별점">
            <img src="@/pages/assets/icons8-binstar-48.png" class="score5" alt="별점">
            <span>5점</span>
          </span>
          </label>
        </div>
        <div class="board_address">
          <img src="@/pages/assets/icons8-map-marker-24.png" alt="주소">
          <span>{{board_address}}<button class="addressCopy" @click="copyAddress">복사</button></span>
        </div>
        <div class="board_phone">
          <img src="@/pages/assets/icons8-phone-24.png" alt="전화 번호">
          <span>02-1234-9876</span>
        </div>
        <div class="board_review">
          <button class="board_review_btn" @click="reviewModal = true; boardModal = false;">리뷰 쓰기</button>
        </div>

        <div class="borderLine"/>

<!--      </template>-->
<!--      <template v-slot:header>-->
        <label class="member_profile">
          <span class="member_profile-img"></span>
          <span class="member_nickname">단무지</span>
          <span class="member_date">2024-12-31</span>

        </label>
<!--      </template>-->
<!--      <template v-slot:body>-->
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
          </div>
          <div class="borderLine"/>

          <div class="comment_body">
            <div class="comment_title">방문자 리뷰</div>
            <label class="comment_member_profile">
              <span class="comment_member_profile-img"></span>
              <span class="comment_member_nickname">단무지</span>
              <span class="comment_member_date">2024-12-31</span>
            </label>
            <div class="comment_content">
              댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용
            </div>
            <label class="comment_member_profile">
              <span class="comment_member_profile-img"></span>
              <span class="comment_member_nickname">단무지</span>
              <span class="comment_member_date">2024-12-31</span>
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

<!--  <Modal v-if="reviewModal" @close="reviewModal = false">
    <template v-slot:header>
      <div class="board_wrapper">
        <div class="board_image">
          <img src="@/pages/assets/고양이1.jpeg" alt="전화 번호">
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="board_title">
        <span>고양시 고양이</span>
      </div>
      <div class="board_content">
        <span>고양이가 귀엽고 음식이 친절해요</span>
      </div>
      <div class="board_score">
        <label>
          <span class="board_score_left">
            <img src="../assets/free-icon-save-instagram-5662990.png" v-show="showNotSave"
                 @click="showNotSave = false; showIsSave = true" alt="저장" title="저징">
            <img src="../assets/free-icon-save-instagram-5668020.png" v-show="showIsSave"
                 @click="showNotSave = true; showIsSave = false" alt="저장" title="저장">
            <span class="board_share" @click="copyUrl">
              <img src="../assets/icons8-share-24.png" alt="공유하기" title="공유하기">
            </span>
          </span>
          <span class="board_score_right">
            <img src="../assets/icons8-binstar-48.png" id="score1" class="score1" alt="별점">
            <img src="@/pages/assets/icons8-binstar-48.png" class="score2" alt="별점">
            <img src="@/pages/assets/icons8-binstar-48.png" class="score3" alt="별점">
            <img src="@/pages/assets/icons8-binstar-48.png" class="score4" alt="별점">
            <img src="@/pages/assets/icons8-binstar-48.png" class="score5" alt="별점">
            <span>5점</span>
          </span>
        </label>
      </div>
      <div class="board_address">
        <img src="@/pages/assets/icons8-map-marker-24.png" alt="주소">
        <span>서울특별시 영등포구 여의도동 123번길 45</span>
      </div>
      <div class="board_phone">
        <img src="@/pages/assets/icons8-phone-24.png" alt="전화 번호">
        <span>02-1234-9876</span>
      </div>
    </template>
  </Modal>-->

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
    box-shadow: 0 0 5px #444;
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
  width: 85%;
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
.member_date {
  margin-left: auto;
  font-size: 14px;
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
  width: 94%;
}
.comment_member_profile-img {
  border: 1px solid black;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.comment_member_date {
  margin-left: auto;
  font-size: 14px;
}
.comment_content {
  margin-left: 10px;
  margin-bottom: 20px;
}

/*---------------------------게시판-------------------------*/

.board_image {
  width: 500px;
  height: 140px;

}
.board_image img {
  border-radius: 20px 20px 0 0;
  width: 500px;
  height: 180px;
}
.board_title {
  margin: 20px 0 10px 15px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px
}
.board_content {
  width: 85%;
  margin: 15px;
  color: gray;
  font-size: 15px;
}
.board_share {

}
.board_share img{
  cursor: pointer;

}
.board_score label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.board_score img{
  display: inline;
  width: 30px;
  height: 30px;
}
.board_score span {
  font-size: 20px;
  margin: 0 20px 0 10px;
}
.board_score_left {
  padding-left: 5px;
}
.board_address {
  margin: 30px 15px 15px 15px;
}
.board_address img {
  display: inline-block;
  margin-right: 10px;
}
.addressCopy {
  margin-left: 15px;
  color: gray;
  font-size: 15px;
}
.board_phone {
  margin: 30px 15px 15px 15px;
}
.board_phone img{
  display: inline-block;
  margin-right: 10px;
}
.board_review {
  text-align: right;
  margin-right: 40px;
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