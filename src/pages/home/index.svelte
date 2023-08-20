<script lang="ts">
  import { goto } from '@roxi/routify'
  import Cookies from 'js-cookie'
  import { useQuery } from '@sveltestack/svelte-query'
  import axios from 'axios'
  import { CapacitorHttp, type HttpResponse } from '@capacitor/core'
  import { onMount } from 'svelte'

  const otterApi = axios.create({
    baseURL: 'http://10.0.2.2:9000',
    //   withCredentials: true,
  })

  const getInvoices = (): Promise<any> =>
    otterApi
      .get(`1.0/sellers/invoices`, {
        headers: {
          Cookie:
            'otterlive-token=5613098307074932b38ad7153a3cf5d5ebcfcad07843d4a0adcc044ff7057b19cf1b9',
        },
      })
      .then((res) => res.data)

  const res = useQuery('invoices', getInvoices)

  //   let res: HttpResponse

  //   onMount(async () => {
  //     res = await CapacitorHttp.get({
  //       url: 'http://10.0.2.2:9000/1.0/sellers/invoices',
  //       headers: {
  //         Cookie:
  //           'otterlive-token=5613098307074932b38ad7153a3cf5d5ebcfcad07843d4a0adcc044ff7057b19cf1b9',
  //       },
  //     })
  //   })
</script>

<div class="text-black">HOME</div>
<br />
<p>Greeting cookie: {Cookies.get('greeting')}</p>
<br />
<button class="text-blue-500" on:click={() => $goto('/')}
  >Go to main page</button
>
<br />
<br />
<form action="http://localhost:9000/1.0/sellers/logout" method="post">
  <button class="text-blue-500">Logout</button>
</form>
<br />
<!-- <div>
  Invoices: {JSON.stringify(res)}
</div> -->
<div>
  Invoices: {JSON.stringify($res?.data)}
</div>
