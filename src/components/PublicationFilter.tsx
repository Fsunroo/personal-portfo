import { useMemo, useState } from "react";
import { ArrowUpRight, FileText, Quote } from "lucide-react";
import type { Publication, PublicationStatus } from "@/data/resume";

const FILTERS: Array<"All" | PublicationStatus> = [
  "All",
  "Published",
  "Accepted",
  "Preprint",
  "Under review",
];

const statusTone: Record<PublicationStatus, string> = {
  Published: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  Accepted: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
  Preprint: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  "Under review": "bg-violet-500/10 text-violet-700 dark:text-violet-300",
};

export default function PublicationFilter({ publications }: { publications: Publication[] }) {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const visible = useMemo(
    () => publications.filter((publication) => active === "All" || publication.status === active),
    [active, publications],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter publications">
        {FILTERS.map((filter) => {
          const count = filter === "All"
            ? publications.length
            : publications.filter((item) => item.status === filter).length;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                active === filter
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-accent"
              }`}
            >
              {filter} <span className="ml-1 opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <p className="mb-4 text-sm text-muted-foreground" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "publication" : "publications"}
      </p>

      <div className="divide-y divide-border border-y border-border">
        {visible.map((publication) => (
          <article key={publication.title} className="py-7 first:pt-6">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusTone[publication.status]}`}>
                {publication.status}
              </span>
              <span className="font-mono text-xs text-muted-foreground">{publication.year}</span>
            </div>
            <h2 className="max-w-3xl text-lg font-semibold leading-snug tracking-tight">
              {publication.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{publication.authors}</p>
            <p className="mt-1 text-sm italic text-muted-foreground">{publication.venue}</p>
            {publication.note && <p className="mt-2 text-sm text-foreground/80">{publication.note}</p>}
            <div className="mt-4 flex flex-wrap gap-2">
              {publication.doi && (
                <a className="text-link" href={publication.doi} target="_blank" rel="noreferrer">
                  DOI <ArrowUpRight className="size-3.5" />
                </a>
              )}
              {publication.pdf && (
                <a className="text-link" href={publication.pdf} target="_blank" rel="noreferrer">
                  PDF <FileText className="size-3.5" />
                </a>
              )}
              <a className="text-link" href={publication.citation} target="_blank" rel="noreferrer">
                Citation <Quote className="size-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
