<template>
  <div class="searchbar">
    <button class="button button--disabled"
            disabled="disabled">/u/</button>
    <input :style="'width:' + width"
           class="input"
           type="text"
           @keypress.enter="$emit('sent')"
           @input="$emit('input', $event.target.value)">
    <button class="button button--send">
      <span class="icon--search" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Searchbar',
  props: {
    width: {
      type: String,
      default: '100%',
    },
  },
}
</script>

<style style="scss" scoped>
@font-face {
  font-family: icon;
  src: url('../assets/search.ttf');
}

.searchbar {
  display: flex;
}

.input {
  padding: 0.8rem;
  border: 0;
  background-color: #f0f0f0;
  font-size: 1.8rem;
}

.input:focus {
  outline: 0;
}

.icon--search:before {
  position: relative;
  bottom: 1.2rem;
  display: flex;
  justify-content: center;
  content: '\e900';
  font-size: 5rem;
  font-family: icon;
}

.button {
  padding: 1rem;
  max-width: 4.5rem;
  max-height: 4.5rem;
  border: 0;
  background-color: #ff7843;
  color: rgb(227, 227, 227);
  font-size: 1.5rem;
  transition: background-color 0.09s ease-in-out;
}

.button--send:hover {
  outline: 0;
  background-color: #ff4800;
}

.button--send:active {
  outline: 0;
  background-color: #d63d00;
}

.button--send:focus {
  outline: 0;
}
</style>
