<template>
  <teleport to="body">
    <div class="modal-mask" @click.self="closeModal">
      <div class="modal-wrapper">
        <div class="modal-x drag-disable">
          <span @click="closeModal">X</span>
        </div>
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">기본 헤더</slot>
          </div>
          <div class="modal-body">
            <slot name="body">기본 내용</slot>
          </div>

          <div class="modal-footer drag-disable">
            <slot name="footer">
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

    return { closeModal };
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
  height: 600px;
  background-color: white;
  border-radius: 20px;
}
.modal-x {
  text-align: right;
  z-index: 100;
  transform: translate(-30px, 10px);
}
.modal-x span {
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  float: right;
  text-align: right;


}
.modal-container {
  overflow-y: scroll;
  height: 550px;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}

.modal-container::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
}

.modal-header, .modal-footer {
  /* 스타일 설정 */
}
.modal-body {
  margin-top: 50px;
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