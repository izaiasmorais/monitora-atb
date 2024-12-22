import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const url = request.nextUrl.clone();

	const cookies = parse(request.headers.get("cookie") || "");

	const userToken = cookies["prescriptions_token"];
	const isUserAuthenticated = !!userToken;

	const privateRoutes = ["/", "/prescricoes"];

	if (!isUserAuthenticated) {
		url.pathname = "/entrar";

		if (privateRoutes.includes(pathname)) {
			return NextResponse.redirect(url);
		}
	}

	if (
		isUserAuthenticated &&
		(pathname === "/entrar" || pathname === "/cadastro")
	) {
		url.pathname = "/";
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}
