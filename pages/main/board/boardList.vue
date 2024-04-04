<template>
  <teleport to="body">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-x drag-disable" @click="closeModal">
          <span>X</span>
        </div>
        <div class="modal-container">
          <div class="modal-header">
            <div class="board_local">영등포구 여의도동</div>
            <slot name="header">
              <div v-for="(item, i) in board_list" class="board_list">
                <div class="board_list_name">{{item.board_name}}</div>
                <div class="board_list_content">{{item.board_content}}</div>
                <div class="board_list_phone">{{item.board_phone}}</div>
                <div class="board_list_review">리뷰 : 0</div>
                <div class="board_list_img"><img src="@/pages/assets/고양이1.jpeg" alt="이미지"/></div>
                <hr class="list_hr"/>
              </div>
            </slot>
          </div>
<!--          <div class="modal-body">-->
<!--            <slot name="body">기본 내용</slot>-->
<!--          </div>-->

<!--          <div class="modal-footer drag-disable">-->
<!--            <slot name="footer">-->
<!--            </slot>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </teleport>

</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import request from "~/pages/api";
const board_list = ref([]);

export default defineComponent({
  name: 'Modal',
  emits: ['close'],
  async setup(props, { emit }) {
    const closeModal = () => {
          emit('close');
    };

    const res = await request.post('http://localhost:3300/board/list');
    board_list.value = res.data;
    return { closeModal, board_list };
  },
});
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 100000;
  top: 0;
  right: 0;
  height: 100%;
  animation: slide-in 0.6s ease-in-out;
}
.modal-wrapper {
  width: 350px;
  height: 100%;
  background-color: white;

}
.modal-x {
  position: absolute;
  width: 40px;
  height: 40px;
  transform: translateX(-40px);
  background-color: rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  border-radius: 6px 0 0 6px;
  cursor: pointer;
}
.modal-x:hover {
  background-color: rgb(248, 179, 60);
  color: white;

}
.modal-x span {
  font-size: 22px;
  cursor: pointer;
}
.modal-container {
  overflow-y: scroll;
  height: 100%;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}

.modal-container::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
}

.modal-header, .modal-footer {
  /* 스타일 설정 */
}

@keyframes slide-in {
  from {
    transform: translateX(500px);
  }
  to {
    transform: translateX(0);
  }
}

/*----------------------리스트--------------------------*/
.board_local {
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.7);

}
.board_list {
  margin: 30px 0 0 20px;
  height: 250px;
}
.board_list_name {
  font-size: 19px;
  padding-bottom: 5px;
  padding-top: 10px;
  font-weight: 600;
}
.board_list_content {
  font-size: 14px;
}
.board_list_phone {
  display: inline;
}
.board_list_review {
  display: inline;
  margin-left: 10px;
}
.board_list_address{

}
.board_list_img {
  border: 1px solid black;
  width: 250px;
  height: 150px;
  margin: 10px auto 20px auto;
}
.board_list_img img {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size : cover;
}
.list_hr {
  border: 0.3px solid rgba(0, 0, 0, 0.1);
}


.drag-disable {
  -ms-user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  -moz-user-select:none;
  -webkit-touch-callout: none;
}
</style>