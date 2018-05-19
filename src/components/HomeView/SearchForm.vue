<template>
  <div class="container">
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
