import { NextRequest, NextResponse } from "next/server";
import { checkUserAuthentication } from "./functions/check-user-authentication";

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const url = request.nextUrl.clone();

	const isUserAuthenticated = checkUserAuthentication();

	const privateRoutes = ["/", "/prescricoes"];

	if (!isUserAuthenticated) {
		url.pathname = "/entrar";

		if (privateRoutes.includes(pathname)) {
			// return NextResponse.redirect(url);
		}
	}
}
