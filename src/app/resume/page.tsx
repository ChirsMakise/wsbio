import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white">
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
      <div className="pt-24 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Hero Image Placeholder - you can add image later */}
        <div className="mb-12">
          {/* Image will go here */}
        </div>

        {/* Intro Text */}
        <div className="mb-12 space-y-4 text-white/80 italic text-lg sm:text-xl leading-relaxed">
          <p>Steinway Artist Wenting Shi has been giving concerts in many countries around the world.</p>
          <p>She is the prize winner of prestigious competitions.</p>
          <p>
            Her educational background includes The Juilliard School, Yale School of Music,
            Universität für Musik und darstellende Kunst Wien, Universität der Künste Berlin, and
            Northwestern University.
          </p>
        </div>

        {/* Awards Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6">Awards & Accolades</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Steinway Artist <span className="text-white">Wenting Shi</span> has received numerous prestigious awards and accolades throughout her career. In April 2023, she won First Prize in the Luminarts Cultural Foundation Fellowship Award in the USA, earning the distinction of Fellow Artist. Her other notable achievements include First Prize at the Thaviu-Isaak Piano Competition (USA) in April 2023, Second Prize at the Berlin Artur Schnabel Piano Competition in June 2022, and the Silver Prize at the <span className="text-white">WFIMC Member Competition, 5th Hong Kong International Piano Competition</span>, in 2019.
            </p>
            <p>
              Wenting has an track record of winning numerous <span className="text-white">prizes</span> worldwide, which includes the Serge & Olga Koussevitzky Young Artist Awards Piano Competition (USA 2018), the CT Young Artist Piano Competition (USA 2018), the Georges Cziffra Prize presented by the Cziffra Stiftung of Austria (Austria 2017), both chamber and solo prizes at the Virtuoso & Belcanto International Competition (Italy 2018), the San Jose International Piano Competition (USA 2016), the International Toronto Piano Competition (Canada 2015), the 12th International Piano Competition by Taipei Chopin Foundation (Chinese Taipei 2008), and the grand prize at the 13th Bucharest International Piano Competition (Romania 2006).
            </p>
          </div>
        </section>

        {/* Orchestra Performances Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6">Orchestra Performances</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Wenting made her orchestral debut performing Liszt Piano Concerto No. 1 with the Shanghai Conservatory Orchestra after winning the Silver Prize in the 2nd National Concerto Competition for Young Musicians in Beijing (China 2005). Her <span className="text-white">orchestra performances</span> include works such as Liszt Piano Concerto No. 1 with the Kaohsiung Symphony Orchestra and Shanghai Symphony Orchestra, Chopin Piano Concerto No. 1 with the National Symphony Orchestra of Chinese Taipei, Beethoven Piano Concerto No. 3 with the Shenzhen Symphony Orchestra, Prokofiev Piano Concerto No. 2 with Hong Kong Philharmonic Orchestra, and Rachmaninoff Piano Concerto No. 2 with Hradec Králové Philharmonic Orchestra.
            </p>
          </div>
        </section>

        {/* International Recitalist Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6">International Recitalist</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              As an <span className="text-white">international recitalist</span>, Wenting has been invited to perform solo concerts across a multitude of countries and regions, including the USA, Canada, Germany, Austria, Belgium, Italy, Spain, France, Finland, Romania, Switzerland, the UK, Russia, South Korea, and China. She has been distinguished by captivating solo recitals hosted at renowned global music venues, including Alice Tully Hall in New York, Salle Gaveau in Paris, the Royal Museum of Fine Arts of Belgium, Hong Kong City Hall, Musikverein and ORF Radio Kulturhaus in Vienna, and the Shanghai Grand Theatre, among others.
            </p>
            <p>
              She has been acknowledged for outstanding artistry and honored with invitations to participate and give recitals in prestigious international music festivals, among them the Amalfi International Music Festival in Italy, the Villecroze International Music Festival in France, the International Musical Artistry Goslar and the Bonn Beethoven Music Festival in Germany, the Salzburg Mozart International Music Festival and the ISA International Music Festival in Austria, the Lucca International Music Festival in Italy, the Oxford International Music Festival in the UK, and the Aspen Music Festival in the US.
            </p>
          </div>
        </section>

        {/* Other Activities Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6">Other Activities</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Wenting has served as a <span className="text-white">judge</span> for the Pearl River · Kayserburg International Youth Piano Competition in both 2021 and 2023. In 2021, she contributed to a commemorative album for the University of Music and Performing Arts Vienna in collaboration with ORF Radio Symphony Hall. In January 2018, she premiered composer Minduo Li&apos;s <em>Fantasia 1975</em>, which was later featured in <em>Piano Artistry</em> magazine. Her <span className="text-white">solo album under the Naxos</span> label is also scheduled for release in 2026.
            </p>
            <p>
              Wenting has conducted <span className="text-white">solo concert tours</span> across China, combining teaching, classical music promotion, and art outreach activities in major cities such as Shanghai, Shenzhen, Chengdu, Xi&apos;an, Tianjin, and Zhengzhou. Additionally, her independent English-to-Chinese translation of the influential book <em>Interpreting Mozart</em> by Eva and Paul Badura-Skoda is scheduled to be published by Shanghai Education Publishing House in 2025.
            </p>
          </div>
        </section>

        {/* Musical Journey Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6">Musical Journey</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Wenting&apos;s <span className="text-white">musical journey</span> began at the age of 4 when she first started playing the piano. By the age of 5, she had won the first prize in a national competition in China. She continued her musical education, starting her professional music studies at the age of 8 at the Affiliated Elementary School of the Shanghai Conservatory of Music. As a child prodigy, Wenting consistently earned recognition and awards, including the first prize in China&apos;s 2004 Gu&apos;Lang&apos;yu National Piano Competition for Young Artists and the first prize at the Beethoven Music Festival National Competition in 2004, which led to her solo debut in Germany at the Bonn Beethoven Music Festival.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6">Education</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              After completing her studies at the Affiliated High School of the Shanghai Conservatory, Wenting began her academic journey at <span className="text-white">The Juilliard School</span> in New York City in 2011. She was granted a full scholarship and studied with Dr. Yoheved Kaplinsky. In 2015, she graduated with a Bachelor&apos;s degree, receiving the Arthur Rubinstein Prize for Academic and Artistic Achievements. Continuing her studies at Juilliard, Wenting obtained her Master of Music degree in 2017.
            </p>
            <p>
              She then pursued further studies at the <span className="text-white">Yale School of Music</span> with Prof. Boris Berman, earning a Master of Musical Arts degree in 2019. In June 2022, she achieved a Master of Arts degree with the highest distinction, &quot;Auszeichnung/With Distinction,&quot; from the <span className="text-white">University of Music and Performing Arts in Vienna</span>, where she studied with Prof. Avedis Kouyoumdjian.
            </p>
            <p>
              In February 2022, Wenting gained admission to the &quot;Konzertexamen&quot; degree program with the highest score at the <span className="text-white">Berlin University of the Arts</span>, under the guidance of Prof. Markus Groh. Moreover, in April 2022, she was awarded a full-ride scholarship to pursue a Doctor of Musical Arts degree at the <span className="text-white">Northwestern University</span> Bienen School of Music, studying with Prof. James Giles.
            </p>
          </div>
        </section>

        {/* Current Positions Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6">Current Positions</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Wenting currently serves as an instructor at the Northwestern University Bienen School of Music, a piano faculty member at the Music Institute of Chicago, and an artist-level piano faculty member at the New Music School Chicago.
            </p>
          </div>
        </section>

        {/* Scholarships Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6">Scholarships & Awards</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Wenting has been the recipient of numerous prestigious scholarship awards, including the &quot;Outstanding Pianist in Artistry&quot; by the Shanghai Literature and Arts Talent Fund Council, the Shanghai Tang Educational Scholarship, the Chengxian Fu Scholarships, the Carl Friedberg Memorial Scholarship, the Arthur Gold and Robert Fizdale Scholarship, the Shendell Scholarship, the Harold & Helene Schonberg Piano Scholarship, the L. & M. Burle Scholarship, the Alexander Siloti Scholarship, the Louise Chisholm Moran Piano Scholarship, the William Petschek Scholarship, the Hui Luen Chao Scholarship, the Adele Marcus Piano Scholarship, the Maskiewitz Scholarship Fund, the Anne Lorraine Hopkins Simpson Scholarship, the Beatrice Ohanessian Memorial Scholarship, the Ender Scholarship, George Wellington Miles Fellowship, Mary Clapp Howell Scholarship, and Alvia S. & Helen Cottongim Endowed Scholarship.
            </p>
          </div>
        </section>

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
