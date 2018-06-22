<template functional>
  <div class="container">
    <div class="title">{{ props.title }}</div>
    <img v-if="props.icon"
         :src="require(`@/assets/${props.icon}.png`)"
         class="icon"
         alt="icon">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  padding: 0.5rem;
  max-height: 12.5rem;

  grid-template-columns: 0.25fr 0.5fr;
  grid-template-areas:
    'icon title .'
    'content content content';
}

.content {
  padding: 1rem;
  min-height: 7rem;
  border-radius: 5px;
  background-color: rgb(210, 210, 210);
  text-align: center;
  font-size: 1.2rem;
  transition: background-color 0.25s;

  grid-area: content;

  &:hover {
    background-color: rgb(190, 190, 190);
  }
}

.title {
  white-space: nowrap;
  font-size: 2rem;

  justify-self: center;
  grid-area: title;
}

.icon {
  width: 40px;
  height: 40px;

  justify-self: center;
  grid-area: icon;
}

@media screen and (min-width: 1024px) {
  .container {
    padding: 0;

    grid-template-columns: 0.25fr 0.25fr 1fr;
    grid-template-areas:
      'icon title title'
      'content content content';
  }

  .title {
    justify-self: start;
  }

  .content {
    width: 20rem;
  }
}
</style>
