<template>
  <teleport to="body">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-x drag-disable" @click="closeModal">
          <span @click="closeModal">X</span>
        </div>
        <div class="comment_title">댓글 쓰기</div>
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <textarea class="comment_content"></textarea>
              <div class="comment_btn">
                <button class="comment_cancel" @click="commentCancel">취소</button>
                <button class="comment_reg" @click="commentReg">등록</button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'Modal',
  emits: ['close'],
  setup(props, { emit }) {
    const closeModal = () => {
      emit('close');
    };
    const commentCancel = () =>{
      if (confirm("댓글쓰기를 취소하시겠습니까?")) {
        emit('close');
      } else {
        return false;
      }
    }
    const commentReg = () =>{
      alert("등록 되었습니다.")
      location.reload();
    }


    return { closeModal, commentCancel, commentReg };
  },
});
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9997;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

}

.modal-wrapper {
  width: 500px;
  height: 220px;
  background-color: white;
  border-radius: 20px 0 20px 20px;
}
.modal-x {
  z-index: 100;
  width: 35px;
  height: 40px;
  background-color: white;
  transform: translateX(500px);
  border-radius: 0 6px 6px 0;
  cursor: pointer;
}
.modal-x span {
  font-size: 22px;
  cursor: pointer;
  display: flex;
  justify-content: center;


}
.modal-container {
  text-align: center;
}

.modal-header, .modal-footer {
  /* 스타일 설정 */
}
.comment_title {
  font-size: 19px;
  text-align: center;
  transform: translateY(-25px);
}
.comment_content {
  resize: none;
  border: 1px solid gray;
  width: 90%;
  height: 80px;
  border-radius: 5px;
  padding: 7px;
  font-size: 15px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}
.comment_content:focus {
  outline: gray;
}
.comment_content::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
}
.comment_btn {
  width: 97%;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}
.comment_cancel {
  border: none;
  margin-right: 30px;
  background-color: rgb(248, 179, 60);
  border-radius: 5px;
  width: 60px;
  height: 35px;
  color: white;
  font-size: 18px;
}
.comment_reg {
  border: none;
  background-color: rgb(248, 179, 60);
  margin-right: 10px;
  font-weight: 300;
  border-radius: 5px;
  width: 60px;
  height: 35px;
  color: white;
  font-size: 18px;

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