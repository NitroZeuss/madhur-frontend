"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

interface MenuItem {
  id: number
  name: string
  description: string
  category: string
  image?: string
  vegetarian: boolean
  spice_level: 1 | 2 | 3
}

export default function MenuSection() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/def/menu-items/")

        if (!response.ok) {
          throw new Error("Failed to fetch menu items")
        }

        const data = await response.json()
        setMenuItems(data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching menu items:", err)
        setError("Unable to load menu items. Please try again later.")
      }
    }

    fetchMenuItems()
  }, [])

  const categories = [
    { id: "all", name: "All Items" },
    { id: "Starters", name: "Starters" },
    { id: "main", name: "Main Course" },
    { id: "dessert", name: "Desserts" },
    { id: "Custom", name: "Custom" },
  ]

  const filteredItems =
    activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Delicious Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our authentic Indian dishes prepared with traditional recipes and the finest ingredients.
          </p>
        </div>

        {error && <div className="text-center text-red-500 mb-8">{error}</div>}

        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="flex justify-start md:justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="bg-amber-50">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-red-600 data-[state=active]:text-white whitespace-nowrap"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              {category.id === "Custom" ? (
                <div className="bg-orange-50 p-6 rounded-lg shadow-sm text-center text-gray-800 text-lg font-medium">
                  Let’s talk about what suits your event! Reach out to us at{" "}
                  <a href="tel:+919822739077" className="text-orange-600 underline font-semibold">
                    +91 98227 39077
                  </a>
                  .
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {loading
                    ? Array(6)
                        .fill(0)
                        .map((_, index) => (
                          <Card key={index} className="overflow-hidden">
                            <Skeleton className="h-48 w-full" />
                            <CardContent className="p-4 md:p-6">
                              <Skeleton className="h-6 w-3/4 mb-2" />
                              <Skeleton className="h-4 w-full mb-1" />
                              <Skeleton className="h-4 w-full mb-1" />
                              <Skeleton className="h-4 w-2/3 mb-4" />
                              <Skeleton className="h-6 w-1/4" />
                            </CardContent>
                          </Card>
                        ))
                    : (category.id === "all" ? menuItems : filteredItems).map((item) => (
                        <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative h-48 w-full bg-amber-100">
                            {item.image ? (
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <Image
                                src={`/placeholder.svg?height=300&width=400&text=${encodeURIComponent(item.name)}`}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            )}
                            {item.vegetarian && (
                              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                Veg
                              </div>
                            )}
                          </div>
                          <CardContent className="p-4 md:p-6">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                              <div className="flex">
                                {Array(item.spice_level)
                                  .fill(0)
                                  .map((_, i) => (
                                    <span key={i} className="text-red-500">
                                      🌶️
                                    </span>
                                  ))}
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
