<template functional>
  <div class="container--selector">
    <ul class="selector--list">
      <li v-for="({ title }) in props.pages"
          :key="title">
        <a class="list--item"
           @click="listeners['set-page'](title)">
          {{ title.toUpperCase() }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container--selector {
  display: none;
}

@media screen and (min-width: 1366px) {
  .container--selector {
    position: sticky;
    top: 0;
    display: initial;
    margin-top: 20%;

    user-select: none;
  }

  .selector--list {
    list-style: none;
  }

  .list--item {
    padding: 0 1rem;
    font-weight: 300;
    font-size: 2rem;
    cursor: pointer;
    transition: background-color 0.25s, color 0.25s ease-in-out;

    &:hover {
      background-color: rgb(255, 120, 60);
      color: rgb(255, 255, 255);
    }
  }
}
</style>
