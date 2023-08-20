<script lang="ts">
    import { goto } from '@roxi/routify'
  </script>
  
  <div class="text-black">HOME</div>
  <br />
  <button on:click={() => $goto('/')}>Go to main page</button>