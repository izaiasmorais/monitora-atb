import { Header } from "@/components/header/header";
import { Sidebar } from "@/components/sidebar/sidebar";
import { RouteMetadata } from "@/components/global/route-metadata";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="xl:grid xl:grid-cols-app min-h-screen">
			<Sidebar />

			<main className="xl:col-start-2 max-w-[100vw] flex flex-col h-screen">
				<Header />

				<div className="px-4 py-8 md:p-5 flex-grow overflow-auto">
					<RouteMetadata />

					{children}
				</div>
			</main>
		</div>
	);
}
