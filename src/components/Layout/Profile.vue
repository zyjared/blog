<script setup lang='ts'>
import type { ProfileProps } from './types'
import { countCharacters } from '@utils/string'
import { computed } from 'vue'
import Card from '../Card/index.vue'

const props = defineProps<ProfileProps>()

const dtStyle = computed(() => {
  const maxLength = Math.max(...props.details.map(i => countCharacters(i.dt)))
  return { width: `${maxLength * 0.5}em` }
})
</script>

<template>
  <Card class="profile">
    <div class="avatar">
      <img src="/avatar.png" alt="avatar">
    </div>
    <dl v-if="props.details" class="info">
      <template v-for="(item, index) in props.details" :key="index">
        <dt :style="dtStyle">
          {{ item.dt }}
        </dt>
        <dd>
          <ul v-if="Array.isArray(item.dd)">
            <li v-for="(i, iIndex) in item.dd" :key="iIndex">
              {{ i }}
            </li>
          </ul>
          <span v-else>{{ item.dd }}</span>
        </dd>
        <br>
      </template>
    </dl>
    <p class="desc">
      {{ props.bio || "欢迎访问 🎉" }}
    </p>
  </Card>
</template>

<style scoped>
.profile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
}

.avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: solid 1px #ffffff;
    overflow: hidden;
    box-shadow: var(--vp-shadow-1);
}

.avatar img {
    object-fit: cover;
}

.info {
    margin: 0;
}

.info dt,
.info dd{
    display: inline-block;
    margin: 0;
}

.info dt {
    margin-right: 1em;
    color: var(--vp-c-text-2);
    font-size: small;
}

.info dt:not(:last-of-type) {
    margin-bottom: .25em;
}

.info dd ul {
    display: flex;
}

.info dd ul li:not(:last-child)::after {
    content: '、';
}

.desc {
    color: var(--vp-c-text-2);
}
</style>
