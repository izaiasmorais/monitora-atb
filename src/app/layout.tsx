import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Providers from "./providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
		<html lang="en" className="antialiased" suppressHydrationWarning={true}>
			{/* <head>
				<link rel="icon" href="/" sizes="any" />
			</head> */}

			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
