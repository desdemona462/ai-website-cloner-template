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
  metadataBase: new URL("https://leadgravity.ai"),
  title: "LinkedIn Lead Generation Automation | LeadGravity - 10x Your Outreach",
  description:
    "Automate LinkedIn DMs & comments. Grow your network 24/7 with personalized outreach. Free 7-day trial. Join 300+ B2B sales teams.",
  openGraph: {
    title: "LinkedIn Lead Generation Automation | LeadGravity - 10x Your Outreach",
    description:
      "Automate LinkedIn DMs & comments. Grow your network 24/7 with personalized outreach. Free 7-day trial. Join 300+ B2B sales teams.",
    images: ["/seo/leadgravity/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Lead Generation Automation | LeadGravity - 10x Your Outreach",
    description:
      "Automate LinkedIn DMs & comments. Grow your network 24/7 with personalized outreach. Free 7-day trial. Join 300+ B2B sales teams.",
    images: ["/seo/leadgravity/opengraph-image.png"],
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
