import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'capacitor.app',
  appName: 'capacitor',
  webDir: 'dist',
  server: {
    // input your local machine ip for live reload (this is logged out when you run yarn dev)
    url: 'http://10.110.162.140:3001', 
    // enable for local dev only
    cleartext: true, 
  },
  plugins: {},
  android: {
    flavor: 'dev',
  }
}

export default config
