export const user = {
  name: "Sweta Rani",
  avatar: "/images/avatar.png",
  coins: 245,
  tokens: 2456,
};

export const heroBanner = {
  title: "Be the Gamehok's Social Star",
  subtitle: "Earn rewards by levelling up your social game",
  stats: [
    { label: "Posts", value: 120 },
    { label: "Followers", value: 480 },
    { label: "Likes", value: 930 },
  ],
};

export const featuredTournaments = [
  {
    id: "1",
    title: "Crown Conquest",
    organizer: "GS Esports",
    organizerLogo: "/images/gs.jpg",
    banner: "/images/dominion.jpg",
    prizePool: 1000,
    totalSlots: 800,
    filledSlots: 670,
    progress: 670 / 800,
    game: "BGMI",
    mode: "Solo",
    entryFee: 10,
    isFree: false,
    status: "Registration Open",
    tags: ["BGMI", "Solo", "Entry-10"],
  },
  {
    id: "2",
    title: "Crown Clash",
    organizer: "Crown Esports",
    organizerLogo: "/images/gs.jpg",
    banner: "/images/dominion.jpg",
    prizePool: 1500,
    totalSlots: 800,
    filledSlots: 500,
    progress: 500 / 800,
    game: "BGMI",
    mode: "Solo",
    entryFee: 0,
    isFree: true,
    status: "Registration Open",
    tags: ["BGMI", "Solo", "Free"],
  },
  {
    id: "3",
    title: "Valorant Masters",
    organizer: "TMR Esports",
    organizerLogo: "/images/gs.jpg",
    banner: "/images/dominion.jpg",
    prizePool: 2000,
    totalSlots: 500,
    filledSlots: 320,
    progress: 320 / 500,
    game: "Valorant",
    mode: "Squad",
    entryFee: 20,
    isFree: false,
    status: "Registration Open",
    tags: ["Valorant", "Squad", "Entry-20"],
  },
];

export const games = [
  {
    id: "valorant",
    name: "VALORANT",
    image: "/images/valorant.jpg",
  },
  {
    id: "freefire",
    name: "FREEFIRE",
    image: "/images/freefire.png",
  },
  {
    id: "codmobile",
    name: "CALL OF DUTY",
    image: "/images/cod_mobile.png",
  },
  {
    id: "bgmi",
    name: "BGMI",
    image: "/images/bgmi.jpg",
  },
];

export const battles = [
  {
    id: "1",
    title: "GS Daily Scrims",
    organizer: "By GS Esports",
    organizerLogo: "/images/gs.jpg",
    description:
      "Play GS daily scrims and sharpen your skills for the bigger events",
  },
  {
    id: "2",
    title: "TMR Daily Scrims",
    organizer: "By TMR Esports",
    organizerLogo: "/images/tmr.png",
    description:
      "Play TMR daily scrims and sharpen your skills for the bigger events",
  },
];

export const gameHighlights = [
  {
    id: "1",
    title: "Call of Duty",
    thumbnail: "/images/cod.jpg",
    hasVideo: true,
  },
  {
    id: "2",
    title: "BGMI Tournaments",
    thumbnail: "/images/bgmi_tourn.jpg",
    hasVideo: false,
  },
  {
    id: "3",
    title: "Valorant Highlights",
    thumbnail: "/images/bgmi_tourn.jpg",
    hasVideo: false,
  },
];

export const tournamentDetail = {
  id: "1",
  title: "GS MONTHLY SHOWDOWN",
  organizer: "GS ESPORTS",
  organizerLogo: "/images/gs.jpg",
  organizerEmail: "[support@gsesports.com](mailto:support@gsesports.com)",
  banner: "/images/dominion.jpg",
  game: "BGMI",
  entryFee: 0,
  isFree: true,
  totalSlots: 800,
  filledSlots: 670,
  progress: 670 / 800,
  nextMatch: "2d 15h 10m",
  teamSize: "Solo",
  format: "Single Elimination",
  startDate: "Tue 24th Jan 2024, 01:00 PM",
  checkin: "10 mins before the match starts",
  prizePool: {
    total: 2000,
    prizes: [
      { position: "1st Prize", amount: 1000 },
      { position: "2nd Prize", amount: 500 },
      { position: "3rd Prize", amount: 200 },
    ],
  },
  rounds: [
    {
      name: "Round 1",
      type: "Single Elimination",
      date: "3rd Aug, 10:00 pm",
      advance: "Top 4 to next round",
    },
    {
      name: "Quarter Finals",
      type: "Single Elimination",
      date: "4th Aug, 10:00 pm",
      advance: "Top 4 to next round",
    },
    {
      name: "Semi Finals",
      type: "Single Elimination",
      date: "5th Aug, 10:00 pm",
      advance: "Top 2 to finals",
    },
    {
      name: "Final",
      type: "Single Elimination",
      date: "6th Aug, 10:00 pm",
      advance: "Winner takes all",
    },
  ],
  howToJoin: [
    "Have your game open already and on the latest version",
    "Once the match is configured you will receive an invite in-game to join the lobby.",
    "Join the match and wait for the game to start.",
    "When eliminated return to the match room page to be ready to join the next map in the round.",
  ],
  lobbies: {
    rounds: ["Round 3", "Round 2", "Round 1"],
    activeRound: "Round 3",
    list: Array.from({ length: 12 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Lobby ${i + 1}`,
      status: "Yet to be scheduled",
    })),
  },
};

export type Tournament = (typeof featuredTournaments)[0];
export type Battle = (typeof battles)[0];
export type GameHighlight = (typeof gameHighlights)[0];
export type Game = (typeof games)[0];
