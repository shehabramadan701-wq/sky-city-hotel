# Sky City Hotel

## التشغيل

```bash
cd client
npm install
npm run dev
```
افتح http://localhost:5173

## الملفات

```
client/src/
├── data/
│   ├── hotel.js      ← اسم الفندق والتليفون والعنوان
│   └── rooms.js      ← الغرف (الاسم، السعر، الصور...)
├── components/
│   ├── Navbar.jsx    ← البار اللي فوق
│   ├── Footer.jsx    ← اللي تحت
│   └── RoomCard.jsx  ← كارت الغرفة
├── pages/
│   ├── Home.jsx
│   ├── Rooms.jsx
│   ├── RoomDetails.jsx
│   ├── Booking.jsx
│   └── Contact.jsx
├── App.jsx           ← الصفحات واللينكات بتاعتها
└── index.css         ← الألوان والحاجات المشتركة
```

كل صفحة جنبها ملف CSS باسمها.

| عايز تغيّر | روح لـ |
|---|---|
| الغرف والأسعار والصور | `data/rooms.js` |
| التليفون والعنوان | `data/hotel.js` |
| الخدمات والريفيوهات | أول `pages/Home.jsx` |
| الألوان | أول `index.css` |

---

## ربط الباك اند (بعدين)

### 1) الداتا بيز
شغّل `server/schema.sql` في MySQL Workbench.

### 2) السيرفر
```bash
cd server
npm install
```
اعمل ملف `.env` جوه `server` زي `.env.example` وحط باسورد MySQL.

في `server/routes/rooms.js` و `server/routes/bookings.js`:
شيل `//` من قدام الكود وامسح سطر `res.json({ message: "TODO" })`.

```bash
npm run dev
```

### 3) الفرونت اند

**في `pages/Rooms.jsx`:** بدل ما الغرف جاية من الملف، هتجيبها من السيرفر:

```jsx
import { useState, useEffect } from "react";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  // ... باقي الكود زي ما هو
```
وامسح سطر `import rooms from "../data/rooms";`

اعمل نفس الحكاية في `Home.jsx` و`RoomDetails.jsx` و`Booking.jsx`.

**في `pages/Booking.jsx`:** مكان سطر `// TODO` حط:

```jsx
fetch("http://localhost:5000/api/bookings", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(booking),
});
```

خلاص كده الموقع اتربط بالداتا بيز ✅
