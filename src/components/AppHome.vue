<template functional>
  <div class="container--home">
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
    <component :is="injections.components.AppSearchbar"
               :pulse="props.pulse"
               @submit="listeners['submit']" />
  </div>
</template>

<script>
import AppSearchbar from './AppSearchbar'

export default {
  inject: {
    components: {
      default: {
        AppSearchbar,
      },
    },
  },
}
</script>

<style lang="scss" scoped>
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

@media screen and (min-width: 375px) {
  .container--home {
    grid-template-rows: 0.5fr 1fr 1fr 1.5fr;
  }
}

@media screen and (min-width: 1024px) {
  .container--home {
    margin-top: 5rem;

    grid-template-rows: 0.5fr 1fr 1fr 1.5fr 1fr;
  }
}
</style>
