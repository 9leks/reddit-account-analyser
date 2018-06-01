<template>
  <div class="container container--data">
    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon">
          <img src="@/static/img/cake.png">
        </div>
        <div class="card--header--title">
          CAKE DAY
        </div>
      </div>
      <div class="card--content text">This account was created 293 days ago, on
        <span class="text--orange">May 12th 2015</span> , meaning /u/spez's
        <span class="text--orange">cake</span> day is in seven days.
      </div>
    </div>

    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon">
          <img src="@/static/img/upvote.png">
        </div>
        <div class="card--header--title">
          KARMA
        </div>
      </div>
      <div class="card--content text">/u/ has a net worth of
        <span class="text--orange">3214 comment karma</span> and
        <span class="text--orange">32131 link karma</span>.
      </div>
    </div>

    <div class="card">
      <div class="card--header text">
        <div class="card--header--icon">
          <img src="@/static/img/upload.png">
        </div>
        <div class="card--header--title">
          POSTS
        </div>
      </div>
      <div class="card--content text">This account has posted
        <span class="text--orange">232 comments</span> and
        <span class="text--orange">232</span> submissions
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataColumn',
}
</script>

<style lang="scss" scoped>
@import 'cards';

.container--data {
  grid-template-rows: repeat(3, 1fr);
}
</style>

