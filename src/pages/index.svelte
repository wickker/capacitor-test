<script lang="ts">
  import { goto } from '@roxi/routify'
//   import { useQuery } from '@sveltestack/svelte-query'
  import Cookies from 'js-cookie'

  //   const res = useQuery('pokemon', () => fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => res.json()))

  let facebookForm: HTMLFormElement

  function handleSubmit() {
    const urlParams = new URL(document.location.toString()).searchParams
    facebookForm.action = `http://localhost:9000/1.0/sellers/login?${urlParams.toString()}`
  }

  Cookies.set('greeting', 'hello world')
</script>

<div>
  <p class="text-xl text-red-600">Hello</p>
  <br />
  <button on:click={() => $goto('/mess')}>Go to /mess</button>
  <br />
  <br />
  
  <form bind:this={facebookForm} method='post' on:submit={handleSubmit}>
    <button>Login with facebook</button>
  </form>

  <!-- <br />
  <br />
  <div>
    Pokemon: {JSON.stringify($res?.data?.results)}
  </div> -->
</div>
