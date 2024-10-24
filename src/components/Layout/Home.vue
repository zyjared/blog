<script setup lang="ts">
import type { MenuNavItem, Post, ProfileProps } from './types'
import { useWindowSize } from '@vueuse/core'
import { useData } from 'vitepress'
import { computed } from 'vue'
import Menu from './Menu.vue'
import Profile from './Profile.vue'

const { frontmatter } = useData()

const { height } = useWindowSize()
const containerStyle = computed(() => {
  return (height.value && height.value > 350) ? { height: `${height.value}px` } : {}
})
</script>

<template>
  <section class="home-container" :style="containerStyle">
    <div class="home">
      <Menu :nav-items="frontmatter.nav" class="menu" />
      <Profile
        class="profile"
        :avatar="frontmatter.avatar"
        :bio="frontmatter.bio"
        :details="frontmatter.details"
      />
    </div>
  </section>
</template>

<style scoped>
.home-container, .home {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.home-container {
    padding: 1rem;
    height: 100vh;
    box-sizing: border-box;
}

.home {
    padding: 1rem 1rem 3rem 1rem;
    width: 33vw;
}

.menu {
    align-self: flex-end;
}

.profile {
    width: 100%;
}

@media screen and (max-width: 1024px) {
    .home {
        width: 50vw;
    }
}

@media screen and (max-width: 768px) {
    .home {
        width: 80vw;
    }
}

@media screen and (max-width: 480px) {
    .home {
        width: 100vw;
    }
}
</style>
