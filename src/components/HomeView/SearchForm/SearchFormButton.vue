<template>
  <button class="button"
          @click="setUser">
    <i class="fas fa-search" />
  </button>
</template>

<script>
export default {
  name: 'SearchFormButton',
  methods: {
    setUser() {
      
    }
  }
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
  background: #050a385e;
  color: rgb(235, 90, 23);
  font-weight: 700;
  font-size: 1.3em;
  cursor: pointer;
  transition: color, background, 0.2s ease-in-out;

  .fa-search {
    padding: 0 1em;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background: #2a2c2cef;
    color: #f0f0f0ef;
  }
}
</style>
