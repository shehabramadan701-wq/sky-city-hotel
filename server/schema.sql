-- شغّل الملف ده في MySQL Workbench

CREATE DATABASE IF NOT EXISTS sky_city_apartments;
USE sky_city_apartments;

-- جدول الغرف
CREATE TABLE rooms (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  price       INT NOT NULL,
  old_price   INT,
  taxes       INT,
  size        INT,
  guests      INT,
  beds        VARCHAR(100),
  description TEXT,
  amenities   JSON,
  images      JSON
);

-- جدول المستخدمين (Login / Sign up)
CREATE TABLE users (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  full_name   VARCHAR(100) NOT NULL,
  email       VARCHAR(100) NOT NULL UNIQUE,
  phone       VARCHAR(30),
  password    VARCHAR(255) NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
INSERT INTO rooms (id, name, price, old_price, taxes, size, guests, beds, description, amenities, images) VALUES
(1, 'Junior Suite', 65, 90, 10, 25, 2, '1 full bed + 1 sofa bed', 'A private suite with a bedroom, a separate living room and its own kitchen. The bedroom has a full bed and the living room has a sofa bed, a dining table and a flat-screen TV. Breakfast is included.',
 '["Breakfast included","Private kitchen","Living room","Air conditioning","Flat-screen TV","Soundproofing","Free WiFi","Private bathroom"]',
 '["images/rooms/junior-1.webp","images/rooms/junior-2.webp","images/rooms/junior-3.webp","images/rooms/junior-4.webp"]'),

(2, 'Deluxe Suite', 92, 115, 14, 45, 2, '2 full beds + 1 queen bed', 'A spacious 45 m² suite with a city view. It has a main bedroom with a queen bed, a second bedroom with two full beds, a full kitchen with a dining table and a living area. Breakfast is included.',
 '["Breakfast included","Private kitchen","City view","Air conditioning","Flat-screen TV","Soundproofing","Free WiFi","Private bathroom"]',
 '["images/rooms/deluxe-1.webp","images/rooms/deluxe-2.webp","images/rooms/deluxe-3.webp","images/rooms/deluxe-4.webp","images/rooms/deluxe-5.webp"]');
