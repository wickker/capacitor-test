# Running locally

1. https://capacitorjs.com/docs/getting-started/environment-setup
- When installing emulators for Android Studio, make sure to choose API 33 (API 34 is not yet supported for 'npx cap run android') e.g. Pixel 5 API 33

2. https://capacitorjs.com/docs/getting-started

3. yarn install

-----

## a. Running with live reload 

- yarn dev

- Set your local machine ip in capcaitor.config.ts

## b. Running without live reload 

- yarn build 

- npx cap sync 

- Comment out lines 7-12 in capacitor.config.ts

-----

4. For android: npx cap open android, npx cap run android

5. For ios: npx cap open ios, npx cap run ios