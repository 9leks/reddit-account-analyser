<template functional>
  <div class="container--page">
    <div v-for="{ title, icon, content, href, metadata } in props.cards"
         :key="title">
      <component :is="injections.components.AppCard"
                 :icon="icon"
                 :title="title"
                 :href="href"
                 :metadata="metadata">
        <span v-html="content" />
      </component>
    </div>
  </div>
</template>

<script>
import AppCard from './AppCard'

export default {
  inject: {
    components: {
      default: {
        AppCard,
      },
    },
  },
}
</script>

<style scoped>
.container--page {
  display: grid;
  padding: 1rem;

  grid-gap: 4rem 0;
}

@media screen and (min-width: 1366px) {
  .container--page {
    padding: 0;

    grid-gap: 5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
