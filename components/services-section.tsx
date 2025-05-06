import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Users, Calendar, Gift, Award, Clock } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      title: "Corporate Events",
      description: "Impress your clients and team with authentic Indian cuisine at your next corporate gathering.",
      icon: <Users className="h-10 w-10 text-orange-600" />,
    },
    {
      title: "Weddings",
      description: "Make your special day memorable with our customized wedding catering packages.",
      icon: <Gift className="h-10 w-10 text-orange-600" />,
    },
    {
      title: "Private Parties",
      description: "From intimate gatherings to large celebrations, we cater to all your private party needs.",
      icon: <Calendar className="h-10 w-10 text-orange-600" />,
    },
    {
      title: "Festival Catering",
      description: "Celebrate Indian festivals with authentic traditional dishes prepared with care.",
      icon: <Award className="h-10 w-10 text-orange-600" />,
    },
    {
      title: "Cooking Classes",
      description: "Learn the art of Indian cooking with our expert chefs in interactive cooking sessions.",
      icon: <Utensils className="h-10 w-10 text-orange-600" />,
    },
    {
      title: "Meal Prep Services",
      description: "Weekly meal preparation services featuring healthy and flavorful Indian cuisine.",
      icon: <Clock className="h-10 w-10 text-orange-600" />,
    },
  ]

  return (
    <section id="services" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Catering Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a range of catering services to meet your specific needs, from intimate gatherings to grand
            celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-1 md:pb-2 pt-4 px-4 md:pt-6 md:px-6">
                <div className="mb-3 md:mb-4">{service.icon}</div>
                <CardTitle className="text-lg md:text-xl text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 md:px-6 md:pb-6">
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
