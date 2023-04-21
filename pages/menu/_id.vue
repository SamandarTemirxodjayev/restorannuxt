<template>
  <div class="">

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      menu: [],
      menus: [],
      loading: true
    }
  },

  asyncData(context) {
    const { id } = context.params
    return { id }
  },
  created() {
    axios
      .get('https://restoranmenu1.vercel.app/menu/' + this.id)
      .then((response) => {
        this.menu = response.data.menu
        axios.get(`https://restoranmenu1.vercel.app/catalogMenus/${response.data.menu.category_id}`)
        .then((response) => {
          this.menus = response.data.menus
        })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods:{
    handleLoad(){
      const timer = setTimeout(() => {
        this.loading = false
      }, 500)
      return () => clearTimeout(timer)
    }
  },
  

}
</script>