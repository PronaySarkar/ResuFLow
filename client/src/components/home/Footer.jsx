import { Github } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-r from-white via-indigo-200/60 to-white mt-40">
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
          <a href="#">
            <img src="/logo.png" alt="logo" className="h-12 w-auto" />
          </a>
          <div>
            <p className="text-slate-800 font-semibold">Product</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-indigo-600 transition">Home</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Support</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Pricing</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Affiliate</a></li>
            </ul>
          </div>
          <div>
            <p className="text-slate-800 font-semibold">Resources</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-indigo-600 transition">Company</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Blogs</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Community</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Careers</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">About</a></li>
            </ul>
          </div>
          <div>
            <p className="text-slate-800 font-semibold">Legal</p>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-indigo-600 transition">Privacy</a></li>
              <li><a href="/" className="hover:text-indigo-600 transition">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* --- Social Icons Section --- */}
        <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
          <p className="max-w-60">Making every customer feel valued—no matter the size of your audience.</p>

          <div className="flex items-center gap-4 mt-3">
            {/* Instagram */}
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-instagram size-6 hover:text-indigo-500">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/PronaySarkar" target="_blank" rel="noreferrer">
              <Github />
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-facebook size-6 hover:text-indigo-500">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/pronay-sarkar-6b23b1255/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin size-6 hover:text-indigo-500" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          <p className="mt-3 text-center">© 2025 ResuFlow</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
    </>
  )
}

export default Footer
