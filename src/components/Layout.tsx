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

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // ✅ NEW: mobile solutions dropdown state
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
            <Link href="/">
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
              <Link href="/">
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
                <Link href="/solutions">
                  <a
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-1 ${
                      location.startsWith("/solutions") || location === "/enterprise"
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                    }`}
                  >
                    Solutions
                    <ChevronRight className="w-4 h-4 rotate-90 opacity-70" />
                  </a>
                </Link>

                <div className="absolute left-0 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
                  <div className="w-56 rounded-xl border border-border bg-background shadow-lg p-2">
                    <Link href="/solutions#higher-ed">
                      <a className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary transition-colors">
                        <div className="font-semibold">Higher Ed</div>
                        <div className="text-xs text-muted-foreground">
                          Universities & Institutions
                        </div>
                      </a>
                    </Link>

                    <Link href="/enterprise">
                      <a className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary transition-colors">
                        <div className="font-semibold">Enterprise</div>
                        <div className="text-xs text-muted-foreground">
                          IT, HR & Operations teams
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/contact">
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
              <Link href="/contact">
                <Button className="rounded-xl">
                  Get started <ChevronRight className="ml-1 w-3 h-3" />
                </Button>
              </Link>
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
                    className="rounded-xl hover:bg-secondary"
                  >
                    <Menu className="w-6 h-6" />
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
                      <Link href="/" onClick={() => setIsOpen(false)}>
                        <div className="px-4 py-4 rounded-xl text-base font-medium text-foreground hover:bg-secondary transition-colors">
                          Home
                        </div>
                      </Link>

                      {/* ✅ UPDATED: Solutions dropdown in mobile */}
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
                            <ChevronRight className="w-5 h-5" />
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
                            >
                              <div className="px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                                Higher Ed
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  Universities & Institutions
                                </div>
                              </div>
                            </Link>

                            <Link
                              href="/enterprise"
                              onClick={() => {
                                setIsOpen(false);
                                setIsSolutionsOpen(false);
                              }}
                            >
                              <div className="px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                                Enterprise
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  IT, HR & Operations teams
                                </div>
                              </div>
                            </Link>
                          </div>
                        )}
                      </div>

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
        </div>
      </motion.header>

      {/* Page Content */}
      <main className="pt-16">{children}</main>
    </>
  );
}
