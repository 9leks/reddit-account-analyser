<template functional>
  <div>
    <div class="card--header">
      <div v-if="props.card.icon"
           class="header--icon"
           alt="icon">
        {{ props.card.icon }}
      </div>
      <div class="header--title">
        {{ props.card.title }}
      </div>
    </div>
    <div class="card--content">
      <div v-if="props.card.metadata"
           class="content--metadata">
        <span v-if="props.card.score_hidden">
          <i>score hidden</i>,
        </span>
        <span v-else>
          {{ props.card.score }} point{{ Math.abs(props.card.score) === 1 ? '' : 's' }},
        </span>
        <span :title="new Date(props.card.created_utc)">
          {{ props.card.created }} ago
        </span><br>
        <a :href="`https://reddit.com/r/${props.card.subreddit}`"
           target="_blank"
           class="orange">
          /r/{{ props.card.subreddit }}
        </a>
      </div>
      <a v-if="props.card.href"
         :href="props.card.href"
         target="_blank"
         class="card--href">
        <span class="href--icon"
              alt="link">
          🔗
        </span>
      </a>
      <div v-if="props.card.content"
           class="card--text">
        <slot />
      </div>
      <div v-else
           class="card--graph">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card--content {
  display: grid;
  padding: 0.5rem;
  background-color: rgb(210, 210, 210);
  filter: drop-shadow(0 3px 1.5px rgba(0, 0, 0, 0.5));
  transition: background-color 0.25s;

  grid-template-columns: 16fr 1fr;
  grid-template-areas:
    'data href'
    'text text';

  &:hover {
    background-color: rgb(190, 190, 190);
  }
}

.content--metadata {
  font-weight: 300;
  font-size: 0.85rem;

  grid-area: data;
}

.card--href {
  display: flex;
  justify-content: flex-end;
  width: 20px;
  height: 20px;

  grid-area: href;
}

.href--icon {
  opacity: 0.5;
  transition: opacity 0.25s;

  &:hover {
    opacity: 1;
  }
}

.card--text {
  overflow: auto;
  padding: 0.75rem;
  min-height: 7rem;
  max-width: 80vw;
  max-height: 7rem;
  font-size: 1.125rem;

  overflow-wrap: break-word;
  grid-area: text;
}

.card--graph {
  padding: 0.75rem;
  width: 75vw;

  justify-self: center;
}

.card--header {
  display: grid;
}

.header--title {
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
}

.header--icon {
  align-self: center;
  margin-bottom: 0.5rem;
  font-size: 2rem;

  justify-self: center;
}

@media screen and (min-width: 375px) {
  .card--text {
    max-width: 82.5vw;
  }
}

@media screen and (min-width: 425px) {
  .card--text {
    max-width: 85vw;
  }
}

@media screen and (min-width: 768px) {
  .card--text {
    max-width: 90vw;
  }
}

@media screen and (min-width: 1366px) {
  .card--graph {
    width: 20vw;
  }

  .card--text {
    max-width: 30rem;
  }

  .header--title {
    white-space: nowrap;
  }

  .header--icon {
    align-self: initial;
  }
}
</style>
