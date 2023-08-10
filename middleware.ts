/*
 * @Author: mingongze andersonmingz@gmail.com
 * @Date: 2023-08-10 16:40:51
 * @LastEditors: mingongze andersonmingz@gmail.com
 * @LastEditTime: 2023-08-10 16:49:00
 * @FilePath: \threads\middleware.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
    publicRoutes: ['/', '/api/webhook/clerk'],
    ignoredRoutes: ['/api/webhook/clerk']
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
