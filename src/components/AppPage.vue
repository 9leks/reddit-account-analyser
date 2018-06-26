<template functional>
  <div class="container--page">
    <div v-for="card in props.cards"
         :key="card.title">
      <component :is="injections.components.AppCard"
                 :card="card">
        <span v-if="card.content"
              v-html="card.content" />
        <span v-else>Hmm... /u/{{ card.username }} has not posted any {{ card.type }}s!</span>
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
