import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Rayo App",
  description: "This page is for siging up to Rayo App",
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
