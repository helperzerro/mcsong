import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="bg-red-400">
      <Link href={"/renshi"}>人是_</Link>
      <Link href={"/zi"}>紫</Link>
    </div>
  );
}
