"use client";
import React from "react";
import {
	SortableItem,
	SortableList,
	type SortableItemProps,
} from "@thaddeusjiang/react-sortable-list";
import { PiDotsNine } from "react-icons/pi";
import { Checkbox } from "@/components/ui/checkbox";
import { TesteTabs } from "@/components/teste/teste-tabs";

export default class Page extends React.Component {
	// Declare items as a class property
	items: SortableItemProps[] = [
		{ id: "1", name: "Item 1" },
		{ id: "2", name: "Item 2" },
		{ id: "3", name: "Item 3" },
		{ id: "4", name: "Item 4" },
		{ id: "5", name: "Item 5" },
		{ id: "6", name: "Item 6" },
	];

	// Define the state without items
	state = {};

	setItems = (newItems: React.SetStateAction<SortableItemProps[]>) => {
		// Update the items property directly
		this.items =
			typeof newItems === "function" ? newItems(this.items) : newItems;
		this.forceUpdate(); // Force a re-render to reflect the change
	};

	render() {
		return (
			// <div className="w-full h-screen flex items-center justify-center">
			// 	<div className="w-[800px] h-[500px] rounded-lg bg-slate-50 border border-slate-100 shadow-sm">
			// 		<SortableList items={this.items} setItems={this.setItems}>
			// 			{({ items }: { items: SortableItemProps[] }) => (
			// 				<div className="space-y-4 p-4 w-full">
			// 					{items.map((item: SortableItemProps) => (
			// 						<SortableItem
			// 							key={item.id}
			// 							id={item.id}
			// 							DragHandler={DragHandler}
			// 							className="flex border items-center rounded-md bg-background w-full"
			// 						>
			// 							<div className="flex items-center gap-2">
			// 								<Checkbox />
			// 								{item.name}
			// 							</div>
			// 						</SortableItem>
			// 					))}
			// 				</div>
			// 			)}
			// 		</SortableList>
			// 	</div>
			// </div>

			<div className="w-full h-screen flex items-center justify-center">
				<div className="rounded-lg bg-slate-50 border border-slate-100 p-4 shadow-sm">
					<TesteTabs />
				</div>
			</div>
		);
	}
}

const DragHandler = (props: any) => (
	<div className="p-4 rounded-md cursor-pointer" {...props}>
		<PiDotsNine className="w-6 h-6" />
	</div>
);
