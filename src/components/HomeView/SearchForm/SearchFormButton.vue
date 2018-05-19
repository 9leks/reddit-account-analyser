<template>
  <button class="button">ANALYSE</button>
</template>

<script>
export default {
  name: 'SearchFormButton',
}
</script>

<style lang="scss" scoped>
.button {
  padding: 0 0.7em;
  border: 1px solid rgba(22, 22, 22, 0.507);
  border-left: 0;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background: #363636a2;
  color: rgb(87, 255, 233);
  font-size: 1.3em;
  font-family: 'Source Sans Pro';
  cursor: pointer;
  transition: color, background, 0.2s ease-in-out;

  &:focus {
    outline: none;
  }

  &:hover {
    outline: 2px solid rgba(24, 143, 172, 0.384);
    background: #2a2c2cef;
    color: #f0f0f0ef;
  }
}
</style>
