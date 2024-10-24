<script setup lang='ts'>
import type { MenuNavItem } from './types'
import { useData } from 'vitepress'
import { computed } from 'vue'
import CardBar from '../Card/CardBar.vue'
import Icon from '../Icon/index.vue'

const props = defineProps<{
  navItems?: MenuNavItem[]
}>()

const { isDark } = useData()

const title = computed(() => isDark.value ? '切换为浅色模式' : '切换为深色模式')
function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <CardBar class="menu" bar-color="indigo-3">
    <a
      v-for="(item, index) in props.navItems"
      :key="index"
      :href="item.link"
      :aria-label="item.ariaLabel"
      :target="item.link.startsWith('http') ? '_blank' : '_self'"
      class="link"
    >
      <Icon :icon="item.icon" />
    </a>
    <button
      class="appearance" role="switch" type="button" :aria-checked="isDark" :title="title"
      @click="toggleDark"
    >
      <Icon icon="sun" class="sun" />
      <Icon icon="moon" class="moon" />
    </button>
  </CardBar>
</template>

<style scoped>
.menu {
    display: flex;
    flex-flow: row;
    gap: .95rem;
    justify-content: flex-end;
    align-items: center;
    perspective: var(--home-perspective);
}

.link,
button {
    display: inline-block;
    border-radius: 50%;
    transition: var(--home-transition-inner);
    color: var(--vp-c-text-2);
    font-size: 1.35rem;
    line-height: 1.35rem;
    /* padding: 5px;
    background-color: var(--vp-c-bg);
    border: 1px solid var(--vp-c-divider);
    box-sizing: border-box;
    filter: drop-shadow(1px 1px 1px var(--vp-c-text-3)); */
}

.link:hover,
button:hover {
    transform: var(--home-translate3d);
    color: var(--vp-c-text-1);
    filter: drop-shadow(1px 1px 2px var(--vp-c-border));
    cursor: pointer;
    /* background-color: var(--vp-c-bg-soft); */
}

.appearance[aria-checked="true"] .sun {
    display: none;
}

.appearance[aria-checked="false"] .moon {
    display: none;
}
</style>
