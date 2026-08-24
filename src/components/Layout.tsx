import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DigiworksLogo from "/images/logo.png";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Prevent scroll reset for hash navigation like /solutions#higher-ed
    if (location.includes("#")) return;

    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="py-6 flex items-center justify-center">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Digiworks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // mobile solutions dropdown state
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 10);
    });
  }, [scrollY]);

  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.9)"]
  );

  return (
    <>
      <ScrollToTop />

      <a
        href="#main"
        className="fixed top-2 left-2 z-[100] -translate-y-20 focus:translate-y-0 transition-transform bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg"
      >
        Skip to content
      </a>

      {/* Header */}
      <motion.header
        style={{ backgroundColor: headerBg }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          isScrolled ? "backdrop-blur-xl border-b border-border" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" asChild>
              <a className="flex items-center gap-2">
                <img
                  src={DigiworksLogo}
                  alt="Digiworks logo"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-heading font-bold tracking-tight text-foreground">
                  Digiworks
                </span>
              </a>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              <Link href="/" asChild>
                <a
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    location === "/"
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  Home
                </a>
              </Link>

              {/* Solutions dropdown */}
              <div className="relative group">
                <Link href="/solutions" asChild>
                  <a
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-1 ${
                      location.startsWith("/solutions") || location === "/business-operations"
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                    }`}
                  >
                    Solutions
                    <ChevronRight className="w-4 h-4 rotate-90 opacity-70" aria-hidden="true" />
                  </a>
                </Link>

                <div className="absolute left-0 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
                  <div className="w-56 rounded-xl border border-border bg-background shadow-lg p-2">
                    <Link href="/solutions#higher-ed" asChild>
                      <a className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary transition-colors">
                        <div className="font-semibold">Higher Education</div>
                        <div className="text-xs text-muted-foreground">
                          Universities & Institutions
                        </div>
                      </a>
                    </Link>

                    <Link href="/business-operations" asChild>
                      <a className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary transition-colors">
                        <div className="font-semibold">Business Operations</div>
                        <div className="text-xs text-muted-foreground">
                          IT, HR & Operations teams
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/agent-usecases" asChild>
                <a
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    location.startsWith("/agent-usecases")
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  Agent Usecases
                </a>
              </Link>

              <Link href="/contact" asChild>
                <a
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    location === "/contact"
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  Contact
                </a>
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button asChild className="rounded-xl">
                <Link href="/contact">
                  Get started <ChevronRight className="ml-1 w-3 h-3" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden">
              <Sheet
                open={isOpen}
                onOpenChange={(open) => {
                  setIsOpen(open);
                  if (!open) setIsSolutionsOpen(false);
                }}
              >
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    className="rounded-xl hover:bg-secondary"
                  >
                    <Menu className="w-6 h-6" aria-hidden="true" />
                  </Button>
                </SheetTrigger>

                <SheetContent className="w-[320px] sm:w-[380px] p-0">
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="px-6 py-5 border-b border-border flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={DigiworksLogo}
                          alt="Digiworks logo"
                          className="w-8 h-8 object-contain"
                        />
                        <span className="text-lg font-heading font-bold tracking-tight text-foreground">
                          Digiworks
                        </span>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="px-4 py-4">
                      <Link href="/" onClick={() => setIsOpen(false)} asChild>
                        <a className="block px-4 py-4 rounded-xl text-base font-medium text-foreground hover:bg-secondary transition-colors">
                          Home
                        </a>
                      </Link>

                      {/* Solutions dropdown in mobile */}
                      <div className="rounded-xl overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setIsSolutionsOpen((v) => !v)}
                          className="w-full px-4 py-4 rounded-xl text-base font-medium text-foreground hover:bg-secondary transition-colors flex items-center justify-between"
                        >
                          <span>Solutions</span>
                          <span
                            className={`transition-transform duration-200 ${
                              isSolutionsOpen ? "rotate-90" : ""
                            }`}
                            aria-hidden="true"
                          >
                            <ChevronRight className="w-5 h-5" aria-hidden="true" />
                          </span>
                        </button>

                        {isSolutionsOpen && (
                          <div className="mt-1 space-y-1 px-2 pb-2">
                            <Link
                              href="/solutions#higher-ed"
                              onClick={() => {
                                setIsOpen(false);
                                setIsSolutionsOpen(false);
                              }}
                              asChild
                            >
                              <a className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                                Higher Education
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  Universities & Institutions
                                </div>
                              </a>
                            </Link>

                            <Link
                              href="/business-operations"
                              onClick={() => {
                                setIsOpen(false);
                                setIsSolutionsOpen(false);
                              }}
                              asChild
                            >
                              <a className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                                Business Operations
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  IT, HR & Operations teams
                                </div>
                              </a>
                            </Link>
                          </div>
                        )}
                      </div>

                      <Link href="/agent-usecases" onClick={() => setIsOpen(false)} asChild>
                        <a className="block px-4 py-4 rounded-xl text-base font-medium text-foreground hover:bg-secondary transition-colors">
                          Agent Usecases
                        </a>
                      </Link>

                      <Link href="/contact" onClick={() => setIsOpen(false)} asChild>
                        <a className="block px-4 py-4 rounded-xl text-base font-medium text-foreground hover:bg-secondary transition-colors">
                          Contact
                        </a>
                      </Link>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-auto px-6 py-6 border-t border-border bg-background">
                      <Button asChild className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl">
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                          Get started
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Page Content */}
      <main id="main" className="pt-16 min-h-screen">{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
}