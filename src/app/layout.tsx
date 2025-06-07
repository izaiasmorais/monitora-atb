import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import Providers from "./providers";

import "./globals.css";

export const metadata: Metadata = {
	title: "MonitoraATB",
	description: "Dashboard de prescrições de pacientes",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="pt-br"
			className={GeistSans.className}
			suppressHydrationWarning={true}
		>
			<head>
				<link rel="icon" href="/image.png" sizes="any" />
			</head>

			<body cz-shortcut-listen="true">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
