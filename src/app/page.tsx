"use client";

import Link from "next/link";
import link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Lab 10 - Lecture</h2>
      <Link href = "/todolist">
        Go to Todo app
      </Link>
      <br />
      <Link href="/randomUser">
        Go to Random-User app
      </Link>
    </div>
  );
}
