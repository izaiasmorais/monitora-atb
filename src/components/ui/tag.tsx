import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface TagProps {
	children: React.ReactNode;
	className?: string;
}

export function Tag({ children, className }: TagProps) {
	return (
		<Badge
			className={cn(
				"rounded-md bg-muted hover:bg-muted text-muted-foreground shadow-none",
				className
			)}
		>
			{children}
		</Badge>
	);
}
