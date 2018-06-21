<template>
  <div class="container">
    <app-card title="Lorem!" icon="logo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius perferendis libero similique earum deserunt eaque quaerat animi adipisci praesentium obcaecati dolorum expedita modi unde possimus veniam minus molestiae, voluptas dolore. Ex nam repellendus libero impedit laudantium sequi recusandae deserunt quos culpa, natus, officia ipsum cumque tenetur aliquam sunt quod a? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius perferendis libero similique earum deserunt eaque quaerat animi adipisci praesentium obcaecati dolorum expedita modi unde possimus veniam minus molestiae, voluptas dolore. Ex nam repellendus libero impedit laudantium sequi recusandae deserunt quos culpa, natus, officia ipsum cumque tenetur aliquam sunt quod a?</app-card>
  </div>
</template>

<script>
import AppCard from '../AppCard'

export default {
  name: 'DataPage',
  components: {
    AppCard,
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  justify-content: center;
}
</style>
