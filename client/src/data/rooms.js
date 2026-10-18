// الغرف
// price = سعر الليلة   oldPrice = السعر قبل الخصم   taxes = الضرايب في الليلة
// الصور موجودة في فولدر public/images/rooms

const rooms = [
  {
    id: 1,
    name: "Junior Suite",
    price: 65,
    oldPrice: 90,
    taxes: 10,
    size: 25,
    guests: 2,
    beds: "1 full bed + 1 sofa bed",
    description:
      "A private suite with a bedroom, a separate living room and its own kitchen. The bedroom has a full bed and the living room has a sofa bed, a dining table and a flat-screen TV. Breakfast is included.",
    amenities: [
      "Breakfast included",
      "Private kitchen",
      "Living room",
      "Air conditioning",
      "Flat-screen TV",
      "Soundproofing",
      "Free WiFi",
      "Private bathroom",
    ],
    images: [
      "images/rooms/junior-1.webp",
      "images/rooms/junior-2.webp",
      "images/rooms/junior-3.webp",
      "images/rooms/junior-4.webp",
    ],
  },
  {
    id: 2,
    name: "Deluxe Suite",
    price: 92,
    oldPrice: 115,
    taxes: 14,
    size: 45,
    guests: 2,
    beds: "2 full beds + 1 queen bed",
    description:
      "A spacious 45 m² suite with a city view. It has a main bedroom with a queen bed, a second bedroom with two full beds, a full kitchen with a dining table and a living area. Breakfast is included.",
    amenities: [
      "Breakfast included",
      "Private kitchen",
      "City view",
      "Air conditioning",
      "Flat-screen TV",
      "Soundproofing",
      "Free WiFi",
      "Private bathroom",
    ],
    images: [
      "images/rooms/deluxe-1.webp",
      "images/rooms/deluxe-2.webp",
      "images/rooms/deluxe-3.webp",
      "images/rooms/deluxe-4.webp",
      "images/rooms/deluxe-5.webp",
    ],
  },
];

export default rooms;
