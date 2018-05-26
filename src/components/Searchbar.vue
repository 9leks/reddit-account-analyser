<template>
  <div class="searchbar">
    <button class="button button__disabled"
            disabled="disabled">/u/</button>
    <input class="input"
           type="text">
    <button class="button button__send">
      <span class="icon-search" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Searchbar',
}
</script>

<style style="scss" scoped>
@font-face {
  font-family: icon;
  src: url('../assets/search.ttf');
}

.searchbar {
  display: flex;
  justify-content: center;
}

.input {
  padding: 1rem;
  width: 40%;
  border: 0;
  background-color: #f0f0f0;
  font-size: 1.5rem;
}

.input:focus {
  outline: 0;
}

.icon-search:before {
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

.button__send:hover {
  outline: 0;
  background-color: #ff4800;
}

.button__send:active {
  outline: 0;
  background-color: #d63d00;
}

.button__send:focus {
  outline: 0;
}
</style>
