<template>
  <div class="concerts">
    <h5 class="grey-text" style="margin-bottom: 2em;margin-left: 2em;">简单介绍</h5>
    <ConcertList />
  </div>
  
</template>



<script>
// @ is an alias to /src
import ConcertList from '@/components/ConcertList'
export default {
  components: { ConcertList }
}
</script>

