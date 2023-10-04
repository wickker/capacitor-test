<script lang="ts">
  import './app.css'
  import { Router } from '@roxi/routify'
  import { routes } from '../.routify/routes'
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'
  import { App } from '@capacitor/app'

  let isActiveBefore = false

  App.addListener('appStateChange', ({ isActive }) => {
    if (isActive) {
      isActiveBefore = true

      setTimeout(() => {
        isActiveBefore = false
      }, 3000)
    }
  })

  const queryClient = new QueryClient()
</script>

<QueryClientProvider client={queryClient}>
  <Router {routes} />
</QueryClientProvider>

{#if isActiveBefore}
  <div>
    {location}
  </div>
{/if}
