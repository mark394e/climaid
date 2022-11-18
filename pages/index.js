import React, { useState } from "react"; // <--- import the hook
import SocialMediaProvider from "./components/SocialMediaProvider";

export default function Home() {
  const [socialMedia, setSocialMedia] = useState([
    {
      name: "YouTube",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-youtube"
          viewBox="0 0 16 16"
        >
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
        </svg>
      ),
      minutes: 0,
      emission: 0.46,
      key: "1",
    },
    {
      name: "Twitch",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-twitch"
          viewBox="0 0 16 16"
        >
          <path d="M3.857 0L1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429l-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z" />
          <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z" />
        </svg>
      ),
      minutes: 0,
      emission: 0.55,
      key: "2",
    },
    {
      name: "Twitter",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-twitter"
          viewBox="0 0 16 16"
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>
      ),
      minutes: 0,
      emission: 0.6,
      key: "3",
    },
    {
      name: "LinkedIn",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-linkedin"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      ),
      minutes: 0,
      emission: 0.71,
      key: "4",
    },
    {
      name: "Facebook",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-facebook"
          viewBox="0 0 16 16"
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </svg>
      ),
      minutes: 0,
      emission: 0.79,
      key: "5",
    },
    {
      name: "Snapchat",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 3333 3333"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm532 1492c86-429-81-787-533-791-323-2-617 208-537 761 10 69-23 61-75 49-43-9-87-19-130-28-21 4-37 12-48 23-62 66 63 117 110 135 62 23 130 45 121 118-3 29-13 57-24 86-59 142-215 275-363 317-77 22-116 31 1 95 53 29 119 45 205 57 12 227 98 81 284 119 23 5 48 8 75 20 48 21 96 62 151 94 166 96 316 102 478-12 94-66 183-131 350-111 117 15 109 51 149-114 147-26 279-54 271-135-192-41-314-141-416-305-40-65-91-160 15-205 28-12 65-18 108-34 38-13 72-37 80-54 21-48-14-90-59-94-86-6-127 50-179 33-12-4-23-11-37-23h1z" />
        </svg>
      ),
      minutes: 0,
      emission: 0.87,
      key: "6",
    },
    {
      name: "Instagram",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-instagram"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg>
      ),
      minutes: 0,
      emission: 1.05,
      key: "7",
    },
    {
      name: "Pinterest",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 640 640"
        >
          <path d="M319.965.024C143.246.024 0 143.282 0 320c0 135.628 84.39 251.33 203.412 297.913-2.728-25.24-5.362-64.206 1.146-91.773 5.775-24.969 37.536-158.99 37.536-158.99s-9.508-19.217-9.508-47.47c0-44.456 25.807-77.74 57.839-77.74 27.284 0 40.536 20.492 40.536 45.012 0 27.426-17.457 68.505-26.54 106.454-7.665 31.89 15.874 57.84 47.316 57.84 56.835 0 100.56-60.025 100.56-146.589 0-76.571-55.123-130.147-133.608-130.147-91.04 0-144.403 68.245-144.403 138.911 0 27.568 10.523 56.966 23.823 72.993 2.575 3.19 3.047 5.906 2.161 9.225-2.445 10.098-7.807 31.902-8.953 36.331-1.429 5.917-4.618 7.063-10.665 4.347-39.97-18.603-64.903-77.057-64.903-123.911 0-101.01 73.265-193.62 211.35-193.62 110.941 0 197.222 79.04 197.222 184.798 0 110.234-69.532 199.1-166.053 199.1-32.457 0-62.882-16.89-73.323-36.791 0 0-16.016 61.028-19.89 76.04-7.205 27.827-26.682 62.6-39.804 83.836 30.012 9.236 61.713 14.268 94.785 14.268C496.755 640.037 640 496.79 640 320.072 640 143.212 496.755-.034 320.036-.034l-.071.059z" />
        </svg>
      ),
      minutes: 0,
      emission: 1.3,
      key: "8",
    },
    {
      name: "Reddit",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3333 3333"
          width="50"
          height="50"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-511 1795c0-71 57-128 128-128s128 57 128 128-57 128-128 128-128-57-128-128zm766 0c0-71 57-128 128-128s128 57 128 128-57 128-128 128-128-57-128-128zm6 273c33-26 81-20 107 13s20 81-13 107c-92 72-231 119-356 119-124 0-264-47-356-119-33-26-39-74-13-107s74-39 107-13c53 42 157 86 262 86s209-45 262-86zm760-528c0-141-114-256-255-256-96 0-180 53-223 131-131-72-291-118-466-129l152-342 292 84c26 74 97 128 181 128 106 0 192-86 192-192s-86-192-192-192c-73 0-136 41-169 101l-325-94c-36-10-75 7-90 42l-207 465c-170 12-326 58-454 128-44-78-127-131-223-131-141 0-255 114-255 256 0 104 63 194 152 234-16 48-25 98-25 149 0 353 400 639 894 639s894-286 894-639c0-51-9-102-25-149 90-40 152-129 152-234zm-319-647c40 0 72 32 72 72s-32 72-72 72-72-32-72-72 32-72 72-72zM772 1540c0-70 57-128 128-128 51 0 95 30 116 73-67 51-122 109-163 173-47-19-80-65-80-119zm894 870c-410 0-743-218-743-487s332-487 743-487c410 0 743 218 743 487s-332 487-743 487zm814-752c-41-64-96-122-163-173 21-43 65-73 116-73 70 0 128 57 128 128 0 54-33 100-80 119z" />
        </svg>
      ),
      minutes: 0,
      emission: 2.48,
      key: "9",
    },
    {
      name: "TikTok",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3333 3333"
          width="50"
          height="50"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm361 744c31 262 177 418 430 434v294c-147 14-276-34-426-124v550c0 700-763 918-1069 417-197-322-76-889 556-911v311c-48 8-99 20-146 36-141 47-220 137-198 294 43 301 595 390 549-198V745h305z" />
        </svg>
      ),
      minutes: 0,
      emission: 2.63,
      key: "10",
    },
  ]);

  return (
    <>
      <section className="soMeContainer">
        {socialMedia.map((sm) => {
          return (
            <SocialMediaProvider
              {...sm}
              setSocialMedia={setSocialMedia}
              key={sm.key}
            />
          );
        })}
      </section>
    </>
  );
}
