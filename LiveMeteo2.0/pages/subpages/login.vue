<template>
  <Login />
</template>

<script>
import Login from '@/components/Login-form.vue';

export default {
  name: 'Logowanie',
  components: {
    Login
  },
  data () {
    return {
        title: "Logowanie"
      }
  }
}

</script>
