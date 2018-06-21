<template>
  <div>
    <span class="card--content">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
}
</script>

<style lang="scss" scoped>
.card--content {
  background-color: rgb(185, 185, 185);
  border-radius: 3px;
}
</style>
