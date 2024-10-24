<script setup lang="ts">
import type { MenuNavItem, Post, ProfileProps } from './types'
import { useWindowSize } from '@vueuse/core'
import Menu from './Menu.vue'
import Posts from './Posts.vue'
import Profile from './Profile.vue'

defineProps<{
  notebook: Post[]
  navItems?: MenuNavItem[]
  profile: ProfileProps
}>()

const { height } = useWindowSize()
</script>

<template>
  <section class="home" :style="{ height: `${height}px` }">
    <div class="left">
      <Profile class="profile" v-bind="profile" />
    </div>
    <div class="right">
      <Menu :nav-items="navItems" />
      <Posts :posts="notebook" title="笔记" />
    </div>
  </section>
</template>

<style scoped>
.home {
    --home-perspective: 206px;
    /* 卡片旋转角度 */
    --home-rotate-angle: 0deg; /* -5 */
    /* 倾斜容器内的元素凸起 */
    --home-translate3d: translate3d(-3px, 0, 3px);
    --home-transition-inner: var(--zy-transition-all);
}

.home {
    display: flex;
    flex-flow: row nowrap;
    /* justify-content: center; */
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    margin: 0 auto;
    perspective: var(--home-perspective);
    mask: linear-gradient(0deg, transparent, var(--vp-c-bg) 1rem, var(--vp-c-bg) calc(100% - 1rem), transparent);
    overflow: auto;
    height: 100vh;
}

.left,
.right {
    transition: transform .5s;
}

.left {
    width: 320px;
    /* --rotate: calc(var(--home-rotate-angle) * -1);
    transform-origin: left center;
    transform: rotateY(var(--rotate));
    animation: 1s rotate; */
}

.right {
    --rotate: var(--home-rotate-angle);

    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    width: 400px;

    transform-origin: right;
    transform: rotateY(var(--rotate));
    /* animation: 1s rotate; */
}

@keyframes rotate {
    from {
        transform: rotateY(0);
    }

    to {
        transform: rotateY(var(--rotate));
    }
}

@media screen and (max-width: 768px) {
    .home {
        --home-rotate-angle: 0;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: flex-start;
        padding: 1rem;
    }

    .left,
    .right {
        width: 100%;
    }
}
</style>
