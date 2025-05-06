import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e67e22' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-800">
            Madhur Caterers: Authentic Indian Cuisine for Your Special Occasions
          </h1>
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
            Experience the rich flavors and aromatic spices of India with our premium catering services. From intimate
            gatherings to grand celebrations, we bring the essence of Indian cuisine to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
            >
              <Link href="/#menu">Explore Our Menu</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 relative z-10">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl transform rotate-1">
            {/* Replace the Image tag with a video tag */}
            <video
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-100 rounded-full z-[-1]" />
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full z-[-1]" />
        </div>
      </div>
    </section>
  )
}
