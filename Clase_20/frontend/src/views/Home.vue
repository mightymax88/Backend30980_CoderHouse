<template>
  <div class="home">
    <img alt="Coder logo" src="../assets/coderhouse-logo.png">
    <HelloWorld msg="Programación Backend - Comisión 30980 - 2da Entrega Proyecto Final"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
