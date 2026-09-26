// Single source of truth for the Hindu template. Edit here to re-brand the site.

// The studio behind the site — shown in the closing section and used for the enquiry link.
export const creator = {
  brand: 'Florals and Frames',
  whatsappNumber: '917020727961', // digits only, for wa.me
};

export const hinduCouple = {
  groom: 'Aarav',
  bride: 'Meera',
  initials: 'A & M',
  familyLine: 'Together with their families',
};

// Shown in the couple introduction. `photo` is optional: leave it empty to
// show the illustrated monogram. Portraits are cropped to the arch (about
// 2:3 portrait) — keep them near 560px wide as WebP to stay light on mobile.
export const hinduFamilies = {
  groom: {
    fullName: 'Aarav Sharma',
    relation: 'Son of',
    parents: 'Mrs. Kavita & Mr. Rajesh Sharma',
    note: 'Architect, devoted chai loyalist and the family’s favourite storyteller.',
    photo: '/hindu/groom.webp',
  },
  bride: {
    fullName: 'Meera Rathore',
    relation: 'Daughter of',
    parents: 'Mrs. Anjali & Mr. Vikram Rathore',
    note: 'Kathak dancer, bookshop wanderer and the calmest person in any room.',
    photo: '/hindu/bride.webp',
  },
};

export const hinduWedding = {
  dateISO: '2027-02-14T18:30:00+05:30',
  endISO: '2027-02-14T23:30:00+05:30',
  dateLabel: '14 · February · 2027',
  dateShort: '14.02.2027',
  dayLong: 'Sunday, 14 February 2027',
  timeLabel: '6:30 PM',
  city: 'Jaipur, Rajasthan',
  venue: 'The Royal Courtyard',
  address: 'Amer Road, Jaipur, Rajasthan 302002',
  mapUrl: 'https://maps.google.com/?q=Amer+Road+Jaipur+Rajasthan',
};

export type HinduEventKey = 'haldi' | 'sangeet' | 'wedding';

export const hinduEvents: {
  key: HinduEventKey;
  number: string;
  name: string;
  day: string;
  time: string;
  venue: string;
  note: string;
  dress: string;
}[] = [
  {
    key: 'haldi',
    number: '01',
    name: 'Haldi',
    day: 'Friday · 12 February',
    time: '10:30 AM',
    venue: 'The Garden Terrace',
    note: 'Sunshine, turmeric and a little beautiful chaos.',
    dress: 'Shades of yellow · easy festive',
  },
  {
    key: 'sangeet',
    number: '02',
    name: 'Sangeet',
    day: 'Saturday · 13 February',
    time: '7:00 PM',
    venue: 'The Sheesh Mahal Lawn',
    note: 'An evening of music, memories and dancing till late.',
    dress: 'Jewel tones · festive glam',
  },
  {
    key: 'wedding',
    number: '03',
    name: 'The Wedding',
    day: 'Sunday · 14 February',
    time: '6:30 PM',
    venue: 'The Royal Courtyard',
    note: 'Seven steps around the sacred fire. One forever.',
    dress: 'Indian formal · warm festive tones',
  },
];

export const hinduStory = {
  kicker: 'Two homes · one new beginning',
  title: 'Some stories are written slowly.',
  titleAccent: 'Ours found its way home.',
  copy: [
    'A friendship that grew through long conversations, shared chai and family gatherings.',
    'Somewhere between the ordinary moments, Aarav and Meera found something that felt wonderfully certain.',
  ],
};

// Saptapadi — the seven steps taken around the sacred fire.
export const saptapadi = [
  { vow: 'Nourishment', line: 'To provide for and nourish one another.' },
  { vow: 'Strength', line: 'To grow strong together in body, mind and spirit.' },
  { vow: 'Prosperity', line: 'To build a life of abundance, honestly shared.' },
  { vow: 'Happiness', line: 'To seek joy, and love and respect each other’s families.' },
  { vow: 'Family', line: 'To care for the generations that come after us.' },
  { vow: 'Harmony', line: 'To walk together through every season of life.' },
  { vow: 'Friendship', line: 'To remain true companions, in this life and beyond.' },
];

export const hinduMusic = {
  src: '/audio/music.mp3',
  baseVolume: 0.34,
};

function gcalStamp(iso: string) {
  return new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

export function hinduCalendarUrl(): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${hinduCouple.groom} & ${hinduCouple.bride} — Wedding`,
    dates: `${gcalStamp(hinduWedding.dateISO)}/${gcalStamp(hinduWedding.endISO)}`,
    location: `${hinduWedding.venue}, ${hinduWedding.address}`,
    details: 'Wedding ceremony followed by dinner and celebrations.',
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function hinduEnquiryUrl(): string {
  const message = `Hi ${creator.brand}! I just viewed the ${hinduCouple.groom} & ${hinduCouple.bride} wedding website and absolutely loved the experience. I'm interested in creating something similar for my wedding. Could you please share the pricing and process?`;
  return `https://wa.me/${creator.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
