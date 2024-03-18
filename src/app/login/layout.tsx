import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Rayo App",
  description: "This page is for logging in to Rayo App",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
