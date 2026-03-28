import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <div
        className="fixed inset-0 bg-cover bg-center md:bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/resume.jpg')" }}
      />
      <div className="fixed inset-0 bg-black/70" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">
          <Link
            href="/"
            className="text-white text-sm hover:opacity-70 transition-opacity"
          >
            [ BACK ]
          </Link>
          <h1 className="text-white text-lg font-light">Artistic Resumé</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 text-white/80 text-base sm:text-lg leading-relaxed">
          <p>
            Steinway Artist Wenting Shi is an internationally recognized pianist whose artistry has been honored with numerous prestigious awards. She is a First Prize winner of the Luminarts Cultural Foundation Fellowship Award (USA), receiving the title of Fellow Artist. Additional distinctions include First Prize at the Thaviu-Isaak Piano Competition (USA), as well as prizes at the Artur Schnabel Piano Competition (Berlin), the Hong Kong International Piano Competition (WFIMC), the Serge &amp; Olga Koussevitzky Young Artist Awards Piano Competition, and the San Jose International Piano Competition. She is also a recipient of the Georges Cziffra Prize, awarded by the Cziffra Foundation in Austria.
          </p>
          <p>
            Wenting&apos;s academic and artistic training reflects a deep commitment to musical excellence. She earned her Bachelor&apos;s degree with the Arthur Rubinstein Prize for Academic and Artistic Achievement, followed by graduate studies at The Juilliard School and the Yale School of Music. Firmly grounded in the German-Austrian tradition, she graduated with highest distinction (Auszeichnung / With Distinction) from the University of Music and Performing Arts Vienna and earned the prestigious Konzertexamen from the Berlin University of the Arts, the highest performance degree in Germany. She holds a Doctor of Musical Arts degree from Northwestern University&apos;s Bienen School of Music.
          </p>
          <p>
            As an international recitalist, Wenting has appeared with leading orchestras including the Shanghai Symphony Orchestra, Shenzhen Symphony Orchestra, Hong Kong Symphony Orchestra, and the Hradec Králové Philharmonic Orchestra. Her performances have taken place in major venues worldwide, including Alice Tully Hall (New York), Salle Gaveau (Paris), the Royal Museum of Fine Arts of Belgium (Brussels), Hong Kong City Hall, and the Musikverein (Vienna).
          </p>
          <p>
            In addition to her performance career, Wenting is active as a pedagogue, collaborator, and cultural ambassador. She has served as a jury member for the Pearl River · Kayserburg International Youth Piano Competition (2021, 2023), contributed to a commemorative album project with the University of Music and Performing Arts Vienna in collaboration with ORF Radio Symphony Hall, and premiered Fantasia 1975 by composer Minduo Li, later featured in Piano Artistry magazine. Passionate about music education and outreach, she has led concert and teaching tours across major Chinese cities, integrating performance with community engagement. In recognition of her artistic, cultural, and social contributions, she was appointed Art Development and Exchange Ambassador by the Henan Musicians Association and has been invited for residencies at leading Chinese universities.
          </p>
          <p>
            Her forthcoming English-to-Chinese translation of Interpreting Mozart by Eva and Paul Badura-Skoda will be published by Shanghai Education Publishing House in 2026. Her debut album on the Naxos label, featuring Liszt&apos;s dance transcriptions, is scheduled for worldwide release in April 2026.
          </p>
          <p>
            She currently serves on the faculty of Northwestern University, the Chicago New Music School, and the Music Institute of Chicago.
          </p>
        </div>

        {/* Back to home */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <Link
            href="/"
            className="text-white text-sm hover:opacity-70 transition-opacity"
          >
            [ BACK TO HOME ]
          </Link>
        </div>
      </div>
    </main>
  );
}
