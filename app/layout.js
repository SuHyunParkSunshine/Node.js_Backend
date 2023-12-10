import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import LoginBtn from './LoginBtn'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LogoutBtn from './LogoutBtn'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)
  console.log(session)
  return (
    <html lang="en">
      <body>
        <div className='navbar'>
          <Link href="/" className='logo'>Appleforum</Link>
          <Link href='list'>List</Link>
          {
            session 
            ? <span>{session.user.name} <LogoutBtn /></span>
            : <LoginBtn />
          }
        </div>
        {children}
      </body>
    </html>
  )
}
