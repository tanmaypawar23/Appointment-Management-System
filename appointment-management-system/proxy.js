import { withAuth } from "next-auth/middleware";

const authMiddleware = withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      const pathname = req.nextUrl.pathname;

      // Only admin can access admin dashboard
      if (pathname.startsWith("/admin-dashboard")) {
        return token?.role === "admin";
      }

      // Logged-in users can access normal dashboard
      return !!token;
    },
  },

  pages: {
    signIn: "/login",
  },
});

export function proxy(request, event) {
  return authMiddleware(request, event);
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin-dashboard/:path*"],
};
