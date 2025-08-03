// app/layout.tsx
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata = {
  title: "Beshah Ashenafi - Front-End Developer Portfolio",
  description:
    "Portfolio of Beshah Ashenafi, a front-end developer skilled in React.js, Next.js, Tailwind CSS, and Bootstrap.",
  metadataBase: new URL("https://beshahashenafi.vercel.app"),
  openGraph: {
    title: "Beshah Ashenafi - Front-End Developer Portfolio",
    description:
      "Portfolio of Beshah Ashenafi, a front-end developer skilled in React.js, Next.js, Tailwind CSS, and Bootstrap.",
    url: "https://beshahashenafi.vercel.app",
    images: ["/assets/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beshah Ashenafi - Front-End Developer Portfolio",
    description:
      "Portfolio of Beshah Ashenafi, a front-end developer skilled in React.js, Next.js, Tailwind CSS, and Bootstrap.",
    images: ["/assets/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoSlab.variable}`}>
      <head>
        <link rel="icon" href="/assets/images/favicon.png" type="image/png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
