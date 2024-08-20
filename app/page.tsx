/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GovMCPKKwCU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'


export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1f2937]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" prefetch={false}>
            <img
              src="https://i.postimg.cc/d1JgJ7k4/SAVE-20240809-103720-removebg-preview.png"
              alt="MuComics Logo"
              width={150}
              height={50}
              style={{ aspectRatio: "150/50", objectFit: "cover" }}
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:underline font-['Roboto']">
            Home
          </a>
          <a href="#" className="hover:underline font-['Roboto']">
            Events
          </a>
          <a href="#" className="hover:underline font-['Roboto']">
            About
          </a>
          <a href="#" className="hover:underline font-['Roboto']">
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-primary text-primary-foreground p-4">
              <nav className="grid gap-4">
                <a href="#" className="hover:underline font-['Roboto']">
                  Home
                </a>
                <a href="#" className="hover:underline font-['Roboto']">
                  Events
                </a>
                <a href="#" className="hover:underline font-['Roboto']">
                  About
                </a>
                <a href="#" className="hover:underline font-['Roboto']">
                  Contact
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center space-y-12 p-4 md:p-8 lg:p-12">
        <section className="w-full max-w-6xl space-y-4">
          <h2 className="text-3xl font-semibold text-center text-white font-['Roboto']">Our Upcoming Events</h2>
          <div className="flex justify-center">
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/3">
                    <div className="p-1">
                      <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold text-white font-['Roboto']">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section className="w-full max-w-4xl space-y-4 animate-fade-in">
          <h2 className="text-3xl font-semibold text-center text-white font-['Roboto']">About MuComics</h2>
          <p className="text-lg text-white font-['Roboto']">
            MuComics is GTech MuLearn's comic interest group, designed to unite individuals passionate about comics and
            related fields. Whether you're an artist, writer, animator, or simply a comic enthusiast, MuComics offers
            opportunities for everyone eager to contribute.
          </p>
        </section>
        <section className="w-full max-w-4xl space-y-4 animate-fade-in">
          <h2 className="text-3xl font-semibold text-center text-white font-['Roboto']">Why MuComics Was Created</h2>
          <p className="text-lg text-white font-['Roboto']">
            Kerala is home to many talented individuals, yet the local comic and animation industries often serve as
            outsourcing hubs for international projects. Original works are scarce. MuComics aims to gather these
            overlooked talents and provide a platform to showcase their creativity to the world.
          </p>
        </section>
        <section className="w-full max-w-4xl space-y-4 animate-fade-in">
          <h2 className="text-3xl font-semibold text-center text-white font-['Roboto']">Our Mission</h2>
          <p className="text-lg text-white font-['Roboto']">
            We strive to create original, unapologetic content that pushes boundaries. Our goal is to tell relatable
            stories that reflect our surroundings while demonstrating the unique perspectives of our creators.
          </p>
        </section>
        <section className="w-full max-w-4xl space-y-4 animate-fade-in">
          <h2 className="text-3xl font-semibold text-center text-white font-['Roboto']">Our Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary-foreground text-primary p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Mentor 1"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
                style={{ aspectRatio: "200/200", objectFit: "cover" }}
              />
              <h3 className="text-xl font-semibold mb-2 font-['Roboto']">John Doe</h3>
              <ul className="list-disc pl-4 space-y-2 font-['Roboto']">
                <li>10+ years of experience in comics and illustration</li>
                <li>Award-winning artist and writer</li>
                <li>Passionate about mentoring young talents</li>
              </ul>
            </div>
            <div className="bg-primary-foreground text-primary p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Mentor 2"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
                style={{ aspectRatio: "200/200", objectFit: "cover" }}
              />
              <h3 className="text-xl font-semibold mb-2 font-['Roboto']">Jane Smith</h3>
              <ul className="list-disc pl-4 space-y-2 font-['Roboto']">
                <li>8 years of experience in comic book publishing</li>
                <li>Expertise in character design and world-building</li>
                <li>Passionate about empowering diverse voices</li>
              </ul>
            </div>
            <div className="bg-primary-foreground text-primary p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Mentor 3"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
                style={{ aspectRatio: "200/200", objectFit: "cover" }}
              />
              <h3 className="text-xl font-semibold mb-2 font-['Roboto']">Alex Kim</h3>
              <ul className="list-disc pl-4 space-y-2 font-['Roboto']">
                <li>5 years of experience in digital art and animation</li>
                <li>Skilled in visual storytelling and panel layout</li>
                <li>Committed to fostering a collaborative community</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full max-w-4xl space-y-4 animate-fade-in">
          <h2 className="text-3xl font-semibold text-center text-white font-['Roboto']">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-foreground text-primary p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Partner 1"
                width={300}
                height={200}
                className="rounded-lg mx-auto mb-4"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <h3 className="text-xl font-semibold mb-2 font-['Roboto']">Acme Comics</h3>
              <p className="text-lg font-['Roboto']">
                Acme Comics is a leading publisher of independent comics, supporting emerging artists and writers.
              </p>
            </div>
            <div className="bg-primary-foreground text-primary p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Partner 2"
                width={300}
                height={200}
                className="rounded-lg mx-auto mb-4"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <h3 className="text-xl font-semibold mb-2 font-['Roboto']">Pixel Studios</h3>
              <p className="text-lg font-['Roboto']">
                Pixel Studios is a digital art and animation studio, collaborating with MuComics on various projects.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full max-w-4xl space-y-4 animate-fade-in">
          <h2 className="text-3xl font-semibold text-center text-white font-['Roboto']">Join us</h2>
          <p className="text-lg text-white font-['Roboto']">
            We invite you to join us in this creative revolution. Together, we can make a significant impact. Let's make
            this big!
          </p>
          <div className="flex justify-center">
            <Button className="bg-[#25d366] text-primary-foreground px-6 py-3 rounded-lg font-['Roboto'] hover:bg-[#25d366]/90">
              <PhoneIcon className="h-6 w-6 mr-2" />
              Join our WhatsApp community
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="flex items-center gap-4">
          <p className="font-['Roboto']">&copy; 2024 GTech MuLearn. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">
            <FacebookIcon className="h-6 w-6" />
          </a>
          <a href="#" className="hover:underline">
            <TwitterIcon className="h-6 w-6" />
          </a>
          <a href="#" className="hover:underline">
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a href="#" className="hover:underline">
            <LinkedinIcon className="h-6 w-6" />
          </a>
        </div>
      </footer>
    </div>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}