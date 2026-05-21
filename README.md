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
