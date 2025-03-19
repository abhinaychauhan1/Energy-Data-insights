import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-700 text-white text-center p-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">Energy Data Insights</h1>
          <p className="text-lg mb-6">
            Your trusted source for renewable energy and carbon market data.
          </p>
          <Button className="bg-white text-blue-900 px-6 py-3 font-semibold">Explore Datasets</Button>
        </div>
      </section>

      {/* Featured Datasets Section */}
      <section className="py-16 px-10">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Datasets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Renewable Diesel Market Data</h3>
              <p className="text-gray-700 mt-2">Global production capacity, projects, and feedstock trends.</p>
              <Button className="mt-4">View Details</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Carbon Credit Pricing</h3>
              <p className="text-gray-700 mt-2">Historical and current voluntary & compliance market prices.</p>
              <Button className="mt-4">View Details</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Hydrogen Market Insights</h3>
              <p className="text-gray-700 mt-2">Production breakdown for green, blue, and grey hydrogen.</p>
              <Button className="mt-4">View Details</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-10 bg-blue-900 text-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Energy Data Insights?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-semibold">Accurate & Reliable</h3>
            <p className="mt-2">Our data is sourced from industry experts and updated regularly.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Comprehensive Coverage</h3>
            <p className="mt-2">Covering all aspects of renewable energy and carbon markets.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Easy Access</h3>
            <p className="mt-2">Purchase and receive datasets instantly via email.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-10 text-center bg-gray-100">
        <p className="text-gray-700">&copy; 2025 Energy Data Insights. All rights reserved.</p>
      </footer>
    </div>
  );
}
