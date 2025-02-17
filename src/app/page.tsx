import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          <Badge variant="secondary" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm sm:text-md border border-gray-200">
            ✨ #1 Resume Builder Platform
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Build Your Perfect Resume
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
            Design and build professional resumes in just a few clicks.
          </p>
        </div>
      </section>

      <div className="py-8 sm:py-12 flex flex-col items-center">
        <Link href="/makeResume">
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 sm:px-10 py-4 sm:py-6 flex items-center gap-2 sm:gap-3 text-md sm:text-lg font-semibold 
                      transition-all duration-200 hover:shadow-lg"
          >
            Get Started <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </Link>
        <p className="text-gray-600 mb-6 text-center text-sm max-w-md mt-4">
          No login required — start creating your resume for free!
        </p>
      </div>

      {/* Video Section */}
      <section className="mx-auto max-w-screen-lg px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/IJZukJ3Rmyc?controls=1"
              title="Resume Builder Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}