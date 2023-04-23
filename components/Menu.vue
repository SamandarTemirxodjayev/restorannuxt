<template>
  <div>
    <div v-for="catalog in catalogs" :key="catalog._id" class="cursor-pointer">
      <h2 class="text-2xl font-bold p-1">{{ catalog.name }}</h2>
      <div class="container">
        <div class="overflow-x-auto whitespace-nowrap flex">
          <div
            v-for="menu in filteredMenus(catalog._id)"
            :key="menu._id"
            class="rounded-t-lg mx-2 my-2 flex-none"
            style="width: 300px"
          >
            <nuxt-link :to="`/menu/${menu._id}`">
              <menu-img :url="menu.photo_url"/>
              <div class="py-1">
                <h3 class="font-bold text-2xl mb-2">{{ menu.name }}</h3>
                <div class="flex justify-between text-end">
                  <span class="font-bold text-xl">
                    {{ menu.price.toLocaleString() }} so'm
                  </span>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MenuImg from './MenuImg.vue'

export default {
  components: { MenuImg },
  props:{
    catalogs: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      loading: true,
      menus: []
    }
  },
  created() {
    axios.get('https://restoranmenu1.vercel.app/menu').then((res) => {
      this.menus = res.data.menus
    })
  },
  methods: {
    filteredMenus(categoryId) {
      return this.menus.filter((menu) => menu.category_id === categoryId)
    },
    handleOnload() {
      const timer = setTimeout(() => {
        this.loading = false
      }, 2000)
      return () => clearTimeout(timer)
    },
  },
}
</script>
