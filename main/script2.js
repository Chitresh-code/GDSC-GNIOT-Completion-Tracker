// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ22OEW5T8ijP-Mn6AiilafXf24USLd2U",
  authDomain: "genai-student-tracker.firebaseapp.com",
  projectId: "genai-student-tracker",
  storageBucket: "genai-student-tracker.appspot.com",
  messagingSenderId: "877361876829",
  appId: "1:877361876829:web:bd9bdb776dc410ff97e2b4",
  measurementId: "G-3DL566BYBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);