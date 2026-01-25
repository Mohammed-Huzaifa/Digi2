import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DigiworksLogo from "/images/logo.png";


export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 10);
    });
  }, [scrollY]);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = location === href;
    return (
      <Link href={href}>
        <span className={`text-sm font-medium transition-colors hover:text-foreground ${
          isActive ? "text-foreground font-semibold" : "text-muted-foreground"
        }`}>
          {children}
        </span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Clerk-style Navbar: Clean, white, sticky with border on scroll */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-background"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
  <img
    src={DigiworksLogo}
    alt="Digiworks logo"
    className="w-8 h-8 object-contain"
  />
  <span className="text-lg font-heading font-bold tracking-tight text-foreground">
    Digiworks
  </span>
</Link>



          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <div className="relative group">
  <NavLink href="/solutions">Solutions</NavLink>

  <div className="absolute left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
    <div className="min-w-[220px] rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-xl p-2">
      <a
        href="/solutions#higher-ed"
        className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary transition-colors"
      >
        <div className="font-semibold">Higher Ed</div>
        <div className="text-xs text-muted-foreground">Universities & institutions</div>
      </a>

      <a
        href="/enterprise"
        className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary transition-colors"
      >
        <div className="font-semibold">Enterprise</div>
        <div className="text-xs text-muted-foreground">IT, HR & operations teams</div>
      </a>
    </div>
  </div>
</div>

            <NavLink href="/contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* <Link href="/contact">
              <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer">Sign in</span>
            </Link> */}
            <Link href="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-medium px-4 h-9 rounded-md shadow-sm transition-all hover:shadow-md">
                Get started <ChevronRight className="ml-1 w-3 h-3" />
              </Button>
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[320px] sm:w-[380px] p-0">
  <div className="h-full flex flex-col">
    {/* Header */}
    <div className="px-6 py-5 border-b border-border flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={DigiworksLogo} alt="Digiworks logo" className="w-8 h-8 object-contain" />
        <span className="text-lg font-heading font-bold tracking-tight text-foreground">Digiworks</span>
      </div>
    </div>

    {/* Links */}
    <div className="px-4 py-4">
      <Link href="/" onClick={() => setIsOpen(false)}>
        <div className="px-4 py-4 rounded-xl text-base font-medium text-foreground hover:bg-secondary transition-colors">
          Home
        </div>
      </Link>

      <Link href="/solutions" onClick={() => setIsOpen(false)}>
        <div className="px-4 py-4 rounded-xl text-base font-medium text-foreground hover:bg-secondary transition-colors">
          Solutions
        </div>
      </Link>

      <Link href="/contact" onClick={() => setIsOpen(false)}>
        <div className="px-4 py-4 rounded-xl text-base font-medium text-foreground hover:bg-secondary transition-colors">
          Contact
        </div>
      </Link>
    </div>

    {/* Bottom CTA */}
    <div className="mt-auto px-6 py-6 border-t border-border bg-background">
      <Link href="/contact" onClick={() => setIsOpen(false)}>
        <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl">
          Get started
        </Button>
      </Link>
    </div>
  </div>
</SheetContent>

            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-background py-16 mt-20">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="col-span-2">
            <div className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight mb-6">
  <img
    src={DigiworksLogo}
    alt="Digiworks logo"
    className="w-7 h-7 object-contain"
  />
  <span>Digiworks</span>
</div>

              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                Deploying AI coworkers inside Microsoft Teams, Slack, and your core systems to take over mundane work.
              </p>
              <div className="flex gap-4 mt-6">
  <a
    href="https://www.linkedin.com/company/digiworkforce/posts/?feedView=all"
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-muted-foreground hover:bg-secondary/80 cursor-pointer transition-colors"
  >
    <span className="sr-only">LinkedIn</span>
    <svg
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.061-1.865-3.061-1.865 0-2.151 1.456-2.151 2.961v5.704h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.561 2.839-1.561 3.035 0 3.597 2.0 3.597 4.604v5.589z" />
    </svg>
  </a>
</div>

            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Solutions</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/solutions"><span className="hover:text-primary cursor-pointer">Higher Ed</span></Link></li>
                <li><Link href="/solutions"><span className="hover:text-primary cursor-pointer">Enterprise</span></Link></li>
                 
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                 
                <li><Link href="/contact"><span className="hover:text-primary cursor-pointer">Blog</span></Link></li>
                <li><Link href="/contact"><span className="hover:text-primary cursor-pointer">Careers</span></Link></li>
                <li><Link href="/contact"><span className="hover:text-primary cursor-pointer">Contact</span></Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/contact"><span className="hover:text-primary cursor-pointer">Privacy</span></Link></li>
                <li><Link href="/contact"><span className="hover:text-primary cursor-pointer">Terms</span></Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Digiworks Inc. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
