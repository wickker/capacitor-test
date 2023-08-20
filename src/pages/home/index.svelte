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
<br />
<p>Greeting cookie: {Cookies.get('greeting')}</p>
<br />
<button class='text-blue-500' on:click={() => $goto('/')}>Go to main page</button>
<br />
<br />
<form action="http://localhost:9000/1.0/sellers/logout" method="post">
  <button class='text-blue-500'>Logout</button>
</form>
<br />
<div>
  Invoices: {JSON.stringify($res?.data)}
</div>
