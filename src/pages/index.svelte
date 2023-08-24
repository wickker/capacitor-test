<script lang="ts">
  import { goto } from '@roxi/routify'
</script>

<div>
  <p class="text-4xl mt-10">Root Page</p>
  <br />
  
  <button on:click={() => $goto('/mess')} class="text-blue-500">
    Go to /mess
  </button>
  <br />
  <br />
  
  <button on:click={() => $goto('/home')} class="text-blue-500">
    Go to /home
  </button>
  <br />
</div>
