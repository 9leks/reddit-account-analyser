<template>
  <div class="container">
    <app-card class="cake"
              title="CAKE DAY"
              icon="cake">
      This account was created
      <span class="orange">
        232 days
      </span> ago, on
      <span class="orange">May 12th 2012
      </span>. /u/spez's cake day is in 23 days.
    </app-card>

    <app-card class="karma"
              title="KARMA"
              icon="cake">
      /u/spez has
      <span class="orange">2313 upvotes</span>
      worth of comment karma and
      <span class="orange">1324 upvotes</span>
      worth of link karma for a total
      <span class="orange">3224 upvotes</span>.
    </app-card>

    <app-card class="posts"
              title="POSTS"
              icon="cake">
      /u/spez has submitted
      <span class="orange">23 submissions</span> and
      <span class="orange">2313 comments</span> for a total
      <span class="orange">3213 posts</span>.
    </app-card>

    <app-card class="gilded"
              title="GILDED"
              icon="cake">
      /u/spez has been gilded
      <span class="orange">
        23 times
      </span> from 230 comments and 201 submissions.
    </app-card>
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

  grid-gap: 4rem 0;
}

.orange {
  color: rgb(255, 120, 60);
}

@media screen and (min-width: 1024px) {
  .container {
    grid-gap: 5rem 0;
    grid-template-areas:
      'cake karma'
      'posts gilded';
  }

  .cake {
    grid-area: cake;
  }

  .karma {
    grid-area: karma;
  }

  .posts {
    grid-area: posts;
  }

  .gilded {
    grid-area: gilded;
  }
}
</style>
