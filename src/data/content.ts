export const siteConfig = {
  name: "Wenting Shi",
  chineseName: "石文婷",
  title: "Steinway Artist",
  tagline: "The Official Website",
  socialLinks: {
    instagram: "https://instagram.com/wenting_shi",
    youtube: "https://youtube.com/@shiwenting9596",
    facebook: "https://facebook.com/wendywenting.shi",
    email: "mailto:wshi.piano@gmail.com",
  },
  galleryLink: "https://www.instagram.com/wentings_gallery", // External gallery link
};

export const heroContent = {
  headline: "Wenting Shi",
  subheadline: "石文婷",
  cta: {
    text: "Listen Now",
    link: "#listen",
  },
};

export const bioContent = {
  short: `Steinway Artist Wenting Shi has performed extensively across the globe, captivating audiences in numerous countries. She is a prizewinner of several prestigious international piano competitions. Her educational background includes esteemed institutions such as The Juilliard School, Yale School of Music, Universität für Musik und darstellende Kunst Wien, Universität der Künste Berlin, and Northwestern University's Bienen School of Music.`,

  full: `Steinway Artist Wenting Shi has received numerous prestigious awards and accolades throughout her career. In April 2023, she won First Prize in the Luminarts Cultural Foundation Fellowship Award in the USA, earning the distinction of Fellow Artist. Her other notable achievements include First Prize at the Thaviu-Isaak Piano Competition (USA) in April 2023, Second Prize at the Berlin Artur Schnabel Piano Competition in June 2022, and the Silver Prize at the WFIMC Member Competition, 5th Hong Kong International Piano Competition, in 2019.

Wenting has an track record of winning numerous prizes worldwide, which includes the Serge & Olga Koussevitzky Young Artist Awards Piano Competition (USA 2018), the CT Young Artist Piano Competition (USA 2018), the Georges Cziffra Prize presented by the Cziffra Stiftung of Austria (Austria 2017), both chamber and solo prizes at the Virtuoso & Belcanto International Competition (Italy 2018), the San Jose International Piano Competition (USA 2016), the International Toronto Piano Competition (Canada 2015), the 12th International Piano Competition by Taipei Chopin Foundation (Chinese Taipei 2008), and the grand prize at the 13th Bucharest International Piano Competition (Romania 2006).

Wenting made her orchestral debut performing Liszt Piano Concerto No. 1 with the Shanghai Conservatory Orchestra after winning the Silver Prize in the 2nd National Concerto Competition for Young Musicians in Beijing (China 2005). Her orchestra performances include works such as Liszt Piano Concerto No. 1 with the Kaohsiung Symphony Orchestra and Shanghai Symphony Orchestra, Chopin Piano Concerto No. 1 with the National Symphony Orchestra of Chinese Taipei, Beethoven Piano Concerto No. 3 with the Shenzhen Symphony Orchestra, Prokofiev Piano Concerto No. 2 with Hong Kong Philharmonic Orchestra, and Rachmaninoff Piano Concerto No. 2 with Hradec Králové Philharmonic Orchestra.

As an international recitalist, Wenting has been invited to perform solo concerts across a multitude of countries and regions, including the USA, Canada, Germany, Austria, Belgium, Italy, Spain, France, Finland, Romania, Switzerland, the UK, Russia, South Korea, and China. She has been distinguished by captivating solo recitals hosted at renowned global music venues, including Alice Tully Hall in New York, Salle Gaveau in Paris, the Royal Museum of Fine Arts of Belgium, Hong Kong City Hall, Musikverein and ORF Radio Kulturhaus in Vienna, and the Shanghai Grand Theatre, among others.

Wenting's musical journey began at the age of 4 when she first started playing the piano. By the age of 5, she had won the first prize in a national competition in China. She continued her musical education, starting her professional music studies at the age of 8 at the Affiliated Elementary School of the Shanghai Conservatory of Music.

After completing her studies at the Affiliated High School of the Shanghai Conservatory, Wenting began her academic journey at The Juilliard School in New York City in 2011. She was granted a full scholarship and studied with Dr. Yoheved Kaplinsky. In 2015, she graduated with a Bachelor's degree, receiving the Arthur Rubinstein Prize for Academic and Artistic Achievements. Continuing her studies at Juilliard, Wenting obtained her Master of Music degree in 2017. She then pursued further studies at the Yale School of Music with Prof. Boris Berman, earning a Master of Musical Arts degree in 2019. In June 2022, she achieved a Master of Arts degree with the highest distinction, "Auszeichnung/With Distinction," from the University of Music and Performing Arts in Vienna, where she studied with Prof. Avedis Kouyoumdjian. In February 2022, Wenting gained admission to the "Konzertexamen" degree program with the highest score at the Berlin University of the Arts, under the guidance of Prof. Markus Groh. Moreover, in April 2022, she was awarded a full-ride scholarship to pursue a Doctor of Musical Arts degree at the Northwestern University Bienen School of Music, studying with Prof. James Giles.

Wenting currently serves as an instructor at the Northwestern University Bienen School of Music, a piano faculty member at the Music Institute of Chicago, and an artist-level piano faculty member at the New Music School Chicago.`,

  quote: "Steinway has always felt like pure magic to me—turning the black and white keys into a world of color, where every note tells a story and every melody paints an emotion.",
};

export const newsItems = [
  {
    id: "steinway-artist",
    title: "Steinway Artist",
    subtitle: "Official Appointment",
    description: "Wenting Shi has been officially appointed as a Steinway Artist, joining a prestigious roster of the world's most celebrated pianists.",
    image: "/images/news-steinway.jpg",
    link: "/news/steinway-artist",
    cta: "Read More",
  },
  {
    id: "naxos-album",
    title: "Solo Album under Naxos",
    subtitle: "April 2026",
    description: "Wenting will be recording her next solo album under the prestigious Naxos label. The recording session will take place in May 2025 at the renowned Nichols Hall in Evanston, Illinois USA.",
    image: "/images/news-naxos.jpg",
    link: "/news/naxos-album",
    cta: "Learn More",
  },
  {
    id: "luminarts-2023",
    title: "Luminarts Cultural Foundation",
    subtitle: "2023 Fellow",
    description: "Wenting Shi has been named the 2023 Fellow in Classical Music by the Luminarts Cultural Foundation.",
    image: "/images/news-luminarts.jpg",
    link: "/news/luminarts-2023",
    cta: "Read More",
  },
  {
    id: "thaviu-isaak-2023",
    title: "Thaviu-Isaak Piano Competition",
    subtitle: "First Prize 2023",
    description: "Wenting received the First Prize at the Thaviu-Isaak Piano Competition 2023.",
    image: "/images/news-thaviu.jpg",
    link: "/news/thaviu-isaak-2023",
    cta: "Read More",
  },
  {
    id: "schnabel-2022",
    title: "XXV. Artur Schnabel Prize",
    subtitle: "Berlin, June 2022",
    description: "Second Prize at the prestigious Berlin Artur Schnabel Piano Competition.",
    image: "/images/news-schnabel.jpg",
    videoLink: "https://youtube.com/watch?v=example",
    link: "/news/schnabel-2022",
    cta: "Watch Performance",
  },
];

// Helper function to check if a concert is upcoming based on ISO date
export function isUpcoming(dateISO: string): boolean {
  const concertDate = new Date(dateISO);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Compare dates only, not time
  return concertDate >= today;
}

// All concerts - sorted by date (most recent first)
export const allConcerts = [
  {
    id: "chicago-feb-2026",
    title: "Solo Recital Chicago",
    date: "Sunday, February 22, 2026",
    dateISO: "2026-02-22",
    shortDate: "Feb 22, 2026",
    time: "3:00 PM – 4:30 PM",
    venue: "Chicago CheckOut Concert Series",
    address: "4116 North Clark Street, Chicago, Illinois 60613",
    program: [
      "George Rochberg: Carnival Music – No. 2 Blues; No. 5 Toccata–Ragtime",
      "Schubert: Impromptu in B-flat major, D. 935, No. 3",
      "Ravel: Gaspard de la nuit",
      "Stravinsky: Three Movements from Petrushka",
    ],
    ticketLink: "https://dice.fm/event/nvkmy9-solo-piano-spotlight-wenting-shi",
    image: "/images/concert-chicago.jpg",
  },
  {
    id: "henan-chamber-dec-2025",
    title: "Chamber Concert with Yuyin Quartet",
    date: "Friday, December 19, 2025",
    dateISO: "2025-12-19",
    shortDate: "Dec 19, 2025",
    time: "7:30 PM – 8:30 PM",
    venue: "Henan Polytechnic University",
    address: "Henan, China",
    description: "Residence at Henan Polytechnic University School of Music as a Visiting Professor. Chamber night with Yuyin String Quartet.",
    program: [
      "Beethoven: Piano Trio No. 5 in D Major, Op. 70 No. 1 'Ghost'",
      "Brahms: Piano Quartet No. 1 in G Minor, Op. 25",
      "Dvořák: Piano Quintet in A Major, Op. 81",
    ],
    ticketLink: "https://yinyue.hpu.edu.cn/xbwz/wzsy.htm",
    image: "/images/concert-henan.jpg",
  },
  {
    id: "henan-solo-dec-2025",
    title: "Solo Recital at Henan Polytechnic University",
    date: "Thursday, December 18, 2025",
    dateISO: "2025-12-18",
    shortDate: "Dec 18, 2025",
    time: "3:00 PM – 4:00 PM",
    venue: "Henan Polytechnic University",
    address: "Henan, China",
    description: "Residence at Henan Polytechnic University School of Music as a Visiting Professor. Solo Recital features works by Schubert, Rachmaninoff, Stravinsky, and Liszt.",
    program: [
      "Schubert",
      "Rachmaninoff",
      "Stravinsky",
      "Liszt",
    ],
    ticketLink: "https://yinyue.hpu.edu.cn/xbwz/wzsy.htm",
    image: "/images/concert-henan.jpg",
  },
  {
    id: "northbrook-nov-2025",
    title: "Solo Recital in Northbrook",
    date: "Sunday, November 9, 2025",
    dateISO: "2025-11-09",
    shortDate: "Nov 9, 2025",
    time: "2:00 PM – 3:00 PM",
    venue: "Northbrook Public Library",
    address: "1201 Cedar Lane, Northbrook, Illinois 60062",
    description: "Steinway Artist Wenting Shi invites you into a phantom theater, where each piece becomes a vivid character and every note a flicker of emotion.",
    program: [
      "Joseph Haydn",
      "George Rochberg",
      "Sergei Rachmaninoff",
      "Igor Stravinsky",
    ],
    ticketLink: "https://visit.northbrook.info/event/13224148",
    image: "/images/concert-northbrook.jpg",
  },
  {
    id: "henan-chamber-sep-2025",
    title: "Wenting and her friends -- Chamber Music Night",
    date: "Thursday, September 18, 2025",
    dateISO: "2025-09-18",
    shortDate: "Sep 18, 2025",
    time: "7:00 PM – 9:00 PM",
    venue: "Henan University Concert Hall",
    address: "Kaifeng, China",
    description: "A fun evening of piano chamber music across genres!",
    program: [
      "Beethoven: Piano Trio No. 5 in D Major, Op. 70 No. 1 'Ghost'",
      "Brahms: Piano Quartet No. 1 in G Minor, Op. 25",
      "Dvořák: Piano Quintet in A Major, Op. 81",
    ],
    ticketLink: "https://cm.henu.edu.cn/",
    image: "/images/concert-henan.jpg",
  },
  {
    id: "henan-masterclass-sep-2025",
    title: "Henan University Masterclass and Recognition",
    date: "Thursday, September 18, 2025",
    dateISO: "2025-09-18",
    shortDate: "Sep 18, 2025",
    time: "10:00 AM – 12:00 PM",
    venue: "Henan University",
    address: "Kaifeng, China",
    description: "Wenting will give a masterclass at the prestigious Henan University. Following the event, the Henan Musicians Association will confer upon her the honorary title of 'Artistic Exchange Ambassador'.",
    program: [],
    ticketLink: "https://cm.henu.edu.cn/",
    image: "/images/concert-henan.jpg",
  },
  {
    id: "henan-solo-sep-2025",
    title: "Solo Recital at Henan University",
    date: "Wednesday, September 17, 2025",
    dateISO: "2025-09-17",
    shortDate: "Sep 17, 2025",
    time: "7:00 PM – 9:00 PM",
    venue: "Henan University",
    address: "Kaifeng, China",
    program: [
      "Joseph Haydn — Sonata No. 60 in C Major, Hob. XVI/50",
      "George Rochberg — Carnival Music: A Suite for Piano",
      "Sergei Rachmaninoff — Études-Tableaux, Op. 33",
      "Frédéric Chopin — 24 Preludes, Op. 28",
    ],
    ticketLink: "https://cm.henu.edu.cn/",
    image: "/images/concert-henan.jpg",
  },
  {
    id: "berlin-jul-2025",
    title: "Solo Recital in Berlin",
    date: "Tuesday, July 15, 2025",
    dateISO: "2025-07-15",
    shortDate: "Jul 15, 2025",
    time: "7:30 PM – 9:00 PM",
    venue: "UdK Großer Konzertsaal",
    address: "Hardenbergstraße, Fasanenstraße 33, 10623 Berlin, Germany",
    description: "Program: 'Play and Pray'",
    program: [
      "George Rochberg – Carnival Music: II. Blues, IV. Toccata–Rag",
      "Karol Szymanowski – Masques, Op. 34",
      "Igor Stravinsky – Trois mouvements de Pétrouchka",
      "Franz Liszt – Sonata in B Minor, S. 178",
    ],
    ticketLink: "https://www.udk-berlin.de/veranstaltung/abschlusskonzert-klavier-wenting-shi/",
    image: "/images/concert-berlin.jpg",
  },
  {
    id: "steinway-hinsdale-jun-2025",
    title: "Solo Recital at Steinway Piano Gallery Hinsdale",
    date: "Saturday, June 28, 2025",
    dateISO: "2025-06-28",
    shortDate: "Jun 28, 2025",
    time: "6:00 PM – 7:00 PM",
    venue: "Steinway Piano Gallery Hinsdale",
    address: "120 South Washington Street, Hinsdale, IL 60521",
    description: "Program features the music by Franz Liszt, Igor Stravinsky, and George Rochberg.",
    program: [
      "Franz Liszt",
      "Igor Stravinsky",
      "George Rochberg",
    ],
    ticketLink: "tel:773-687-9889",
    image: "/images/concert-steinway.jpg",
  },
  {
    id: "steinway-chicago-jun-2025",
    title: "Solo Recital at Steinway Piano Gallery Chicago",
    date: "Saturday, June 21, 2025",
    dateISO: "2025-06-21",
    shortDate: "Jun 21, 2025",
    time: "6:00 PM – 7:00 PM",
    venue: "Steinway Piano Gallery Chicago",
    address: "1960 N Clybourn Ave, Chicago, IL 60614",
    description: "Program features the music by Franz Liszt and Frederic Chopin.",
    program: [
      "Franz Liszt",
      "Frederic Chopin",
    ],
    ticketLink: "tel:773-687-9889",
    image: "/images/concert-steinway.jpg",
  },
  {
    id: "galvin-jun-2025",
    title: "Solo Recital at Galvin Recital Hall",
    date: "Tuesday, June 3, 2025",
    dateISO: "2025-06-03",
    shortDate: "Jun 3, 2025",
    time: "11:00 AM – 12:30 PM",
    venue: "Galvin Recital Hall, Northwestern University",
    address: "Evanston, IL",
    description: "Solo recital titled 'War and Peace,' a reflection on music, life, and the world. The program features light dance music alongside selections by Sergei Prokofiev.",
    program: [
      "Light dance music",
      "Sergei Prokofiev",
    ],
    ticketLink: "https://www.music.northwestern.edu/events/wenting-shi-piano-1",
    image: "/images/concert-galvin.jpg",
  },
  {
    id: "eiu-may-2025",
    title: "Piano Recital and Masterclass at Eastern Illinois University",
    date: "Thursday, May 1, 2025",
    dateISO: "2025-05-01",
    shortDate: "May 1, 2025",
    time: "12:30 PM – 2:00 PM",
    venue: "Doudna Fine Arts Center, Recital Hall",
    address: "1860 7th Street, Charleston, IL 61920",
    description: "Piano recital followed by a masterclass. An all-Liszt program featuring rarely performed dance transcriptions and the Sonata in B minor.",
    program: [
      "Franz Liszt – Dance transcriptions",
      "Franz Liszt – Sonata in B minor",
    ],
    ticketLink: "https://www.eiu.edu/calendar/event.php?id=8030",
    image: "/images/concert-eiu.jpg",
  },
  {
    id: "chicago-downtown-apr-2025",
    title: "Solo Recital at downtown Chicago",
    date: "Friday, April 25, 2025",
    dateISO: "2025-04-25",
    shortDate: "Apr 25, 2025",
    time: "7:00 PM – 8:30 PM",
    venue: "New Music School Concert Hall",
    address: "Chicago, IL",
    description: "The program features rarely performed solo piano works by Franz Liszt!",
    program: [
      "Franz Liszt",
    ],
    ticketLink: "https://www.nms.newmusicschool.com",
    image: "/images/concert-chicago.jpg",
  },
  {
    id: "czech-jan-2025",
    title: "Rachmaninoff Piano Concerto No. 2 in Czech Republic",
    date: "Thursday, January 30, 2025",
    dateISO: "2025-01-30",
    shortDate: "Jan 30, 2025",
    time: "7:30 PM",
    venue: "Filharmonie Hradec Králové",
    address: "Eliščino nábřeží 777, 500 03 Hradec Králové, Czech Republic",
    description: "Sergei Rachmaninoff Piano Concerto No. 2 with Filharmonie Hradec Králové",
    program: [
      "Antonín Dvořák – Scherzo Capriccioso in D♭ major, Op. 66",
      "Sergei Rachmaninoff – Piano Concerto No. 2 in C minor, Op. 18",
      "Johannes Brahms – Symphony No. 4 in E minor, Op. 98",
    ],
    ticketLink: "https://www.fhk.cz/",
    image: "/images/concert-czech.jpg",
  },
  {
    id: "shenzhen-dec-2024",
    title: "Violin and Piano Duo Recital in Shenzhen",
    date: "Monday, December 30, 2024",
    dateISO: "2024-12-30",
    shortDate: "Dec 30, 2024",
    time: "7:30 PM",
    venue: "Sea World Culture and Arts Center",
    address: "1187 Wanghai Road, Shekou, Nanshan, Shenzhen, China",
    description: "Features music by Vivaldi, Szymanowski, Brahms, Debussy, among others.",
    program: [
      "Vivaldi",
      "Szymanowski",
      "Brahms",
      "Debussy",
    ],
    ticketLink: "",
    image: "/images/concert-shenzhen.jpg",
  },
  {
    id: "uchicago-oct-2024",
    title: "Tea-Time Concert at the University of Chicago",
    date: "Thursday, October 3, 2024",
    dateISO: "2024-10-03",
    shortDate: "Oct 3, 2024",
    time: "4:30 PM",
    venue: "Fulton Recital Hall",
    address: "University of Chicago",
    description: "Solo Recital 'Time Traveler'",
    program: [
      "Joseph Haydn",
      "Sergei Rachmaninoff",
      "George Rochberg",
    ],
    ticketLink: "",
    image: "/images/concert-uchicago.jpg",
  },
  {
    id: "zhengzhou-aug-2024",
    title: "Glittering Splendor — Piano and String Ensemble Concert",
    date: "Sunday, August 25, 2024",
    dateISO: "2024-08-25",
    shortDate: "Aug 25, 2024",
    time: "7:30 PM",
    venue: "Henan Arts Center",
    address: "Zhengzhou, China",
    description: "Featuring works by Shostakovich, Beethoven, Ravel, and Dvorak.",
    program: [
      "Shostakovich",
      "Beethoven",
      "Ravel",
      "Dvorak",
    ],
    ticketLink: "",
    image: "/images/concert-zhengzhou.jpg",
  },
  {
    id: "zhengzhou-solo-aug-2024",
    title: "Fleeting Moments — Piano Solo Recital in China",
    date: "Friday, August 16, 2024",
    dateISO: "2024-08-16",
    shortDate: "Aug 16, 2024",
    time: "7:30 PM",
    venue: "Henan Arts Center",
    address: "Zhengzhou, China",
    program: [],
    ticketLink: "",
    image: "/images/concert-zhengzhou.jpg",
  },
  {
    id: "berlin-concerto-jun-2024",
    title: "Concerto Performance in Berlin",
    date: "Friday, June 28, 2024",
    dateISO: "2024-06-28",
    shortDate: "Jun 28, 2024",
    time: "7:30 PM",
    venue: "UdK großer Konzertsaal",
    address: "Hardenbergstraße 33, 10623 Berlin, Germany",
    description: "Dmitri Schostakowitsch Piano Concerto No.2 with the Brandenburger Symphoniker",
    program: [
      "Dmitri Shostakovich – Piano Concerto No. 2",
    ],
    ticketLink: "",
    image: "/images/concert-berlin.jpg",
  },
  {
    id: "berlin-steinway-may-2024",
    title: "Solo Recital in Berlin",
    date: "Wednesday, May 29, 2024",
    dateISO: "2024-05-29",
    shortDate: "May 29, 2024",
    time: "7:00 PM",
    venue: "Steinway & Sons Berlin",
    address: "Lützowufer 28, 10787 Berlin, Germany",
    program: [],
    ticketLink: "",
    image: "/images/concert-berlin.jpg",
  },
  {
    id: "northwestern-apr-2024",
    title: "Wenting Shi Piano Recital at Northwestern University",
    date: "Friday, April 19, 2024",
    dateISO: "2024-04-19",
    shortDate: "Apr 19, 2024",
    time: "8:30 PM",
    venue: "Mary B Galvin Recital Hall",
    address: "Northwestern University Bienen School of Music",
    description: "'Pray and Play'",
    program: [
      "Franz Liszt",
      "Alexander Scriabin",
      "Karol Szymanowski",
      "George Rochberg",
      "Igor Stravinsky",
    ],
    ticketLink: "",
    image: "/images/concert-galvin.jpg",
  },
  {
    id: "uchicago-mar-2024",
    title: "Teatime Recital 'Whimsical Voyage' at the University of Chicago",
    date: "Thursday, March 21, 2024",
    dateISO: "2024-03-21",
    shortDate: "Mar 21, 2024",
    time: "4:30 PM",
    venue: "Fulton Recital Hall",
    address: "University of Chicago",
    program: [
      "Franz Liszt",
      "Karol Szymanowski",
      "Igor Stravinsky",
    ],
    ticketLink: "",
    image: "/images/concert-uchicago.jpg",
  },
  {
    id: "italy-jul-2023",
    title: "Solo Concert in Italy",
    date: "Wednesday, July 19, 2023",
    dateISO: "2023-07-19",
    shortDate: "Jul 19, 2023",
    time: "7:00 PM",
    venue: "Amalfi Music Festival",
    address: "Amalfi, Italy",
    description: "Opening Concert of the Amalfi Music Festival",
    program: [
      "Brahms",
      "Rachmaninoff",
    ],
    ticketLink: "",
    image: "/images/concert-italy.jpg",
  },
  {
    id: "galvin-apr-2023",
    title: "Solo Recital at Galvin Recital Hall",
    date: "Sunday, April 9, 2023",
    dateISO: "2023-04-09",
    shortDate: "Apr 9, 2023",
    time: "3:00 PM",
    venue: "Galvin Recital Hall",
    address: "Northwestern University Bienen School of Music, Evanston, IL",
    program: [
      "Johannes Brahms – Variations on a Theme of Paganini, Book 1, Op. 35",
      "Ludwig van Beethoven – Sonata No. 23 in F Minor, Op. 57 ('Appassionata')",
      "Franz Schubert – Impromptu Op. 142, D. 935, No. 3 in B-flat Major",
      "Alexander Scriabin – Sonata No. 2 in G-sharp Minor, Op. 19",
      "Johannes Brahms – Variations on a Theme of Paganini, Book 2, Op. 35",
    ],
    ticketLink: "",
    image: "/images/concert-galvin.jpg",
  },
  {
    id: "berlin-mar-2023",
    title: "Solo Recital in Berlin",
    date: "Thursday, March 23, 2023",
    dateISO: "2023-03-23",
    shortDate: "Mar 23, 2023",
    time: "7:00 PM",
    venue: "C. Bechstein Centrum Berlin",
    address: "Kantstraße 17, 10623 Berlin",
    program: [
      "Mozart",
      "Brahms",
      "Rachmaninoff",
      "Scriabin",
      "Ravel",
    ],
    ticketLink: "",
    image: "/images/concert-berlin.jpg",
  },
  {
    id: "musikverein-may-2022",
    title: "Chamber Concert at Musikverein Wien",
    date: "Tuesday, May 31, 2022",
    dateISO: "2022-05-31",
    shortDate: "May 31, 2022",
    time: "7:00 PM",
    venue: "Musikverein",
    address: "Musikvereinsplatz 1, 1010 Wien, Austria",
    program: [
      "Holliger",
      "Boulez",
      "Berio",
    ],
    ticketLink: "",
    image: "/images/concert-vienna.jpg",
  },
];

// Get upcoming concerts dynamically based on current date (sorted by date, nearest first)
export const getUpcomingConcerts = () => {
  return allConcerts
    .filter(c => isUpcoming(c.dateISO))
    .sort((a, b) => new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime());
};

// Get past concerts dynamically based on current date (sorted by date, most recent first)
export const getPastConcerts = () => {
  return allConcerts
    .filter(c => !isUpcoming(c.dateISO))
    .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
};

// For backwards compatibility - top 3 upcoming concerts for homepage
export const upcomingConcerts = getUpcomingConcerts().slice(0, 3);

export const contactInfo = {
  headline: "Contact Wenting",
  description: "Based in Chicago, Wenting is a Steinway Artist & Steinway Teacher and Educational Partner.",
  cta: "Feel free to reach out for teaching opportunities or collaborations!",
  formspreeId: "mpqpqvjb", // Replace with actual Formspree form ID
};

export const navigationItems = [
  { label: "News", href: "#news" },
  { label: "Upcoming Concerts", href: "#concerts" },
  { label: "Wenting's Gallery", href: siteConfig.galleryLink, external: true },
  { label: "Artistic Resumé", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
