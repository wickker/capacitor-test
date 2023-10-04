<script lang="ts">
  import { goto } from '@roxi/routify'
  import {
    FacebookLogin,
    type FacebookLoginResponse,
  } from '@capacitor-community/facebook-login'
  import axios from 'axios'
  import { Preferences } from '@capacitor/preferences'

  let token = ''
  let ottertoken = ''

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

  async function handleOtterLogin() {
    if (!token) return

    const req = await axios.get('https://c65a-202-83-111-226.ngrok-free.app/1.0/sellers/login-mobile', {
      params: {
        token
      }
    })

    console.log(req.data)
    ottertoken = req.data

    await Preferences.set({
        key: 'otterlive-token',
        value: req.data,
      })

    $goto('/home')
  }
</script>

<div class="px-5 py-8">
  <div class="text-4xl text-black">Login Page</div>
  <br />

  <button class="text-blue-500" on:click={() => $goto('/')}>
    Go to root page
  </button>

  <br />
  <br />

  <button on:click={handleLogin}>LOGIN WITH FACEBOOK</button>

  <br />
  <br />

  <button on:click={handleOtterLogin}>LOGIN TO OTTERLIVE</button>

  <br />
  token: {token}

  <br />
  otter token: {ottertoken}
</div>
