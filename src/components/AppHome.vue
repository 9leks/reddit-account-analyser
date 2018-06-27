<template functional>
  <div class="container--home">
    <transition name="fade">
      <div v-if="props.loading"
           class="container--spinner">
        <div class="spinner" />
        <span class="spinner--text">Hang on, this might take a sec.</span>
      </div>
    </transition>
    <img src="@/assets/logo.png"
         alt="logo"
         class="home--logo">
    <div class="home--header home--title">
      <span class="orange">reddit</span> account analyser
      <a href="https://github.com/alexjondiaz/reddit-account-analyser"
         target="_blank"
         class="home--github">
        <img src="@/assets/github.png"
             class="home--github-icon"
             alt="github">
      </a>
    </div>
    <div class="home--header home--subtitle">
      get information on your data, activity and favorite subreddits
    </div>
    <component :is="props.appSearchbar"
               :pulse="props.pulse"
               @submit="listeners['submit']" />
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.container--home {
  display: grid;
  margin-top: 1rem;
  padding: 0.25rem;

  grid-template-rows: 0.5fr 1fr 1fr 1fr;
  grid-gap: 2rem;
}

.home--logo {
  filter: drop-shadow(0 3px 1.5px rgba(0, 0, 0, 0.5));

  justify-self: center;
}

.home--header {
  text-align: center;
  filter: drop-shadow(0 2px 1.5px rgba(0, 0, 0, 0.25));
}

.home--title {
  font-weight: 400;
  font-size: 3rem;
}

.home--subtitle {
  font-weight: 200;
  font-size: 2rem;
}

.home--github {
  transition: filter 0.25s;

  &:hover {
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.5));
  }
}

.home--github-icon {
  width: 30px;
  height: 30px;
}

.container--spinner {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
  display: grid;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
}

.spinner--text {
  color: rgb(255, 120, 60);
  padding: 0.5rem;
  text-align: center;
  font-size: 2rem;
  filter: drop-shadow(2.5px 2.5px 5px rgba(0, 0, 0, 0.5));
}

.spinner {
  align-self: center;
  width: 4rem;
  height: 4rem;
  border-top: 2px solid rgb(255, 120, 60);
  border-top: 2px solid rgb(255, 120, 60);
  border-right: 2px solid transparent;
  border-left: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1.5s ease-in-out infinite;

  justify-self: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (min-width: 375px) {
  .container--home {
    grid-template-rows: 0.5fr 1fr 1fr 1.5fr;
  }
}

@media screen and (min-width: 1366px) {
  .container--home {
    margin-top: 5rem;

    grid-template-rows: 0.5fr 1fr 1fr 1.5fr 1fr;
  }
}
</style>
