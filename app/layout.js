import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Namra Ravani  - Software Developer',
  description: 'Im Namra Ravani, a dedicated B.Tech ICT student at Marwadi University, fueled by a fervent passion for problem-solving and programming. I thrive on tackling challenges head-on, leveraging my technical acumen and innovative mindset to find robust solutions. With a relentless work ethic, Im committed to honing my skills and pushing boundaries in the ever-evolving landscape of technology. My enthusiasm for coding fuels my desire to create efficient and impactful solutions. I eagerly seek opportunities to apply my problem-solving prowess and contribute meaningfully to innovative projects. Lets connect and explore how we can collaborate to solve complex problems and drive technological advancement!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
