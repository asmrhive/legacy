import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Triggers - ASMR Hive",
};

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
