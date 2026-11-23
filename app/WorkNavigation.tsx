"use client";

import { useEffect } from "react";

const projects = [
  ["project-ghar", "घर जो हम पीछे छोड़ आए"],
  ["project-auction-of-tongues", "Auction of Tongues"],
  ["project-zupto", "Zupto"],
  ["project-ahmedabad-brts", "Ahmedabad BRTS"],
  ["project-ira", "IRA"],
] as const;

export default function WorkNavigation() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  }, []);

  return (
    <ol>
      {projects.map(([id, title]) => (
        <li key={id}>
          <a
            href={`#${id}`}
            onClick={(event) => {
              event.preventDefault();
              document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            {title}
          </a>
        </li>
      ))}
    </ol>
  );
}
