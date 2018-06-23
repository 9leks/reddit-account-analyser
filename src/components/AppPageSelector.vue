<template functional>
  <div class="container--selector">
    <ul class="selector--list">
      <li v-for="({ title, active }, index) in props.pages"
          :key="title">
        <a :class="`list--item ${active ? 'list--item-active' : ''}`"
           @click="listeners['set-page'](title, index)">
          {{ title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container--selector {
  display: none;
}

@media screen and (min-width: 1024px) {
  .container--selector {
    display: initial;

    user-select: none;
  }

  .list--item-active {
    padding: 0 1rem;
    background-color: rgb(255, 120, 60);
    color: rgb(255, 255, 255);
    transition: all 0.25s ease-in-out;
  }

  .selector--list {
    list-style: none;
  }

  .list--item {
    margin: 2rem 0;
    font-weight: 300;
    font-size: 2rem;
    cursor: pointer;
  }
}
</style>
