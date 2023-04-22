<template>
  <div
    v-if="loading"
    class="flex justify-center items-center h-screen container mx-auto px-4 sm:px-6 lg:px-8 pt-5 bg-deafult-color"
  >
    <div role="status">
      <svg
        aria-hidden="true"
        class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <div
    v-else
    class="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 bg-deafult-color"
  >
    <div class="flex justify-between mr-5 ">
      <div class="text-4xl font-bold font-exo-2">
        Delicious <br />
        food for you
      </div>
      <!-- <nuxt-link to='/cart' class="mt-5">
        <img src="@/assets/shopping-cart.png" alt="" height="35px" width="35px" />
      </nuxt-link> -->
    </div>
    <div class="mt-6 relative">
      <Search />
    </div>
    <div v-if="!id">
      <div
        class="flex my-3 text-gray-400 text-2xl overflow-x-auto whitespace-nowrap"
      >
        <div
          class="mx-1 cursor-pointer text-orange-set"
          style="border-bottom: 2px solid #ffc83a"
        >
          <nuxt-link to="/"> All </nuxt-link>
        </div>
        <div
          v-for="catalog in catalogs"
          :key="catalog._id"
          class="mx-3 cursor-pointer text-gray-500"
        >
          <nuxt-link :to="`/home/${catalog._id}`">
            {{ catalog.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="flex my-3 text-gray-400 text-2xl overflow-x-auto whitespace-nowrap"
      >
        <div class="mx-1 cursor-pointer text-gray-500">
          <nuxt-link to="/home"> All </nuxt-link>
        </div>
        <div
          v-for="catalog in catalogs"
          :key="catalog._id"
          class="mx-3 cursor-pointer text-gray-500"
        >
          <div
            v-if="id == catalog._id"
            class="mx-3 cursor-pointer text-orange-set"
            style="border-bottom: 2px solid #ffc83a"
          >
            <nuxt-link :to="`/home/${catalog._id}`">
              {{ catalog.name }}
            </nuxt-link>
          </div>
          <nuxt-link v-else :to="`/home/${catalog._id}`">
            {{ catalog.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <slider />
    <div v-if="!id">
      <Menu />
    </div>
    <div v-else>
      <CatalogMenu :id="id" />
    </div>
  </div>
</template>

<script>
import Search from '../../components/Search.vue'
import axios from 'axios'
import Slider from '../../components/Slider.vue'
import Menu from '../../components/Menu.vue'
import CatalogMenu from '../../components/CatalogMenu.vue'
export default {
  data() {
    return {
      catalogs: [],
      loading: true,
    }
  },
  components: { Search, Slider, Menu, CatalogMenu },
  asyncData(context) {
    const { id } = context.params
    return { id }
  },
  created() {
    axios
      .get('https://restoranmenu1.vercel.app/catalog')
      .then((response) => {
        this.catalogs = response.data.catalogs
        this.loading = false
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
