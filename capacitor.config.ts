import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'capacitor.app',
  appName: 'capacitor',
  webDir: 'dist',
  server: {
    url: "http://192.168.50.81:3000",
    cleartext: true,
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
}

export default config
