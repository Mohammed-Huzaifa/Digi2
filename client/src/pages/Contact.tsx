import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ Added: form state to collect values (UI remains the same)
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    role: "",
    sector: "",
    timezone: "",
    usecase: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ Mailto (no backend / no third-party / no keys)
    const subject = encodeURIComponent("New Digiworks Contact Request");
    const body = encodeURIComponent(
`New Contact Request

Name: ${form.name}
Work Email: ${form.email}
Organization: ${form.org}
Role: ${form.role}
Sector: ${form.sector}
Preferred Time Zone: ${form.timezone}

Use Case:
${form.usecase}
`
    );

    // Stop loader before opening mail app
    setIsSubmitting(false);

    // Opens user's email client with prefilled content
    window.location.href = `mailto:maaz@digiworks.ai?subject=${subject}&body=${body}`;

    // Keep toast (doesn't mean sent, just opened compose)
    toast.success("Opening your email app with your details…");

    // NOTE: We intentionally do NOT set isSubmitted=true because mailto doesn't confirm sending.
    // If you still want the Thank You screen immediately, tell me and I’ll enable it.
  };

  if (isSubmitted) {
    return (
      <div className="container min-h-[80vh] flex items-center justify-center">
        <AnimatedCard className="max-w-md w-full text-center py-12 px-8 bg-white border border-border shadow-lg rounded-xl">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Thanks for reaching out</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Our team will review your use case and get back to you with next steps and example coworker workflows.
          </p>
          <div className="p-4 bg-secondary rounded-lg text-sm border border-border">
            <p className="font-medium mb-2 text-foreground">Prefer email or a direct calendar link?</p>
            <p className="text-muted-foreground">We've sent both to your inbox.</p>
          </div>
        </AnimatedCard>
      </div>
    );
  }

  return (
    <section className="py-24 glass-bg">
  <div className="container max-w-6xl">

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <AnimatedSection>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 tracking-tight">
            Bring your first coworkers to work.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Share a bit about your world, and we'll show you where coworkers can make an immediate difference.
          </p>

          <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
            <h3 className="font-bold text-lg mb-6">Why start now?</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">1</div>
                <p className="text-sm leading-relaxed text-muted-foreground">Your first coworker pod can be live inside your Teams or Slack environment in weeks, not months.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">2</div>
                <p className="text-sm leading-relaxed text-muted-foreground">Prove ROI quickly with a focused, high-impact pilot.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">3</div>
                <p className="text-sm leading-relaxed text-muted-foreground">Get a custom roadmap for scaling AI across your organization.</p>
              </li>
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedCard className="p-8 glass-card shadow-lg rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Jane Doe"
                  required
                  className="h-10 bg-secondary/20"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  required
                  className="h-10 bg-secondary/20"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="org">Organization</Label>
                <Input
                  id="org"
                  placeholder="Acme University / Corp"
                  required
                  className="h-10 bg-secondary/20"
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input
                  id="role"
                  placeholder="Director of IT"
                  required
                  className="h-10 bg-secondary/20"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sector">I am from</Label>
              <Select
                required
                value={form.sector}
                onValueChange={(value) => setForm({ ...form, sector: value })}
              >
                <SelectTrigger className="h-10 bg-secondary/20">
                  <SelectValue placeholder="Select your sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="higher-ed">Higher Education</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone">Preferred Time Zone</Label>
              <Select
                required
                value={form.timezone}
                onValueChange={(value) => setForm({ ...form, timezone: value })}
              >
                <SelectTrigger className="h-10 bg-secondary/20">
                  <SelectValue placeholder="Select time zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="est">Eastern Time (ET)</SelectItem>
                  <SelectItem value="cst">Central Time (CT)</SelectItem>
                  <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                  <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                  <SelectItem value="gmt">GMT / London</SelectItem>
                  <SelectItem value="cet">CET / Europe</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="usecase">Briefly describe your coworker use case</Label>
              <Textarea
                id="usecase"
                placeholder="e.g., We need to automate student admissions queries or IT password resets..."
                className="min-h-[120px] bg-secondary/20 resize-none"
                required
                value={form.usecase}
                onChange={(e) => setForm({ ...form, usecase: e.target.value })}
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base font-medium shadow-md hover:shadow-lg transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit Request"
              )}
            </Button>
          </form>
        </AnimatedCard>
      </div>
      </div>
      </section>
  );
}
