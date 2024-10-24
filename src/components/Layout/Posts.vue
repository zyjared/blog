<script setup lang="ts">
import type { Post } from './types'
import { useRouter } from 'vitepress'
import CardBar from '../Card/CardBar.vue'

defineProps<{
  posts: Post[]
  title?: string
}>()

const router = useRouter()

function formateDateTime(date: Post['date']) {
  return new Date(date.time).toISOString()
}

function navigate(post: Post) {
  router.go(post.url)
}
</script>

<template>
  <CardBar bar-color="purple-3" :title="title">
    <TransitionGroup name="list" appear class="posts" tag="div">
      <article
        v-for="(post, index) of posts" :key="index" class="post" bar-color="purple-3"
        @click="navigate(post)"
      >
        <h3 class="post__title">
          {{ post.title }}
        </h3>
        <section v-if="post.description" class="post__description">
          <p>{{ post.description }}</p>
        </section>
        <section v-if="post.date" class="post__date">
          <dl>
            <dt class="dt">
              更新于：
            </dt>
            <dd class="dd">
              <time :datetime="formateDateTime(post.date)">{{
                post.date.string
              }}</time>
            </dd>
          </dl>
        </section>
      </article>
    </TransitionGroup>
  </CardBar>
</template>

<style scoped>
h2,
h3,
p,
dl {
    padding: 0;
    margin: 0;
    line-height: inherit;
}

/* .posts-container {
    height: 12rem;
    overflow-y: auto;
    mask: linear-gradient(0deg, transparent, var(--vp-c-bg) .5rem, var(--vp-c-bg) calc(100% - .5rem), transparent);
    padding: 1rem .5rem;
} */

.posts {
    --line-height: 1rem;
    line-height: 1.25;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: .5rem;
    perspective: var(--home-perspective);
}

.post {
    padding: .75rem;
    background: linear-gradient(to right bottom, transparent 0, var(--vp-c-indigo-soft) 100%);
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: .25rem;
    transition: var(--home-transition-inner);
}

.post:hover {
    cursor: pointer;
    background: var(--vp-c-indigo-soft);
    transform: var(--home-translate3d);
    box-shadow: var(--vp-shadow-1);
}

.post__title {
    height: calc(var(--line-height) * 1.5);
    font-weight: bold;
    font-size: inherit;
}

.post__description {
    height: calc(var(--line-height) * 2);
    color: var(--vp-c-text-2);
}

.post__date {
    height: calc(var(--line-height) * 0.75);
    color: var(--vp-c-text-3);
    text-align: right;
    font-size: .75rem;
}

.dt {
    display: none;
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
