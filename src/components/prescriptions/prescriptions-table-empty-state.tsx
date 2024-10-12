export function PrescriptionsTableEmptyState() {
	return (
		<div className="flex w-full items-center justify-center h-[300px] text-center">
			<div className="flex flex-col w-[400px]">
				<div className="w-full flex justify-start">
					<div className="bg-background border-2 max-w-max border-muted p-2 rounded-xl flex items-center gap-2">
						<div className="rounded-full bg-muted h-12 w-12" />
						<div className="gap-2 flex flex-col">
							<div className="bg-muted w-72 h-4 rounded-full" />
							<div className="bg-muted/50 w-60 h-4 rounded-full" />
						</div>
					</div>
				</div>

				<div className="flex w-full justify-end">
					<div className="bg-background border-2 max-w-max mt-[-16px] mr-[-32px] border-muted p-2 rounded-xl flex items-center gap-2">
						<div className="rounded-full bg-muted h-12 w-12" />
						<div className="gap-2 flex flex-col">
							<div className="bg-muted w-72 h-4 rounded-full" />
							<div className="bg-muted/50 w-60 h-4 rounded-full" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
