<template>
  <div class="wrapper-modal">
    <div class="modal-noti">
      <i class="fas fa-check-circle modal-noti__img"></i>
      <p class="modal-noti__content">{{ modalContent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalContent: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-modal {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  z-index: 999;

  .modal-noti {
    padding-top: 20px;
    box-sizing: border-box;
    width: 400px;
    height: 230px;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    animation: fadeInOut 0.5s;

    &__img {
      font-size: 100px;
      color: #00bfa5;
    }

    &__content {
      color: #fff;
      font-weight: bold;
      font-size: 18px;
    }
  }
}
</style>
