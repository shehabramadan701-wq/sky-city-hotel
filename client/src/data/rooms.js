// الغرف
// دلوقتي مكتوبة هنا في الملف
// بعدين هنجيبها من الداتا بيز (شوف README.md)

const rooms = [
  {
    id: 1,
    name: "Standard Double Room",
    price: 35,
    size: 18,
    guests: 2,
    beds: "1 double bed",
    view: "Inner view",
    description:
      "A cozy room with a comfortable double bed, air conditioning, a flat-screen TV and a private bathroom. Perfect for couples.",
    amenities: ["Free WiFi", "Air conditioning", "Flat-screen TV", "Private bathroom", "Hairdryer", "Free toiletries"],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=70&auto=format",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=70&auto=format",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=70&auto=format",
    ],
  },
  {
    id: 2,
    name: "Twin Room",
    price: 38,
    size: 20,
    guests: 2,
    beds: "2 single beds",
    view: "City view",
    description:
      "Two comfortable single beds, a work desk, air conditioning and a private bathroom. Great for friends or colleagues.",
    amenities: ["Free WiFi", "Air conditioning", "Flat-screen TV", "Desk", "Private bathroom", "Free toiletries"],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=70&auto=format",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=70&auto=format",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=70&auto=format",
    ],
  },
  {
    id: 3,
    name: "Deluxe Double Room",
    price: 48,
    size: 24,
    guests: 2,
    beds: "1 large double bed",
    view: "City view",
    description:
      "More space, a large double bed, a seating area, a minibar and a beautiful view of Downtown Cairo.",
    amenities: ["Free WiFi", "Air conditioning", "Flat-screen TV", "Minibar", "Seating area", "Private bathroom"],
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=70&auto=format",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=70&auto=format",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=70&auto=format",
    ],
  },
  {
    id: 4,
    name: "Triple Room",
    price: 55,
    size: 26,
    guests: 3,
    beds: "3 single beds",
    view: "City view",
    description:
      "Room for three with plenty of space, air conditioning, a TV and a private bathroom. Ideal for small groups.",
    amenities: ["Free WiFi", "Air conditioning", "Flat-screen TV", "Wardrobe", "Private bathroom", "Free toiletries"],
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=70&auto=format",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=70&auto=format",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=70&auto=format",
    ],
  },
  {
    id: 5,
    name: "Family Room",
    price: 70,
    size: 32,
    guests: 4,
    beds: "2 double beds",
    view: "City view",
    description:
      "Our biggest room with two double beds, a seating area, a minibar and a large bathroom. Made for families.",
    amenities: ["Free WiFi", "Air conditioning", "Flat-screen TV", "Minibar", "Seating area", "Private bathroom"],
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=70&auto=format",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=70&auto=format",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=70&auto=format",
    ],
  },
];

export default rooms;
