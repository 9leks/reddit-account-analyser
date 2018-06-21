<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <img v-if="src" :src="src" class="icon" alt="icon">
    <div ref="content" :class="`content ${minimised}`" @click="toggle">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      toggled: true,
      height: 0,
    }
  },
  computed: {
    src() {
      if (this.icon) return require(`@/assets/${this.icon}.png`)
    },
    minimised() {
      return this.height > 80 ? (this.toggled ? 'minimised' : '') : ''
    },
  },
  watch: {
    'this.$refs.content.clientHeight'() {
      this.height = this.$refs.content.clientHeight
    },
  },
  mounted() {
    this.height = this.$refs.content.clientHeight
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;

  grid-template-columns: 0.5fr 1fr;
  grid-template-areas:
    'icon title'
    'content content';
}

.content {
  overflow: hidden;
  padding: 1rem;
  max-width: 320px;
  max-height: 100%;
  border-radius: 3px;
  background-color: rgb(210, 210, 210);
  transition: background-color 0.25s, max-height 0.4s ease-in-out;

  grid-area: content;

  &:hover {
    background-color: rgb(190, 190, 190);
  }
}

.minimised {
  max-height: 5rem;
  box-shadow: inset 0 -20px 35px -20px rgb(0, 0, 0);
}

.title {
  font-size: 2rem;

  grid-area: title;
}

.icon {
  width: 40px;
  height: 40px;

  grid-area: icon;
}
</style>
