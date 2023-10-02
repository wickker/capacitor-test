<script lang="ts">
  import { goto } from '@roxi/routify'
</script>

<div class="py-8 px-5">
  <div class="text-black text-4xl">Home Page</div>
  <br />
  
  <button class="text-blue-500" on:click={() => $goto('/')}>
    Go to root page
  </button>
</div>



