<template>
  <div class="grid">
    <div class="grid--row-3">

      <h6 class="header">
        <img src="@/assets/cake.svg"
             class="icon icon--cake"> CAKE DAY
      </h6>
      <p class="paragraph">
        This account was created  timeFromSignup }}, on
        <span class="orange"> signupDate }}</span>, meaning /u/ name }}'s
        <span class="orange">cake day</span> is in  timeToCakeDay }}.
      </p>

      <h6 class="header">
        <img src="@/assets/upvote.svg"
             class="icon"> UPVOTES
      </h6>
      <p class="paragraph">
        /u/ name }} has a net worth of
        <span class="orange"> karma.comment }}</span> comment karma and
        <span class="orange"> karma.link }}</span> link karma.
      </p>

      <h6 class="header">
        <img src="@/assets/posts.svg"
             class="icon icon--posts"> POSTS
      </h6>
      <p class="paragraph">
        A total of
        <span class="orange"> comments }}</span>  comments === 1 ? 'comment' : 'comments' }} and
        <span class="orange"> submissions }}</span>  submissions === 1 ? 'submission' : 'submissions' }} has been posted by this account.
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityView',
}
</script>

<style lang="scss" scoped>
.grid--row-3 {
  display: inherit;
  grid-template-rows: 100% 100% 100%;
}

.header {
  // margin-top: 2rem;
  margin-bottom: -1rem;
  text-align: center;
  font-weight: 300;
  font-size: 1.5rem;
}

.paragraph {
  text-align: left;
  letter-spacing: 0.05px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 3rem;
  margin: 2rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #d7d7d7;
  color: rgb(40, 60, 60);
}

.icon--quotes {
  margin-bottom: -2.3rem;
}

.icon--upvoted {
  margin-right: 1rem;
  margin-bottom: -0.5rem;
}
</style>
