<template>
<div>
  <swiper>
    <swiper-item v-for="item in banners" :key="item">
      <a :href="item.link">
        <div class="haha">
          <img style="width: 100%"  :src="item.image" alt="" />
        </div>
      </a>
    </swiper-item>
  </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    //TODO: banners: Array  这种写法不对，
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
/* TODO: 此处写这个不管用，需要在img标签中写上才管用 
.img {
  width: 100%;
} 
*/
</style>