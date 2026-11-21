import { withAuth } from "next-auth/middleware";

const authMiddleware = withAuth({
  pages: {
    signIn: "/login",
  },
});

export function proxy(request, event) {
  return authMiddleware(request, event);
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
