<template>
  <div>
    <div class="card">
      <div class="card--header">
        <div class="card--header--icon">
          <img :src="icon">
        </div>
        <div class="card--header--title">
          {{ header }}
        </div>
      </div>
      <div class="card--content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    icon: {
      type: String,
      default: '',
      required: false,
    },
    header: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>

<style lang="scss">
.card {
  padding: 2rem 0;
}

.card--header {
  padding-bottom: 0.5rem;
  text-align: center;
  font-weight: 200;
  font-size: 1.5rem;
}

.card--content {
  padding: 0.75rem;
  border-radius: 6px;
  background: $lightgray;
  box-shadow: 0 2.5px 1px rgba(0, 0, 0, 0.11);
  font-weight: 400;
  font-size: 1.25rem;

  grid-area: content;
}

@media screen and (min-width: 768px) {
  .card--header {
    display: grid;
    text-align: left;

    grid-template-columns: 0.15fr 1fr;
    grid-template-areas: 'icon title';
  }

  .card--header--title {
    align-self: center;
    padding-bottom: 0.5rem;
    white-space: nowrap;

    grid-area: title;
  }

  .card--header--icon {
    align-self: center;
    margin-right: 10px;
    text-align: center;

    grid-area: icon;
  }
}

@media screen and (min-width: 1024px) {
  .card--header--title {
    padding-left: 0.5rem;
  }
  .card--content {
    transition: background-color 0.085s ease-in-out;
    &:hover {
      background-color: rgb(209, 209, 209);
    }
  }
}

@media screen and (min-width: 1440px) {
  .card--header--title {
    padding-left: 0;
  }
}
</style>
