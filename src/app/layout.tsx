import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Providers from "./providers";

import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700", "800", "900"],
	style: ["normal"],
});

export const metadata: Metadata = {
	title: "Prescrições",
	description: "Dashboard de prescrições de pacientes",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning={true}>
			<head>
				<link rel="icon" href="/logo.png" sizes="any" />
				<link
					rel="preload"
					as="font"
					href="/fonts/custom-font.woff2"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</head>

			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
