<script lang="ts">
  import { goto } from '@roxi/routify'
  //   import { useQuery } from '@sveltestack/svelte-query'
  import Cookies from 'js-cookie'
  import { CapacitorHttp } from '@capacitor/core'

  //   const res = useQuery('pokemon', () => fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => res.json()))

    let facebookForm: HTMLFormElement

    function handleSubmit() {
      const urlParams = new URL(document.location.toString()).searchParams
      facebookForm.action = `http://localhost:9000/1.0/sellers/login?${urlParams.toString()}`
    }

  Cookies.set('greeting', 'hello world') // test if js cookies library works 
//   Cookies.set('otterlive-token', '5613098307074932b38ad7153a3cf5d5ebcfcad07843d4a0adcc044ff7057b19cf1b9')
</script>

<div>
  <p class="text-xl text-red-600">Main Page</p>
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
  <br />

  <form on:submit={handleSubmit} method="post" bind:this={facebookForm}>
    <button class="text-blue-500">Login with facebook</button>
  </form>

  <!-- <button class="text-blue-500" on:click={submit}>Login with facebook</button> -->

  <!-- <br />
  <br />
  <div>
    Pokemon: {JSON.stringify($res?.data?.results)}
  </div> -->
</div>
