<script lang="ts">
  import { goto } from '@roxi/routify'
  import {
    FacebookLogin,
    type FacebookLoginResponse,
  } from '@capacitor-community/facebook-login'

  let token = ''

  async function handleLogin() {
    const FACEBOOK_PERMISSIONS = "email,publish_video,pages_show_list,pages_messaging,pages_manage_metadata,public_profile,pages_read_engagement".split(',')
    
    const result = await FacebookLogin.login({
      permissions: FACEBOOK_PERMISSIONS,
    })

    if (result.accessToken) {
      // Login successful.
      console.log(`Facebook access token is ${result.accessToken.token}`)
      token = result.accessToken.token

    }
  }
</script>

<div class="px-5 py-8">
  <div class="text-4xl text-black">Login Page</div>
  <br />

  <button class="text-blue-500" on:click={() => $goto('/')}>
    Go to root page
  </button>

  <button on:click={handleLogin}>LOGIN WITH FACEBOOK</button>

  <br />
  token: {token}
</div>
