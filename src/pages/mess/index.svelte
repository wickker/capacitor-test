<script lang="ts">
  import { goto } from '@roxi/routify'
</script>

<div class="text-black mt-10">Mess Page</div>
<br />

<button class='text-blue-500' on:click={() => $goto('/')}>Go to root page</button>
