import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'capacitor.app',
  appName: 'capacitor',
  webDir: 'dist',
  server: {
    // input your local machine ip for live reload (this is logged out when you run yarn dev)
    url: 'http://192.168.10.147:3000', 
    // enable for local dev only
    cleartext: true, 
  },
  plugins: {},
}

export default config
