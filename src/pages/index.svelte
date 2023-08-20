<script lang="ts">
  import { goto } from '@roxi/routify'
</script>

<div>
  <p class="text-xl text-red-600">Hello</p>
  <br />
  <button on:click={() => $goto('/mess')}>Go to /mess</button>
</div>
