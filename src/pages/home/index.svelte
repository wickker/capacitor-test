<script lang="ts">
  import { goto } from '@roxi/routify'
  import Cookies from 'js-cookie'
  import { useQuery } from '@sveltestack/svelte-query'
  import axios from 'axios'

  const otterApi = axios.create({
    baseURL: 'http://localhost:9000',
    withCredentials: true,
  })

  const getInvoices = (): Promise<any> =>
    otterApi.get(`1.0/sellers/invoices`).then((res) => res.data)

  const res = useQuery('invoices', getInvoices)
</script>

<div class="text-black">HOME</div>
<p>Greeting cookie: {Cookies.get('greeting')}</p>
<br />
<button on:click={() => $goto('/')}>Go to main page</button>
<br />
<br />
<div>
  Invoices: {JSON.stringify($res?.data)}
</div>
