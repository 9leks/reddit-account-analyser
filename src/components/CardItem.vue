<template>
  <div class="card-item">
    <h6 class="header">
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
}
</script>

<style lang="scss" scoped>
.header {
  margin-top: 2rem;
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
  letter-spacing: 0.05px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 3rem;
}
</style>
