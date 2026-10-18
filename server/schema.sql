-- شغّل الملف ده في MySQL Workbench

CREATE DATABASE IF NOT EXISTS sky_city_hotel;
USE sky_city_hotel;

-- جدول الغرف
CREATE TABLE rooms (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  price       INT NOT NULL,
  size        INT,
  guests      INT,
  beds        VARCHAR(100),
  view        VARCHAR(100),
  description TEXT,
  amenities   JSON,
  images      JSON
);

-- جدول الحجوزات
CREATE TABLE bookings (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  room_id     INT NOT NULL,
  check_in    DATE NOT NULL,
  check_out   DATE NOT NULL,
  guests      INT NOT NULL,
  full_name   VARCHAR(100) NOT NULL,
  email       VARCHAR(100) NOT NULL,
  phone       VARCHAR(30) NOT NULL,
  notes       TEXT,
  total_price INT,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

-- الغرف (نفس اللي في client/src/data/rooms.js)
INSERT INTO rooms (id, name, price, size, guests, beds, view, description, amenities, images) VALUES
(1, 'Standard Double Room', 35, 18, 2, '1 double bed', 'Inner view', 'A cozy room with a comfortable double bed, air conditioning, a flat-screen TV and a private bathroom. Perfect for couples.',
 '["Free WiFi","Air conditioning","Flat-screen TV","Private bathroom","Hairdryer","Free toiletries"]',
 '["https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200","https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200","https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200"]'),

(2, 'Twin Room', 38, 20, 2, '2 single beds', 'City view', 'Two comfortable single beds, a work desk, air conditioning and a private bathroom. Great for friends or colleagues.',
 '["Free WiFi","Air conditioning","Flat-screen TV","Desk","Private bathroom","Free toiletries"]',
 '["https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200","https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200","https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200"]'),

(3, 'Deluxe Double Room', 48, 24, 2, '1 large double bed', 'City view', 'More space, a large double bed, a seating area, a minibar and a beautiful view of Downtown Cairo.',
 '["Free WiFi","Air conditioning","Flat-screen TV","Minibar","Seating area","Private bathroom"]',
 '["https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200","https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200","https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200"]'),

(4, 'Triple Room', 55, 26, 3, '3 single beds', 'City view', 'Room for three with plenty of space, air conditioning, a TV and a private bathroom. Ideal for small groups.',
 '["Free WiFi","Air conditioning","Flat-screen TV","Wardrobe","Private bathroom","Free toiletries"]',
 '["https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200","https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200","https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200"]'),

(5, 'Family Room', 70, 32, 4, '2 double beds', 'City view', 'Our biggest room with two double beds, a seating area, a minibar and a large bathroom. Made for families.',
 '["Free WiFi","Air conditioning","Flat-screen TV","Minibar","Seating area","Private bathroom"]',
 '["https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200","https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200","https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200"]');
