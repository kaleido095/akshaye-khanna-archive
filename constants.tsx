
import { Film, Appearance, Interview, MusicVideo } from './types';

export const FILMS: Film[] = [
  { year: '1997', title: 'Himalay Putra', role: 'Abhay Khanna', notes: 'Considered debut along with Border. Produced by Vinod Khanna. Kareena Kapoor admitted to being a fan of Akshaye’s dance in this movie. At the core is a love story of two estranged lovers Suraj and Seema. Well recognised for songs like “I am a Bachelor” and “Na wo inkar karti Hai.”', category: 'Feature' },
  { year: '1997', title: 'Border', role: '2nd Lt. Dharamvir Singh Bhan', notes: 'Possibly shot first, making this his first acting gig, though released after Himalay Putra. Director JP Dutta’s dream project. Khanna won the Filmfare Best Male Debut (1998) for this film. Based on the India Pakistan war of 1971, Akshaye holds his own among industry giants, bringing alive Dharamvir with unmatched innocence.', category: 'Feature' },
  { year: '1997', title: 'Mohabbat', role: 'Rohit Malhotra / Tony Braganza', notes: 'Rohit and Gaurav, two best friends, fall in love with the same girl, Sweta Sharma. Rohit takes on a new identity, Tony Braganza, for love. Music was a big hit with "Baby, don\'t break my heart" filmed on Akshaye and Madhuri Dixit.', category: 'Feature' },
  { year: '1997', title: 'Bhai Bhai', role: 'Dancer', notes: 'Special appearance in the song "Tera Naam Loonga".', category: 'Cameo' },
  { year: '1998', title: 'Doli Saja Ke Rakhna', role: 'Inderjit Bansal', category: 'Feature' },
  { year: '1998', title: 'Kudrat', role: 'Vijay', category: 'Feature' },
  { year: '1999', title: 'Aa Ab Laut Chalen', role: 'Rohan Khanna', category: 'Feature' },
  { year: '1999', title: 'Laawaris', role: 'Vijay / Captain Dada', category: 'Feature' },
  { year: '1999', title: 'Taal', role: 'Manav Mehta', notes: 'Akshaye stated "Nahi Saamne" is his favorite song. A. R. Rahman\'s music is at its ethereal best. Manav and Mansi (Aishwarya Rai) navigate love amidst struggles. Akshaye appears in most songs, with "Nahin Saamne" filmed entirely on him.', category: 'Feature' },
  { year: '1999', title: 'Dahek', role: 'Sameer B. Roshan', category: 'Feature' },
  { year: '2001', title: 'Dil Chahta Hai', role: 'Siddharth "Sid" Sinha', notes: 'Akshaye won the Filmfare Award for Best Supporting Actor. Farhan Akhtar initially offered Akash Malhotra, but Akshaye agreed to Sid upon Aamir Khan\'s interest in Akash. Akshaye stated in a 2001 interview that his character is not like his real self. A coming-of-age story about three friends, Sid is a sensitive artist who falls for an older woman.', category: 'Feature' },
  { year: '2002', title: 'Humraaz', role: 'Karan Malhotra', category: 'Feature' },
  { year: '2002', title: 'Deewangee', role: 'Raj Goyal', category: 'Feature' },
  { year: '2002', title: 'Bollywood/Hollywood', role: 'Himself', notes: 'Special appearance', category: 'Cameo' },
  { year: '2002', title: 'Love You Hamesha', role: 'Shaurat', notes: 'Delayed release, filmed in 1999.', category: 'Feature' },
  { year: '2003', title: 'Hungama', role: 'Jitender "Jeetu" Sahai', notes: 'Akshaye is popularly addressed as Jeetu from Videocon. A comedy of errors where Anjali, pretending to be married, causes chaos. Jeetu falls for her, leading to a series of mistaken identities and hilarious situations.', category: 'Feature' },
  { year: '2003', title: 'LOC Kargil', role: 'Lt. Balwan Singh', category: 'Feature' },
  { year: '2003', title: 'Border Hindustan Ka', role: 'Mobarak', notes: 'Cameo appearance', category: 'Cameo' },
  { year: '2004', title: 'Deewaar', role: 'Gaurav Kaul', category: 'Feature' },
  { year: '2004', title: 'Hulchul', role: 'Jai A. Chand', category: 'Feature' },
  { year: '2006', title: 'Shaadi Se Pehle', role: 'Ashish Khanna', category: 'Feature' },
  { year: '2006', title: '36 China Town', role: 'Chief Inspector Karan', notes: 'Priyanka Chopra makes a cameo as Karan’s wife. A comedy thriller where Akshaye plays the charming Chief Inspector Karan Kapoor, investigating Sonia Chang\'s murder. Features a running cigarette gag. Watch out for Akshaye looking hot in a dandy suit in the climax!', category: 'Feature' },
  { year: '2006', title: 'Aap Ki Khatir', role: 'Aman Mehra', category: 'Feature' },
  { year: '2007', title: 'Salaam-e-Ishq', role: 'Shiven Dungarpur', category: 'Feature' },
  { year: '2007', title: 'Naqaab', role: 'Vikram "Vicky" Malhotra', category: 'Feature' },
  { year: '2007', title: 'Gandhi, My Father', role: 'Harilal Gandhi', notes: 'Adapted from Chandulal Bhagubhai Dalal’s biography. Produced by Anil Kapoor. Explores the strained relationship between Mahatma Gandhi and his eldest son, Harilal. One of Akshaye’s strongest performances, a haunting portrayal of a man whose dreams were crushed by a father\'s legacy.', category: 'Feature' },
  { year: '2007', title: 'Aaja Nachle', role: 'MP Raja Uday Singh', notes: 'Though a significant role where he shares screen both with Madhuri Dixit and Irrfan Khan, Akshaye described this role as a guest appearance in an interview.', category: 'Feature' },
  { year: '2008', title: 'Race', role: 'Rajiv Singh', category: 'Feature' },
  { year: '2008', title: 'Mere Baap Pehle Aap', role: 'Gaurav J. Rane', category: 'Feature' },
  { year: '2009', title: 'Luck by Chance', role: 'Himself', notes: 'Cameo appearance', category: 'Cameo' },
  { year: '2009', title: 'Shortkut', role: 'Shekhar Giriraj', category: 'Feature' },
  { year: '2010', title: 'Aakrosh', role: 'Siddhant Chaturvedi', category: 'Feature' },
  { year: '2010', title: 'No Problem', role: 'Raj Ambani', category: 'Feature' },
  { year: '2010', title: 'Tees Maar Khan', role: 'Aatish Kapoor', category: 'Feature' },
  { year: '2012', title: 'Delhi Safari', role: 'Alex (Voice)', category: 'Feature' },
  { year: '2012', title: 'Gali Gali Chor Hai', role: 'Bharat Narayan', category: 'Feature' },
  { year: '2016', title: 'Dishoom', role: 'Rahul "Wagah" Kabiraj', category: 'Feature' },
  { year: '2017', title: 'Mom', role: 'Matthew Francis', category: 'Feature' },
  { year: '2017', title: 'Ittefaq', role: 'Dev Verma', category: 'Feature' },
  { year: '2019', title: 'The Accidental Prime Minister', role: 'Sanjaya Baru', notes: 'Akshaye admitted to never meeting the real Sanjaya Baru, as director Vijay Gutte had a specific vision. Based on the memoir by the then advisor to PM Dr. Manmohan Singh, it’s about the inside life of the PMO. Baru’s portrayal is witty and charming, breaking the fourth wall to directly communicate with the audience. Nobody rocks crisp shirts and suits with salt and pepper hair more than Akshaye!', category: 'Feature' },
  { year: '2019', title: 'Section 375', role: 'Tarun Saluja', notes: 'Directed by Ajay Bhal, this courtroom drama stars Akshaye Khanna as Tarun Saluja, a talented criminal barrister, and Richa Chadda as Hiral Gandhi. The film revolves around a rape case where a famous director is accused by his assistant costume designer.', category: 'Feature' },
  { year: '2020', title: 'Sab Kushal Mangal', role: 'Baba Bhandari', category: 'Feature' },
  { year: '2021', title: 'State of Siege: Temple Attack', role: 'Major Hanut Singh', notes: 'ZEE5 film; released in theatres under the title Akshardham: Operation Vajra Shakti. Dramatizing the 2002 Akshardham attack with Akshaye leading as a special forces officer.', category: 'Feature' },
  { year: '2021', title: 'Hungama 2', role: 'Premnath Pannu', notes: 'Cameo', category: 'Cameo' },
  { year: '2022', title: 'Drishyam 2', role: 'IG Tarun Ahlawat IPS', category: 'Feature' },
  { year: '2025', title: 'Chhaava', role: 'Aurangzeb', notes: 'Upcoming', category: 'Feature' },
  { year: '2025', title: 'Dhurandhar', role: 'Rehman Dakait', notes: 'Danish Pandoor and Saumya Tondon noted Akshaye improvised most sequences. A spy thriller with Ranveer Singh. Akshaye’s portrayal of the infamous Pakistani gangster Rehman Dakait garnered new fans. His performances in "Fa9la" and "Lutt Le Gaya" went viral.', category: 'Feature' },
  { year: '2026', title: 'Border 2', role: '2nd Lt Dharamvir Bhakhri', notes: 'Cameo appearance', category: 'Cameo' },
  { year: '2026', title: 'Dhurandhar: The Revenge', role: 'Rehman Dakait', notes: 'Flashback scenes', category: 'Feature' },
  { year: '2026', title: 'Mahakali', role: 'Asuraguru Shukracharya', notes: 'Upcoming Telugu film; filming.', category: 'Feature' },
];

export const MUSIC_VIDEOS: MusicVideo[] = [
  { year: '1997', title: 'Baby Don\'t Break My Heart', film: 'Mohabbat', link: 'https://youtu.be/01gQ5z-9j8o' }, // Placeholder link
  { year: '1999', title: 'Taal Se Taal Mila', film: 'Taal', link: 'https://youtu.be/u8h0Q1iYJ8w' }, // Placeholder link
  { year: '1999', title: 'Ishq Bina', film: 'Taal', link: 'https://youtu.be/u8h0Q1iYJ8w' }, // Placeholder link, using same as Taal Se Taal Mila
  { year: '1999', title: 'Sawan Barse Tarse Dil', film: 'Dahek', link: 'https://youtu.be/zG_fB8jWbQo' }, // Placeholder link
  { year: '2003', title: 'Chain Aap Ko', film: 'Hungama', link: 'https://youtu.be/h96s60C6uWw' }, // Placeholder link
  { year: '2004', title: 'Rafta Rafta', film: 'Hulchul', link: 'https://youtu.be/3fT1zI5vHjY' }, // Placeholder link
  { year: '2004', title: 'Hum Nahin', film: 'Hungama', link: 'https://youtu.be/h96s60C6uWw' }, // Placeholder link, using same as Chain Aap Ko
  { year: '2007', title: 'Ek Din Teri Raahon Mein', film: 'Naqaab', link: 'https://youtu.be/2V6jD1KjL7Y' }, // Placeholder link
  { year: '2007', title: 'Saiyaan Re', film: 'Salaam-E-Ishq', link: 'https://youtu.be/R1Jq6-M2o7E' }, // Placeholder link
  { year: '2025', title: 'Lutt Le Gaya', film: 'Dhurandhar', link: 'https://youtu.be/dQw4w9WgXcQ' }, // Placeholder link
];


export const APPEARANCES: Appearance[] = [
  { year: '1999', title: 'Charity Match for Kargil Heroes', context: 'Played football and scored a goal.', link: 'https://youtube.com/shorts/ZU8iNsYLnCY' },
  { year: '2017', title: 'National Award Ceremony', context: 'Receiving award on behalf of Vinod Khanna.', link: 'https://youtu.be/a6motIvAwVA' },
  { year: '2018', title: 'GUJCON CRF and PRF Launch', context: 'Attended the launch of GUJCON CRF and PRF.', link: 'https://www.bollywoodhungama.com/news/parties-and-events/akshaye-khanna-at-the-launch-of-gujcon-crf-and-prf/akshaye-khanna-at-the-launch-of-gujcon-crf-and-prf-5/'},
  { year: '2018', title: 'GUJCON Promotional Video', context: 'Featured in the promotional video for GUJCON.', link: 'https://youtu.be/0c-DdUEjqYo?si=Nu4KHE9ysWY0qxiQ'},
  { year: '2023', title: 'Unseen Pap Clicks (290 photos)', context: 'A collection of candid public sightings.', link: 'https://hamaraphotos.com/akshaye_khanna_185_0.html'},
  { year: 'Upcoming', title: 'Ikka', context: 'Confirmed project with Sunny Deol & Dia Mirza.', isRecent: true },
  { year: '2026', title: 'Mahakali Announcement', context: 'Sequel/Spin-off to Hanu-Man.', isRecent: true },
];

export const INTERVIEWS: Interview[] = [
  { type: 'Video', title: 'Faridoon Rapid Fire', date: 'Recent', summary: 'Confesses "Sindbad the Sailor" is his favorite song for 8-9 years.', link: 'https://m.youtube.com/watch?v=Ynw2UM1jweY' },
  { type: 'Video', title: 'Akshaye Khanna on premature balding, Aamir Khan, and more', date: '2022', summary: 'Candid discussion about personal and professional topics.', link: 'https://youtu.be/8ZfIbpIbgQY'},
  { type: 'Video', title: 'Mudde ki Baat with Akshaye Khanna (Section 375)', date: '2019', summary: 'In-depth conversation about his role in Section 375.', link: 'https://youtu.be/dQw4w9WgXcQ'}, // Placeholder link
  { type: 'Video', title: 'Akshaye Khanna | Ken Ghosh | Atika Farooqui | State of Siege', date: '2021', summary: 'Discussion about the film State of Siege: Temple Attack.', link: 'https://youtu.be/dQw4w9WgXcQ'}, // Placeholder link
  { type: 'Video', title: 'Akshaye on allegations on Nana and Dil Chahta Hai 2', date: '2019', summary: 'Addresses controversies and potential sequels.', link: 'https://youtu.be/dQw4w9WgXcQ'}, // Placeholder link
  { type: 'Video', title: 'The Actors Round Table 2019 / Akshaye Khanna and others', date: '2019', summary: 'Participates in a round table discussion with fellow actors.', link: 'https://youtu.be/dQw4w9WgXcQ'}, // Placeholder link
  { type: 'Video', title: 'Akshaye Khanna interview with Rajeev Masand | Section 375', date: '2019', summary: 'One-on-one interview with renowned film critic Rajeev Masand.', link: 'https://youtu.be/dQw4w9WgXcQ'}, // Placeholder link
  { type: 'Print', title: 'Screen India Interview (Dil Chahta Hai)', date: '2001', summary: 'Discusses his role in Dil Chahta Hai and real-life persona.', link: 'https://web.archive.org/web/20031029054928/http://www.screenindia.com/20010810/fcover.html'},
  { type: 'Print', title: 'Print Interview 1 (Google Share)', date: 'Undated', summary: 'A vintage print interview offering insights into his early career.', link: 'https://share.google/AGq9zNQ0Vn8WvRPXM'},
  { type: 'Print', title: 'Print Interview 2 (Google Share)', date: 'Undated', summary: 'Another archived print piece, covering his thoughts on acting.', link: 'https://share.google/CvyZ5wGmsVWz2hdvT'},
  { type: 'Print', title: 'Print Interview 3 (Google Share)', date: 'Undated', summary: 'An older article, possibly from a film magazine.', link: 'https://share.google/0sMdp79REpzoKL0s0'},
  { type: 'Print', title: 'Print Interview 4 (Google Share)', date: 'Undated', summary: 'Features his views on evolving cinema and character choices.', link: 'https://share.google/fAfxDmipx9KzSSQMM'},
  { type: 'Print', title: 'Print Interview 5 (Google Share)', date: 'Undated', summary: 'A comprehensive interview spanning various aspects of his career.', link: 'https://share.google/SO3nYYfkrZoE1N9gQ'},
  { type: 'Audio', title: 'Podcast Interview: Career Retrospective', date: 'Recent', summary: 'A detailed audio discussion about his film journey and personal growth.', link: 'https://example.com/podcast-akshaye-khanna'}, // Placeholder link
  
  // New Articles from provided references
  { 
    type: 'Article', 
    title: 'Unseen photos of Akshaye Khanna', 
    date: '2022', 
    summary: 'A nostalgic collection of rare and candid photographs showcasing his journey.', 
    link: 'https://www.mid-day.com/entertainment/bollywood-news/article/unseen-candid-photos-of-akshaye-khanna-you-should-not-miss-23261625',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'Silent and sinister: Aurangzeb in Chhaava', 
    date: '2025', 
    summary: 'Arushi Jain analyzes how Akshaye\'s powerful performance as Aurangzeb became a highlight of the film.', 
    link: 'https://www.indiatoday.in/movies/reviews/story/silent-and-sinister-how-akshaye-khannas-aurangzeb-stole-chhaava-review-2679905-2025-02-17',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'Chhaava Box Office Collection Tracker', 
    date: '2025', 
    summary: 'Tracking the massive commercial success and day-wise earnings of the historical epic.', 
    link: 'https://www.bollywoodhungama.com/movie/chhaava/box-office/',
    sentiment: 'Neutral'
  },
  { 
    type: 'Article', 
    title: 'Filmfare Awards 2020 Nominations', 
    date: '2020', 
    summary: 'Recognition for his performance in Section 375 at the prestigious Filmfare Awards.', 
    link: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/nominations-for-the-65th-filmfare-awards-2020-are-out/articleshow/73891461.cms',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'Sheila Ki Jawani Trivia by Farah Khan', 
    date: '2025', 
    summary: 'Farah Khan shares trivia about the iconic song and its production constraints.', 
    link: 'https://www.livemint.com/news/trends/farah-khan-calls-katrina-kaifs-sheila-ki-jawani-cheapest-song-of-her-life-all-we-had-were-these-10-dancers-11719656688755.html',
    sentiment: 'Neutral'
  },
  { 
    type: 'Article', 
    title: 'Section 375 Announcement', 
    date: '2018', 
    summary: 'Initial announcement of the gritty courtroom drama starring Akshaye and Richa Chadha.', 
    link: 'https://indianexpress.com/article/entertainment/bollywood/akshaye-khanna-and-richa-chadha-to-star-in-film-based-on-misuse-of-rape-laws-5067645/',
    sentiment: 'Neutral'
  },
  { 
    type: 'Article', 
    title: 'Sab Kushal Mangal Trailer Release', 
    date: '2019', 
    summary: 'A look at the colorful love triangle featuring Akshaye\'s eccentric Baba Bhandari.', 
    link: 'https://www.firstpost.com/entertainment/sab-kushal-mangal-trailer-akshaye-khanna-riva-kishan-priyaank-sharmas-film-is-a-colourful-love-triangle-7782161.html',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'State of Siege Temple Attack Teaser', 
    date: '2021', 
    summary: 'Dramatizing the 2002 Akshardham attack with Akshaye leading as a special forces officer.', 
    link: 'https://indianexpress.com/article/entertainment/web-series/state-of-siege-temple-attack-teaser-akshaye-khanna-7377033/',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'Akshardham: Operation Vajra Shakti Release', 
    date: '2025', 
    summary: 'News of the ZEE5 film receiving a theatrical rollout due to immense demand.', 
    link: 'https://www.bollywoodhungama.com/news/bollywood/akshaye-khanna-starrer-akshardham-operation-vajra-shakti-gets-big-screen-release-on-july-4/',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'Love You Hamesha: A Retro Look', 
    date: '2022', 
    summary: 'An archived look at the long-delayed romantic film featuring music by A.R. Rahman.', 
    link: 'https://www.rediff.com/movies/2002/jul/17love.htm',
    sentiment: 'Neutral'
  },
  { 
    type: 'Article', 
    title: 'Akshaye Khanna Joins Drishyam 2', 
    date: '2022', 
    summary: 'Breaking news of his pivotal entry into the successful thriller franchise alongside Ajay Devgn.', 
    link: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/akshaye-khanna-joins-ajay-devgn-and-tabu-in-drishyam-2/articleshow/89682570.cms',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'Emperor Aurangzeb Character Reveal', 
    date: '2023', 
    summary: 'First details on his transformation into the fierce Mughal emperor for Chhaava.', 
    link: 'https://www.filmcompanion.in/news/vicky-kaushals-chaawa-will-see-akshaye-khanna-as-emperor-aurangzeb',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'Dhurandhar Cast Announcement', 
    date: '2024', 
    summary: 'Announcement of the high-octane ensemble cast including Akshaye and Ranveer Singh.', 
    link: 'https://www.bollywoodhungama.com/news/bollywood/confirmed-ranveer-singh-teams-up-with-aditya-dhar-for-his-next-backed-by-jio-studios-and-b62-studio-exciting-details-out/',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'Dhurandhar Sequel Promised', 
    date: '2025', 
    summary: 'Reporting on the massive release plans and the confirmed sequel for March 2026.', 
    link: 'https://www.bollywoodhungama.com/news/bollywood/breaking-dhurandhar-ends-with-the-promise-of-a-sequel-to-release-on-eid-on-march-19-2026/',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'Mahakali: Shukracharya Look Unveiled', 
    date: '2025', 
    summary: 'A reveal of his mythological avatar in Prashanth Varma\'s expanding cinematic universe.', 
    link: 'https://timesofindia.indiatimes.com/entertainment/telugu/movies/news/mahakali-rises-akshaye-khannas-fierce-shukracharya-look-unveiled-prashanth-varma-expands-his-cinematic-universe/articleshow/113881451.cms',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'The Celebrated Actor of 2025', 
    date: '2025', 
    summary: 'An editorial exploring his career resurgence and current powerhouse status in Bollywood.', 
    link: 'https://www.thestatesman.com/entertainment/how-did-akshaye-khanna-go-from-being-forgotten-to-becoming-the-most-celebrated-actor-of-2025-1503463321.html',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: '5 Must-Watch Akshaye Khanna Films', 
    date: '2024', 
    summary: 'A curated list highlighting the range and brilliance of his most iconic performances.', 
    link: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/happy-birthday-akshaye-khanna-5-movies-that-prove-that-this-actor-is-a-man-for-all-seasons/articleshow/99054701.cms',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'HT Throwback: Groundbreaking Performances', 
    date: '2024', 
    summary: 'Celebrating his anniversary with a retrospective of his most influential work.', 
    link: 'https://www.hindustantimes.com/entertainment/bollywood/throwback-to-akshaye-khannas-groundbreaking-performances-101711612455823.html',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'TOI: A Legacy of Diverse Roles', 
    date: '2024', 
    summary: 'Profiling his ability to seamlessly transition between disparate character archetypes.', 
    link: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/akshaye-khanna-a-legacy-of-diverse-roles/articleshow/108842101.cms',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'DNA: The Underrated Actor Tribute', 
    date: '2023', 
    summary: 'A birthday tribute to his immense talent and the quiet impact he has made on Indian cinema.', 
    link: 'https://www.dnaindia.com/bollywood/report-happy-birthday-akshaye-khanna-underrated-actor-dil-chahta-hai-border-hungama-race-3032541',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'TOI: Untold Journey to Powerhouse', 
    date: '2025', 
    summary: 'From the pressures of being a star kid to becoming a respected powerhouse in the industry.', 
    link: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/akshaye-khannas-untold-journey-from-star-kid-setbacks-to-bollywoods-most-underrated-powerhouse/articleshow/110629451.cms',
    sentiment: 'Positive'
  },
  { 
    type: 'Article', 
    title: 'Filmfare 2002: Best Supporting Actor', 
    date: '2002', 
    summary: 'Documenting his Best Supporting Actor win for the cult classic Dil Chahta Hai.', 
    link: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/filmfare-awards-winners-2002-complete-list-of-winners-of-filmfare-awards-2002/articleshow/110629451.cms',
    sentiment: 'Positive'
  },
];