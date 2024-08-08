# Task Tracker App
An app that keeps track of tasks

![Screenshot 2024-08-08 105349](https://github.com/user-attachments/assets/42742bb7-6dba-47a4-99ff-c647e0df2e35)


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
