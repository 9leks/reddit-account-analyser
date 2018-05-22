<template>
  <div class="snackbar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SnackbarPopup',
}
</script>

<style lang="scss">
.snackbar {
  position: absolute;
  right: 1em;
  bottom: 1em;
  z-index: 1;
  padding: 1em 0.5em;
  min-width: 16rem;
  border-radius: 0.5em;
  background: linear-gradient(
    120deg,
    rgba(233, 27, 61, 0.836) 10%,
    rgba(255, 0, 43, 0.842) 90%
  );
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.486);
  color: #fff;
  text-align: center;
  font-size: 1.5em;
  animation: fadein 0.5s, fadeout 0.5s 2.55s;
}

@keyframes fadein {
  from {
    right: 0;
    opacity: 0;
  }

  to {
    right: 1em;
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    right: 1em;
    opacity: 1;
  }

  to {
    right: 0;
    opacity: 0;
  }
}
</style>
