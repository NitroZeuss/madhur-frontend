"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png" // ✅ Image should be inside the /public folder
            alt="Madhur Caterers Logo"
            width={80}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="/#menu">Menu</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#services">Services</NavLink>
          <NavLink href="/#testimonials">Testimonials</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 p-1 -mr-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-amber-100">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-5">
            <MobileNavLink href="/#menu" onClick={() => setIsMenuOpen(false)}>Menu</MobileNavLink>
            <MobileNavLink href="/#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/#services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="/#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</MobileNavLink>
            <MobileNavLink href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-800 hover:text-orange-600 font-medium transition-colors">
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-gray-800 hover:text-orange-600 font-medium py-2 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
