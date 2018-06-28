<template functional>
  <div class="container--page">
    <div v-for="card in props.cards"
         :key="card.title">
      <component :is="props.appCard"
                 :card="card">
        <component v-if="card.chartData"
                   :is="card.component"
                   :chart-data="card.chartData"
                   :options="card.options" />
        <span v-else-if="card.content"
              v-html="card.content" />
        <span v-else>Hmm... /u/{{ card.username }} has not posted any {{ card.type }}s!</span>
      </component>
    </div>
  </div>
</template>

<style scoped>
.container--page {
  display: grid;
  padding: 1rem;

  grid-gap: 4rem 0;
}

@media screen and (min-width: 1366px) {
  .container--page {
    padding: auto 0;

    grid-gap: 5rem;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
