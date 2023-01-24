import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'tech-rise',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      "launchAutoHide": false,
      "backgroundColor": "#000000",
      "androidSplashResourceName": "splash",
      "androidScaleType": "CENTER_CROP",
      "showSpinner": true,
      "androidSpinnerStyle": "large",
      "iosSpinnerStyle": "small",
      "spinnerColor": "#999999",
      "splashFullScreen": true,
      "splashImmersive": true
    },
    PushNotifications: {
      "presentationOptions": ["badge", "sound", "alert"]
    }
  }
};

export default config;
