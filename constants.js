const MAX_DOG_AGE = 30;

const MAX_DISTANCE_FROM_USER = 50;

const MAX_DOG_WEIGHT = 200;

const MAX_USER_AGE = 120;

const MAX_DOG_ENERGY_LEVEL = 5;

const INITIAL_PREF_POINTS_BREED = 100000;

const INITIAL_PREF_POINTS_OTHER = 20;

const ENERGY_LEVELS = ['Very Low', 'Low', 'Medium', 'High', 'Very High']

const RELATIONSHIPS = ['UserLikedMatch', 'MatchRejectedUser', 'Matched', 'UserRejectedMatch']

const DOG_INTERESTS = ['Walks','Fetch and other games','Treats!','Playing in the dog park', 'Dancing','Eating','Chasing','Giving you kisses']

const DOG_AGES = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
]

const MAX_DISTANCES = [
  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  45, 46, 47, 48, 49, 50
]

const DOG_WEIGHTS = [
  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
  72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
  96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
  112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
  124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135,
  136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147,
  148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
  160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
  172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183,
  184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195,
  196, 197, 198, 199, 200
]

const BREEDS =    [
  'Affenpinscher',
  'Afghan Hound',
  'Aidi',
  'Airedale Terrier',
  'Akbash Dog',
  'Akita',
  'Alano Español',
  'Alaskan Klee Kai',
  'Alaskan Malamute',
  'Alpine Dachsbracke',
  'Alpine Spaniel',
  'American Bulldog',
  'American Cocker Spaniel',
  'American Eskimo Dog',
  'American Foxhound',
  'American Hairless Terrier',
  'American Pit Bull Terrier',
  'American Staffordshire Terrier',
  'American Water Spaniel',
  'Anglo-Français de Petite Vénerie',
  'Appenzeller Sennenhund',
  'Ariege Pointer',
  'Ariegeois',
  'Armant',
  'Armenian Gampr dog',
  'Artois Hound',
  'Australian Cattle Dog',
  'Australian Kelpie',
  'Australian Shepherd',
  'Australian Silky Terrier',
  'Australian Stumpy Tail Cattle Dog',
  'Australian Terrier',
  'Azawakh',
  'Bakharwal Dog',
  'Barbet',
  'Basenji',
  'Basque Shepherd Dog',
  'Basset Artésien Normand',
  'Basset Bleu de Gascogne',
  'Basset Fauve de Bretagne',
  'Basset Hound',
  'Bavarian Mountain Hound',
  'Beagle',
  'Beagle-Harrier',
  'Bearded Collie',
  'Beauceron',
  'Bedlington Terrier',
  'Belgian Shepherd Dog (Groenendael)',
  'Belgian Shepherd Dog (Laekenois)',
  'Belgian Shepherd Dog (Malinois)',
  'Bergamasco Shepherd',
  'Berger Blanc Suisse',
  'Berger Picard',
  'Berner Laufhund',
  'Bernese Mountain Dog',
  'Billy',
  'Black and Tan Coonhound',
  'Black and Tan Virginia Foxhound',
  'Black Norwegian Elkhound',
  'Black Russian Terrier',
  'Bloodhound',
  'Blue Lacy',
  'Blue Paul Terrier',
  'Boerboel',
  'Bohemian Shepherd',
  'Bolognese',
  'Border Collie',
  'Border Terrier',
  'Borzoi',
  'Boston Terrier',
  'Bouvier des Ardennes',
  'Bouvier des Flandres',
  'Boxer',
  'Boykin Spaniel',
  'Bracco Italiano',
  "Braque d'Auvergne",
  'Braque du Bourbonnais',
  'Braque du Puy',
  'Braque Francais',
  'Braque Saint-Germain',
  'Brazilian Terrier',
  'Briard',
  'Briquet Griffon Vendéen',
  'Brittany',
  'Broholmer',
  'Bruno Jura Hound',
  'Bucovina Shepherd Dog',
  'Bull and Terrier',
  'Bull Terrier (Miniature)',
  'Bull Terrier',
  'Bulldog',
  'Bullenbeisser',
  'Bullmastiff',
  'Bully Kutta',
  'Burgos Pointer',
  'Cairn Terrier',
  'Canaan Dog',
  'Canadian Eskimo Dog',
  'Cane Corso',
  'Cardigan Welsh Corgi',
  'Carolina Dog',
  'Carpathian Shepherd Dog',
  'Catahoula Cur',
  'Catalan Sheepdog',
  'Caucasian Shepherd Dog',
  'Cavalier King Charles Spaniel',
  'Central Asian Shepherd Dog',
  'Cesky Fousek',
  'Cesky Terrier',
  'Chesapeake Bay Retriever',
  'Chien Français Blanc et Noir',
  'Chien Français Blanc et Orange',
  'Chien Français Tricolore',
  'Chien-gris',
  'Chihuahua',
  'Chilean Fox Terrier',
  'Chinese Chongqing Dog',
  'Chinese Crested Dog',
  'Chinese Imperial Dog',
  'Chinook',
  'Chippiparai',
  'Chow Chow',
  'Cierny Sery',
  'Cimarrón Uruguayo',
  "Cirneco dell'Etna",
  'Clumber Spaniel',
  'Combai',
  'Cordoba Fighting Dog',
  'Coton de Tulear',
  'Cretan Hound',
  'Croatian Sheepdog',
  'Cumberland Sheepdog',
  'Curly Coated Retriever',
  'Cursinu',
  'Cão da Serra de Aires',
  'Cão de Castro Laboreiro',
  'Cão Fila de São Miguel',
  'Dachshund',
  'Dalmatian',
  'Dandie Dinmont Terrier',
  'Danish Swedish Farmdog',
  'Deutsche Bracke',
  'Doberman Pinscher',
  'Dogo Argentino',
  'Dogo Cubano',
  'Dogue de Bordeaux',
  'Drentse Patrijshond',
  'Drever',
  'Dunker',
  'Dutch Shepherd Dog',
  'Dutch Smoushond',
  'East Siberian Laika',
  'East-European Shepherd',
  'Elo',
  'English Cocker Spaniel',
  'English Foxhound',
  'English Mastiff',
  'English Setter',
  'English Shepherd',
  'English Springer Spaniel',
  'English Toy Terrier (Black &amp; Tan)',
  'English Water Spaniel',
  'English White Terrier',
  'Entlebucher Mountain Dog',
  'Estonian Hound',
  'Estrela Mountain Dog',
  'Eurasier',
  'Field Spaniel',
  'Fila Brasileiro',
  'Finnish Hound',
  'Finnish Lapphund',
  'Finnish Spitz',
  'Flat-Coated Retriever',
  'Formosan Mountain Dog',
  'Fox Terrier (Smooth)',
  'French Bulldog',
  'French Spaniel',
  'Galgo Español',
  'Gascon Saintongeois',
  'German Longhaired Pointer',
  'German Pinscher',
  'German Shepherd',
  'German Shorthaired Pointer',
  'German Spaniel',
  'German Spitz',
  'German Wirehaired Pointer',
  'Giant Schnauzer',
  'Glen of Imaal Terrier',
  'Golden Retriever',
  'Gordon Setter',
  'Gran Mastín de Borínquen',
  'Grand Anglo-Français Blanc et Noir',
  'Grand Anglo-Français Blanc et Orange',
  'Grand Anglo-Français Tricolore',
  'Grand Basset Griffon Vendéen',
  'Grand Bleu de Gascogne',
  'Grand Griffon Vendéen',
  'Great Dane',
  'Great Pyrenees',
  'Greater Swiss Mountain Dog',
  'Greek Harehound',
  'Greenland Dog',
  'Greyhound',
  'Griffon Bleu de Gascogne',
  'Griffon Bruxellois',
  'Griffon Fauve de Bretagne',
  'Griffon Nivernais',
  'Hamiltonstövare',
  'Hanover Hound',
  'Hare Indian Dog',
  'Harrier',
  'Havanese',
  'Hawaiian Poi Dog',
  'Himalayan Sheepdog',
  'Hokkaido',
  'Hovawart',
  'Huntaway',
  'Hygenhund',
  'Ibizan Hound',
  'Icelandic Sheepdog',
  'Indian pariah dog',
  'Indian Spitz',
  'Irish Red and White Setter',
  'Irish Setter',
  'Irish Terrier',
  'Irish Water Spaniel',
  'Irish Wolfhound',
  'Istrian Coarse-haired Hound',
  'Istrian Shorthaired Hound',
  'Italian Greyhound',
  'Jack Russell Terrier',
  'Jagdterrier',
  'Jämthund',
  'Kai Ken',
  'Kaikadi',
  'Kanni',
  'Karelian Bear Dog',
  'Karst Shepherd',
  'Keeshond',
  'Kerry Beagle',
  'Kerry Blue Terrier',
  'King Charles Spaniel',
  'King Shepherd',
  'Kintamani',
  'Kishu',
  'Komondor',
  'Kooikerhondje',
  'Koolie',
  'Korean Jindo Dog',
  'Kromfohrländer',
  'Kumaon Mastiff',
  'Kurī',
  'Kuvasz',
  'Kyi-Leo',
  'Labrador Husky',
  'Labrador Retriever',
  'Lagotto Romagnolo',
  'Lakeland Terrier',
  'Lancashire Heeler',
  'Landseer',
  'Lapponian Herder',
  'Large Münsterländer',
  'Leonberger',
  'Lhasa Apso',
  'Lithuanian Hound',
  'Longhaired Whippet',
  'Löwchen',
  'Mahratta Greyhound',
  'Maltese',
  'Manchester Terrier',
  'Maremma Sheepdog',
  'McNab',
  'Mexican Hairless Dog',
  'Miniature American Shepherd',
  'Miniature Australian Shepherd',
  'Miniature Fox Terrier',
  'Miniature Pinscher',
  'Miniature Schnauzer',
  'Miniature Shar Pei',
  'Molossus',
  'Montenegrin Mountain Hound',
  'Moscow Watchdog',
  'Moscow Water Dog',
  'Mountain Cur',
  'Mucuchies',
  'Mudhol Hound',
  'Mudi',
  'Neapolitan Mastiff',
  'New Zealand Heading Dog',
  'Newfoundland',
  'Norfolk Spaniel',
  'Norfolk Terrier',
  'Norrbottenspets',
  'North Country Beagle',
  'Northern Inuit Dog',
  'Norwegian Buhund',
  'Norwegian Elkhound',
  'Norwegian Lundehund',
  'Norwich Terrier',
  'Old Croatian Sighthound',
  'Old Danish Pointer',
  'Old English Sheepdog',
  'Old English Terrier',
  'Old German Shepherd Dog',
  'Olde English Bulldogge',
  'Otterhound',
  'Pachon Navarro',
  'Paisley Terrier',
  'Pandikona',
  'Papillon',
  'Parson Russell Terrier',
  'Patterdale Terrier',
  'Pekingese',
  'Pembroke Welsh Corgi',
  'Perro de Presa Canario',
  'Perro de Presa Mallorquin',
  'Peruvian Hairless Dog',
  'Petit Basset Griffon Vendéen',
  'Petit Bleu de Gascogne',
  'Phalène',
  'Pharaoh Hound',
  'Phu Quoc ridgeback dog',
  'Picardy Spaniel',
  'Plott Hound',
  'Podenco Canario',
  'Pointer (dog breed)',
  'Polish Greyhound',
  'Polish Hound',
  'Polish Hunting Dog',
  'Polish Lowland Sheepdog',
  'Polish Tatra Sheepdog',
  'Pomeranian',
  'Pont-Audemer Spaniel',
  'Poodle',
  'Porcelaine',
  'Portuguese Podengo',
  'Portuguese Pointer',
  'Portuguese Water Dog',
  'Posavac Hound',
  'Pražský Krysařík',
  'Pudelpointer',
  'Pug',
  'Puli',
  'Pumi',
  'Pungsan Dog',
  'Pyrenean Mastiff',
  'Pyrenean Shepherd',
  'Rafeiro do Alentejo',
  'Rajapalayam',
  'Rampur Greyhound',
  'Rastreador Brasileiro',
  'Rat Terrier',
  'Ratonero Bodeguero Andaluz',
  'Redbone Coonhound',
  'Rhodesian Ridgeback',
  'Rottweiler',
  'Rough Collie',
  'Russell Terrier',
  'Russian Spaniel',
  'Russian tracker',
  'Russo-European Laika',
  'Sabueso Español',
  'Saint-Usuge Spaniel',
  'Sakhalin Husky',
  'Saluki',
  'Samoyed',
  'Sapsali',
  'Schapendoes',
  'Schillerstövare',
  'Schipperke',
  'Schweizer Laufhund',
  'Schweizerischer Niederlaufhund',
  'Scotch Collie',
  'Scottish Deerhound',
  'Scottish Terrier',
  'Sealyham Terrier',
  'Segugio Italiano',
  'Seppala Siberian Sleddog',
  'Serbian Hound',
  'Serbian Tricolour Hound',
  'Shar Pei',
  'Shetland Sheepdog',
  'Shiba Inu',
  'Shih Tzu',
  'Shikoku',
  'Shiloh Shepherd Dog',
  'Siberian Husky',
  'Silken Windhound',
  'Sinhala Hound',
  'Skye Terrier',
  'Sloughi',
  'Slovak Cuvac',
  'Slovakian Rough-haired Pointer',
  'Small Greek Domestic Dog',
  'Small Münsterländer',
  'Smooth Collie',
  'South Russian Ovcharka',
  'Southern Hound',
  'Spanish Mastiff',
  'Spanish Water Dog',
  'Spinone Italiano',
  'Sporting Lucas Terrier',
  'St. Bernard',
  "St. John's water dog",
  'Stabyhoun',
  'Staffordshire Bull Terrier',
  'Standard Schnauzer',
  'Stephens Cur',
  'Styrian Coarse-haired Hound',
  'Sussex Spaniel',
  'Swedish Lapphund',
  'Swedish Vallhund',
  'Tahltan Bear Dog',
  'Taigan',
  'Talbot',
  'Tamaskan Dog',
  'Teddy Roosevelt Terrier',
  'Telomian',
  'Tenterfield Terrier',
  'Thai Bangkaew Dog',
  'Thai Ridgeback',
  'Tibetan Mastiff',
  'Tibetan Spaniel',
  'Tibetan Terrier',
  'Tornjak',
  'Tosa',
  'Toy Bulldog',
  'Toy Fox Terrier',
  'Toy Manchester Terrier',
  'Toy Trawler Spaniel',
  'Transylvanian Hound',
  'Treeing Cur',
  'Treeing Walker Coonhound',
  'Trigg Hound',
  'Tweed Water Spaniel',
  'Tyrolean Hound',
  'Vizsla',
  'Volpino Italiano',
  'Weimaraner',
  'Welsh Sheepdog',
  'Welsh Springer Spaniel',
  'Welsh Terrier',
  'West Highland White Terrier',
  'West Siberian Laika',
  'Westphalian Dachsbracke',
  'Wetterhoun',
  'Whippet',
  'White Shepherd',
  'Wire Fox Terrier',
  'Wirehaired Pointing Griffon',
  'Wirehaired Vizsla',
  'Yorkshire Terrier',
  'Šarplaninac'
]

const USER_INTERESTS = [
  '3D printing',
  'Scrapbook',
  'Amateur radio',
  'Acting',
  'Baton twirling',
  'Board games',
  'Book restoration',
  'Cabaret',
  'Calligraphy',
  'Candle making',
  'Computer programming',
  'Coffee roasting',
  'Cooking',
  'Colouring',
  'Cosplaying',
  'Couponing',
  'Creative writing',
  'Crocheting',
  'Cryptography',
  'Dance',
  'Digital arts',
  'Drama',
  'Drawing',
  'Do it yourself',
  'Electronics',
  'Embroidery',
  'Fashion',
  'Flower arranging',
  'Foreign language learning',
  'Gaming',
  'Tabletop games',
  'Role-playing games',
  'Gambling',
  'Genealogy',
  'Glassblowing',
  'Gunsmithing',
  'Homebrewing',
  'Ice skating',
  'Jewelry making',
  'Jigsaw puzzles',
  'Juggling',
  'Knapping',
  'Knitting',
  'Kabaddi',
  'Knife making',
  'Lacemaking',
  'Lapidary',
  'Leather crafting',
  'Lego building',
  'Lockpicking',
  'Machining',
  'Macrame',
  'Metalworking',
  'Magic',
  'Model building',
  'Listening to music',
  'Origami',
  'Painting',
  'Playing musical instruments',
  'Pet',
  'Poi',
  'Pottery',
  'Puzzles',
  'Quilting',
  'Reading',
  'Scrapbooking',
  'Sculpting',
  'Sewing',
  'Singing',
  'Sketching',
  'Soapmaking',
  'Sports',
  'Comedy',
  'Sudoku',
  'Table tennis',
  'Taxidermy',
  'Video gaming',
  'Watching movies',
  'Web surfing',
  'Whittling',
  'Wood carving',
  'Woodworking',
  'World Building',
  'Writing',
  'Yoga',
  'Yo-yoing',
  'Air sports',
  'Archery',
  'Astronomy',
  'Backpacking',
  'Base jumping',
  'Baseball',
  'Basketball',
  'Beekeeping',
  'Bird watching',
  'Blacksmithing',
  'Board sports',
  'Bodybuilding',
  'Brazilian jiu-jitsu',
  'Community',
  'Cycling',
  'Dowsing',
  'Driving',
  'Fishing',
  'Flag football',
  'Flying',
  'Foraging',
  'Gardening',
  'Geocaching',
  'Ghost hunting',
  'Graffiti',
  'Handball',
  'Hiking',
  'Hooping',
  'Horseback riding',
  'Hunting',
  'Inline skating',
  'Jogging',
  'Kayaking',
  'Kite flying',
  'Kitesurfing',
  'Larping',
  'Letterboxing',
  'Metal detecting',
  'Motor sports',
  'Mountain biking',
  'Mountaineering',
  'Mushroom hunting',
  'Mycology',
  'Netball',
  'Nordic skating',
  'Orienteering',
  'Paintball',
  'Parkour',
  'Photography',
  'Polo',
  'Rafting',
  'Rappelling',
  'Rock climbing',
  'Roller skating',
  'Rugby',
  'Running',
  'Sailing',
  'Sand art',
  'Scouting',
  'Scuba diving',
  'Sculling',
  'Rowing',
  'Shooting',
  'Shopping',
  'Skateboarding',
  'Skiing',
  'Skim Boarding',
  'Skydiving',
  'Slacklining',
  'Snowboarding',
  'Stone skipping',
  'Surfing',
  'Swimming',
  'Taekwondo',
  'Tai chi',
  'Urban exploration',
  'Vacation',
  'Vehicle restoration',
  'Water sports'
];

const PROFESSIONS = [
'Accounting',
'Administration & Office Support',
'Advertising, Arts & Media',
'Banking & Financial Services',
'Call Centre & Customer Service',
'Community Services & Development',
'Construction',
'Consulting & Strategy',
'Design & Architechture',
'Education & Training',
'Engineering',
'Farming, Animals & Conservation',
'Government & Defence',
'Healthcare & Medical',
'Hospitality & Tourism',
'Human Resources & Recruitment',
'Information & Communication Technology',
'Insurance & Superannuation',
'Legal',
'Manufacturing, Transport & Logistics',
'Marketing & Communications',
'Mining, Resources & Energy',
'Real Estate & Property',
'Retail & Consumer Products',
'Sales',
'Science & Technology',
'Sport & Recreation',
'Trades & Services',
]

const DOG_AGE_PREFS = [
  'Older',
  'Same',
  'Younger'
]

const DOG_WEIGHT_PREFS = [
  'Larger',
  'Same',
  'Smaller'
]

const mapQuestKey = '6k5vyVG6Y0JOyqDXbfyn4sHx3OVBruPw';

// http://en.wikipedia.org/wiki/Extreme_points_of_the_United_States#Westernmost
const topLatitudeUS = 49.3457868  // north lat
const leftLongitudeUS = -124.7844079 // west long
const rightLongitudeUS = -66.9513812 // east long
const bottomLatitudeUS =  24.7433195 // south lat
const lengthUS = topLatitudeUS - bottomLatitudeUS
const widthUS = -(leftLongitudeUS - rightLongitudeUS)
const latitudeNY = 40.7128
const longitudeNY = -74.0060
const maxLatitudeDistanceFromNY = 1 // Each degree of latitude is approximately 69 miles apart
const maxLongitudeDistanceFromNY = 1 // Each degree of longitude is approximately 50 miles apart


module.exports = { BREEDS, ENERGY_LEVELS, RELATIONSHIPS, USER_INTERESTS, PROFESSIONS, MAX_DOG_AGE, MAX_DOG_WEIGHT, MAX_USER_AGE, MAX_DISTANCE_FROM_USER,  DOG_AGES, DOG_WEIGHTS, INITIAL_PREF_POINTS_OTHER, INITIAL_PREF_POINTS_BREED, MAX_DOG_ENERGY_LEVEL, MAX_DISTANCES, DOG_INTERESTS, DOG_AGE_PREFS, DOG_WEIGHT_PREFS, mapQuestKey, topLatitudeUS, leftLongitudeUS, rightLongitudeUS, bottomLatitudeUS, lengthUS, widthUS, latitudeNY, longitudeNY }
