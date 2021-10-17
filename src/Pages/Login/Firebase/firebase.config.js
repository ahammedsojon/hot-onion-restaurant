// console.log(process.env)
const firebaseConfig = {
    // apiKey: "AIzaSyC2yOGXRRij73lQKIkDYjxpAEo5s7xB1O8",
    // authDomain: "hot-onion-restaurant-901cd.firebaseapp.com",
    // projectId: "hot-onion-restaurant-901cd",
    // storageBucket: "hot-onion-restaurant-901cd.appspot.com",
    // messagingSenderId: "1068509925709",
    // appId: "1:1068509925709:web:ca75b4c277f0589f44e704"

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;