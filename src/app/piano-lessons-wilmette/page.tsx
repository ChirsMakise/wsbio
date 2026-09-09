import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Private Piano Lessons in Wilmette, IL | Wenting Shi",
  description:
    "Private piano lessons in Wilmette with Steinway Artist and Naxos recording artist Wenting Shi. Individual instruction for motivated students throughout Chicago's North Shore.",
  alternates: {
    canonical: "/piano-lessons-wilmette",
    languages: {
      en: "/piano-lessons-wilmette",
      zh: "/zh/piano-lessons-wilmette",
    },
  },
  openGraph: {
    title: "Private Piano Lessons in Wilmette, IL | Wenting Shi",
    description:
      "Private piano lessons in Wilmette with Steinway Artist and Naxos recording artist Wenting Shi.",
    type: "website",
  },
};

const inquiryHref = "mailto:wshi.piano@gmail.com?subject=Piano%20Lessons%20Inquiry";

export default function PianoLessonsWilmettePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header locale="en" />

      <article className="mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] lg:items-start">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-white/60">Chicago&apos;s North Shore</p>
            <h1 className="max-w-3xl text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
              Private Piano Lessons in Wilmette
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Individualized piano study for motivated young musicians on Chicago&apos;s North Shore.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Wenting Shi offers private piano lessons in Wilmette, Illinois, for motivated students seeking serious musical and artistic development. A Steinway Artist and Naxos recording artist, she works with students from Wilmette and communities throughout Chicago&apos;s North Shore.
            </p>
            <a href={inquiryHref} className="mt-9 inline-block border border-white px-5 py-3 text-sm uppercase tracking-[0.12em] transition-colors hover:bg-white hover:text-black">
              Inquire About Piano Lessons
            </a>
          </div>

          <figure>
            <Image
              src="/images/artist.JPG"
              alt="Pianist and piano teacher Wenting Shi in Wilmette, Illinois"
              width={800}
              height={1067}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        </div>

        <div className="mt-20 grid gap-x-16 gap-y-14 border-t border-white/20 pt-14 lg:grid-cols-2">
          <section>
            <h2 className="text-2xl font-light sm:text-3xl">About Wenting Shi</h2>
            <p className="mt-5 leading-relaxed text-white/75">
              Wenting Shi is an international concert pianist, Steinway Artist, and Naxos recording artist. Her training includes The Juilliard School, Yale School of Music, the Berlin University of the Arts, and the University of Music and Performing Arts Vienna.
            </p>
            <Link href="/resume" className="mt-5 inline-block text-sm underline underline-offset-4 transition-opacity hover:opacity-70">
              About Wenting Shi
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-light sm:text-3xl">Teaching Philosophy</h2>
            <p className="mt-5 leading-relaxed text-white/75">
              Lessons develop a reliable technical foundation, refined tone production, musical understanding, and stylistic awareness. Students learn to practice independently, listen with increasing discernment, and build an artistic voice of their own.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light sm:text-3xl">Who the Studio Is For</h2>
            <p className="mt-5 leading-relaxed text-white/75">
              The studio is especially suited to students with prior piano experience, intermediate and advanced pianists, highly motivated younger students, and students preparing for performances, auditions, or competitions. Individual placement is guided by each student&apos;s musical background and goals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light sm:text-3xl">Areas Served</h2>
            <p className="mt-5 leading-relaxed text-white/75">
              The studio is based in Wilmette and serves families throughout Chicago&apos;s North Shore, including Wilmette, Winnetka, Kenilworth, Northfield, Evanston, Glencoe, and surrounding communities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light sm:text-3xl">Performance, Audition &amp; Competition Preparation</h2>
            <p className="mt-5 leading-relaxed text-white/75">
              Advanced coaching can include repertoire selection, interpretation, technical development, and thoughtful preparation for performances, competitions, and auditions, always tailored to a student&apos;s present stage of growth.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light sm:text-3xl">Prospective Students</h2>
            <p className="mt-5 leading-relaxed text-white/75">
              To begin a conversation, please share the student&apos;s age, years of study, current or recent repertoire, current teacher when relevant, and musical goals. This helps determine whether the studio is a good fit.
            </p>
            <a href={inquiryHref} className="mt-5 inline-block text-sm underline underline-offset-4 transition-opacity hover:opacity-70">
              Inquire About Piano Lessons
            </a>
          </section>
        </div>

        <section className="mt-20 border-t border-white/20 pt-14">
          <h2 className="text-2xl font-light sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-8 grid gap-x-16 gap-y-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg">Where are private piano lessons offered?</h3>
              <p className="mt-3 leading-relaxed text-white/75">Lessons are offered in Wilmette, Illinois.</p>
            </div>
            <div>
              <h3 className="text-lg">What levels does Wenting teach?</h3>
              <p className="mt-3 leading-relaxed text-white/75">The studio focuses on motivated students, particularly intermediate and advanced pianists, as well as highly motivated younger students.</p>
            </div>
            <div>
              <h3 className="text-lg">Does Wenting prepare students for competitions and auditions?</h3>
              <p className="mt-3 leading-relaxed text-white/75">Yes. Competition and audition preparation are available when appropriate for a student&apos;s goals and development.</p>
            </div>
            <div>
              <h3 className="text-lg">Does Wenting teach students outside Wilmette?</h3>
              <p className="mt-3 leading-relaxed text-white/75">She works with families from Wilmette and throughout Chicago&apos;s North Shore.</p>
            </div>
            <div>
              <h3 className="text-lg">How can a prospective student apply to the studio?</h3>
              <p className="mt-3 leading-relaxed text-white/75">Send an inquiry with the student&apos;s age, study background, recent repertoire, and musical goals.</p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}