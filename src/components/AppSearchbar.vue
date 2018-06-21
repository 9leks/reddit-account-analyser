<template>
  <form class="searchbar" @submit.prevent="onSubmit">
    <div class="button button--r">
      <span class="button--content">/u/</span>
    </div>
    <input ref="input" class="input">
    <button :class="sendButton">
      <i class="fas fa-search" />
    </button>
  </form>
</template>

<script>
export default {
  name: 'AppSearchbar',
  data() {
    return {
      sendButton: 'button button--send',
    }
  },
  methods: {
    onSubmit(event) {
      const { value } = event.target[0]
      this.$refs.input.blur()
      this.emitPulse()
      this.$emit('submit', value)
    },
    emitPulse() {
      this.sendButton = 'button button--send pulse'
      setTimeout(() => (this.sendButton = 'button button--send'), 750)
    },
  },
}
</script>

<style lang="scss" scoped>
$radius: 5px;

@mixin format {
  padding: 0.25rem 1.5rem;
  border: none;
  transition: background-color 0.25s;

  &:focus {
    outline: none;
  }
}

.searchbar {
  display: flex;
  justify-content: center;
}

.input {
  width: inherit;
  background-color: rgb(235, 235, 235);
  font-size: 2rem;

  @include format;

  &:focus {
    background-color: rgb(220, 220, 220);
  }
}

.button {
  background-color: rgb(255, 120, 60);
  color: rgb(255, 255, 255);
  font-size: 1.5rem;

  @include format;
}

.button--content {
  font-weight: 200;
  font-size: 2rem;
  filter: drop-shadow(0 2px 1.5px rgba(0, 0, 0, 0.25));
}

.button--r {
  display: flex;
  align-items: center;
  border-top-left-radius: $radius;
  border-bottom-left-radius: $radius;
}

.button--send {
  border-top-right-radius: $radius;
  border-bottom-right-radius: $radius;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 77, 0);
  }
}

.pulse {
  animation: pulse 0.75s;
  pointer-events: none;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0px rgb(255, 120, 60);
  }

  100% {
    box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
  }
}
</style>
