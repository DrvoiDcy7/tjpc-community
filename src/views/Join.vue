<template>

  <div class="join">
    
    
    <Recruit />
    <Contact />
  </div>

</template>


<style>
  
</style>

<script>
// @ is an alias to /src

import Contact from '@/components/Contact'
import Recruit from '@/components/Recruit'

export default {
  components: {  Contact, Recruit },
  
}
</script>
