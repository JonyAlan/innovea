<template>
  <div class="fa-spin2 mt-4">
    <img src="../assets/icons/spinner.svg" class="ico-45 fa-spin" /> 
  </div>
</template>
<script>
export default {
  name: "SpinnerLoad",
  props: {
    color: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
<style>

  .ico-45 {
    width: 45px !important; 
  } 
  .fa-spin {
    -webkit-animation: fa-spin 2s infinite linear;
    animation: fa-spin 2s infinite linear
  }
  @keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>