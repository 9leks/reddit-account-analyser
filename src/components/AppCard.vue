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
    <a :href="props.href"
       target="_blank"
       class="card--href">
      <div class="card--content">
        <slot />
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.card--content {
  overflow: scroll;
  padding: 1rem;
  min-height: 7.5rem;
  max-height: 7.5rem;
  background-color: rgb(210, 210, 210);
  word-wrap: break-word;
  font-size: 1.25rem;
  filter: drop-shadow(0 3px 1.5px rgba(0, 0, 0, 0.5));
  transition: background-color 0.25s;

  &:hover {
    background-color: rgb(190, 190, 190);
  }
}

.card--href {
  max-width: 80vw;
  color: black;
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
  .card--href {
    max-width: 82.5vw;
  }
}

@media screen and (min-width: 425px) {
  .card--href {
    max-width: 85vw;
  }
}

@media screen and (min-width: 768px) {
  .card--href {
    max-width: 90vw;
  }
}

@media screen and (min-width: 1366px) {
  .card--href {
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
