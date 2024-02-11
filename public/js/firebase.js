let firebaseConfig = {
    // Enter your firebase credentials
    
        apiKey: "AIzaSyBSa1rIfLfANsZXxvzhqPKoYgQ4FNWjtvk",
        authDomain: "blogging-website-2914f.firebaseapp.com",
        projectId: "blogging-website-2914f",
        storageBucket: "blogging-website-2914f.appspot.com",
        messagingSenderId: "937850181976",
        appId: "1:937850181976:web:7f030b3d86efcfb2ec6d2d",
        measurementId: "G-VPEMCSEQLT"
  
    
      // Initialize Firebase
   
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();