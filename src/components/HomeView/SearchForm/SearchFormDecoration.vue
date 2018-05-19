<template>
  <button class="decoration"
          disabled>/u/</button>
</template>

<script>
export default {
  name: 'SearchFormDecoration',
}
</script>

<style lang="scss" scoped>
.decoration {
  padding: 0 1em;
  border: 1px solid rgba(22, 22, 22, 0.507);
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background: radial-gradient(
    circle at right,
    rgba(255, 67, 0, 1) 10%,
    rgba(255, 68, 0, 0.781) 90%
  );
  color: rgb(235, 240, 240);
  font-size: 1.3em;
  font-weight: 700;
}
</style>
