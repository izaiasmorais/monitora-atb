import { Skeleton } from "../ui/skeleton";

export function ProfileSkeleton() {
	return (
		<div className="hidden md:flex flex-col text-sm gap-2">
			<Skeleton className="h-4 w-[150px]" />
			<Skeleton className="h-4 w-[200px]" />
		</div>
	);
}
