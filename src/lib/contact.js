import { db } from './firebase.js';
import { collection, addDoc } from "firebase/firestore";

// Formni olish
const contactForm = document.getElementById("contactForm");
const status = document.getElementById("status");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Formni refresh qilmaslik

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    // Firestore-ga yozish
    await addDoc(collection(db, "contacts"), {
      name: name,
      email: email,
      message: message,
      createdAt: new Date()
    });

    status.textContent = "Message sent successfully!";
    contactForm.reset(); // Formni tozalash
  } catch (error) {
    console.error("Error adding document: ", error);
    status.textContent = "Error sending message. Try again.";
  }
});