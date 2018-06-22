<template functional>
  <div class="selector">
    <ul class="list">
      <li v-for="({ title, name, active }, index) in props.pages"
          :key="name">
        <a :class="`item ${active}`"
           @click="listeners['set-page'](name, index)">
          {{ title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.selector {
  display: none;
}

@media screen and (min-width: 1024px) {
  .selector {
    display: initial;
  }

  .active {
    padding: 0 1rem;
    background-color: rgb(255, 120, 60);
    color: rgb(255, 255, 255);
    transition: all 0.25s ease-in-out;
  }

  .list {
    list-style: none;
  }

  .item {
    margin: 2rem 0;
    font-weight: 300;
    font-size: 2rem;
    cursor: pointer;
  }
}
</style>
