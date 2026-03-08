export const siteConfig = {
  name: "Wenting Shi",
  chineseName: "石文婷",
  title: "Steinway Artist",
  tagline: "The Official Website",
  socialLinks: {
    instagram: "https://instagram.com/wenting_shi",
    youtube: "https://youtube.com/@shiwenting9596",
    youku: "https://www.youku.com/profile/index?uid=UNDg4MzA5MzQxMg==",
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

export interface NewsItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  link: string;
  cta?: string;
  videoLink?: string;
  externalLink?: string;
  externalLinkLabel?: string;
  secondaryExternalLink?: string;
  secondaryExternalLinkLabel?: string;
  detailImages?: string[];
}

export const newsItems: NewsItem[] = [
  // Keep this list in descending (newest -> oldest) order.
  {
    id: "steinway-artist",
    title: "Steinway Artist",
    subtitle: "Official Appointment",
    description: "Wenting Shi has been officially appointed as a Steinway Artist, joining a prestigious roster of the world's most celebrated pianists.",
    image: "/images/news-steinway-artist-1.webp",
    detailImages: [
      "/images/news-steinway-artist-1.webp",
    ],
    externalLink: "https://www.steinway.com/artists/wenting-shi",
    externalLinkLabel: "View Profile on Steinway & Sons",
    link: "/news/steinway-artist",
    cta: "Read More",
  },
  {
    id: "naxos-album",
    title: "Solo Album under Naxos",
    subtitle: "Release Date: April 24, 2026",
    description: "Wenting has completed the recording of her solo album under the prestigious Naxos label at the renowned Nichols Hall in Evanston, Illinois, USA.\n\nThe recording presents selected rare and significant piano works by Franz Liszt.\n\nThe official release date is April 24, 2026.",
    image: "/images/news-naxos-2026-1.webp",
    detailImages: [
      "/images/news-naxos-2026-1.webp",
      "/images/news-naxos-2026-2.webp",
    ],
    externalLink: "https://www.naxos.com/CatalogueDetail/?id=8.574648",
    externalLinkLabel: "Naxos Detail Page",
    secondaryExternalLink: "https://www.prestomusic.com/classical/products/9844219--liszt-complete-piano-music-vol-68#tracklist",
    secondaryExternalLinkLabel: "Preorder",
    link: "/news/naxos-album",
    cta: "Learn More",
  },
  {
    id: "luminarts-2023",
    title: "Luminarts Cultural Foundation, 2023",
    subtitle: "2023 Fellow in Classical Music",
    description: "The Luminarts Cultural Foundation cultivates Chicago's vibrant arts community by supporting exemplary young artists through its competitive programs that offer financial awards, artistic opportunities, and mentoring that bridge the gap between education and career. Fellows receive continued support from the foundation through professional development, performance opportunities, and additional project grant funding.\n\n\"... Wenting Shi, a doctoral piano student of James Giles, have been named 2023 Fellows in Classical Music by the Luminarts Cultural Foundation with a $10,000 award. ...\"",
    image: "/images/news-luminarts-2023-1.webp",
    detailImages: [
      "/images/news-luminarts-2023-1.webp",
      "/images/news-luminarts-2023-2.webp",
      "/images/news-luminarts-2023-3.webp",
    ],
    externalLink: "https://www.music.northwestern.edu/news/2023/two-bienen-students-awarded-2023-luminarts-fellowships",
    externalLinkLabel: "Read More",
    link: "/news/luminarts-2023",
    cta: "Read More",
  },
  {
    id: "thaviu-isaak-2023",
    title: "Thaviu-Isaak Piano Competition 2023",
    subtitle: "First Prize",
    description: "Wenting received the First Prize at the Thaviu-Isaak Piano Competition 2023.",
    image: "/images/news-thaviu-2023-1.webp",
    detailImages: [
      "/images/news-thaviu-2023-1.webp",
    ],
    externalLink: "https://www.instagram.com/p/CsUE-MgLv5M/?igshid=MzRlODBiNWFlZA%3D%3D&utm_source=ig_web_copy_link",
    externalLinkLabel: "Learn More",
    secondaryExternalLink: "https://www.music.northwestern.edu/events/thaviu-isaak-endowed-piano-competition",
    secondaryExternalLinkLabel: "About the Competition",
    link: "/news/thaviu-isaak-2023",
    cta: "Read More",
  },
  {
    id: "schnabel-2022",
    title: "June 2022, Artur Schnabel Prize",
    subtitle: "Berlin, 17 June 2022",
    description: "Click here for the live performance from the Prize Winner's Concert on 17 June, 2022.",
    image: "/images/news-schnabel-2022-1.webp",
    detailImages: [
      "/images/news-schnabel-2022-1.webp",
      "/images/news-schnabel-2022-2.webp",
      "/images/news-schnabel-2022-3.webp",
    ],
    videoLink: "https://youtu.be/x2wa7UVsM7Q",
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
    address: "4116 North Clark Street, Chicago, Illinois 60613, United States",
    program: [
      "George Rochberg: Carnival Music – No. 2 Blues; No. 5 Toccata–Ragtime",
      "Schubert: Impromptu in B-flat major, D. 935, No. 3",
      "Ravel: Gaspard de la nuit",
      "Stravinsky: Three Movements from Petrushka",
    ],
    ticketLink: "https://dice.fm/event/nvkmy9-solo-piano-spotlight-wenting-shi-22nd-feb-the-checkout-chicago-tickets?pid=F3RKGQIQ&_branch_match_id=1368795402227866786&utm_medium=partners_api&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1S81s7BMMTJISTFMsrAvyEyxdTMO8nYP9AxUqytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAjYF2LEgAAAA%3D",
    image: "/images/concert-checkout-chicago-2026.webp",
  },
  {
    id: "henan-chamber-dec-2025",
    title: "Chamber Concert with Yuyin Quartet at Henan Polytechnic University",
    date: "Friday, December 19, 2025",
    dateISO: "2025-12-19",
    shortDate: "Dec 19, 2025",
    time: "7:30 PM – 8:30 PM",
    venue: "Henan Polytechnic University",
    address: "Henan, China",
    description: "Residence at Henan Polytechnic University School of Music as a Visiting Professor.\n\nChamber night with Yuyin String Quartet, features works by Beethoven, Brahms, and Dvorak.",
    program: [
      "Beethoven: Piano Trio No. 5 in D Major, Op. 70 No. 1 'Ghost'",
      "Brahms: Piano Quartet No. 1 in G Minor, Op. 25",
      "Dvořák: Piano Quintet in A Major, Op. 81",
    ],
    ticketLink: "https://yinyue.hpu.edu.cn/xbwz/wzsy.htm",
    image: "/images/concert-henan-yuyin-quartet-2025.webp",
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
    description: "Residence at Henan Polytechnic University School of Music as a Visiting Professor.\n\nSolo Recital features works by Schubert, Rachmaninoff, Stravinsky, and Liszt.",
    program: [
      "Schubert",
      "Rachmaninoff",
      "Stravinsky",
      "Liszt",
    ],
    ticketLink: "https://yinyue.hpu.edu.cn/xbwz/wzsy.htm",
    image: "/images/concert-henan-polytechnic-solo-2025.webp",
  },
  {
    id: "northbrook-nov-2025",
    title: "Solo Recital in Northbrook (IL, USA)",
    date: "Sunday, November 9, 2025",
    dateISO: "2025-11-09",
    shortDate: "Nov 9, 2025",
    time: "2:00 PM – 3:00 PM",
    venue: "Solo Recital in Northbrook, IL",
    address: "Northbrook Public Library, 1201 Cedar Lane, Northbrook, Illinois 60062",
    description: "Steinway Artist Wenting Shi invites you into a phantom theater, where each piece becomes a vivid character and every note a flicker of emotion. Spanning centuries of piano music, this dramatic solo piano program reveals the soul's whispers and outcries through constant transformation.\n\nProgram features the works by Joseph Haydn, George Rochberg, Sergei Rachmaninoff, and Igor Stravinsky.\n\nSunday, November 9, 2025 at 2:00 pm (CDT)\n\nNorthbrook Public Library\n1201 Cedar Lane\nNorthbrook, Illinois 60062\n847-272-6224",
    program: [
      "Joseph Haydn",
      "George Rochberg",
      "Sergei Rachmaninoff",
      "Igor Stravinsky",
    ],
    ticketLink: "https://visit.northbrook.info/event/13224148",
    image: "/images/concert-northbrook-2025.webp",
  },
  {
    id: "henan-chamber-sep-2025",
    title: "Wenting and her friends-- Chamber Music Night",
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
      "Dvořák: Piano Quintet in A Major, Op. 81 (Menahem Pressler with Quatuor Ebène)",
    ],
    ticketLink: "https://cm.henu.edu.cn/",
    image: "/images/concert-henan-chamber-night-2025.webp",
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
    description: "Wenting will give a masterclass at the prestigious Henan University. Following the event, the Henan Musicians Association will confer upon her the honorary title of 'Artistic Exchange Ambassador' in recognition of her artistic achievements and outstanding contributions to global cultural exchange.",
    program: [],
    ticketLink: "https://cm.henu.edu.cn/",
    image: "/images/concert-henan-masterclass-recognition-2025.webp",
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
    description: "Wenting will give a solo recital at the prestigious Henan University on September 17.",
    program: [
      "Joseph Haydn — Sonata No. 60 in C Major, Hob. XVI/50",
      "George Rochberg — Carnival Music: A Suite for Piano",
      "Sergei Rachmaninoff — Études-Tableaux, Op. 33",
      "Intermission",
      "Frédéric Chopin — 24 Preludes, Op. 28",
    ],
    ticketLink: "https://cm.henu.edu.cn/",
    image: "/images/concert-henan-university-solo-2025.webp",
  },
  {
    id: "berlin-jul-2025",
    title: "Solo Recital in Berlin",
    date: "Tuesday, July 15, 2025",
    dateISO: "2025-07-15",
    shortDate: "Jul 15, 2025",
    time: "7:30 PM – 9:00 PM",
    venue: "Solo Recital in Berlin",
    address: "UdK Großer Konzertsaal, Hardenbergstraße, Fasanenstraße 33, 10623 Berlin, Germany",
    description: "Program: \"Play and Pray\"",
    program: [
      "George Rochberg – Carnival Music, A Suite for Piano",
      "II. Blues",
      "IV. Toccata - Rag",
      "Karol Szymanowski – Masques, Trois morceaux de piano, Op. 34",
      "II. Tantris le Bouffon",
      "III. Sérénade de Don Juan",
      "Igor Stravinsky – Trois mouvements de Pétrouchka",
      "I. Danse russe",
      "II. Chez Pétrouchka",
      "III. La semaine grasse",
      "INTERMISSION",
      "Franz Liszt – Sonata in B Minor, S. 178",
    ],
    ticketLink: "https://www.udk-berlin.de/veranstaltung/abschlusskonzert-klavier-wenting-shi/",
    image: "/images/concert-berlin-solo-2025.webp",
  },
  {
    id: "steinway-hinsdale-jun-2025",
    title: "Solo Recital at Steinway Piano Gallery Hinsdale",
    date: "Saturday, June 28, 2025",
    dateISO: "2025-06-28",
    shortDate: "Jun 28, 2025",
    time: "6:00 PM – 7:00 PM",
    venue: "Solo Recital at Steinway Piano Gallery Hinsdale",
    address: "120 South Washington Street, Hinsdale, IL 60521",
    description: "Saturday, June 28 at 6:00pm (CDT)\n\nTicketing: Call/Text 773-687-9889 or 630-325-0500\n\nLocation: Steinway Piano Gallery Hinsdale\n\nProgram features the music by Franz Liszt, Igor Stravinsky, and George Rochberg.",
    program: [
      "Franz Liszt",
      "Igor Stravinsky",
      "George Rochberg",
    ],
    ticketLink: "tel:773-687-9889",
    image: "/images/concert-steinway-hinsdale-2025.webp",
  },
  {
    id: "steinway-chicago-jun-2025",
    title: "Solo Recital at Steinway Piano Gallery Chicago",
    date: "Saturday, June 21, 2025",
    dateISO: "2025-06-21",
    shortDate: "Jun 21, 2025",
    time: "6:00 PM – 7:00 PM",
    venue: "Solo Recital at Steinway Piano Gallery Chicago",
    address: "1960 N Clybourn Ave, Chicago, IL 60614",
    description: "Saturday, June 21 at 6:00pm (CDT)\n\nTicketing: Call/Text 773-687-9889\n\nLocation: Steinway Piano Gallery Chicago\n\nProgram features the music by Franz Liszt and Frederic Chopin.",
    program: [
      "Franz Liszt",
      "Frederic Chopin",
    ],
    ticketLink: "tel:773-687-9889",
    image: "/images/concert-steinway-chicago-2025.webp",
  },
  {
    id: "galvin-jun-2025",
    title: "Solo Recital at Galvin Recital Hall",
    date: "Tuesday, June 3, 2025",
    dateISO: "2025-06-03",
    shortDate: "Jun 3, 2025",
    time: "11:00 AM – 12:30 PM",
    venue: "Solo Recital at the Beautiful Lake-View Galvin Recital Hall, Northwestern University, Evanston, IL",
    address: "Evanston, IL",
    description: "Join me for a solo recital titled \"War and Peace,\" a reflection on music, life, and the world.\n\nThe program features light dance music alongside selections by Sergei Prokofiev.\n\nFor more details, please visit: https://www.music.northwestern.edu/events/wenting-shi-piano-1",
    program: [
      "Light dance music",
      "Sergei Prokofiev",
    ],
    ticketLink: "https://www.music.northwestern.edu/events/wenting-shi-piano-1",
    image: "/images/concert-galvin-recital-jun-2025.webp",
  },
  {
    id: "eiu-may-2025",
    title: "Piano Recital and Mastercat Eastern Illinois University",
    date: "Thursday, May 1, 2025",
    dateISO: "2025-05-01",
    shortDate: "May 1, 2025",
    time: "12:30 PM - 2:00 PM",
    venue: "Piano recital followed by a masterclass at Eastern Illinois University, USA",
    address: "Recital Hall, Doudna Fine Arts Center, 1860 7th Street, Charleston, IL 61920",
    description: "Thursday, May 1 and 2, 2025\n\nAn all-Liszt program featuring rarely performed dance transcriptions and the Sonata in B minor.\n\nContact Information\nDoudna Fine Arts Center\n217-581-3110\ndoudnatix@eiu.edu",
    program: [
      "Franz Liszt – Dance transcriptions",
      "Franz Liszt – Sonata in B minor",
    ],
    ticketLink: "https://www.eiu.edu/calendar/event.php?id=8030",
    image: "/images/concert-eiu-recital-hall-2025.webp",
  },
  {
    id: "chicago-downtown-apr-2025",
    title: "Solo Recital at downtown Chicago",
    date: "Friday, April 25, 2025",
    dateISO: "2025-04-25",
    shortDate: "Apr 25, 2025",
    time: "12:00 PM - 1:30 PM",
    venue: "New Music School Concert Hall",
    address: "Chicago, IL",
    description: "April 25, 2025\n\n7:00 pm - 8:30 pm\n\nMore information please visit: https://www.nms.newmusicschool.com\n\nThe program features rarely performed solo piano works by Franz Liszt!",
    program: [
      "Franz Liszt",
    ],
    ticketLink: "https://www.nms.newmusicschool.com",
    image: "/images/concert-chicago-downtown-2025.webp",
  },
  {
    id: "czech-jan-2025",
    title: "Rachmaninoff Piano Concerto No. 2 in Czech Republic",
    date: "Thursday, January 30, 2025",
    dateISO: "2025-01-30",
    shortDate: "Jan 30, 2025",
    time: "12:30 PM - 2:00 PM",
    venue: "Sergei Rachmaninoff Piano Concerto No. 2 with Filharmonie Hradec Králové",
    address: "Filharmonie Hradec Králové o.p.s., Eliščino nábřeží 777, 500 03 Hradec Králové, Czech Republic",
    description: "Thursday, Jan. 30, 2025, Hradec Králové, Czech Republic",
    program: [
      "Antonín Dvořák – Scherzo Capriccioso in D♭ major, Op. 66 (B. 131)",
      "Sergei Rachmaninoff – Piano Concerto No. 2 in C minor, Op. 18 with Wenting Shi",
      "Johannes Brahms – Symphony No. 4 in E minor, Op. 98",
    ],
    ticketLink: "https://www.fhk.cz/calendar/1303/Beneficni_koncert_pro_deti_v_nouzi_Diecezni_charita_Hradec_Kralove/back/123/Koncerty_chronologicky/",
    image: "/images/concert-czech-rachmaninoff-2025.webp",
  },
  {
    id: "shenzhen-dec-2024",
    title: "Violin and Piano Duo Recital in Shenzhen",
    date: "Monday, December 30, 2024",
    dateISO: "2024-12-30",
    shortDate: "Dec 30, 2024",
    time: "12:30 PM",
    venue: "Sea World Culture and Arts Center",
    address: "1187 Wanghai Road, Shekou, Nanshan, Shenzhen, China",
    description: "Monday, Dec. 30, 2024, Shenzhen, China.\n\nAdditional listed time: Saturday, January 18, 2025, 2:00 PM.\n\nFeatures music by Vivaldi, Szymanowski, Brahms, Debussy, among others.",
    program: [
      "Vivaldi",
      "Szymanowski",
      "Brahms",
      "Debussy",
    ],
    ticketLink: "https://www.sohu.com/a/838014294_122091088",
    image: "/images/concert-shenzhen-duo-2024.webp",
  },
  {
    id: "uchicago-oct-2024",
    title: "Tea-Time Concert at the University of Chicago",
    date: "Thursday, October 3, 2024",
    dateISO: "2024-10-03",
    shortDate: "Oct 3, 2024",
    time: "9:30 AM - 10:30 AM",
    venue: "Solo Recital \"Time Traveler\" at Fulton Recital Hall",
    address: "University of Chicago",
    description: "Program features pieces by Joseph Haydn, Sergei Rachmaninoff, and George Rochberg.\n\nFor more information: https://music.uchicago.edu/event/tea-time-concert-wenting-shi-time-traveler",
    program: [
      "Joseph Haydn",
      "Sergei Rachmaninoff",
      "George Rochberg",
    ],
    ticketLink: "https://music.uchicago.edu/event/tea-time-concert-wenting-shi-time-traveler",
    image: "/images/concert-uchicago-tea-time-2024.webp",
  },
  {
    id: "zhengzhou-aug-2024",
    title: "\"Glittering Splendor\" - Piano and String Ensemble Concert",
    date: "Sunday, August 25, 2024",
    dateISO: "2024-08-25",
    shortDate: "Aug 25, 2024",
    time: "12:30 PM - 2:00 PM",
    venue: "\"Glittering Splendor\" - Piano and String Ensemble Concert",
    address: "Henan Arts Center, Zhengzhou, China",
    description: "August 25, 2024 at 7:30 pm\n\nFeaturing works by Shostakovich, Beethoven, Ravel, and Dvorak.",
    program: [
      "Shostakovich",
      "Beethoven",
      "Ravel",
      "Dvorak",
    ],
    ticketLink: "https://hnbljy.polyt.cn/#/detail?productId=6963900",
    image: "/images/concert-zhengzhou-glittering-splendor-2024.webp",
  },
  {
    id: "zhengzhou-solo-aug-2024",
    title: "\"Fleeting Moments\"-Piano Solo Recital in China",
    date: "Friday, August 16, 2024",
    dateISO: "2024-08-16",
    shortDate: "Aug 16, 2024",
    time: "12:30 PM - 1:30 PM",
    venue: "Henan Arts Center, Zhengzhou, China",
    address: "Zhengzhou, China",
    description: "Program showed on the website.",
    program: [],
    ticketLink: "https://hnbljy.polyt.cn/#/detail?productId=6962700",
    image: "/images/concert-zhengzhou-fleeting-moments-2024.webp",
  },
  {
    id: "berlin-concerto-jun-2024",
    title: "Concerto Performance in Berlin",
    date: "Friday, June 28, 2024",
    dateISO: "2024-06-28",
    shortDate: "Jun 28, 2024",
    time: "12:30 PM - 2:00 PM",
    venue: "UdK großer Konzertsaal",
    address: "Hardenbergstraße 33, 10623 Berlin, Germany",
    description: "Dmitri Schostakowitsch Piano Concerto No.2 with the Brandenburger Symphoniker",
    program: [
      "Dmitri Shostakovich – Piano Concerto No. 2",
    ],
    ticketLink: "",
    image: "/images/concert-berlin-concerto-2024.webp",
  },
  {
    id: "berlin-steinway-may-2024",
    title: "Solo Recital in Berlin",
    date: "Wednesday, May 29, 2024",
    dateISO: "2024-05-29",
    shortDate: "May 29, 2024",
    time: "12:30 PM - 2:00 PM",
    venue: "Steinway & Sons Berlin",
    address: "Lützowufer 28, 10787 Berlin, Germany",
    description: "Program to be updated.",
    program: [],
    ticketLink: "https://eu.steinway.com/de/haendler/steinway-berlin-leipzig/",
    image: "/images/concert-berlin-steinway-2024.webp",
  },
  {
    id: "northwestern-apr-2024",
    title: "Wenting Shi Piano Recital at the Northwestern University",
    date: "Friday, April 19, 2024",
    dateISO: "2024-04-19",
    shortDate: "Apr 19, 2024",
    time: "1:30 PM - 3:00 PM",
    venue: "Northwestern University Bienen School of Music, Mary B Galvin Recital Hall",
    address: "Evanston, IL, USA",
    description: "\"Pray and Play\"\n\nTime: Friday, April 19, 2024, 8:30 pm",
    program: [
      "Franz Liszt",
      "Alexander Scriabin",
      "Karol Szymanowski",
      "George Rochberg",
      "Igor Stravinsky",
    ],
    ticketLink: "https://www.music.northwestern.edu/events/wenting-shi-piano-0",
    image: "/images/concert-northwestern-recital-2024.webp",
  },
  {
    id: "uchicago-mar-2024",
    title: "Teatime Recital \"Whimsical Voyage\" at the University of Chicago",
    date: "Thursday, March 21, 2024",
    dateISO: "2024-03-21",
    shortDate: "Mar 21, 2024",
    time: "10:30 AM - 11:30 AM",
    venue: "Tea Time Recital \"Whimsical Voyage\" at the University of Chicago",
    address: "Fulton Recital Hall, University of Chicago",
    description: "Thursday, March 21, 2024 | 4:30 pm | Fulton Recital Hall\n\nFeaturing works by Franz Liszt, Karol Szymanowski, and Igor Stravinsky.\n\nA few words from Wenting:\n\nWe will embark on a musical journey together. Picture yourself by the tranquil lake at Wallenstadt in Switzerland, the soft melodies echoing the serenity of the surroundings.\n\nSwiftly, we move to a charming French theater, where the vibrant comedy of the \"Bouffon\" comes alive in a delightful mix of enchanting notes. Our next destination is Italy, where the charismatic womanizer Don Juan, both wealthy and playful, graces us with his presence.\n\nFinally, we'll arrive in Russia, stepping into a lively carnival atmosphere. Imagine the magic as a skilled magician introduces three puppets with human spirits. The music will unfold a captivating tale, weaving together love triangles and whimsical stories that will leave us entranced.\n\nMore information:\nhttps://www.choosechicago.com/event/tea-time-concert-wenting-shi-piano/\nhttps://patch.com/illinois/hydepark/calendar/event/20240321/2eb695f3-b4ae-4e99-877d-2650b7d37b3e/tea-time-concert-wenting-shi-piano\nhttps://chicagoreader.com/city-life/to-do/the-jewish-deli-forts-and-more/?_evDiscoveryPath=/event/2274003-tea-time-concert-wenting-shi",
    program: [
      "Franz Liszt",
      "Karol Szymanowski",
      "Igor Stravinsky",
    ],
    ticketLink: "https://www.choosechicago.com/event/tea-time-concert-wenting-shi-piano/",
    image: "/images/concert-uchicago-whimsical-voyage-2024.webp",
  },
  {
    id: "italy-jul-2023",
    title: "Solo Concert in Italy",
    date: "Wednesday, July 19, 2023",
    dateISO: "2023-07-19",
    shortDate: "Jul 19, 2023",
    time: "12:00 PM - 2:00 PM",
    venue: "Opening Concert of the Amalfi Music Festival",
    address: "Amalfi, Italy",
    description: "Featuring works by Brahms and Rachmaninoff.\n\nMore information: https://www.amalfi-festival.org/",
    program: [
      "Brahms",
      "Rachmaninoff",
    ],
    ticketLink: "https://www.amalfi-festival.org/",
    image: "/images/concert-italy-amalfi-2023.webp",
  },
  {
    id: "galvin-apr-2023",
    title: "Solo Recital at Galvin Recital Hall, Evanston, IL, USA",
    date: "Sunday, April 9, 2023",
    dateISO: "2023-04-09",
    shortDate: "Apr 9, 2023",
    time: "11:00 AM - 12:30 PM",
    venue: "Solo Recital at Northwestern University, Bienen School of Music, Galvin Recital Hall",
    address: "Evanston, IL, USA",
    description: "More information please visit: https://www.music.northwestern.edu/events/wenting-shi-piano",
    program: [
      "Johannes Brahms, Variations on a Theme of Paganini, Book 1, Op. 35",
      "Ludwig van Beethoven, Sonata No. 23 in F Minor, Op. 57 (\"Appassionata\")",
      "Franz Schubert, Impromptu Op. 142, D. 935, No. 3 in B-flat Major",
      "Alexander Scriabin, Sonata No. 2 in G-sharp Minor, Op. 19",
      "Johannes Brahms, Variations on a Theme of Paganini, Book 2, Op. 35",
    ],
    ticketLink: "https://www.music.northwestern.edu/events/wenting-shi-piano",
    image: "/images/concert-galvin-recital-apr-2023.webp",
  },
  {
    id: "berlin-mar-2023",
    title: "Solo Recital in Berlin",
    date: "Thursday, March 23, 2023",
    dateISO: "2023-03-23",
    shortDate: "Mar 23, 2023",
    time: "1:00 PM - 2:45 PM",
    venue: "C. Bechstein Centrum Berlin",
    address: "Kantstraße 17, 10623 Berlin",
    description: "Program includes works by Mozart, Brahms, Rachmaninoff, Scriabin, and Ravel.\n\nWebsite: https://www.bechstein.com/centren/berlin/startseite/\nTel. +49 - 30 - 2260 559 100\nE-MAIL: berlin@bechstein.de",
    program: [
      "Mozart",
      "Brahms",
      "Rachmaninoff",
      "Scriabin",
      "Ravel",
    ],
    ticketLink: "https://www.bechstein.com/centren/berlin/startseite/",
    image: "/images/concert-berlin-solo-mar-2023.webp",
  },
  {
    id: "musikverein-may-2022",
    title: "Chamber Concert at Musikverein Wien",
    date: "Tuesday, May 31, 2022",
    dateISO: "2022-05-31",
    shortDate: "May 31, 2022",
    time: "1:00 PM - 3:00 PM",
    venue: "Musikverein",
    address: "Musikvereinsplatz 1, 1010 Wien, Austria",
    description: "Tickets available at www.musikverein.at",
    program: [
      "Works by Holliger, Boulez, and Berio",
    ],
    ticketLink: "https://www.musikverein.at",
    image: "/images/concert-musikverein-wien-2022.webp",
  },
  {
    id: "wien-musiktheater-may13-2022",
    title: "Solo Recital at Konzertsaal der Gesellschaft für Musiktheater",
    date: "Friday, May 13, 2022",
    dateISO: "2022-05-13",
    shortDate: "May 13, 2022",
    time: "12:00 PM - 2:00 PM",
    venue: "Konzertsaal der Gesellschaft für Musiktheater",
    address: "Türkenstraße 19, 1090 Wien, Austria",
    description: "Contact E-Mail: musiktheater@iti-arte.at",
    program: [
      "Works by Haydn, Ravel, Bartok, and Rachmaninoff",
    ],
    ticketLink: "mailto:musiktheater@iti-arte.at",
    image: "/images/concert-wien-musiktheater-2022-v2.webp",
  },
  {
    id: "brussels-may-2022",
    title: "Solo Recital in Brussels",
    date: "Thursday, May 12, 2022",
    dateISO: "2022-05-12",
    shortDate: "May 12, 2022",
    time: "5:30 AM - 6:30 AM",
    venue: "Solo Recital at Music Arts Loi",
    address: "THE SEVENTY EIGHT, 78 Rue de la Loi, 1000 Brussels, BELGIUM",
    description: "Concert program to be updated",
    program: [],
    ticketLink: "https://www.musicartsloi.com/tickets",
    image: "/images/concert-brussels-solo-2022.webp",
  },
  {
    id: "wien-johanneskapelle-may-2022",
    title: "Solo Recital at St. Johannes Nepomuk Kapelle",
    date: "Saturday, May 7, 2022",
    dateISO: "2022-05-07",
    shortDate: "May 7, 2022",
    time: "12:30 PM - 2:30 PM",
    venue: "St. Johannes Nepomuk Kapelle",
    address: "Währinger Gürtel bei U-Bahn-Bogen 115, 1090 Wien, Austria",
    description: "For tickets, info, and reservations: Mobil +43 664 977-7882, www.cziffrastiftung.at and www.johanneskapelle.at",
    program: [
      "Works by Ravel, Rachmaninoff, Cziffra, and Liszt",
    ],
    ticketLink: "https://www.cziffrastiftung.at",
    image: "/images/concert-wien-johanneskapelle-2022.webp",
  },
  {
    id: "wien-musiktheater-may-2022",
    title: "Solo Recital at Konzertsaal der Gesellschaft für Musiktheater",
    date: "Thursday, May 5, 2022",
    dateISO: "2022-05-05",
    shortDate: "May 5, 2022",
    time: "12:00 PM - 2:30 PM",
    venue: "Konzertsaal der Gesellschaft für Musiktheater",
    address: "Türkenstraße 19, 1090 Wien, Austria",
    description: "Contact E-Mail: musiktheater@iti-arte.at",
    program: [],
    ticketLink: "mailto:musiktheater@iti-arte.at",
    image: "/images/concert-wien-musiktheater-2022-v2.webp",
  },
  {
    id: "wien-musiktheater-mar-2022",
    title: "Solo Recital at Konzertsaal der Gesellschaft für Musiktheater",
    date: "Wednesday, March 16, 2022",
    dateISO: "2022-03-16",
    shortDate: "Mar 16, 2022",
    time: "1:00 PM - 3:30 PM",
    venue: "Konzertsaal der Gesellschaft für Musiktheater",
    address: "Türkenstraße 19, 1090 Wien, Austria",
    description: "Contact E-Mail: musiktheater@iti-arte.at",
    program: [
      "Presenting the works by Beethoven, Granados, Albeniz, Ravel, and Liszt",
    ],
    ticketLink: "mailto:musiktheater@iti-arte.at",
    image: "/images/concert-wien-musiktheater-2022-v2.webp",
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
