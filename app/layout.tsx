import React from "react";
import Navigation from "@/app/components/Navigation";
import { Metadata } from "next";
import Logo from "@/app/components/Logo";

export const metadata: Metadata = {
  title: "The Wild Oasis",
  description: "Welcome to The Wild Oasis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
