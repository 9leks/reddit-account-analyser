<template>
  <button class="button"
          disabled>/u/</button>
</template>

<script>
export default {
  name: 'SearchFormDecoration',
}
</script>

<style lang="scss" scoped>
.button {
  padding: 0 1em;
  border: 1px solid rgba(22, 22, 22, 0.507);
  border-right: 0;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background: radial-gradient(
    circle at right,
    #e21cc1 10%,
    rgba(203, 28, 226, 0.589) 90%
  );
  color: rgb(235, 240, 240);
  font-size: 1.3em;
  font-family: 'Source Sans Pro';
}
</style>
