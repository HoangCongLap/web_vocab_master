"use client";
import { useEffect, useState } from "react";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useAuth } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import VocabLesson from "../pages/LessonVocab";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export default function SocialMediaButtons() {
  const auth = useAuth();
  const [value, setValue] = useState<string | null>(null);

  const handleClick = async () => {
    const googleProvider = new GoogleAuthProvider(useAuth());

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Sign-In Result:", user);
      setValue(user.email);
    } catch (error) {
      console.error("Google Sign-In Error:", error.code, error.message);
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setValue(storedEmail);
  }, []);
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        fontSize: "30px",
      }}
    >
      <li>
        <a onClick={handleClick}>{value ? <VocabLesson /> : <IoMdMail />}</a>
      </li>
      <li>
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>
      </li>
    </ul>
  );
}
