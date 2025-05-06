import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Our chef preparing authentic Indian cuisine"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 -left-4 w-24 h-24 bg-orange-200 rounded-full z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-100 rounded-full z-0" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Culinary Journey</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Madhur Caterers began as a small family-owned business with a passion for authentic
              Indian cuisine. Our founder, Chef Raj Sharma, brought generations of family recipes from various regions
              of India to create a unique culinary experience.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we've grown into a premier catering service, bringing the rich flavors of India to events across
              the city. We take pride in using traditional cooking methods while incorporating modern techniques to
              create dishes that honor our heritage.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced chefs specializes in cuisines from all regions of India, from the rich, creamy
              curries of the North to the spicy, coconut-infused dishes of the South. We source the finest ingredients,
              including authentic spices imported directly from India, to ensure every dish delivers an authentic taste
              experience.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
              <div className="text-center p-2 bg-white/50 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">12+</div>
                <div className="text-sm md:text-base text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-2 bg-white/50 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">500+</div>
                <div className="text-sm md:text-base text-gray-600">Events Catered</div>
              </div>
              <div className="text-center p-2 bg-white/50 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">50+</div>
                <div className="text-sm md:text-base text-gray-600">Signature Dishes</div>
              </div>
              <div className="text-center p-2 bg-white/50 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">8</div>
                <div className="text-sm md:text-base text-gray-600">Expert Chefs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
