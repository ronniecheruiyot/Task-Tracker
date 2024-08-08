# Task Tracker App
An app that keeps track of tasks

![Screenshot_2024-08-08_110604-removebg-preview](https://github.com/user-attachments/assets/4044c5ce-21ef-4915-9481-991e654715e9)
![Screenshot_2024-08-08_110505-removebg-preview](https://github.com/user-attachments/assets/487d041d-d688-4b72-9b49-aba973e9d39f)
![Screenshot_2024-08-08_105408-removebg-preview](https://github.com/user-attachments/assets/62c86e87-ce7c-41d7-a80c-0d92b1e17927)
![Screenshot_2024-08-08_105724-removebg-preview](https://github.com/user-attachments/assets/1170f0a5-b6fa-46fb-8f25-a40ecd48a41f)
![Screenshot_2024-08-08_105425-removebg-preview](https://github.com/user-attachments/assets/8c580096-81f7-4b72-9f4a-b99af6e2e636)

## Setup & running locally
Once you have successfully pulled the code from the repository 
run `npm install` from your root directory to install dependencies (ensure that your node version matches the one articulated in `.nvmrc`)  
If you wish to generate platform native directories run `npx expo prebuild`  
To run the application for Android locally, run `npx expo run:android`  
To run the application for iOS locally, run `npx expo run:ios`

## Deployment
To deploy to iOS run `npx expo run:ios --configuration Release`  
To deploy to Android run `npx expo run:android --variant release`

## Structure
The basic structure of the project is  
`/app` - the source folders containing components, controllers, etc.
`/app/index.tsx` - UI entry point  
`/asset` - static assets used by the mobile application  
`.gitignore` - the gitignore file  
`app.json` - application metadata  
`babel.config.js` - babel configuration  
`build.gradle` - Gradle build configuration  
`metro.config.js` - JS and asset bundler configuration  
`package.json` - library dependencies  
`package-lock.json` - library dependencies lock file  
`README.md` - this file  
`settings.gradle` - Gradle settings 
