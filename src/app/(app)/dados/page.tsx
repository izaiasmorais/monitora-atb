import { DataCard } from "@/components/data/data-card";
import { dataItems } from "@/mocks/data-items";

export default function Page() {
	return (
		<div className="w-full flex-1 grid grid-cols-4 gap-6">
			{dataItems.map((item) => (
				<DataCard
					key={item.title}
					title={item.title}
					description={item.description}
					icon={item.icon}
					href={item.href}
				/>
			))}
		</div>
	);
}
