# PegsAI

> A sleek AI-powered chat interface built with Next.js, Tailwind CSS, and OpenRouter (an interface offering access to multiple LLMs at a subsidized rate).  
> Try it live: https://pegs-ai.vercel.app

## 🧩 Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Demo](#demo)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running Locally](#running-locally)  
- [Available Scripts](#available-scripts)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  

---

## 📝 About

PegsAI is a client‑side chat UI that lets users interact with an AI assistant (powered by Google Gemini using openrouter) in a conversational format. It features real‑time scrolling, loading states, concise prompts, and syntax‑highlighted code responses.

---

## 🚀 Features

- **Interactive Chat**: User/assistant message threads with auto‑scroll  
- **Abortable Requests**: Automatically cancels slow API calls after 60 seconds  
- **Concise Prompts**: Enforces brevity unless detailed responses are requested  
- **Syntax Highlighting**: Renders code snippets with Monaco Editor styles  
- **Responsive Design**: Tailwind‑powered layout for desktop & mobile  
- **PWA Support**: Offline caching via `next-pwa` and Workbox  

---

## 🛠 Tech Stack

- **Framework**: Next.js 14  
- **Styling**: Tailwind CSS, Headless UI  
- **State Management**: Redux Toolkit, React‑Redux  
- **Forms & Validation**: Formik, Yup  
- **Animations**: Framer Motion  
- **API & HTTP**: Axios, OpenRouter SDK   
- **Editor**: Monaco Editor  
- **PWA**: next-pwa, Workbox  
- **Linting & Formatting**: ESLint (Airbnb + Standard TS), Prettier, Husky + lint-staged  

---

## 📺 Demo

Live at: [https://pegs-ai.vercel.app](https://pegs-ai.vercel.app)

---

## ⚙️ Getting Started

### Prerequisites

- Node.js ≥ 18.x  
- npm or yarn  

### Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-username/pegsai.git
   cd pegsai

   
2. Install dependencies
     ```bash 
       npm install
# or
          yarn install



3. Environment Variables

Create a .env.local at the project root and add:

             OPENROUTER_API_KEY=your_openai_api_key


4. Running Locally
   
        
                   npm run dev
# or
          
                            yarn dev

                            
Open http://localhost:3000 in your browser.

NB: Credits would have to be purchased on openrouter.ai
NB: When masking requests to the openrouter server, include the preferred model in your body field. Diffrent models have different price rates per million tokens. choose wisely. Google Gemini was used in this case but can be changed anything.



## 📦 Available Scripts

```
Script                        	        Description
...........................................................
dev	start                                Next.js in development mode
build	                                   Build for production
start                                   	Start the production server
lint	                                     Run ESLint
lint-fix	                               Auto-fix lint errors
test:all	                              Run tests (if any) & lint before push
```

## 📂 Project Structure

```1
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js app directory
│   ├── components/         # Reusable React components
│   ├── library/            # Helpers & UI primitives
│   ├── pages/              # API routes (e.g. /api/chat)
│   ├── store/              # Redux slices & store setup
│   └── styles/             # Global CSS & Tailwind config
├── .eslintrc.js            # ESLint config
├── next.config.mjs         # Next.js configuration (PWA, etc.)
├── tailwind.config.js      # Tailwind CSS config
├── package.json
└── README.md
```

## 🤝 Contributing

Fork the repo

Create your feature branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request

Please ensure code style consistency and passing lint checks.

## 📄  License

This project is licensed under the MIT License. See the LICENSE file for details.

