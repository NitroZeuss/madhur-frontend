import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Wedding Client",
      content:
        "Madhur Caterers handled our wedding and the food was absolutely amazing! Our guests couldn't stop talking about the butter chicken and naan. The service was impeccable and the presentation was beautiful.",
      avatar: "PS",
    },
    {
      name: "Michael Johnson",
      role: "Corporate Event Manager",
      content:
        "We've used Madhur Caterers for multiple corporate events and they never disappoint. The variety of dishes they offer satisfies everyone's preferences, and their attention to detail is outstanding.",
      avatar: "MJ",
    },
    {
      name: "Anita Patel",
      role: "Birthday Celebration",
      content:
        "The team at Madhur Caterers made my 50th birthday celebration truly special. The food was authentic and reminded me of my grandmother's cooking. Their staff was professional and friendly.",
      avatar: "AP",
    },
  ]

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our catering services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-amber-100 bg-white">
              <CardContent className="p-4 md:p-6">
                <Quote className="h-6 w-6 md:h-8 md:w-8 text-orange-300 mb-3 md:mb-4" />
                <p className="text-gray-600 mb-4 md:mb-6 italic text-sm md:text-base">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={`/placeholder.svg?text=${testimonial.avatar}`} alt={testimonial.name} />
                    <AvatarFallback className="bg-orange-100 text-orange-600">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
