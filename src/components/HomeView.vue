<template lang="pug">
  div
    img.image(src="@/assets/img/snoo.png" height="150" width="150")
    SearchForm
</template>

<script>
import SearchForm from './HomeView/SearchForm'

export default {
  name: 'HomeView',
  components: { SearchForm },
}
</script>
