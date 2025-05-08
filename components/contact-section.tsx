"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    full_name: "",  // API counterpart for 'name'
    email: "",
    phone_number: "",  // API counterpart for 'phone'
    event_date: "",  // API counterpart for 'eventDate'
    number_of_guests: "",  // Updated field name
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("http://127.0.0.1:8000/def/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // Log the response status and the response body (if any)
      console.log('Response Status:', response.status)
      
      // Attempt to read the response body as JSON for more details
      const responseBody = await response.json()
      console.log('Response Body:', responseBody)

      if (!response.ok) {
        throw new Error(`Failed to submit form. Status: ${response.status}, Body: ${JSON.stringify(responseBody)}`)
      }

      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      })

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        event_date: "",
        number_of_guests: "",  // Reset the correct field
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Failed to send your message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to plan your event? Get in touch with us to discuss your catering needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-amber-100">
              <CardContent className="p-4 md:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="full_name" className="text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <Input
                        id="full_name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="border-amber-200 focus:border-orange-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="border-amber-200 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone_number" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="border-amber-200 focus:border-orange-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="event_date" className="text-sm font-medium text-gray-700">
                        Event Date
                      </label>
                      <Input
                        id="event_date"
                        name="event_date"
                        type="date"
                        value={formData.event_date}
                        onChange={handleChange}
                        className="border-amber-200 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="number_of_guests" className="text-sm font-medium text-gray-700">
                      Number of Guests
                    </label>
                    <Input
                      id="number_of_guests"
                      name="number_of_guests"  // Updated name to match the API
                      type="number"  // Correct type for guest count
                      value={formData.number_of_guests}
                      onChange={handleChange}
                      placeholder="Approximate number of guests"
                      className="border-amber-200 focus:border-orange-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event and catering requirements"
                      rows={5}
                      className="border-amber-200 focus:border-orange-500"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-sm md:text-base"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-amber-100 bg-gradient-to-r from-amber-50 to-orange-50 h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-orange-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-800">Phone</h4>
                        <p className="text-gray-600">+91 9822739077</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-orange-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-800">Email</h4>
                        <p className="text-gray-600">madhurcaterersnagpur@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-orange-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-800">Address</h4>
                        <p className="text-gray-600">Ram Nagar Nagpur, Mahashtra</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
