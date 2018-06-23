<template functional>
  <div class="container--card">
    <div class="card--header">
      <img v-if="props.icon"
           :src="require(`@/assets/${props.icon}.png`)"
           class="header--icon"
           alt="icon">
      <div class="header--title">{{ props.title }}</div>
    </div>
    <div class="card--content">
      <slot />
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
  border-radius: 5px;
  background-color: rgb(210, 210, 210);
  text-align: center;
  font-size: 1.25rem;
  transition: background-color 0.25s;

  &:hover {
    background-color: rgb(190, 190, 190);
  }
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

@media screen and (min-width: 1366px) {
  .header--title {
    white-space: nowrap;
  }

  .header--icon {
    align-self: initial;
  }
}
</style>
