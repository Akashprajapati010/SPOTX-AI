# SPOTX – AI-Powered Platform for Smart Event Planning and Promotion

![SPOTX Banner](https://img.shields.io/badge/Project-SPOTX-blue)
![Next.js](https://img.shields.io/badge/Next.js-Framework-black)
![React](https://img.shields.io/badge/React-Frontend-61DAFB)
![Convex](https://img.shields.io/badge/Convex-Backend-orange)
![Clerk](https://img.shields.io/badge/Clerk-Authentication-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## 📌 Project Overview

SPOTX is an AI-powered event planning and promotion platform designed to simplify event management for both organizers and attendees. The platform helps organizers create, manage, and promote events using Generative AI, while users can discover personalized events based on their interests and location.

The platform includes features like:

* AI-powered event creation
* Personalized event recommendations
* QR-based ticketing system
* Digital event registration
* Organizer dashboard and analytics
* Location-wise event discovery
* Subscription and pricing system

---

## 👥 For Live Demo 

<a href="https://spotx-ai.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen" alt="Live Demo">
</a>

---

# 🚀 Features

## 👤 User Features

* Secure Sign Up & Login
* Personalized onboarding
* Explore upcoming events
* Recommended events based on interests
* Location-wise event discovery
* Event registration system
* QR-based digital tickets
* Search events by category and location
* View registered events in My Tickets section

---

## 🎯 Organizer Features

* Create events manually or using AI
* AI-generated event title, category, description & images
* Free and Paid event support
* Razorpay payment integration
* Manage event attendees
* Real-time event analytics
* Download charts and reports
* Subscription system for unlimited event creation
* Theme customization support

---

# 🧠 AI Features

SPOTX uses Generative AI to automate event creation.

### AI can generate:

* Event Titles
* Event Descriptions
* Event Categories
* Event Cover Images

### AI Recommendation System:

* Personalized event suggestions
* Interest-based recommendations
* Location-based recommendations

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Next.js
* Tailwind CSS
* Shadcn UI
* Bootstrap

## Backend

* Convex Database
* Node.js

## Authentication

* Clerk Authentication

## Payment Gateway

* Razorpay

## APIs & AI

* Gemini AI API
* Unsplash API

---

# 📂 Folder Structure

```bash
SPOTX/
│
├── app/
├── components/
├── actions/
├── convex/
├── hooks/
├── lib/
├── public/
├── styles/
├── utils/
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/spotx.git
```

```bash
cd spotx
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Create Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Convex
NEXT_PUBLIC_CONVEX_URL=

# Gemini AI
GEMINI_API_KEY=

# Razorpay
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

# Unsplash API
UNSPLASH_ACCESS_KEY=
```

---

## 4️⃣ Run the Development Server

```bash
npm run dev
```

Now open:

```bash
http://localhost:3000
```

---

# 🔐 Authentication

SPOTX uses Clerk Authentication for:

* Secure login/signup
* Google authentication
* Session management
* Role-based access
* Protected routes

---

# 🎟️ QR Ticketing System

After successful registration:

* Users receive a unique QR ticket
* QR contains user name, date, and event details
* Organizers can scan QR codes for secure entry

---

# 💳 Subscription & Pricing

SPOTX includes a subscription system for organizers.

## Free Plan

* Create only 1 event
* Limited customization

## Pro Plan

* Unlimited event creation
* Theme customization
* Additional organizer features

---

# 📊 Organizer Dashboard

The organizer dashboard provides:

* Total registrations
* Event analytics
* Attendance tracking
* Event performance insights
* Downloadable charts and reports

---

# 🌍 Event Discovery System

The Explore Page allows users to:

* Discover nearby events
* Search by city or state
* Browse category-wise events
* Get AI-based personalized recommendations
* View upcoming and trending events

---

# 📸 Screenshots

## Home Page

*Add screenshot here*

## Explore Page

*Add screenshot here*

## Event Creation Page

*Add screenshot here*

## My Ticket Page

*Add screenshot here*

---

# 🔮 Future Enhancements

* Mobile Application
* Advanced AI Recommendations
* Live Event Chat System
* Multi-language Support
* Social Media Event Sharing
* Event Reminder Notifications
* Advanced Analytics Dashboard

---

# 🎓 Academic Information

**Project Title:**
SPOTX – An AI-Powered Platform for Smart Event Planning and Promotion

**College:**
Sagar Institute of Science & Technology (SISTec), Bhopal

**Department:**
Computer Science & Engineering

---

# 📜 License

This project is developed for academic and educational purposes.

---

# 🙌 Acknowledgement

We would like to thank our project guide, faculty members, and teammates for their continuous support and guidance throughout the development of this project.

---

# ⭐ Support

If you like this project, please give it a ⭐ on GitHub.
