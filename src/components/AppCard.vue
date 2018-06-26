<template functional>
  <div>
    <div class="card--header">
      <img v-if="props.icon"
           :src="require(`@/assets/${props.icon}.png`)"
           class="header--icon"
           alt="icon">
      <div class="header--title">
        {{ props.title }}
      </div>
    </div>
    <div class="card--content">
      <div v-if="props.metadata"
           class="content--metadata">
        {{ props.metadata.score }} point{{ Math.abs(props.metadata.score) === 1 ? '' : 's' }},
        <span :title="new Date(props.metadata.created_utc)">
          {{ props.metadata.created }} ago
        </span><br>
        <a :href="`https://reddit.com/r/${props.metadata.subreddit}`"
           target="_blank"
           class="orange">
          /r/{{ props.metadata.subreddit }}
        </a>
      </div>
      <a v-if="props.href"
         :href="props.href"
         target="_blank"
         class="card--href">
        <img src="@/assets/link.png"
             class="href--icon"
             alt="link">
      </a>
      <div class="card--text">
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
  width: 20px;
  height: 20px;
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

.card--header {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
}

.header--title {
  text-align: center;
  font-size: 2rem;
}

.header--icon {
  align-self: center;
  margin-bottom: 0.5rem;
  width: 35px;
  height: 40px;

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
