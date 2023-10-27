import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CustomCursorManager from './components/CustomCursor/contexts/manager'
import CustomCursor from './components/CustomCursor/CustomCursor'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AromaDesign',
  description: 'Aroma design is the solution for creating a unique presence on the web. We are the No.1 creative design agency in Ireland. Providing handmade solutions comparable to none.',
  keywords: ['Web Design Cork', 'web designer cork', 'website design agency cork', 'website design', 'creative design', 'creative web design' ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#eeebe6]">
        <CustomCursorManager>
          <div className="page-wrapper">
            <CustomCursor />
            {children}
          </div>
        </CustomCursorManager>
      </body>
    </html>
  )
}
