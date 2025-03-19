"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings } from "lucide-react";
import { Avatar } from "./avatar";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/auth/get-profile";
import Cookies from "js-cookie";
import { ProfileSkeleton } from "./profile-skeleton";
import Link from "next/link";

export function Menu() {
	const router = useRouter();

	function handleLogout() {
		Cookies.remove("prescriptions_token", { path: "/" });
		router.push("/entrar");
	}

	const { data: response, isLoading: isLoadingGetProfile } = useQuery({
		queryFn: getProfile,
		queryKey: ["get-profile"],
		onSuccess: (response) => {
			if (response.success === false) {
				handleLogout();
			}
		},
	});

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="flex items-center gap-4 cursor-pointer">
					{isLoadingGetProfile && (
						<div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
					)}

					{!isLoadingGetProfile && response?.success && (
						<Avatar src="" fall={response.data.name[0]} />
					)}

					{isLoadingGetProfile && <ProfileSkeleton />}

					{!isLoadingGetProfile && response?.success && (
						<div className="hidden sm:flex flex-col text-sm ">
							<strong>{response.data.name}</strong>
							<span className="w-[200px]">{response.data.email}</span>
						</div>
					)}
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56 mr-4">
				<DropdownMenuLabel className="sm:hidden">
					{isLoadingGetProfile && <ProfileSkeleton />}

					{!isLoadingGetProfile && response?.success && (
						<div className="flex sm:hidden flex-col text-sm font-normal">
							<strong>{response.data.name}</strong>
							<span className="w-[200px]">{response.data.email}</span>
						</div>
					)}
				</DropdownMenuLabel>

				<DropdownMenuSeparator className="sm:hidden" />

				<DropdownMenuItem className="cursor-pointer" asChild>
					<Link href="/configuracoes" className="flex items-center">
						<Settings className="mr-2 h-4 w-4" />
						<span>Configurações</span>
					</Link>
				</DropdownMenuItem>

				<DropdownMenuItem
					className="cursor-pointer"
					asChild
					onClick={handleLogout}
				>
					<div className="flex items-center hover:!text-red-500">
						<LogOut className="mr-2 h-4 w-4" />
						<span>Sair</span>
					</div>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
