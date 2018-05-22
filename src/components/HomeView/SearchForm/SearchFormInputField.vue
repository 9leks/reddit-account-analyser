<template>
  <input id="input"
         ref="input"
         v-model="input"
         type="text"
         autocomplete="off"
         @keypress.enter="setUser">
</template>

<script>
import { createHelpers } from 'vuex-map-fields'

const { mapFields } = createHelpers({
  getterType: 'getInput',
  mutationType: 'setInput',
})

export default {
  name: 'SearchFormInputField',
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

#input {
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
</style>
