<template>
  <div class="bg-orange-set h-screen flex flex-col">
    <div class="font-exo-2 font-bold text-white text-center pt-4">
      <div class="leading-none" style="font-size: 55px">Food for Everyone</div>
    </div>
    <div class="flex items-center pt-10 justify-center">
      <div class="pl-5" style="height: 50px">
        <div class="flex-none">
          <img src="../assets//img/image13.png" alt="" />
        </div>
        <div class="flex-none pt-10">
          <img src="../assets/img/image12.png" alt="" />
        </div>
      </div>
      <div class="flex-none pl-4">
        <img src="../assets/img/boy1.png" alt="" />
      </div>
    </div>
    <div class="text-3xl justify-center items-center flex pt-24">
      <nuxt-link to="/home">
        <button class="bg-white text-orange-set rounded-3xl py-4 px-16">
          Get Started
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetStarted',
}
</script>
