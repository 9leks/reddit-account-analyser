<template>
  <div class="search-form">
    <SearchFormDecoration />
    <SearchFormInputField />
    <SearchFormButton />
  </div>
</template>

<script>
import SearchFormDecoration from './SearchForm/SearchFormDecoration'
import SearchFormInputField from './SearchForm/SearchFormInputField'
import SearchFormButton from './SearchForm/SearchFormButton'

export default {
  name: 'SearchForm',
  components: {
    SearchFormDecoration,
    SearchFormInputField,
    SearchFormButton,
  },
}
</script>

<style lang="scss" scoped>
.search-form {
  display: flex;
}
</style>

