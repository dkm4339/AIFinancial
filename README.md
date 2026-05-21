Bhai, is code box ke andar ka content seedha copy karo aur apni `README.md` file mein paste kar do. Koi extra text nahi hai:

```markdown
# 🚀 Finora: AI-Powered Personal Finance Ecosystem

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini_3.5-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Finora is a modern, serverless personal finance management (PFM) ecosystem designed to eradicate manual entry fatigue. By leveraging Multimodal Generative AI (Google Gemini 3.5 Flash) and Event-Driven Architecture (Inngest), Finora transforms unstructured financial artifacts (receipts, bills) into strictly typed database records autonomously.

## ✨ Key Features

- **🧠 AI Receipt Scanner:** Upload a photo of a physical receipt or digital invoice. Finora uses Gemini 3.5 Flash to autonomously extract the amount, merchant name, date, and category.
- **⚡ Event-Driven Automation:** Powered by Inngest, the system automatically processes recurring subscriptions and triggers proactive email alerts when budget thresholds (80%, 100%) are reached.
- **📊 Real-Time Analytics:** Interactive Recharts dashboards providing visual insights into monthly spending velocities, categorical breakdowns, and net worth.
- **🛡️ Enterprise-Grade Security:** Features passwordless authentication via Clerk, rate-limiting & bot protection via Arcjet, and strict Row Level Security (RLS) in PostgreSQL.
- **🌗 Modern UI/UX:** Built with Tailwind CSS and Shadcn UI, featuring a highly responsive, accessible dark-mode interface.

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS, Shadcn UI, Recharts
- **Backend:** Next.js Server Actions, Node.js
- **Database:** PostgreSQL (hosted on Supabase), Prisma ORM
- **AI Engine:** Google Gemini 3.5 Flash API
- **Background Jobs:** Inngest SDK
- **Authentication:** Clerk
- **Security:** Arcjet SDK

## 📸 Screenshots

*(Replace these placeholders with actual image links from your project)*

| Main Dashboard | AI Receipt Scanner |
| :---: | :---: |
| <img src="link_to_dashboard_image.png" width="400" alt="Dashboard UI" /> | <img src="link_to_scanner_image.png" width="400" alt="Scanner UI" /> |

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
- Node.js (v18.0 or higher)
- npm or yarn
- PostgreSQL Database (e.g., Supabase)
- Google AI Studio API Key
- Clerk API Keys

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/finora.git](https://github.com/your-username/finora.git)
   cd finora

```

2. **Install dependencies:**
```bash
npm install

```


3. **Set up Environment Variables:**
Create a `.env.local` file in the root directory and add your secret keys:
```env
# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Database (Supabase/PostgreSQL)
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.supabase.co:5432/postgres"
DIRECT_URL="postgresql://postgres:YOUR_PASSWORD@db.supabase.co:5432/postgres"

# AI Integration (Google Gemini)
GEMINI_API_KEY=AIzaSy...

# Automation & Security
INNGEST_EVENT_KEY=local
INNGEST_SIGNING_KEY=local
ARCJET_KEY=ajkey_...

```


4. **Initialize the Database:**
Push the Prisma schema to your PostgreSQL database:
```bash
npx prisma generate
npx prisma db push

```


5. **Run the Development Server:**
```bash
npm run dev

```


Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to view the application.

## 🗄️ Database Schema

The core schema revolves around four main entities tightly coupled with referential integrity:

* **User:** Managed via Clerk synchronization.
* **Account:** Stores wallet/bank balances.
* **Transaction:** The core ledger storing AI-extracted expenses/incomes.
* **Budget:** Defines maximum monthly spending limits.

*Refer to the `prisma/schema.prisma` file for detailed entity relationships.*

## 👨‍💻 Development Team

This project was developed as a Final Year B.Tech Capstone Project by:

* **Deepak Maurya**
* **Anurag**
* **Mayadhish**
