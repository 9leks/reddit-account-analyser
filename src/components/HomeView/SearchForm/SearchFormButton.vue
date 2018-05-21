<template>
  <button class="button"
          @click="setUser">
    <i class="fas fa-search" />
  </button>
</template>

<script>
import swal from 'sweetalert2'

export default {
  name: 'SearchFormButton',
  methods: {
    validUser(user) {
      if (user.length < 3 || user.length > 20) {
        return false
      }
      return true
    },
    setUser() {
      const username = this.$store.state.input
      if (username) {
        if (this.validUser(username)) {
          this.$router.push(`/${username}`)
        } else {
          swal('Invalid username (placeholder popup in SearchFormButton)')
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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
