<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&pause=1000&color=F97316&center=true&vCenter=true&width=650&lines=AI+Trip+Planner+%E2%9C%88%EF%B8%8F;Plan+Smarter.+Travel+Better.;Powered+by+Gemini+AI+%2B+Google+Places;Built+with+%E2%9D%A4%EF%B8%8F+by+Binay+Pal" alt="Typing SVG" />

<br/>

![React](https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

<br/>

> **A smart, AI-powered travel planning app** that generates fully personalized itineraries in seconds — tailored to your destination, budget, travel style, and trip duration using Google Gemini AI and Google Places API.

<br/>

[🌐 Live Demo](#) • [🐛 Report Bug](https://github.com/Binay0018/trip-planar/issues) • [✨ Request Feature](https://github.com/Binay0018/trip-planar/issues)

</div>

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [How It Works](#-how-it-works)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Screenshots](#-screenshots)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 🧭 About the Project

**AI Trip Planner** eliminates the hours spent researching travel destinations, comparing hotels, and building day-by-day schedules. Simply enter your destination, travel dates, budget, and group size — and Gemini AI generates a fully customized itinerary instantly, enriched with real place data from Google Places API and secured with Firebase authentication.

### 🎯 Why this project stands out

- 🤖 **Gemini AI** — not just static templates, but contextually aware trip generation
- 📍 **Google Places API** — real hotel and attraction data with photos, ratings & locations
- 🔐 **Firebase Auth** — Google Sign-In with saved trip history per user
- ⚡ **Vite + React** — blazing fast development & production build
- 🎨 **Tailwind CSS** — fully responsive, mobile-first UI

---

## ✨ Features

<details>
<summary><strong>🤖 AI-Powered Itinerary Generation</strong></summary>
<br/>

| Feature | Details |
|---|---|
| Destination Input | Natural language destination search |
| Trip Duration | Custom day-by-day plan generation |
| Budget Levels | Budget / Moderate / Luxury tier suggestions |
| Group Type | Solo / Couple / Family / Friends tailored plans |
| Day-by-Day Schedule | Morning, afternoon & evening activity breakdown |
| AI Hotel Picks | Gemini-curated hotel recommendations per budget |

</details>

<details>
<summary><strong>📍 Google Places Integration</strong></summary>
<br/>

- Real-time place search & autocomplete
- Attraction photos from Google Places CDN
- Hotel ratings, pricing tier & location data
- Maps integration for each recommended place

</details>

<details>
<summary><strong>🔐 Authentication & User Data</strong></summary>
<br/>

- Google Sign-In via Firebase Authentication
- Save & revisit past generated trips
- User-specific trip history dashboard
- Secure Firestore storage per user account

</details>

<details>
<summary><strong>🎨 UI & Experience</strong></summary>
<br/>

- Fully responsive — mobile, tablet & desktop
- Clean card-based itinerary layout
- Loading skeletons during AI generation
- One-click trip regeneration
- Shareable trip links (coming soon)

</details>

---

## 💻 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) React.js | Component-based UI |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) Vite | Fast dev server & optimized builds |
| **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) Tailwind CSS | Utility-first responsive design |
| **AI Engine** | ![Gemini](https://img.shields.io/badge/Gemini_AI-4285F4?style=flat-square&logo=google&logoColor=white) Google Gemini AI | Itinerary & hotel generation |
| **Places Data** | ![Google](https://img.shields.io/badge/Google_Places-34A853?style=flat-square&logo=googlemaps&logoColor=white) Google Places API | Real attraction & hotel data |
| **Auth & DB** | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black) Firebase | Authentication + Firestore |

---

## ⚙️ How It Works

```
User Input (Destination, Days, Budget, Travelers)
           │
           ▼
  ┌─────────────────────┐
  │   Gemini AI Prompt  │  ← Structured prompt engineering
  │   (Trip Generator)  │     asking for JSON itinerary
  └────────┬────────────┘
           │ JSON Response
           ▼
  ┌─────────────────────┐
  │  Google Places API  │  ← Fetches real photos, ratings,
  │  (Place Enrichment) │     coordinates per recommendation
  └────────┬────────────┘
           │ Enriched Data
           ▼
  ┌─────────────────────┐
  │   Firebase Store    │  ← Saves trip to user's account
  │   (Persistence)     │     for future reference
  └────────┬────────────┘
           │
           ▼
  Rendered Itinerary UI  ✅
```

---

## 📂 Project Structure

```bash
trip-planar/
│
├── public/                        # Static assets
│
├── src/
│   ├── components/                # Reusable UI components
│   │   ├── ui/                    # Shadcn / base components
│   │   ├── TripCard.jsx           # Trip summary card
│   │   ├── HotelCard.jsx          # Hotel recommendation card
│   │   ├── PlaceCard.jsx          # Attraction card
│   │   └── Navbar.jsx             # Top navigation bar
│   │
│   ├── pages/                     # Application pages
│   │   ├── Home/                  # Landing page
│   │   ├── CreateTrip/            # Trip generation form
│   │   ├── ViewTrip/              # Generated itinerary view
│   │   └── MyTrips/               # User's saved trips
│   │
│   ├── service/                   # External service integrations
│   │   ├── AIModal.jsx            # Gemini AI API client
│   │   ├── firebaseConfig.jsx     # Firebase setup
│   │   └── GlobalApi.jsx          # Google Places API calls
│   │
│   ├── constants/                 # Prompt templates, config
│   ├── App.jsx                    # Root component & routing
│   └── main.jsx                   # Vite entry point
│
├── .env.local                     # Environment variables (gitignored)
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

```bash
Node.js >= 18.x
npm >= 9.x
Git
```

You will also need:
- A **Google Cloud** account with **Places API** enabled
- A **Google AI Studio** account for the **Gemini API key**
- A **Firebase** project with Authentication & Firestore enabled

### 1. Clone the Repository

```bash
git clone https://github.com/Binay0018/trip-planar.git
cd trip-planar
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# ── Google Places ────────────────────────────────
VITE_GOOGLE_PLACE_API_KEY=your_google_places_api_key

# ── Google Gemini AI ─────────────────────────────
VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key

# ── Firebase ─────────────────────────────────────
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> ⚠️ Never commit `.env.local` to version control. It is already listed in `.gitignore`.

### 4. Run the Application

```bash
npm run dev
# App starts at http://localhost:5173
```

### 5. Build for Production

```bash
npm run build
npm run preview
```

---

## 🔑 Environment Variables

| Variable | Description | Where to get it |
|---|---|---|
| `VITE_GOOGLE_PLACE_API_KEY` | Google Places API key | [Google Cloud Console](https://console.cloud.google.com/) |
| `VITE_GOOGLE_GEMINI_AI_API_KEY` | Gemini AI API key | [Google AI Studio](https://aistudio.google.com/) |
| `VITE_FIREBASE_API_KEY` | Firebase project API key | [Firebase Console](https://console.firebase.google.com/) |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | Firebase Console → Project Settings |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID | Firebase Console → Project Settings |

---

## 📸 Screenshots

### Trip Planning Form
![Trip Planner](./Screenshot%202026-06-11%20072729.png)

---

## 🔮 Future Enhancements

- [ ] 🗺️ Interactive Google Maps view for each day's route
- [ ] 📤 Export itinerary as PDF
- [ ] 🔗 Shareable trip link (public URL)
- [ ] 🌦️ Real-time weather forecast per destination
- [ ] 💱 Currency converter for budget planning
- [ ] ✏️ Manual itinerary editing after AI generation
- [ ] 📱 Progressive Web App (PWA) support
- [ ] 🌐 Multi-language support

---

## 🤝 Contributing

Contributions are welcome and appreciated!

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/YourFeature

# 3. Commit your changes
git commit -m 'Add YourFeature'

# 4. Push to the branch
git push origin feature/YourFeature

# 5. Open a Pull Request
```

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for details.

---

## 👨‍💻 Author

**Binay Kumar Pal**
> BTech CSE (IoT & Cyber Security) | AI · Blockchain · Full Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/binay-kumar-pal-000426269/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Binay0018)

---

<div align="center">

⭐ **Found this useful? Drop a star — it motivates me to build more cool stuff!** ⭐

Made with ❤️ and ☕ by Binay Pal

</div>
