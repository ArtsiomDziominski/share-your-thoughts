<template>
  <div class="author-date">
    <p class="author-date__author">{{ post.author }}</p>
    <p class="author-date__created">created {{ post.createdAt }}</p>
    <p class="author-date__updated">updated {{ post.updatedAt }}</p>
  </div>
</template>

<script>
export default {
  name: "AuthorDatePost",
  props: {
    post: {
      title: String,
      description: String,
      updatedAt: String,
      author: String,
    }
  }
}
</script>

<style scoped>
.author-date p {
  margin: 0;
  display: flex;
  justify-content: flex-end;
}

.author-date__created {
  font-size: 10px;
  color: var(--color-post-data-update);
}

.author-date__updated {
  font-size: 10px;
  color: var(--color-post-data-update);
}

.author-date__author {
  font-size: 10px;
  color: var(--color-post-data-update);
}
</style>