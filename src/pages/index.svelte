<script lang="ts">
  import { goto } from '@roxi/routify'
  import axios from 'axios'
  // import { useQuery } from '@sveltestack/svelte-query'
  import { Preferences } from '@capacitor/preferences'

  let inputVal: string = ''
  let data: string = ''
  let token: string = ''

  const tokenName = 'otterlive-token'

</script>

<div class="px-5 py-8">
  <p class="text-4xl">Root Page</p>
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

  <div>Preference:</div>
  <input
    class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
    type="text"
    bind:value={inputVal}
  />
  <button
    class="mt-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    on:click={async () => {
      await Preferences.set({
        key: tokenName,
        value: inputVal,
      })
      inputVal = ''
    }}
  >
    Set Preference
  </button>
  <br />
  <br />

  <button
    class="mt-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    on:click={async () => {
      const { value } = await Preferences.get({key: tokenName})
      token = value || ''
    }}
  >
    Get Preference
  </button>
  <div>Preference '{tokenName}': {token}</div>
  <br />
  <br />

  <button
    class="mt-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    on:click={async () => {
      const res = await axios.get(
        'https://b016-202-83-111-226.ngrok-free.app/1.0/sellers/mobile-auth',
        {
          headers: {
            'Authorization': token,
          },
        }
      )
      data = JSON.stringify(res.data)
    }}
  >
    Get Data
  </button>
  <br />
  <div>Data: {data}</div>

</div>
