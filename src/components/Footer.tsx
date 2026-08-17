export default function Footer() {
    return (
      <footer className="w-full border-t border-border bg-background">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Digiworks
          </p>
          <span className="text-xs text-muted-foreground/70">
            Built with AI coworker workflows
          </span>
        </div>
      </footer>
    );
  }