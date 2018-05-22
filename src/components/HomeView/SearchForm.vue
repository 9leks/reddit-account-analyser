<template>
  <div id="search-form">
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
#search-form {
  display: flex;
}

#label {
  color: rgb(211, 12, 22);
  font-weight: 700;
  font-size: 1.2em;
}
</style>

