<template>
  <div class="container container--activity">
    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title">NEW</div>
      </div>
      <div class="container container--card card--content text subtext">
        <div class="card--arrows"><img src="@/static/img/upvoted.png"></div>
        <div class="card--points">23 points</div>
        <div class="card--time">4 hrs ago</div>
        <div class="card--comment">Sometimes, I dream of cheese.</div>
      </div>
    </div>

    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title">TOP</div>
      </div>
      <div class="container container--card card--content text subtext">
        <div class="card--arrows"><img src="@/static/img/upvoted.png"></div>
        <div class="card--points">2321 points</div>
        <div class="card--time">7 yrs ago</div>
        <div class="card--comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic earum vel vitae harum reprehenderit nam sunt eius consequuntur</div>
      </div>
    </div>

    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon"><img src="@/static/img/quotes.png"></div>
        <div class="card--header--title">BOTTOM</div>
      </div>
      <div class="container container--card card--content text subtext">
        <div class="card--arrows"><img src="@/static/img/downvoted.png"></div>
        <div class="card--points">-23 points</div>
        <div class="card--time">4 hrs ago</div>
        <div class="card--comment">Sometimes, I do not dream of cheese.</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityColumn',
}
</script>

<style lang="scss" scoped>
@import 'cards';

.subtext {
  font-size: 1rem;
}

.container--card {
  grid-template-columns: 0.25fr 0.25fr 2.25fr 3fr;
  grid-template-areas:
    'arrows . points time '
    'arrows . comment comment';
}

.card--time {
  color: $gray;
  font-size: 0.85rem;

  grid-area: time;
}

.card--points {
  color: $gray;
  font-size: 0.85rem;

  grid-area: points;
}

.card--arrows {
  align-self: center;

  grid-area: arrows;
}

.card--comment {
  grid-area: comment;
}

@media screen and (min-width: 375px) {
  .container--card {
    grid-template-columns: 0.25fr 0.25fr 1.75fr 3fr;
  }
}

@media screen and (min-width: 425px) {
  .container--card {
    grid-template-columns: 0.25fr 0.25fr 1.25fr 3fr;
  }
}

@media screen and (min-width: 768px) {
  .container--card {
    grid-template-columns: 0.25fr 0.25fr 1.25fr 8fr;
  }
}

@media screen and (min-width: 1024px) {
  .container--card {
    grid-template-columns: 0.25fr 0.25fr 2fr 4fr;
  }
}

@media screen and (min-width: 1440px) {
  .container--card {
    grid-template-columns: 0.25fr 0.25fr 2fr 6fr;
  }
}

@media screen and (min-width: 1920px) {
  .container--card {
    grid-template-columns: 0.25fr 0.25fr 2fr 10fr;
  }
}

@media screen and (min-width: 2560px) {
  .container--card {
    grid-template-columns: 0.25fr 0.25fr 2fr 16fr;
  }
}
</style>

