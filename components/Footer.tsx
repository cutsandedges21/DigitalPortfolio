import { Mail, FileText } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <Mail className="size-5" />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <LinkedInIcon className="size-5" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <FileText className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
