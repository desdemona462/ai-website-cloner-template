import type { Metadata } from "next";
import { Caveat, Darker_Grotesque, DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://draffly.ai"),
  title: "Draffly | Agentic AI Social Content Operations",
  description:
    "Chat with AI, run autonomous content pipelines, manage a library and calendar, track billing usage, and publish through connected social accounts.",
  openGraph: {
    title: "Draffly | Agentic AI Social Content Operations",
    description:
      "Chat with AI, run autonomous content pipelines, manage a library and calendar, track billing usage, and publish through connected social accounts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Draffly | Agentic AI Social Content Operations",
    description:
      "Chat with AI, run autonomous content pipelines, manage a library and calendar, track billing usage, and publish through connected social accounts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${darkerGrotesque.variable} ${caveat.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F3F6F8]">{children}</body>
    </html>
  );
}
