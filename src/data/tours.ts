// src/data/tours.ts

// ─────────────────────────────────────────────────────────────────────
// 1. IMPORTS (Ensure these match your assets folder)
// ─────────────────────────────────────────────────────────────────────
import maasaiMara from "@/assets/maasai mara .jpeg";
import amboseli from "@/assets/amboseli .jpeg";
import diani from "@/assets/diani 2.jpeg";
import treeTops from "@/assets/treetop lodge .jpeg";
import olpejeta from "@/assets/olpejeta .jpeg";
import tsavoEast from "@/assets/tsavo east.jpeg";
import tsavoWest from "@/assets/tsavo west.jpeg";
import lakeNakuru from "@/assets/lake nakuru lodge .jpeg";
import maraSerena from "@/assets/mara serena .jpeg";
import maraParan from "@/assets/mara paran camp.jpeg";
import sarovaWhite from "@/assets/sarova white sand beach .jpeg";
import enashipai from "@/assets/enashipai resort .jpeg";
import hemingways from "@/assets/hemingways hotel .jpeg";
import maraSweet from "@/assets/mara sweet acacia .jpeg";
import olkupelia from "@/assets/olkuperia mara .jpeg";
import maraNtulele from "@/assets/mara ntulete .jpeg";
import oldarpoi from "@/assets/oldarpoi mara .jpeg";
import surana from "@/assets/surana buffalo .jpeg";
import soroi from "@/assets/soroi larsen .jpeg";
import elewana from "@/assets/elewa sand .jpeg";
import lengishu from "@/assets/lengishu borana .jpeg";
import meru from "@/assets/meru .jpeg";
import borana from "@/assets/borana .jpeg";
import lewa from "@/assets/lewa .jpeg";
import elewanaLoisaba from "@/assets/elewana loisaba 1.jpeg";
import kalepo from "@/assets/kalepo camp 1.jpeg";
import napaMara from "@/assets/napa mara .jpeg";
import poriniRhino from "@/assets/poroni rhino camp .jpeg";
import muhari from "@/assets/mahari mzuri .jpeg";
import watamu from "@/assets/watamu.jpeg";
import watamuTree from "@/assets/watamu tree house .jpeg";
import saltslick from "@/assets/saltslick safari .jpeg";
import fairmont from "@/assets/fairmont mara .jpeg";
import maasaiMaraLodge from "@/assets/maasai mara lodge .jpeg";
import arkLodge from "@/assets/ark lodge .jpeg";
import enkorok from "@/assets/enkorok safari.jpeg";
import agamara from "@/assets/agama mara .jpeg";
import governors from "@/assets/governors camp .jpeg";
import elewanaTortillas from "@/assets/elewana tortillas .jpeg";
import voi from "@/assets/voi safari .jpeg";
import kilaguni from "@/assets/kilaguni serena .jpeg";
import sarovaLion from "@/assets/sarova lion hill game .jpeg";
import manorAmboseli from "@/assets/manor amboseli .jpeg";
import nyati from "@/assets/nyati safari camp.jpeg";
import olTukai from "@/assets/ol tukai lodge .jpeg";
import sungura from "@/assets/sungura safari.jpeg";
import ashnil from "@/assets/ashnil mara .jpeg";
import majilis from "@/assets/majilis resort.jpeg";
import tamarind from "@/assets/tamarind tree hotel.jpeg";
import alama from "@/assets/alama camp.jpeg";
import villaRosa from "@/assets/villa rosa.jpeg";
import chaleIsland from "@/assets/chale island.jpeg";
import chaleIsland2 from "@/assets/chale island2.jpeg";
import lakeNaivasha from "@/assets/lake naivasha .jpeg";
import lakeNaivasha2 from "@/assets/lake naivasha 2.jpeg";
import lakeNaivasha3 from "@/assets/lake naivasha 3.jpeg";

export type Tour = {
  id: string;
  title: string;
  category: "Safari" | "Beach" | "City" | "Mountain" | "Luxury";
  location: string;
  duration: string;
  price: string;
  image: string;
  isBestseller?: boolean;
  isLuxury?: boolean;
  isFamily?: boolean;
  overview: string;
  itinerary: { day: string; title: string; desc: string }[];
  included: string[];
  excluded: string[];
  faqs: { q: string; a: string }[];
};

export const TOURS_DATA: Tour[] = [
  // ─────────────────────────────────────────────────────────────────────
  // THE SIGNATURE ITINERARIES
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "maasai-mara-classic",
    title: "Maasai Mara — Where The Earth Moves",
    category: "Safari",
    location: "Maasai Mara, Kenya",
    duration: "3 Days / 2 Nights",
    price: "$1,850",
    image: maasaiMara,
    isBestseller: true,
    overview: "Close your eyes. Golden grass as far as your eyes can go. The air smells of dust and rain. Far away, thousands of wildebeest move like a black river. A lion yawns under an acacia tree. This is not a movie. This is Maasai Mara. And in 3 days, it becomes YOUR story.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Maasai Mara", desc: "Your driver picks you at JKIA / Nairobi Hotel with a smile and cold water. You leave the city noise behind. You enter Maasai Mara. Lunch at Mara Serena. 16:00 — Your first game drive. A lioness walks right past your Land Cruiser. Sundowner on the savannah. Dinner under the stars." },
      { day: "Day 2", title: "Full Day Maasai Mara", desc: "06:30 — Wake up to birds singing and coffee on your balcony. Morning drive — follow a leopard in a tree, watch a cheetah sprint. 15:00 — Maasai Village. Welcomed with jumping dance and songs. 16:30 — Golden hour drive. Elephants cross in front of you. Dinner at lodge." },
      { day: "Day 3", title: "Maasai Mara to Nairobi", desc: "06:30 — One last morning drive. Sun rises red over the Mara. A lion roars far away. Drive back to Nairobi, 5-6 hrs. Drop at JKIA / Nairobi Hotel by 17:00. You arrived as a tourist. You leave as family." }
    ],
    included: ["2 nights full board", "Park fees", "Professional Guide", "Bottled Water", "Game drives in 4x4 Land Cruiser"],
    excluded: ["eTA $30-35", "International flights", "Travel Insurance", "Tips $10-15/day", "Premium drinks", "Lunch Day 3 en route", "Maasai Village $25 pp"],
    faqs: [{ q: "When is the best time to visit?", a: "July to October for the Great Migration, but the Mara is excellent year-round for big cats." }]
  },
  {
    id: "borana-walk-rhinos",
    title: "Borana — Walk With The Rhinos",
    category: "Luxury",
    location: "Borana Conservancy",
    duration: "3 Days / 2 Nights",
    price: "$2,870",
    image: borana,
    isLuxury: true,
    overview: "A black rhino — big, ancient, powerful — walks just 20 metres from you. Your guide whispers 'Don't move.' Your heart pounds. You are not in a zoo. You are in Borana, one of the last places on earth where rhinos still walk free.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Borana", desc: "Drive through Nanyuki. Enter Borana. Lunch at Borana Lodge. 16:00 game drive. Rhinos! Elephants! Lions resting under a tree. Sundowner with a cold drink." },
      { day: "Day 2", title: "Full Day Borana", desc: "06:30 morning drive. Mother rhino and baby walk across the road. Afternoon — more lions, leopards, elephants. 19:00 Night Game Drive INCLUDED. Hyenas laughing, a leopard's eyes glowing." },
      { day: "Day 3", title: "Borana to Nairobi", desc: "06:30 last drive. One more rhino, one more elephant. Drive back to Nairobi, 5 hrs. You arrived as a tourist. You leave as a protector of rhinos." }
    ],
    included: ["2 nights full board", "Conservancy fees", "Guide", "Water", "Game drives", "Night Game Drive"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 3"],
    faqs: [{ q: "Can I walk with the rhinos?", a: "Yes, Borana offers guided rhino tracking on foot, subject to safety conditions." }]
  },
  {
    id: "olpejeta-nakuru-mara",
    title: "Ol Pejeta / Lake Nakuru / Maasai Mara — From Chimpanzees To Big Cats",
    category: "Safari",
    location: "Ol Pejeta, Nakuru & Mara",
    duration: "6 Days / 5 Nights",
    price: "$3,520",
    image: olpejeta,
    isBestseller: true,
    overview: "In 6 days you will meet chimpanzees that laugh like humans, rhinos that walk like ancient kings, a lake that turns pink with a million flamingos, and a Mara where lions roar so loud you feel it in your chest.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Ol Pejeta", desc: "Drive to Ol Pejeta. Arrive at Sweetwaters Serena. Elephants come to drink at the waterhole. 16:00 Afternoon game drive. Rhinos — white and black. Sundowner, dinner under the stars." },
      { day: "Day 2", title: "Full Day Ol Pejeta", desc: "Morning drive. Leopards in a tree. Chimpanzee Sanctuary. Afternoon drive. 19:00 Night Game Drive INCLUDED. Spotlight on. Hyenas, bush babies." },
      { day: "Day 3", title: "Ol Pejeta to Lake Nakuru", desc: "Drive to Lake Nakuru. Arrive at Sopa Lodge. See the PINK lake — millions of flamingos. Afternoon game drive. Rhinos, Rothschild giraffes." },
      { day: "Day 4", title: "Lake Nakuru to Maasai Mara", desc: "Drive to Maasai Mara via Narok. Arrive at Mara Serena. Lunch. 16:00 First Mara drive. Lioness walks past your car. Sundowner on the savannah." },
      { day: "Day 5", title: "Full Day Maasai Mara", desc: "Morning drive — leopard, cheetah, lions. 15:00 Maasai Village. 16:30 Golden hour drive. Elephants cross in front of you. Dinner at Mara Serena." },
      { day: "Day 6", title: "Maasai Mara to Nairobi", desc: "One last morning drive. Drive back to Nairobi. Drop by 17:00. You arrived as a tourist. You leave as family." }
    ],
    included: ["5 nights full board", "Park fees + Conservancy fees", "Guide", "Water", "Game drives", "Chimpanzee Sanctuary", "Night Game Drive at Ol Pejeta"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 6", "Maasai Village $25 pp"],
    faqs: [{ q: "Can I see the last northern white rhinos?", a: "Yes, at Ol Pejeta's Endangered Species Boma." }]
  },
  {
    id: "amboseli-tsavo-west",
    title: "Amboseli / Tsavo West — Elephants Under Kilimanjaro",
    category: "Safari",
    location: "Amboseli & Tsavo West",
    duration: "4 Days / 3 Nights",
    price: "$1,980",
    image: amboseli,
    isFamily: true,
    overview: "Imagine this. Dawn. The sky is pink. And there — standing in front of you — is the biggest mountain in Africa, Kilimanjaro, covered in snow. And walking slowly across the plain is a line of giant elephants, babies in the middle.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Amboseli", desc: "Drive to Amboseli. See Kilimanjaro. Arrive at Amboseli Serena. 16:00 Afternoon game drive. Elephants everywhere with Kilimanjaro behind them. Sundowner." },
      { day: "Day 2", title: "Full Day Amboseli", desc: "05:45 Wake up early. Sun rises. Kilimanjaro is clear. Morning drive. Afternoon drive. Optional Maasai Village visit." },
      { day: "Day 3", title: "Amboseli to Tsavo West", desc: "Drive to Tsavo West. Visit Mzima Springs. Walk on the bridge, see hippos and crocodiles under crystal-clear water. Visit Shetani Lava Flows." },
      { day: "Day 4", title: "Tsavo West to Nairobi", desc: "Morning drive. Drive back to Nairobi or Mombasa. Drop by 17:00." }
    ],
    included: ["3 nights full board", "Park fees", "Guide", "Water", "Game drives"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 4", "Maasai Village $25 pp"],
    faqs: [{ q: "Is Kilimanjaro always visible?", a: "It is clearest in the early morning (06:00 - 09:00)." }]
  },
  {
    id: "lewa-samburu-meru",
    title: "Lewa / Samburu / Meru — The Northern Frontier",
    category: "Luxury",
    location: "Lewa, Samburu & Meru",
    duration: "6 Days / 5 Nights",
    price: "$4,500",
    image: lewa,
    isLuxury: true,
    overview: "Forget the normal safari everyone does. This is the NORTH — wild, raw, untouched. In Lewa you will see rhinos like nowhere else. In Samburu you will see animals that exist NOWHERE else on earth. And in Meru you will walk where Elsa the lioness was born.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Lewa", desc: "Drive to Lewa. Enter Lewa Conservancy — UNESCO World Heritage. Rhinos everywhere. 16:00 Afternoon game drive. Sundowner with Mt Kenya turning pink." },
      { day: "Day 2", title: "Full Day Lewa", desc: "Morning drive. Track rhinos with rangers. See Special 5 of the North. 19:00 Night Game Drive INCLUDED." },
      { day: "Day 3", title: "Lewa to Samburu", desc: "Drive to Samburu. Arrive at Samburu Intrepids. Elephants cross the river in front of you. Afternoon drive — reticulated giraffe, Grevy's zebra, gerenuk." },
      { day: "Day 4", title: "Full Day Samburu", desc: "Morning drive. Lions drinking, leopards in doum palms. Buffalo Springs. Sundowner on the river bank." },
      { day: "Day 5", title: "Samburu to Meru", desc: "Drive to Meru National Park. Arrive at Elsa's Kopje. Afternoon game drive. Visit the spot where Elsa is buried." },
      { day: "Day 6", title: "Meru to Nairobi", desc: "Morning drive. Drive back to Nairobi. Drop by 17:00." }
    ],
    included: ["5 nights full board", "Park fees + Conservancy fees", "Guide", "Water", "Game drives", "Night Drive in Lewa"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 6", "Samburu Village $25 pp"],
    faqs: [{ q: "What is the Special Five?", a: "Grevy's zebra, reticulated giraffe, gerenuk, Somali ostrich, and Beisa oryx." }]
  },
  {
    id: "naivasha-loisaba",
    title: "Lake Naivasha / Elewana Loisaba — Boat Safari & Star Beds",
    category: "Luxury",
    location: "Naivasha & Loisaba",
    duration: "4 Days / 3 Nights",
    price: "$4,200",
    image: elewanaLoisaba,
    isLuxury: true,
    overview: "Day 1 you are on a boat, hippos opening their mouths right next to you. Day 2 you are in Loisaba — a private conservancy where elephants walk like kings. And at night you sleep ON A BED UNDER THE STARS.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Lake Naivasha", desc: "Drive to Naivasha. 11:00 Boat Safari. Hippos! Fish eagles! Crescent Island Walk. Sundowner by the lake." },
      { day: "Day 2", title: "Naivasha to Loisaba", desc: "Drive to Loisaba. Arrive at Elewana Loisaba Tented Camp. Afternoon game drive. Elephants, lions, wild dogs." },
      { day: "Day 3", title: "Full Day Loisaba", desc: "Morning drive. Track elephants. Walking Safari. 19:00 Night Game Drive INCLUDED. Then — THE STAR BEDS. Sleep on a wooden platform under the Milky Way." },
      { day: "Day 4", title: "Loisaba to Nairobi", desc: "Wake up on your Star Bed. Drive back to Nairobi. Drop by 17:00." }
    ],
    included: ["3 nights full board", "Park fees + Conservancy fees", "Guide", "Water", "Game drives", "Boat Safari", "Star Bed Experience"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 4", "Walking Safari $40 pp"],
    faqs: [{ q: "Are the Star Beds safe?", a: "Yes, they are on elevated platforms with a guide nearby." }]
  },
  {
    id: "nakuru-aberdare-borana-samburu",
    title: "Lake Nakuru / Aberdare / Borana / Samburu — The Grand Central",
    category: "Safari",
    location: "Central Kenya",
    duration: "7 Days / 6 Nights",
    price: "$5,200",
    image: lakeNakuru,
    overview: "In 7 days you will see a lake that turns pink, sleep in a tree hotel where elephants come to you at night, walk in a private rhino paradise, and end in Samburu where warriors live and animals exist nowhere else on earth.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Lake Nakuru", desc: "Drive to Nakuru. Arrive at Sopa Lodge. See the PINK lake — flamingos. Afternoon game drive. Rhinos!" },
      { day: "Day 2", title: "Nakuru to Aberdare", desc: "Morning drive. Drive to Aberdare. Arrive at The Ark. Watch elephants from the balcony. Night viewing from floodlit waterhole." },
      { day: "Day 3", title: "Aberdare to Borana", desc: "Drive to Borana. Arrive at Borana Lodge. Afternoon game drive. Rhinos, lions, elephants. Night Game Drive INCLUDED." },
      { day: "Day 4", title: "Full Day Borana", desc: "Morning rhino tracking on foot. Afternoon game drive. Sundowner on a hill." },
      { day: "Day 5", title: "Borana to Samburu", desc: "Drive to Samburu. Arrive at Samburu Intrepids. Afternoon drive — Special 5." },
      { day: "Day 6", title: "Full Day Samburu", desc: "Morning drive. River waking up. Leopards in doum palms. Afternoon drive." },
      { day: "Day 7", title: "Samburu to Nairobi", desc: "Morning drive. Drive back to Nairobi. Drop by 17:00." }
    ],
    included: ["6 nights full board", "Park fees + Conservancy fees", "Guide", "Water", "Game drives", "Night Drive Borana"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 7", "Samburu Village $25 pp"],
    faqs: [{ q: "Is The Ark good for children?", a: "Yes, watching animals from the balcony is magical for kids." }]
  },
  {
    id: "amboseli-nakuru-lewa-watamu",
    title: "Amboseli / Lake Nakuru / Lewa / Watamu — From Dust to Paradise",
    category: "Safari",
    location: "Kenya (Multi-Region)",
    duration: "10 Days / 9 Nights",
    price: "$6,800",
    image: watamu,
    isLuxury: true,
    overview: "First you see Kilimanjaro. Then a lake that turns pink. Then Lewa — rhino kingdom. And then — you fly over Kenya and land in PARADISE. Watamu. White sand so soft it feels like powder. You go from dust to beach in ONE trip.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Amboseli", desc: "Drive to Amboseli. See Kilimanjaro. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Amboseli", desc: "Morning drive. Elephants silhouetted against Kilimanjaro." },
      { day: "Day 3", title: "Amboseli to Lake Nakuru", desc: "Drive to Nakuru. Afternoon game drive. Pink lake, rhinos." },
      { day: "Day 4", title: "Lake Nakuru to Lewa", desc: "Drive to Lewa. Afternoon game drive. Rhinos, lions, Grevy's zebra." },
      { day: "Day 5", title: "Full Day Lewa", desc: "Morning drive. Track rhinos. Night Game Drive INCLUDED." },
      { day: "Day 6", title: "Lewa to Watamu (Flight)", desc: "Morning drive. Flight to Malindi. Transfer to Watamu. Afternoon on the beach." },
      { day: "Day 7", title: "Full Day Watamu", desc: "Dhow Safari. Dolphins! Snorkeling. Lunch on a sandbank." },
      { day: "Day 8", title: "Watamu", desc: "Gedi Ruins. Turtle Watch. Beach day." },
      { day: "Day 9", title: "Watamu", desc: "Full beach day. Swim, snorkel, or just lie on sand." },
      { day: "Day 10", title: "Watamu to Nairobi", desc: "Morning beach walk. Flight back to Nairobi. Drop by 15:00." }
    ],
    included: ["9 nights full board (safari) + half board (Watamu)", "Flight Lewa → Malindi", "Transfers", "Park fees", "Guide", "Dhow Safari", "Night Drive Lewa"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Flight Malindi → Nairobi", "Marine Park fees $15 pp"],
    faqs: [{ q: "Is the flight included?", a: "The Lewa to Malindi flight is included. The Malindi to Nairobi flight is extra." }]
  },
  {
    id: "naivasha-aberdare-samburu-mara-diani",
    title: "Lake Naivasha / Aberdare / Samburu / Maasai Mara / Diani — The Grand Kenya",
    category: "Safari",
    location: "Kenya (Multi-Region)",
    duration: "11 Days / 10 Nights",
    price: "$8,200",
    image: diani,
    isLuxury: true,
    overview: "Day 1 you are on a boat with hippos. Day 2 you sleep in a tree hotel. Day 3 you are in Samburu with warriors. Day 5 you are in the Mara where lions roar. Day 9 you are on Diani beach — voted the BEST beach in Africa. This is a lifetime in 11 days.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Naivasha", desc: "Boat Safari. Crescent Island Walk. Sundowner by the lake." },
      { day: "Day 2", title: "Naivasha to Aberdare", desc: "Drive to Aberdare. Arrive at The Ark. Watch elephants from the balcony. Buzzer system at night." },
      { day: "Day 3", title: "Aberdare to Samburu", desc: "Drive to Samburu. Afternoon game drive. Special 5." },
      { day: "Day 4", title: "Full Day Samburu", desc: "Morning and afternoon game drives. Leopards in doum palms." },
      { day: "Day 5", title: "Samburu to Maasai Mara", desc: "Drive to Mara. Arrive at Mara Serena. Afternoon game drive. Lioness walks past your car." },
      { day: "Day 6", title: "Full Day Maasai Mara", desc: "Morning drive. Cheetah sprinting. 15:00 Maasai Village. Golden hour drive." },
      { day: "Day 7", title: "Full Day Maasai Mara", desc: "Morning drive to Mara River. Afternoon drive." },
      { day: "Day 8", title: "Maasai Mara to Diani (Flight)", desc: "Morning drive. Flight to Diani. Arrive at Leopard Beach. Afternoon swim." },
      { day: "Day 9", title: "Full Day Diani", desc: "Wasini Island Dhow Safari. Dolphins. Snorkeling. Lunch on the island." },
      { day: "Day 10", title: "Diani", desc: "Beach day. Spa. Colobus Monkey Forest." },
      { day: "Day 11", title: "Diani to Nairobi", desc: "Morning swim. Flight back to Nairobi. Drop by 15:00." }
    ],
    included: ["10 nights full board (safari) + half board (Diani)", "Flight Mara → Diani", "Park fees", "Guide", "Boat Safari", "Wasini Dhow"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Flight Diani → Nairobi", "Maasai Village $25 pp"],
    faqs: [{ q: "Can I skip the flight?", a: "Yes, we can arrange a road transfer, but it adds a full day of driving." }]
  },
  {
    id: "aberdare-olpejeta-samburu",
    title: "Aberdare / Ol Pejeta / Samburu — Tree Hotel, Last Rhinos & Warrior Land",
    category: "Safari",
    location: "Central Kenya",
    duration: "6 Days / 5 Nights",
    price: "$4,800",
    image: arkLodge,
    overview: "Day 1 you sleep in a tree hotel. Day 2 you meet the LAST 2 Northern White Rhinos left on the entire planet. Day 4 you are in Samburu with warriors. This is not just a safari. This is a mission.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Aberdare", desc: "Drive to Aberdare. Arrive at The Ark. Watch elephants from the balcony. Night viewing." },
      { day: "Day 2", title: "Aberdare to Ol Pejeta", desc: "Drive to Ol Pejeta. Arrive at Sweetwaters Serena. 15:30 Afternoon game drive. Meet Najin and Fatu — the last 2 northern white rhinos. Chimpanzee Sanctuary." },
      { day: "Day 3", title: "Full Day Ol Pejeta", desc: "Morning drive. Big 5. 19:00 Night Game Drive INCLUDED." },
      { day: "Day 4", title: "Ol Pejeta to Samburu", desc: "Drive to Samburu. Afternoon game drive. Special 5." },
      { day: "Day 5", title: "Full Day Samburu", desc: "Morning drive. Leopards in doum palms. Buffalo Springs. Sundowner." },
      { day: "Day 6", title: "Samburu to Nairobi", desc: "Morning drive. Drive back to Nairobi. Drop by 17:00." }
    ],
    included: ["5 nights full board", "Park fees + Conservancy fees", "Guide", "Game drives", "Night Drive Ol Pejeta", "Chimpanzee Sanctuary", "Northern White Rhino Visit"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 6", "Samburu Village $25 pp"],
    faqs: [{ q: "Can I see the northern white rhinos?", a: "Yes, they are protected 24/7 in a special enclosure." }]
  },
  {
    id: "lengishu-samburu",
    title: "Lengishu Borana / Samburu — Private House, Private Chef",
    category: "Luxury",
    location: "Borana & Samburu",
    duration: "5 Days / 4 Nights",
    price: "$6,500",
    image: lengishu,
    isLuxury: true,
    overview: "Forget hotels. Forget other tourists. At Lengishu you get a whole HOUSE to yourself — 6 bedrooms, infinity pool, private chef cooking just for you. This is not a safari. This is YOUR house in Africa.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Lengishu", desc: "Drive to Borana. Arrive at Lengishu House. Lunch. 16:00 Afternoon game drive with YOUR private guide." },
      { day: "Day 2", title: "Full Day Lengishu", desc: "Morning drive. Walking Safari. 19:00 Night Game Drive INCLUDED." },
      { day: "Day 3", title: "Lengishu to Samburu", desc: "Drive to Samburu. Arrive at Elephant Bedroom Camp. Afternoon drive." },
      { day: "Day 4", title: "Full Day Samburu", desc: "Morning drive. Leopards in doum palms. Afternoon drive. Sundowner." },
      { day: "Day 5", title: "Samburu to Nairobi", desc: "Morning drive. Drive back to Nairobi. Drop by 17:00." }
    ],
    included: ["4 nights full board", "Private Guide in Borana", "Private Chef at Lengishu", "Park fees", "Game drives", "Walking Safari", "Night Drive Borana"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 5", "Horse Riding $80 pp"],
    faqs: [{ q: "How many people can stay at Lengishu?", a: "Up to 12 guests in 6 bedrooms." }]
  },
  {
    id: "amboseli-naivasha-lewa-samburu",
    title: "Amboseli / Lake Naivasha / Lewa / Samburu — Kilimanjaro, Hippos & Rhinos",
    category: "Safari",
    location: "Kenya (Multi-Region)",
    duration: "8 Days / 7 Nights",
    price: "$6,200",
    image: lakeNaivasha,
    overview: "First you see Kilimanjaro. Then you are on a boat with hippos. Then you enter Lewa — rhino kingdom. And finally Samburu — where warriors live. In 8 days you see the SOUTH and the NORTH of Kenya.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Amboseli", desc: "Drive to Amboseli. See Kilimanjaro. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Amboseli", desc: "Morning drive. Elephants silhouetted against Kilimanjaro." },
      { day: "Day 3", title: "Amboseli to Naivasha", desc: "Drive to Naivasha. Boat Safari. Hippos! Crescent Island Walk." },
      { day: "Day 4", title: "Naivasha to Lewa", desc: "Drive to Lewa. Afternoon game drive. Rhinos!" },
      { day: "Day 5", title: "Full Day Lewa", desc: "Morning drive. Rhino tracking. 19:00 Night Game Drive INCLUDED." },
      { day: "Day 6", title: "Lewa to Samburu", desc: "Drive to Samburu. Afternoon game drive." },
      { day: "Day 7", title: "Full Day Samburu", desc: "Morning drive. Leopards in doum palms. Afternoon drive." },
      { day: "Day 8", title: "Samburu to Nairobi", desc: "Morning drive. Drive back to Nairobi. Drop by 17:00." }
    ],
    included: ["7 nights full board", "Park fees + Conservancy fees", "Guide", "Game drives", "Boat Safari", "Night Drive Lewa"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 8", "Maasai Village $25 pp"],
    faqs: [{ q: "Can I combine this with a beach?", a: "Yes, we can add Diani or Watamu for a few extra days." }]
  },
  {
    id: "kalepo-samburuland",
    title: "Kalepo Samburuland — Live With Warriors",
    category: "Luxury",
    location: "Samburuland",
    duration: "4 Days / 3 Nights",
    price: "$3,200",
    image: kalepo,
    isLuxury: true,
    overview: "Forget big hotels. Kalepo is 6 tents, owned by the Samburu people themselves. You sleep in a tent on the Ewaso Nyiro River, elephants walk past your tent at night, and in the morning a warrior wakes you with tea.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Kalepo", desc: "Drive to Samburuland. Arrive at Kalepo Camp. 16:00 Afternoon game drive. Special 5." },
      { day: "Day 2", title: "Full Day Kalepo", desc: "Morning drive. Walking Safari with Samburu Warrior. 19:00 Night Game Drive INCLUDED." },
      { day: "Day 3", title: "Samburu National Reserve", desc: "Morning drive to Samburu Reserve. Full day game drive. Picnic lunch." },
      { day: "Day 4", title: "Kalepo to Nairobi", desc: "Morning walk. Drive back to Nairobi. Drop by 17:00." }
    ],
    included: ["3 nights full board at Kalepo", "Park fees + Conservancy fees", "Samburu Guide", "Game drives", "Night Drive", "Walking Safari", "Samburu Village Visit"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 4", "Camel Walk $40 pp"],
    faqs: [{ q: "Is Kalepo community-owned?", a: "Yes, all proceeds go directly to the Samburu community." }]
  },
  {
    id: "meru-samburu-lewa",
    title: "Meru / Samburu / Lewa — Where Elsa Was Born",
    category: "Safari",
    location: "Meru, Samburu & Lewa",
    duration: "6 Days / 5 Nights",
    price: "$4,800",
    image: meru,
    overview: "First you walk where Elsa the lioness was born. Then you enter Samburu — warriors in red, animals that exist nowhere else. Then you finish in Lewa — rhino kingdom. Three parks, three legends.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Meru", desc: "Drive to Meru. Arrive at Elsa's Kopje. Afternoon game drive. Visit Elsa's grave." },
      { day: "Day 2", title: "Meru to Samburu", desc: "Drive to Samburu. Afternoon game drive. Special 5." },
      { day: "Day 3", title: "Full Day Samburu", desc: "Morning drive. Leopards in doum palms. Afternoon drive." },
      { day: "Day 4", title: "Samburu to Lewa", desc: "Drive to Lewa. Afternoon game drive. Rhinos!" },
      { day: "Day 5", title: "Full Day Lewa", desc: "Morning drive. Rhino tracking. 19:00 Night Game Drive INCLUDED." },
      { day: "Day 6", title: "Lewa to Nairobi", desc: "Morning drive. Drive back to Nairobi. Drop by 17:00." }
    ],
    included: ["5 nights full board", "Park fees + Conservancy fees", "Guide", "Game drives", "Night Drive Lewa"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 6", "Samburu Village $25 pp"],
    faqs: [{ q: "Can I see Elsa's grave?", a: "Yes, it is located inside Meru National Park." }]
  },
  {
    id: "tsavo-east-west",
    title: "Tsavo East / Tsavo West — Red Elephants & Man-Eaters",
    category: "Safari",
    location: "Tsavo",
    duration: "5 Days / 4 Nights",
    price: "$4,500",
    image: tsavoEast,
    overview: "Tsavo is BIG. Elephants here are RED — they roll in red dust and become red giants. Lions here are the famous Man-Eaters of Tsavo. This is wild, raw, real Africa.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Tsavo East", desc: "Drive to Tsavo East. Arrive at Ashnil Aruba. Afternoon game drive. Red elephants!" },
      { day: "Day 2", title: "Full Day Tsavo East", desc: "Morning drive. Galana River. Lugard Falls. Afternoon drive." },
      { day: "Day 3", title: "Tsavo East to Tsavo West", desc: "Drive to Tsavo West. Arrive at Soroi Lion's Bluff. Afternoon game drive." },
      { day: "Day 4", title: "Full Day Tsavo West", desc: "Morning drive. Mzima Springs. Shetani Lava Flows. Afternoon drive." },
      { day: "Day 5", title: "Tsavo West to Nairobi", desc: "Morning drive. Drive back to Nairobi. Drop by 17:00." }
    ],
    included: ["4 nights full board", "Park fees + Conservancy fees", "Guide", "Game drives", "Mzima Springs Visit"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 5"],
    faqs: [{ q: "Are the elephants really red?", a: "Yes, they dust themselves with the red soil of Tsavo." }]
  },
  {
    id: "tsavo-west-saltlick-amboseli",
    title: "Tsavo West / Salt Lick / Amboseli — Sleep Over A Waterhole",
    category: "Safari",
    location: "Tsavo, Taita Hills & Amboseli",
    duration: "5 Days / 4 Nights",
    price: "$4,200",
    image: saltslick,
    isLuxury: true,
    overview: "First you see Mzima Springs. Then you sleep at Salt Lick — a lodge on STILTS over a waterhole, elephants come to drink UNDER your room. Then you finish in Amboseli — Kilimanjaro, snow, elephants.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Tsavo West", desc: "Drive to Tsavo West. Arrive at Kilaguni Serena. Afternoon game drive." },
      { day: "Day 2", title: "Tsavo West to Salt Lick", desc: "Morning drive. Mzima Springs. Drive to Taita Hills. Arrive at Salt Lick. Watch elephants from your room." },
      { day: "Day 3", title: "Salt Lick to Amboseli", desc: "Drive to Amboseli. Afternoon game drive. Kilimanjaro views." },
      { day: "Day 4", title: "Full Day Amboseli", desc: "Morning drive. Elephants silhouetted against Kilimanjaro. Afternoon drive." },
      { day: "Day 5", title: "Amboseli to Nairobi", desc: "Morning drive. Drive back to Nairobi. Drop by 15:00." }
    ],
    included: ["4 nights full board", "Park fees + Conservancy fees", "Guide", "Game drives", "Mzima Springs Visit"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 5", "Maasai Village $25 pp"],
    faqs: [{ q: "Can I see animals from my room at Salt Lick?", a: "Yes, all rooms overlook the floodlit waterhole." }]
  },
  {
    id: "mara-greatest-show",
    title: "Maasai Mara — The Greatest Show On Earth In 3 Days",
    category: "Safari",
    location: "Maasai Mara",
    duration: "3 Days / 2 Nights",
    price: "$2,600",
    image: maraSerena,
    isBestseller: true,
    overview: "You have seen it on TV. Now you are going to see it with YOUR eyes. In 3 days you will see more animals than most people see in a lifetime. This is the greatest wildlife show on earth.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Maasai Mara", desc: "Drive to Mara via Great Rift Valley Viewpoint. Arrive at Mara Serena. 16:00 Afternoon game drive. Sundowner." },
      { day: "Day 2", title: "Full Day Maasai Mara", desc: "05:45 Wake up. Morning drive. Mara River. Migration (July-Oct). Afternoon drive. Maasai Village." },
      { day: "Day 3", title: "Maasai Mara to Nairobi", desc: "Morning drive. Drive back to Nairobi. Drop by 17:00." }
    ],
    included: ["2 nights full board", "Park fees", "Guide", "Game drives"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 3", "Maasai Village $25 pp", "Balloon $450 pp"],
    faqs: [{ q: "Can I do a balloon safari?", a: "Yes, it can be arranged for $450 pp." }]
  },
  {
    id: "nakuru-mara-amboseli",
    title: "Lake Nakuru / Maasai Mara / Amboseli — Flamingos, Lions & Kilimanjaro",
    category: "Safari",
    location: "Nakuru, Mara & Amboseli",
    duration: "6 Days / 5 Nights",
    price: "$4,500",
    image: lakeNakuru,
    overview: "First you see a lake PINK with flamingos. Then you see the Mara — lions, wildebeest, river crossings. Then you see Kilimanjaro — snow, elephants. Three parks, three wonders.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Lake Nakuru", desc: "Drive to Nakuru. Arrive at Sopa Lodge. Afternoon game drive. Flamingos." },
      { day: "Day 2", title: "Nakuru to Maasai Mara", desc: "Drive to Mara. Arrive at Mara Serena. Afternoon game drive." },
      { day: "Day 3", title: "Full Day Maasai Mara", desc: "Morning drive. Mara River. Afternoon drive." },
      { day: "Day 4", title: "Maasai Mara to Amboseli", desc: "Drive to Amboseli. Afternoon game drive. Kilimanjaro views." },
      { day: "Day 5", title: "Full Day Amboseli", desc: "Morning drive. Elephants silhouetted against Kilimanjaro. Afternoon drive." },
      { day: "Day 6", title: "Amboseli to Nairobi", desc: "Morning drive. Drive back to Nairobi. Drop by 15:00." }
    ],
    included: ["5 nights full board", "Park fees", "Guide", "Game drives"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 6", "Maasai Village $25 pp", "Balloon $450 pp"],
    faqs: [{ q: "Is the migration guaranteed?", a: "No, but July-October is the best time to try." }]
  },
  {
    id: "amboseli-kilimanjaro",
    title: "Amboseli — Wake Up To Kilimanjaro",
    category: "Safari",
    location: "Amboseli",
    duration: "3 Days / 2 Nights",
    price: "$2,300",
    image: amboseli,
    isFamily: true,
    overview: "You open your eyes. You look out your window. And there she is. Kilimanjaro. Huge. White. Floating in the sky like a dream. And in front of her, elephants.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Amboseli", desc: "Drive to Amboseli. Arrive at Serena. Afternoon game drive. Kilimanjaro views." },
      { day: "Day 2", title: "Full Day Amboseli", desc: "Morning drive. Elephants silhouetted against Kilimanjaro. Afternoon drive. Maasai Village." },
      { day: "Day 3", title: "Amboseli to Nairobi", desc: "Morning drive. Drive back to Nairobi. Drop by 15:00." }
    ],
    included: ["2 nights full board", "Park fees", "Guide", "Game drives"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 3", "Maasai Village $25 pp"],
    faqs: [{ q: "Is Kilimanjaro always visible?", a: "It is clearest in the early morning." }]
  },
  {
    id: "lengishu-private-house",
    title: "Lengishu Borana — Your Own Private House",
    category: "Luxury",
    location: "Borana Conservancy",
    duration: "4 Days / 3 Nights",
    price: "$6,500",
    image: lengishu,
    isLuxury: true,
    isFamily: true,
    overview: "At Lengishu, you get a whole house — 6 bedrooms, infinity pool, private chef cooking for you, private guide, private vehicle. This is not a safari. This is YOUR safari.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Borana", desc: "Fly or drive to Borana. Arrive at Lengishu House. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Borana", desc: "Morning horse riding or walking safari. Night game drive INCLUDED." },
      { day: "Day 3", title: "Lewa & Borana", desc: "Morning drive in Lewa. Lunch picnic." },
      { day: "Day 4", title: "Borana to Nairobi", desc: "Morning drive. Fly or drive back to Nairobi." }
    ],
    included: ["3 nights full board", "Private chef", "Private guide", "Private vehicle", "Conservancy fees", "Horse riding"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks"],
    faqs: [{ q: "How many people can stay?", a: "Up to 12 guests in 6 bedrooms." }]
  },
  {
    id: "loisaba-star-beds",
    title: "Elewana Loisaba — Sleep On A Star Bed",
    category: "Luxury",
    location: "Loisaba Conservancy",
    duration: "4 Days / 3 Nights",
    price: "$5,800",
    image: elewanaLoisaba,
    isLuxury: true,
    overview: "First you sleep in a luxury tent in Loisaba. Then on your last night, you sleep on a STAR BED — a bed on a wooden platform, in the middle of the bush, no roof, no walls. Just you and the Milky Way.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Loisaba", desc: "Fly or drive to Loisaba. Arrive at Tented Camp. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Loisaba", desc: "Morning drive. Rhino tracking. Walking Safari. Night Game Drive." },
      { day: "Day 3", title: "Star Beds", desc: "Afternoon drive to your Star Bed. Dinner under the stars. Sleep on the Star Bed." },
      { day: "Day 4", title: "Loisaba to Nairobi", desc: "Wake up on Star Bed. Drive or fly back to Nairobi." }
    ],
    included: ["3 nights full board", "Conservancy fees", "Guide", "Game drives", "Walking Safari", "Night Drive", "Star Beds Experience"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Flights $400 pp", "Horse Riding $80 pp"],
    faqs: [{ q: "Are Star Beds safe?", a: "Yes, they are on elevated platforms with a guide nearby." }]
  },
  {
    id: "olpejeta-aberdare-nakuru-mara-diani",
    title: "Ol Pejeta / Aberdare / Nakuru / Mara / Diani — From Last Rhinos To White Beach",
    category: "Safari",
    location: "Kenya (Multi-Region)",
    duration: "11 Days / 10 Nights",
    price: "$7,800",
    image: diani,
    isLuxury: true,
    overview: "First you meet the LAST 2 Northern White Rhinos on earth. Then you sleep in a tree hotel. Then a pink lake full of flamingos. Then the Mara. Then you fly to Diani — white sand, turquoise sea. The trip of a lifetime.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Ol Pejeta", desc: "Drive to Ol Pejeta. Meet Najin and Fatu. Chimpanzee Sanctuary." },
      { day: "Day 2", title: "Full Day Ol Pejeta", desc: "Morning drive. Big 5. Night Game Drive." },
      { day: "Day 3", title: "Ol Pejeta to Aberdare", desc: "Drive to Aberdare. Arrive at The Ark." },
      { day: "Day 4", title: "Aberdare to Lake Nakuru", desc: "Drive to Nakuru. Pink lake. Rhinos." },
      { day: "Day 5", title: "Nakuru to Maasai Mara", desc: "Drive to Mara. Afternoon game drive." },
      { day: "Day 6", title: "Full Day Maasai Mara", desc: "Morning drive. Mara River. Afternoon drive." },
      { day: "Day 7", title: "Full Day Maasai Mara", desc: "Morning drive. Sundowner." },
      { day: "Day 8", title: "Mara to Diani (Flight)", desc: "Flight to Diani. Afternoon swim." },
      { day: "Day 9", title: "Full Day Diani", desc: "Wasini Dhow Safari. Dolphins. Snorkeling." },
      { day: "Day 10", title: "Diani", desc: "Beach day. Spa." },
      { day: "Day 11", title: "Diani to Nairobi", desc: "Morning swim. Flight back to Nairobi." }
    ],
    included: ["10 nights full board (safari) + half board (Diani)", "Park fees", "Guide", "Game drives", "Night Drive Ol Pejeta", "Wasini Dhow"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Flight Mara → Diani"],
    faqs: [{ q: "Can I add more days in Diani?", a: "Yes, we can customize the length of your beach stay." }]
  },
  {
    id: "lewa-samburu",
    title: "Lewa / Samburu — Rhinos, Warriors & Animals You Can't See Anywhere Else",
    category: "Safari",
    location: "Lewa & Samburu",
    duration: "5 Days / 4 Nights",
    price: "$4,300",
    image: lewa,
    isLuxury: true,
    overview: "First you enter Lewa — rhino kingdom. Then you enter Samburu — warrior land. Two parks, next to each other, totally different worlds. This is the north.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Lewa", desc: "Drive to Lewa. Afternoon game drive. Rhinos!" },
      { day: "Day 2", title: "Full Day Lewa", desc: "Morning drive. Rhino tracking. Night Game Drive INCLUDED." },
      { day: "Day 3", title: "Lewa to Samburu", desc: "Drive to Samburu. Afternoon game drive. Special 5." },
      { day: "Day 4", title: "Full Day Samburu", desc: "Morning drive. Leopards. Afternoon drive." },
      { day: "Day 5", title: "Samburu to Nairobi", desc: "Morning drive. Drive back to Nairobi. Drop by 17:00." }
    ],
    included: ["4 nights full board", "Park fees + Conservancy fees", "Guide", "Game drives", "Night Drive Lewa"],
    excluded: ["eTA $30-35", "Intl flights", "Insurance", "Tips", "Premium drinks", "Lunch Day 5", "Samburu Village $25 pp"],
    faqs: [{ q: "What is the Special Five?", a: "Grevy's zebra, reticulated giraffe, gerenuk, Somali ostrich, and Beisa oryx." }]
  },

  // ─────────────────────────────────────────────────────────────────────
  // THE LODGES & CAMPS (The 26 files you pasted)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "treetops-lodge",
    title: "The Treetops Lodge — A Royal Heritage",
    category: "Safari",
    location: "Aberdare National Park",
    duration: "2 Days / 1 Night",
    price: "$650",
    image: treeTops,
    overview: "The Treetops Lodge is a historic forest lodge elevated on stilts, overlooking a waterhole and salt lick. It is internationally recognised for its royal history. In 1952, Princess Elizabeth was staying at Treetops when she learned of the death of her father, King George VI, and subsequently became Queen Elizabeth II.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Aberdare", desc: "Drive to Aberdare. Arrive at Treetops. Lunch. Spend the afternoon watching wildlife from the viewing decks. Night viewing from the floodlit waterhole. Wildlife alert service when animals arrive." },
      { day: "Day 2", title: "Aberdare to Nairobi", desc: "Morning game drive or nature walk. Breakfast. Drive back to Nairobi." }
    ],
    included: ["1 night full board", "Park fees", "Game drives", "Guided nature walk", "Wildlife alert service"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Guided excursions"],
    faqs: [{ q: "Is there a dress code?", a: "Smart casual is recommended for dinner." }]
  },
  {
    id: "aa-lodge-mara",
    title: "AA Lodge Maasai Mara — Your Gateway to the Wild",
    category: "Safari",
    location: "Sekenani, Maasai Mara",
    duration: "3 Days / 2 Nights",
    price: "$890",
    image: agamara,
    isFamily: true,
    overview: "AA Lodge Maasai Mara is a safari lodge situated in the Sekenani area, near the main entrance to the Maasai Mara National Reserve. The lodge offers a convenient base for travellers exploring the reserve's remarkable wildlife and open grasslands.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Maasai Mara", desc: "Drive to Maasai Mara. Arrive at AA Lodge. Lunch. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Maasai Mara", desc: "Morning and afternoon game drives. Optional Maasai cultural visit." },
      { day: "Day 3", title: "Maasai Mara to Nairobi", desc: "Morning game drive. Breakfast. Drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Park fees", "Game drives", "Guide"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Cultural visits"],
    faqs: [{ q: "Is there a pool?", a: "Yes, the lodge has an outdoor swimming pool." }]
  },
  {
    id: "fairmont-mara",
    title: "Fairmont Mara Safari Club — Exceptional Luxury",
    category: "Luxury",
    location: "Maasai Mara",
    duration: "3 Days / 2 Nights",
    price: "$2,600",
    image: fairmont,
    isLuxury: true,
    overview: "Fairmont Mara Safari Club is a luxury tented safari retreat in the northwestern Maasai Mara region, set beside the Mara River. The lodge blends traditional safari character with modern comfort. Its riverside location provides opportunities to see hippos and crocodiles.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Maasai Mara", desc: "Fly or drive to Maasai Mara. Arrive at Fairmont. Lunch. Afternoon game drive. Sundowner." },
      { day: "Day 2", title: "Full Day Maasai Mara", desc: "Morning and afternoon game drives. Riverside wildlife viewing. Optional balloon safari." },
      { day: "Day 3", title: "Maasai Mara to Nairobi", desc: "Morning game drive. Breakfast. Fly or drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Park fees", "Game drives", "Guide"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Balloon safari"],
    faqs: [{ q: "Are there hippos in the river?", a: "Yes, hippos and crocodiles can be seen from the lodge's viewing areas." }]
  },
  {
    id: "salt-lick",
    title: "Salt Lick Safari Lodge — Sleep Over A Waterhole",
    category: "Luxury",
    location: "Taita Hills",
    duration: "3 Days / 2 Nights",
    price: "$750",
    image: saltslick,
    isLuxury: true,
    overview: "Salt Lick Safari Lodge is a distinctive luxury safari lodge located within the Taita Hills Wildlife Sanctuary. Famous for its elevated architecture, interconnected walkways and exceptional wildlife-viewing opportunities. Elephants come to drink UNDER your room.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Taita Hills", desc: "Drive to Taita Hills. Arrive at Salt Lick. Lunch. Afternoon game drive in the sanctuary. Night viewing from the floodlit waterhole." },
      { day: "Day 2", title: "Full Day Taita Hills", desc: "Morning and afternoon game drives. Visit Mzima Springs (optional)." },
      { day: "Day 3", title: "Taita Hills to Nairobi", desc: "Morning game drive. Breakfast. Drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Sanctuary fees", "Game drives", "Wildlife-viewing tunnel"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Spa treatments", "Excursions"],
    faqs: [{ q: "Can I see animals from my room?", a: "Yes, all rooms are elevated and overlook the waterhole." }]
  },
  {
    id: "lake-naivasha-simba",
    title: "Lake Naivasha Simba Lodge — Lakeside Retreat",
    category: "City",
    location: "Naivasha",
    duration: "2 Days / 1 Night",
    price: "$350",
    image: lakeNaivasha,
    isFamily: true,
    overview: "Lake Naivasha Simba Lodge is a welcoming lakeside lodge located along Moi South Lake Road in Naivasha. Set amid landscaped gardens and natural surroundings near Lake Naivasha. Guests may spot zebras and waterbucks around the grounds.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Naivasha", desc: "Drive to Naivasha. Arrive at Simba Lodge. Lunch. Boat safari on the lake. Visit Crescent Island for a walking safari." },
      { day: "Day 2", title: "Naivasha to Nairobi", desc: "Morning at leisure. Optional visit to Hell's Gate. Drive back to Nairobi." }
    ],
    included: ["1 night full board", "Boat safari", "Crescent Island entry"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Hell's Gate entry"],
    faqs: [{ q: "Can I walk with animals?", a: "Yes, Crescent Island offers a unique walking safari among giraffes and zebras." }]
  },
  {
    id: "sweetwaters",
    title: "Sweetwaters Serena Camp — Ol Pejeta",
    category: "Luxury",
    location: "Ol Pejeta",
    duration: "3 Days / 2 Nights",
    price: "$1,500",
    image: olpejeta,
    isLuxury: true,
    overview: "Sweetwaters Serena Camp is an elegant tented safari camp situated within the renowned Ol Pejeta Conservancy. Set against the spectacular backdrop of Mount Kenya. Internationally recognised for its conservation work, including the protection of endangered rhinos and the care of the world's last two northern white rhinos.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Ol Pejeta", desc: "Drive to Ol Pejeta. Arrive at Sweetwaters. Lunch. Afternoon game drive. Visit the Chimpanzee Sanctuary." },
      { day: "Day 2", title: "Full Day Ol Pejeta", desc: "Morning and afternoon game drives. Visit the Endangered Species Boma to see the last two northern white rhinos." },
      { day: "Day 3", title: "Ol Pejeta to Nairobi", desc: "Morning game drive. Breakfast. Drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Conservancy fees", "Game drives", "Chimpanzee Sanctuary entry"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks"],
    faqs: [{ q: "Can I see the northern white rhinos?", a: "Yes, you can visit them in their protected enclosure." }]
  },
  {
    id: "napa-mara",
    title: "NAPA Mara — Exclusive Luxury Sanctuary",
    category: "Luxury",
    location: "Talek, Maasai Mara",
    duration: "4 Days / 3 Nights",
    price: "$3,200",
    image: napaMara,
    isLuxury: true,
    overview: "NAPA Mara is a luxury safari retreat located near Talek. Designed around privacy, nature and personalised hospitality. Its architectural style incorporates natural materials, canvas and traditional thatched elements. Particularly suited to honeymooners, couples, families and discerning travellers.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to NAPA Mara", desc: "Fly or drive to NAPA Mara. Arrive at your suite. Afternoon game drive. Sundowner." },
      { day: "Day 2", title: "Full Day NAPA Mara", desc: "Morning and afternoon game drives. Optional Maasai cultural experience." },
      { day: "Day 3", title: "Full Day NAPA Mara", desc: "Morning game drive. Relax in your private plunge pool." },
      { day: "Day 4", title: "NAPA Mara to Nairobi", desc: "Morning game drive. Breakfast. Fly or drive back to Nairobi." }
    ],
    included: ["3 nights full board", "Game drives", "Guide", "Private deck"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Spa treatments"],
    faqs: [{ q: "Does NAPA Mara have private pools?", a: "Yes, selected suites feature private plunge pools." }]
  },
  {
    id: "mahali-mzuri",
    title: "Mahali Mzuri — Virgin Limited Edition",
    category: "Luxury",
    location: "Olare Motorogi Conservancy",
    duration: "4 Days / 3 Nights",
    price: "$4,800",
    image: muhari,
    isLuxury: true,
    overview: "Mahali Mzuri is an exclusive luxury safari camp located within the Olare Motorogi Conservancy. Part of Virgin Limited Edition. The camp is set on a hillside overlooking a lush valley and expansive savannah plains. Offers an exceptional experience for luxury travellers seeking privacy and outstanding wildlife viewing.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Mahali Mzuri", desc: "Fly to Olare Orok Airstrip. Transfer to camp. Afternoon game drive. Sundowner." },
      { day: "Day 2", title: "Full Day Mahali Mzuri", desc: "Morning and afternoon game drives. Night game drive. Spa treatment." },
      { day: "Day 3", title: "Full Day Mahali Mzuri", desc: "Morning walking safari. Afternoon game drive. Bush dinner." },
      { day: "Day 4", title: "Mahali Mzuri to Nairobi", desc: "Morning game drive. Breakfast. Fly back to Nairobi." }
    ],
    included: ["3 nights full board", "Conservancy fees", "Game drives", "Night game drives", "Walking safaris", "Laundry", "Transfers"],
    excluded: ["Flights", "Insurance", "Tips", "Premium drinks", "Spa treatments"],
    faqs: [{ q: "Is Mahali Mzuri part of Virgin?", a: "Yes, it is part of Virgin Limited Edition." }]
  },
  {
    id: "porini-rhino",
    title: "Porini Rhino Camp — Intimate Eco-Safari",
    category: "Safari",
    location: "Ol Pejeta",
    duration: "3 Days / 2 Nights",
    price: "$2,000",
    image: poriniRhino,
    overview: "Porini Rhino Camp is an intimate eco-friendly safari camp located within Ol Pejeta Conservancy. Offers a peaceful wilderness setting. Combines traditional tented safari accommodation with low-impact tourism, experienced local guides and conservation-focused experiences.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Porini", desc: "Drive to Ol Pejeta. Arrive at Porini Rhino Camp. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Porini", desc: "Morning game drive. Bush walk. Afternoon game drive. Night game drive." },
      { day: "Day 3", title: "Porini to Nairobi", desc: "Morning game drive. Breakfast. Drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Conservancy fees", "Game drives", "Night game drives", "Walking safaris"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks"],
    faqs: [{ q: "Is Porini eco-friendly?", a: "Yes, it is designed to minimise its environmental footprint." }]
  },
  {
    id: "kalepo",
    title: "Kalepo Camp — Samburuland",
    category: "Luxury",
    location: "Samburuland",
    duration: "4 Days / 3 Nights",
    price: "$3,200",
    image: kalepo,
    isLuxury: true,
    overview: "Kalepo Camp is a family-owned luxury tented safari camp located within Kalepo Community Conservancy in Samburuland. Set along a seasonal riverbed beneath ancient acacia trees. Places community, conservation and cultural discovery at the heart of the guest experience.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Kalepo", desc: "Drive to Samburuland. Arrive at Kalepo. Afternoon game drive. Special 5." },
      { day: "Day 2", title: "Full Day Kalepo", desc: "Morning drive. Walking Safari with Samburu Warrior. Night Game Drive." },
      { day: "Day 3", title: "Samburu National Reserve", desc: "Morning drive to Samburu Reserve. Full day game drive." },
      { day: "Day 4", title: "Kalepo to Nairobi", desc: "Morning walk. Drive back to Nairobi." }
    ],
    included: ["3 nights full board at Kalepo", "Park fees", "Samburu Guide", "Game drives", "Night Drive", "Walking Safari", "Samburu Village Visit"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Camel Walk"],
    faqs: [{ q: "Is Kalepo community-owned?", a: "Yes, all proceeds go directly to the Samburu community." }]
  },
  {
    id: "elewana-loisaba",
    title: "Elewana Loisaba Tented Camp — Star Beds",
    category: "Luxury",
    location: "Loisaba Conservancy",
    duration: "4 Days / 3 Nights",
    price: "$5,800",
    image: elewanaLoisaba,
    isLuxury: true,
    overview: "Elewana Loisaba Tented Camp is a luxury safari camp situated within Loisaba Conservancy. Perched on an escarpment, with breathtaking views of Mount Kenya. The conservancy is home to elephants, lions, leopards, cheetahs, African wild dogs, Grevy's zebras, reticulated giraffes.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Loisaba", desc: "Fly or drive to Loisaba. Arrive at Tented Camp. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Loisaba", desc: "Morning drive. Rhino tracking. Walking Safari. Night Game Drive." },
      { day: "Day 3", title: "Star Beds", desc: "Afternoon drive to your Star Bed. Dinner under the stars." },
      { day: "Day 4", title: "Loisaba to Nairobi", desc: "Wake up on Star Bed. Drive or fly back to Nairobi." }
    ],
    included: ["3 nights full board", "Conservancy fees", "Guide", "Game drives", "Walking Safari", "Night Drive", "Star Beds Experience"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Horse Riding"],
    faqs: [{ q: "Are Star Beds safe?", a: "Yes, they are on elevated platforms with a guide nearby." }]
  },
  {
    id: "lengishu",
    title: "Lengishu — Borana Conservancy",
    category: "Luxury",
    location: "Borana Conservancy",
    duration: "4 Days / 3 Nights",
    price: "$6,500",
    image: lengishu,
    isLuxury: true,
    isFamily: true,
    overview: "Lengishu is an exclusive-use luxury safari home situated in the heart of the 32,000-acre Borana Conservancy. Accommodates up to 12 guests across six stylish bedrooms. Offers a private chef, infinity swimming pool, private gym. Booked exclusively as a whole house.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Borana", desc: "Fly or drive to Borana. Arrive at Lengishu House. Afternoon game drive with your private guide." },
      { day: "Day 2", title: "Full Day Borana", desc: "Morning horse riding or walking safari. Afternoon game drive. Night drive." },
      { day: "Day 3", title: "Lewa & Borana", desc: "Morning drive in Lewa. Lunch picnic." },
      { day: "Day 4", title: "Borana to Nairobi", desc: "Morning game drive. Breakfast. Fly or drive back to Nairobi." }
    ],
    included: ["3 nights full board", "Private chef", "Private guide", "Private vehicle", "Conservancy fees", "Horse riding"],
    excluded: ["Flights", "Insurance", "Tips", "Premium drinks"],
    faqs: [{ q: "How many people can stay at Lengishu?", a: "Up to 12 guests in 6 bedrooms." }]
  },
  {
    id: "surana-buffalo-springs",
    title: "Surana Buffalo Springs — Samburu",
    category: "Luxury",
    location: "Buffalo Springs, Samburu",
    duration: "3 Days / 2 Nights",
    price: "$2,500",
    image: surana,
    isLuxury: true,
    overview: "Surana Buffalo Springs is an exclusive luxury safari camp located on elevated ground overlooking the Ewaso Nyiro River valley. Features 17 luxury tented suites, each with a private plunge pool, spacious lounge area, and private deck with sweeping views.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Surana", desc: "Fly or drive to Buffalo Springs. Arrive at Surana. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Surana", desc: "Morning game drive. Walking safari. Afternoon game drive." },
      { day: "Day 3", title: "Surana to Nairobi", desc: "Morning game drive. Breakfast. Fly or drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Reserve fees", "Game drives", "Walking safaris"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Spa treatments"],
    faqs: [{ q: "Do all rooms have private pools?", a: "Yes, every tented suite has a private plunge pool." }]
  },
  {
    id: "soroi-larsens",
    title: "Soroi Larsens Camp — Samburu",
    category: "Luxury",
    location: "Samburu National Reserve",
    duration: "3 Days / 2 Nights",
    price: "$1,800",
    image: soroi,
    isLuxury: true,
    overview: "Soroi Larsens Camp is an exclusive luxury tented camp set along the banks of the Ewaso Nyiro River in Samburu. Features 12 river-facing luxury tents, two two-bedroom family units and two deluxe tented suites. Offers a photography hide and star beds.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Samburu", desc: "Fly or drive to Samburu. Arrive at Soroi Larsens. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Samburu", desc: "Morning and afternoon game drives. Samburu cultural visit. Star bed experience." },
      { day: "Day 3", title: "Samburu to Nairobi", desc: "Morning game drive. Breakfast. Fly or drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Reserve fees", "Game drives", "Samburu cultural visit", "Star bed experience"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Spa treatments"],
    faqs: [{ q: "Do they have star beds?", a: "Yes, the deluxe suites feature star beds." }]
  },
  {
    id: "oldarpoi-mara",
    title: "Oldarpoi Mara Camp — Community-Led Safari",
    category: "Safari",
    location: "Nashulai Conservancy, Maasai Mara",
    duration: "3 Days / 2 Nights",
    price: "$1,200",
    image: oldarpoi,
    isFamily: true,
    overview: "Oldarpoi Mara Camp is set within the Nashulai Maasai Conservancy near the Maasai Mara National Reserve. A safari experience shaped and managed by the local Maasai community. Wildlife encounters go hand in hand with cultural connection and conservation.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Oldarpoi", desc: "Drive to Maasai Mara. Arrive at Oldarpoi. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Oldarpoi", desc: "Morning and afternoon game drives. Maasai cultural visit." },
      { day: "Day 3", title: "Oldarpoi to Nairobi", desc: "Morning game drive. Breakfast. Drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Conservancy fees", "Game drives", "Maasai cultural visit"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Balloon safari"],
    faqs: [{ q: "Is Oldarpoi community-owned?", a: "Yes, revenue supports local education and conservation." }]
  },
  {
    id: "maisha-sweetwaters",
    title: "Maisha Sweetwaters Camp — Ol Pejeta",
    category: "Safari",
    location: "Ol Pejeta",
    duration: "2 Days / 1 Night",
    price: "$950",
    image: maasaiMara,
    isFamily: true,
    overview: "Maisha Sweetwaters Camp is a luxury tented camp located along the Nanyuki–Marura Road near Ol Pejeta Conservancy. Features approximately 70 self-contained tents, including Standard and Morani options. Heated swimming pool, spa, and family-friendly amenities.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Ol Pejeta", desc: "Drive to Ol Pejeta. Arrive at Maisha. Afternoon game drive. Visit Chimpanzee Sanctuary." },
      { day: "Day 2", title: "Ol Pejeta to Nairobi", desc: "Morning game drive. Breakfast. Drive back to Nairobi." }
    ],
    included: ["1 night full board", "Conservancy fees", "Game drives", "Chimpanzee Sanctuary"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Spa treatments"],
    faqs: [{ q: "Is there a heated pool?", a: "Yes, the camp has a heated swimming pool." }]
  },
  {
    id: "olkupelia-mara",
    title: "Olkupelia Mara — Luxury Boutique Camp",
    category: "Luxury",
    location: "Talek River, Maasai Mara",
    duration: "3 Days / 2 Nights",
    price: "$3,500",
    image: olkupelia,
    isLuxury: true,
    overview: "Olkupelia Mara is a luxury boutique tented camp situated along the Talek River. Combines the natural beauty of the Mara with contemporary luxury, personalised hospitality and a strong focus on wellness. Features spacious river-view suites and two heated swimming pools.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Olkupelia", desc: "Fly or drive to Maasai Mara. Arrive at Olkupelia. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Olkupelia", desc: "Morning game drive. Wellness spa. Afternoon game drive." },
      { day: "Day 3", title: "Olkupelia to Nairobi", desc: "Morning game drive. Breakfast. Fly or drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Park fees", "Game drives", "Spa access"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Spa treatments"],
    faqs: [{ q: "Does Olkupelia have a spa?", a: "Yes, there is a wellness spa and gym on site." }]
  },
  {
    id: "mara-sweet-acacia",
    title: "Mara Sweet Acacia Lodge — Talek River",
    category: "Safari",
    location: "Talek River, Maasai Mara",
    duration: "3 Days / 2 Nights",
    price: "$1,500",
    image: maraSweet,
    isFamily: true,
    overview: "Mara Sweet Acacia Lodge is situated along the Talek River. Offers a comfortable safari base surrounded by the Mara's natural landscapes. Features a tree-top bar, a hanging bridge across the Talek River and a riverside dining area.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Mara", desc: "Drive to Maasai Mara. Arrive at Sweet Acacia. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Mara", desc: "Morning and afternoon game drives. Optional Maasai cultural visit." },
      { day: "Day 3", title: "Mara to Nairobi", desc: "Morning game drive. Breakfast. Drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Park fees", "Game drives"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Cultural visits"],
    faqs: [{ q: "Is there a pool?", a: "Yes, the lodge has a swimming pool and spa." }]
  },
  {
    id: "hemingways-nairobi",
    title: "Hemingways Nairobi — Luxury in Karen",
    category: "City",
    location: "Karen, Nairobi",
    duration: "1 Day / 1 Night",
    price: "$550",
    image: hemingways,
    isLuxury: true,
    overview: "Hemingways Nairobi is a luxury boutique hotel located in the leafy suburb of Karen. Surrounded by landscaped gardens and overlooking the Ngong Hills. Features 45 spacious suites, butler service, heated outdoor pool, and a luxury spa.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Relaxation", desc: "Arrive at JKIA. Transfer to Hemingways. Relax by the heated pool. Dinner at The Brasserie." }
    ],
    included: ["1 night bed & breakfast", "Airport transfers"],
    excluded: ["Flights", "Insurance", "Tips", "Lunch & Dinner"],
    faqs: [{ q: "How far is the hotel from the airport?", a: "Approximately 35-40 minutes from JKIA." }]
  },
  {
    id: "enashipai",
    title: "Enashipai Resort & Spa — Lake Naivasha",
    category: "Luxury",
    location: "Naivasha",
    duration: "2 Days / 1 Night",
    price: "$600",
    image: enashipai,
    isLuxury: true,
    isFamily: true,
    overview: "Enashipai Resort & Spa is a luxury resort on the shores of Lake Naivasha. The name Enashipai means 'a place of happiness' in Maasai. Offers a combination of leisure, wellness, dining, cultural experiences and modern hospitality. Heated pool, spa, and farm-to-table dining.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Naivasha", desc: "Drive to Naivasha. Arrive at Enashipai. Lunch. Spa treatment or swim in the heated pool." },
      { day: "Day 2", title: "Naivasha to Nairobi", desc: "Morning boat safari. Breakfast. Drive back to Nairobi." }
    ],
    included: ["1 night full board", "Boat safari", "Use of spa and pool"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Additional spa treatments"],
    faqs: [{ q: "Is the pool heated?", a: "Yes, the resort has a heated swimming pool." }]
  },
  {
    id: "sarova-whitesands",
    title: "Sarova Whitesands Beach Resort & Spa — Mombasa",
    category: "Beach",
    location: "Bamburi Beach, Mombasa",
    duration: "5 Days / 4 Nights",
    price: "$1,400",
    image: sarovaWhite,
    isFamily: true,
    overview: "Sarova Whitesands Beach Resort & Spa is a luxury beachfront resort situated along Bamburi Beach on the North Coast of Mombasa. Offers an inviting blend of coastal relaxation, Swahili-inspired architecture and modern hospitality. Five swimming pools, Tulia Spa, and Ozone Kids Club.",
    itinerary: [
      { day: "Day 1", title: "Arrival", desc: "Arrive at Moi International Airport. Transfer to Sarova Whitesands. Check in and relax." },
      { day: "Day 2", title: "Beach & Pool Day", desc: "Enjoy the five swimming pools, beach access, and Ozone Kids Club." },
      { day: "Day 3", title: "Wasini Island Excursion", desc: "Dhow safari to Wasini Island. Snorkeling, seafood lunch, and dolphin watching." },
      { day: "Day 4", title: "Spa & Relaxation", desc: "Tulia Spa treatments. Beach walk. Farewell dinner." },
      { day: "Day 5", title: "Departure", desc: "Breakfast and transfer to the airport." }
    ],
    included: ["4 nights half board", "Airport transfers", "Use of pools and kids club"],
    excluded: ["Flights", "Insurance", "Tips", "Spa treatments", "Excursions"],
    faqs: [{ q: "Is the beach safe for swimming?", a: "Yes, the reef protects the beach." }]
  },
  {
    id: "mara-paran",
    title: "Mara Paran Camp — Tented Safari",
    category: "Safari",
    location: "Maasai Mara",
    duration: "3 Days / 2 Nights",
    price: "$1,100",
    image: maraParan,
    overview: "Mara Paran Camp is a tented safari accommodation located in the greater Maasai Mara region. A wilderness retreat that combines wildlife viewing, traditional Maasai hospitality and a comfortable stay close to the African savannah.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Mara", desc: "Drive to Maasai Mara. Arrive at Mara Paran. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Mara", desc: "Morning and afternoon game drives. Maasai cultural visit." },
      { day: "Day 3", title: "Mara to Nairobi", desc: "Morning game drive. Breakfast. Drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Park fees", "Game drives"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Cultural visits"],
    faqs: [{ q: "Is the camp inside the reserve?", a: "The camp is located in the greater Mara region, near the reserve." }]
  },
  {
    id: "mara-serena",
    title: "Mara Serena Safari Lodge — The Ultimate View",
    category: "Luxury",
    location: "Mara Triangle, Maasai Mara",
    duration: "3 Days / 2 Nights",
    price: "$2,600",
    image: maraSerena,
    isLuxury: true,
    overview: "Mara Serena Safari Lodge is a five-star safari lodge located on a bush-covered hill in the Mara Triangle. Offers sweeping views of the savannah plains and the Mara River. Architecture inspired by the traditional Maasai manyatta. Features a heated rock-enclosed pool overlooking the plains.",
    itinerary: [
      { day: "Day 1", title: "Arrival & First Game Drive", desc: "Arrive at Mara Serena, check in and enjoy lunch. 16:00 game drive in the Mara Triangle. Dinner under the stars." },
      { day: "Day 2", title: "Full Day Mara Triangle", desc: "Early morning game drive. Return for breakfast. Relax by the pool. Afternoon game drive. Optional Maasai village visit." },
      { day: "Day 3", title: "Morning Drive & Departure", desc: "One last sunrise game drive. Breakfast. Check out and transfer back to Nairobi." }
    ],
    included: ["2 nights full board", "Park fees", "Game drives", "Guide", "Bottled water"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Maasai Village"],
    faqs: [{ q: "Does the lodge have a pool?", a: "Yes, a beautiful rock-enclosed pool overlooking the plains." }]
  },
  {
    id: "lake-nakuru-lodge",
    title: "Lake Nakuru Lodge — In-Park Safari Stay",
    category: "Safari",
    location: "Lake Nakuru National Park",
    duration: "2 Days / 1 Night",
    price: "$450",
    image: lakeNakuru,
    overview: "Lake Nakuru Lodge is an eco-conscious safari lodge located inside Lake Nakuru National Park. Surrounded by acacia woodland and open grassland. Particularly well known for its populations of endangered black and white rhinoceroses, diverse birdlife, and Rothschild's giraffes.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Lake Nakuru", desc: "Drive to Nakuru. Arrive at Lake Nakuru Lodge. Lunch. Afternoon game drive. See the rhinos and flamingos." },
      { day: "Day 2", title: "Lake Nakuru to Nairobi", desc: "Morning game drive. Breakfast. Drive back to Nairobi." }
    ],
    included: ["1 night full board", "Park fees", "Game drives"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks"],
    faqs: [{ q: "Are the flamingos always there?", a: "Flamingo numbers vary with water levels." }]
  },
  {
    id: "elewana-sand-river",
    title: "Elewana Sand River Maasai Mara — 1920s Safari Style",
    category: "Luxury",
    location: "Maasai Mara",
    duration: "3 Days / 2 Nights",
    price: "$3,100",
    image: elewana,
    isLuxury: true,
    overview: "Elewana Sand River Maasai Mara is an exclusive luxury tented camp situated along the banks of the Sand River. Inspired by the elegance of 1920s safari expeditions. Features 16 tented accommodations. Separate dining and lounge areas, a restaurant, bar, swimming pool, and outdoor spaces.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Sand River", desc: "Fly to Keekorok Airstrip. Transfer to camp. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Sand River", desc: "Morning and afternoon game drives. Big Five sightings. Bush breakfast." },
      { day: "Day 3", title: "Sand River to Nairobi", desc: "Morning game drive. Breakfast. Fly back to Nairobi." }
    ],
    included: ["2 nights full board", "Park fees", "Game drives", "Guide"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Balloon safari"],
    faqs: [{ q: "Is the camp on a migration route?", a: "Yes, its location along the Sand River offers opportunities to witness wildlife activity." }]
  },
  {
    id: "mara-ntulele",
    title: "Mara Ntulele Camp — Glamping Retreat",
    category: "Safari",
    location: "Ololaimutia, Maasai Mara",
    duration: "3 Days / 2 Nights",
    price: "$1,100",
    image: maraNtulele,
    isFamily: true,
    overview: "Mara Ntulele Camp is set in the Ololaimutia area, just 2–3 km from Ololaimutia Gate. Offers a welcoming glamping-style retreat. Comfortable accommodation includes Standard Single Rooms, Superior Double Rooms, Classic Twin Rooms and Comfort Triple Rooms.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Mara", desc: "Drive to Maasai Mara. Arrive at Mara Ntulele. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Mara", desc: "Morning and afternoon game drives. Maasai cultural experiences." },
      { day: "Day 3", title: "Mara to Nairobi", desc: "Morning game drive. Breakfast. Drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Park fees", "Game drives"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks"],
    faqs: [{ q: "Is the camp near the gate?", a: "Yes, it is just 2-3 km from Ololaimutia Gate." }]
  },
  {
    id: "watamu-tree-house",
    title: "Watamu Tree House — Eco-Luxury in the Trees",
    category: "Beach",
    location: "Watamu",
    duration: "3 Days / 2 Nights",
    price: "$1,250",
    image: watamuTree,
    isLuxury: true,
    overview: "Watamu Tree House is a unique eco-friendly retreat built among the trees. It offers stunning ocean views and a peaceful atmosphere. A perfect place to disconnect and enjoy nature.",
    itinerary: [
      { day: "Day 1", title: "Arrival", desc: "Arrive at Watamu. Check into the Tree House. Relax on the beach." },
      { day: "Day 2", title: "Marine Park", desc: "Snorkeling in the marine park. Visit Mida Creek." },
      { day: "Day 3", title: "Departure", desc: "Morning at leisure. Transfer to the airport." }
    ],
    included: ["2 nights bed & breakfast", "Snorkeling trip"],
    excluded: ["Flights", "Insurance", "Tips", "Lunch & Dinner", "Marine Park fees"],
    faqs: [{ q: "Is the Tree House suitable for children?", a: "Yes, but children must be supervised." }]
  },
  {
    id: "chale-island",
    title: "Chale Island — Private Island Paradise",
    category: "Beach",
    location: "Diani",
    duration: "4 Days / 3 Nights",
    price: "$1,800",
    image: chaleIsland,
    isLuxury: true,
    overview: "Chale Island is a private island resort off the coast of Diani. It offers exclusive beaches, crystal-clear waters, and luxurious accommodation. A perfect honeymoon destination.",
    itinerary: [
      { day: "Day 1", title: "Arrival", desc: "Arrive at Chale Island. Check in and relax." },
      { day: "Day 2", title: "Water Sports", desc: "Snorkeling, kayaking, or simply relax on the beach." },
      { day: "Day 3", title: "Spa & Relaxation", desc: "Spa treatments. Beach dinner." },
      { day: "Day 4", title: "Departure", desc: "Morning swim. Transfer to the airport." }
    ],
    included: ["3 nights full board", "Transfers", "Water sports"],
    excluded: ["Flights", "Insurance", "Tips", "Premium drinks"],
    faqs: [{ q: "Is the island private?", a: "Yes, Chale Island is a private island resort." }]
  },
  {
    id: "ol-tukai",
    title: "Ol Tukai Lodge — Amboseli",
    category: "Luxury",
    location: "Amboseli",
    duration: "3 Days / 2 Nights",
    price: "$950",
    image: olTukai,
    isLuxury: true,
    overview: "Ol Tukai Lodge is a luxury lodge located in the heart of Amboseli National Park. Offers stunning views of Mount Kilimanjaro and is surrounded by elephant herds.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Amboseli", desc: "Drive to Amboseli. Arrive at Ol Tukai. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Amboseli", desc: "Morning drive. Elephants silhouetted against Kilimanjaro. Afternoon drive." },
      { day: "Day 3", title: "Amboseli to Nairobi", desc: "Morning drive. Drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Park fees", "Game drives"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks"],
    faqs: [{ q: "Does Ol Tukai have views of Kilimanjaro?", a: "Yes, the lodge offers excellent views of the mountain." }]
  },
  {
    id: "governors-camp",
    title: "Governors Camp — Maasai Mara",
    category: "Safari",
    location: "Maasai Mara",
    duration: "3 Days / 2 Nights",
    price: "$2,200",
    image: governors,
    overview: "Governors Camp is a historic safari camp in the Maasai Mara. Famous for its role in the film 'Out of Africa' and its prime location for wildlife viewing.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Mara", desc: "Drive to Maasai Mara. Arrive at Governors. Afternoon game drive." },
      { day: "Day 2", title: "Full Day Mara", desc: "Morning and afternoon game drives. Optional balloon safari." },
      { day: "Day 3", title: "Mara to Nairobi", desc: "Morning game drive. Breakfast. Drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Park fees", "Game drives"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks", "Balloon safari"],
    faqs: [{ q: "Is Governors Camp in the reserve?", a: "Yes, it is located inside the Maasai Mara National Reserve." }]
  },
  {
    id: "kilaguni-serena",
    title: "Kilaguni Serena — Tsavo West",
    category: "Luxury",
    location: "Tsavo West",
    duration: "3 Days / 2 Nights",
    price: "$750",
    image: kilaguni,
    isLuxury: true,
    overview: "Kilaguni Serena Safari Lodge is a luxury lodge in Tsavo West National Park. Overlooks a busy waterhole where elephants, buffaloes, and other wildlife come to drink.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Tsavo West", desc: "Drive to Tsavo West. Arrive at Kilaguni. Afternoon game drive. Visit Mzima Springs." },
      { day: "Day 2", title: "Full Day Tsavo West", desc: "Morning and afternoon game drives. Visit Shetani Lava Flows." },
      { day: "Day 3", title: "Tsavo West to Nairobi", desc: "Morning game drive. Breakfast. Drive back to Nairobi." }
    ],
    included: ["2 nights full board", "Park fees", "Game drives"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks"],
    faqs: [{ q: "Can I see animals from the lodge?", a: "Yes, the lodge overlooks a waterhole." }]
  },
  {
    id: "voi-safari-lodge",
    title: "Voi Safari Lodge — Tsavo East",
    category: "Safari",
    location: "Tsavo East",
    duration: "2 Days / 1 Night",
    price: "$450",
    image: voi,
    overview: "Voi Safari Lodge is a classic safari lodge in Tsavo East National Park. Built on a cliff overlooking a waterhole, offering excellent wildlife viewing opportunities.",
    itinerary: [
      { day: "Day 1", title: "Nairobi to Tsavo East", desc: "Drive to Tsavo East. Arrive at Voi. Afternoon game drive. Red elephants!" },
      { day: "Day 2", title: "Tsavo East to Nairobi", desc: "Morning game drive. Breakfast. Drive back to Nairobi." }
    ],
    included: ["1 night full board", "Park fees", "Game drives"],
    excluded: ["Flights", "Insurance", "Tips", "Drinks"],
    faqs: [{ q: "Are there red elephants?", a: "Yes, they dust themselves with the red soil of Tsavo." }]
  }
];

export const FEATURED_TOUR = TOURS_DATA[0];