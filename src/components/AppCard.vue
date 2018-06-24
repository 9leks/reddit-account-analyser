<template functional>
  <div class="container--card">
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
      <span class="card--slot">
        <slot />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container--card {
  display: flex;
  flex-direction: column;
}

.card--content {
  display: flex;
  align-items: center;
  padding: 1rem;
  min-height: 7rem;
  background-color: rgb(210, 210, 210);
  word-wrap: break-word;
  font-size: 1.25rem;
  filter: drop-shadow(0 3px 1.5px rgba(0, 0, 0, 0.5));
  transition: background-color 0.25s;

  &:hover {
    background-color: rgb(190, 190, 190);
  }
}

.card--slot {
  max-width: 80vw;
}

.card--header {
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
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
  .card--slot {
    max-width: 82.5vw;
  }
}

@media screen and (min-width: 425px) {
  .card--slot {
    max-width: 85vw;
  }
}

@media screen and (min-width: 768px) {
  .card--slot {
    max-width: 90vw;
  }
}

@media screen and (min-width: 1366px) {
  .card--slot {
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
