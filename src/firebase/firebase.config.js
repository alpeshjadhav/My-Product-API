// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDapYzm_1Zr6nyJc2qeyrJyNNGjTc0s3TA",
  authDomain: "my-product-api-feb4a.firebaseapp.com",
  projectId: "my-product-api-feb4a",
  storageBucket: "my-product-api-feb4a.appspot.com",
  messagingSenderId: "184461200736",
  appId: "1:184461200736:web:9cff5341498d5674f5e205",
  measurementId: "G-L2Q5JDKMES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
