import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Header from "@/components/layout/header";
import { Provider } from "@/lib/provider";
import Footer from "@/components/sections/footer";
import ScrollTopButton from "@/components/scroll-top";

const inter = Inter({ subsets: ["latin"] });

// const url = 'your url';
const title = "Jean Altahona | Full Stack Web Developer";
const description =
    "Desarrollador de software en latam";

export const metadata: Metadata = {
    // metadataBase: new URL(url), // TODO: Comment this out once you add your url
    title,
    description,
    keywords: [
        "Frontend Developer",
        "Full Stack Web Developer",
        "React Developer",
        "JavaScript Developer",
        "React.js",
        "Angular.js",
        "MongoDb",
    ],
    creator: "jpaltahona",
    openGraph: {
        type: "website",
        // url // TODO: Comment this out after deploying once you add your url
        title,
        description,
    },
};

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
            {googleAnalyticsId && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
                    </Script>
                </>
            )}
            <body
                className={`${inter.className} antialiased bg-background text-foreground`}
            >
                <Provider>
                    <Header />
                    <main className="flex flex-col w-full min-h-screen">
                        {children}
                    </main>
                    <Footer />
                    <ScrollTopButton />
                </Provider>
            </body>
        </html>
    );
}
