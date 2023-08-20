<script lang="ts">
  import { goto } from '@roxi/routify'
  import { useQuery } from '@sveltestack/svelte-query'

  const res = useQuery('pokemon', () => fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => res.json()))
</script>

<div>
  <p class="text-xl text-red-600">Hello</p>
  <br />
  <button on:click={() => $goto('/mess')}>Go to /mess</button>
  <br />
  <br />
  <div>
    Pokemon: {JSON.stringify($res?.data?.results)}
  </div>
</div>
