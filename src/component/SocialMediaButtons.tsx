"use client";

import { FaTwitter, FaFacebook } from "react-icons/fa";

export default function SocialMediaButtons() {
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
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
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
