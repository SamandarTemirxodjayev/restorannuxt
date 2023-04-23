<template>
  <div>
    <div v-if="menu.length">
      <div v-for="menuItem in menu" :key="menuItem._id">
        <nuxt-link
          :to="`/menu/${menuItem._id}`"
          class="bg-white rounded-lg mt-5"
        >
          <div class="font-bold">
            <catalog-img :url="menuItem.photo_url" />
            <div class="p-1 pb-5">
              <h3 class="text-2xl mb-2">{{ menuItem.name }}</h3>
              <div class="flex justify-between text-end">
                <span class="text-xl">
                  {{ Number(menuItem.price).toLocaleString() }} so'm
                </span>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div v-else class="h-scree justify-center items-center flex">
      <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-yellow-600 rounded-full" role="status" aria-label="loading">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CatalogImg from './CatalogImg.vue'

export default {
  components: { CatalogImg },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      menu: [],
      propValue: null,
    }
  },
  watch: {
    id(newValue) {
      this.propValue = newValue
    },
  },
  created() {
    axios
      .get(`https://restoranmenu1.vercel.app/catalogMenus/${this.id}`)
      .then((response) => {
        this.menu = response.data.menus
      })
  },
}
</script>
