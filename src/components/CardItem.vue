<template>
  <div class="card-item">
    <h6 class="header">
      <img v-if="icon"
           src="icon">
      <slot name="header" />
    </h6>
    <p class="paragraph">
      <slot name="paragraph" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.card-item {
  text-align: center;
}

.header {
  margin-bottom: -1rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.paragraph {
  margin: 2rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #d7d7d7;
  color: rgb(40, 60, 60);
  text-align: left;
  font-weight: 400;
  font-size: 1.5rem;
}
</style>
