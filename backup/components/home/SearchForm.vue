<template>
  <div class="container fluid">
    <button class="decoration"
            disabled>/u/
    </button>
    <input v-model="input"
           class="input"
           type="text"
           autocomplete="off"
           @keypress.enter="setUser">
    <button class="button"
            @click="setUser">
      <i class="fas fa-search" />
    </button>
  </div>
</template>

<script>
import { createHelpers } from 'vuex-map-fields'

const { mapFields } = createHelpers({
  getterType: 'getInput',
  mutationType: 'setInput',
})

export default {
  name: 'SearchForm',
  computed: mapFields(['input']),
  methods: {
    validUser(user) {
      if (user.length < 3 || user.length > 20) {
        return false
      }
      return true
    },
    setUser() {
      const username = this.$store.state.input.trim()
      if (username) {
        if (this.validUser(username)) {
          this.$router.push(`/${username}`)
        } else {
          this.$parent.$emit('error')
        }
      }
    },
  },
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300');

.input {
  padding: 0.1em 0.9em;
  width: 50vw;
  height: 2em;
  border: 1px solid rgba(22, 22, 22, 0.507);
  border-right: 0;
  border-left: 0;
  border-radius: 0;
  background: rgba(22, 22, 22, 0.507);
  color: rgb(243, 243, 243);
  font-size: 1.8em;
  font-family: 'Roboto Condensed';

  &:focus {
    outline: 0;
  }
}

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
  font-weight: 700;
  font-size: 1.3em;
}

.button {
  padding: 0 0.2em;
  border: 1px solid rgba(22, 22, 22, 0.507);
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background: rgba(22, 22, 22, 0.507);
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
    background: rgb(42, 44, 44);
    color: rgb(28, 253, 148);
  }
}
</style>

