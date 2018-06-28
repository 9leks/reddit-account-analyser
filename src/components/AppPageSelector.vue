<template functional>
  <div class="container--selector">
    <ul class="selector--list">
      <div :style="props.selectorLine"
           class="selector--line">
        <li v-for="{ title, icon } in props.pages"
            :key="title"
            class="list--item">
          <a @click="listeners['page-change'](title)">
            <span class="item--content">
              <span class="content--icon">
                {{ icon }}
              </span> {{ title.toUpperCase() }}
            </span>
          </a>
        </li>
      </div>
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
    margin-right: 2rem;

    user-select: none;
  }
  .selector--list {
    position: relative;
    left: 1rem;
    padding: 2rem 1rem;
    height: 13.5rem;
    background-color: rgb(210, 210, 210);
    list-style: none;
    filter: drop-shadow(0 3px 1.5px rgba(0, 0, 0, 0.5));
  }

  .selector--line {
    height: 0;
    border-left: 3px solid rgb(255, 120, 60);
  }

  .item--content {
    position: relative;
    left: 0.25rem;
    display: grid;
    margin: 0.5rem 0;
    padding: 0 1rem;
    font-weight: 300;
    font-size: 2rem;
    cursor: pointer;
    transition: background-color 0.25s, color 0.25s ease-in-out,
      left 0.25s ease-in-out;

    grid-template-columns: 0.5fr 2fr;

    &:hover {
      left: 0.75rem;
      background-color: rgb(255, 120, 60);
      color: rgb(255, 255, 255);
    }
  }
}

.content--icon {
  align-self: center;
  font-size: 1.25rem;
}

@media screen and (min-width: 1440px) {
  .container--selector {
    margin-right: 0;
  }
}
</style>
