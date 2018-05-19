<template>
  <input v-model="input"
         type="text"
         class="input"
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
    setUser() {
      this.$store.dispatch('setUser', this.$store.state.input)
    },
  },
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
  background: #050a385e;
  color: rgb(243, 243, 243);
  font-size: 1.8em;
  font-family: 'Source Sans Pro';

  &:focus {
    outline: 0;
  }
}
</style>
