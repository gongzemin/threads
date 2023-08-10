import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

/*
 * @Author: mingongze andersonmingz@gmail.com
 * @Date: 2023-08-09 19:01:28
 * @LastEditors: mingongze andersonmingz@gmail.com
 * @LastEditTime: 2023-08-10 11:15:50
 * @FilePath: \threads\app\(auth)\layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const metadata = {
    title: 'Threads',
    description: 'A Next.js 13 Meta Threads Application'
}
const inter = Inter({ subsets: ["latin"]})
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
    </ClerkProvider>
    )
}