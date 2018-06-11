<template>
  <div class="searchbar">
    <button class="button button--disabled"
            disabled="disabled">
      <span class="text--white text--shadow">/u/</span>
    </button>
    <input ref="input"
           class="input text--shadow"
           type="search"
           autofocus
           @keypress.enter="sendUser"
           @input="$emit('input', $event.target.value.trim())">
    <button class="button button--send"
            type="submit"
            @click="sendUser">
      <img class="icon--search"
           src="@/assets/img/search.png">
    </button>
  </div>
</template>

<script>
export default {
  name: 'Searchbar',
  methods: {
    sendUser() {
      this.$emit('send')
      this.$refs.input.blur()
    },
  },
}
</script>

<style lang="scss" scoped>
$radius: 5px;

.searchbar {
  display: flex;
  justify-content: inherit;
  filter: drop-shadow(0 3px 1px rgba(0, 0, 0, 0.3));
}
.input {
  padding: 1rem;
  width: 50vw;
  background-color: $light;
  color: $black;
  font-weight: 400;
  font-size: 1.5rem;

  @include format--std;
  &::-webkit-search-cancel-button {
    display: none;
  }
}
.button {
  padding: 0.5rem;
  background-color: $orange;
  font-weight: 200;
  font-size: 1.5rem;

  @include format--std;
}
.button--send {
  border-top-right-radius: $radius;
  border-bottom-right-radius: $radius;
  cursor: pointer;
  transition: background-color 0.09s ease-in-out;

  &:active {
    background-color: rgb(189, 78, 27);
  }
}
.button--disabled {
  padding: 0 1rem;
  border-top-left-radius: $radius;
  border-bottom-left-radius: $radius;
}
.icon--search {
  display: flex;
  margin: -1.5rem -1.5rem;

  justify-self: center;
}

@media screen and (min-width: 1024px) {
  .button--send {
    &:hover {
      background-color: rgb(216, 89, 30);
    }
  }
}

@media screen and (min-width: 1440px) {
  .input {
    width: 35vw;
  }
}
</style>
