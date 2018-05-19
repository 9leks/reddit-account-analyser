<template>
  <input class="input"
         type="text"
         autocomplete="off">
</template>

<script>
export default {
  name: 'SearchFormInputField',
}
</script>

<style lang="scss" scoped>
.input {
  padding: 0.5em 0.8em;
  width: 30em;
  border: 1px solid rgba(22, 22, 22, 0.507);
  border-right: 0;
  border-left: 0;
  border-radius: 0;
  background: #363636a2;
  color: rgb(243, 243, 243);
  font-size: 1.8em;
  font-family: 'Source Sans Pro';

  &:focus {
    outline: 0;
  }
}
</style>
