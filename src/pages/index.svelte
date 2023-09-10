<script lang="ts">
  import { goto } from '@roxi/routify'
  import axios from 'axios'
  import { useQuery } from '@sveltestack/svelte-query'

  // Axios and svelte query POC: 
  const api = axios.create({
    baseURL: 'https://a32f-2401-7400-c807-9d0d-90be-9655-720-a33b.ngrok-free.app',
  })
  const getMe = useQuery('me', () =>
    api.get(`1.0/sellers/test`).then((res) => res.data)
  )
</script>

<div>
  <p class="mt-10 text-4xl text-black">Root Page</p>
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

  {`Get data: ${JSON.stringify($getMe.data)}`}
</div>
