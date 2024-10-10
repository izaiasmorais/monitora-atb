import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

export function PaginationSkeleton() {
	return (
		<div className="flex items-center justify-between">
			<Skeleton className="h-4 w-[100px] text-sm text-muted-foreground" />

			<div className="flex items-center gap-6 lg:gap-8">
				<Skeleton className="h-4 w-[100px] text-sm font-medium" />

				<div className="flex items-center gap-2">
					<Button variant="outline" className="h-8 w-8 p-0" disabled>
						<Skeleton className="h-4 w-4" />
					</Button>
					<Button variant="outline" className="h-8 w-8 p-0" disabled>
						<Skeleton className="h-4 w-4" />
					</Button>
					<Button variant="outline" className="h-8 w-8 p-0" disabled>
						<Skeleton className="h-4 w-4" />
					</Button>
					<Button variant="outline" className="h-8 w-8 p-0" disabled>
						<Skeleton className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	);
}
