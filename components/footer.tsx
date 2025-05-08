import type React from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Madhur Caterers</h3>
            <p className="text-gray-600 mb-4">
              Bringing authentic Indian flavors to your special occasions. Our catering services blend tradition with
              modern culinary techniques.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" aria-label="Facebook">
                <Facebook size={20} />
              </SocialLink>
              <SocialLink href="https://instagram.com" aria-label="Instagram">
                <Instagram size={20} />
              </SocialLink>
              <SocialLink href="https://twitter.com" aria-label="Twitter">
                <Twitter size={20} />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#menu" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-orange-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600 space-y-2">
              <p>Ram nagar nagpur</p>
              <p></p>
              <p className="mt-4">Phone: +91 9822739077</p>
              <p>Email: madhurcaterersnagpur@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-amber-100 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Madhur Caterers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, children, ...props }: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-orange-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}
