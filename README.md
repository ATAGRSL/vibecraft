# VibeCraft AI 🎨✨

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Gemini API](https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://ai.google.dev/)

Turn your ideas into visual worlds. VibeCraft AI uses the power of Google's Gemini API to generate stunning, comprehensive moodboards from a single text prompt. Describe a feeling, a place, or a concept, and watch it come to life.

---

<!-- Optional: Add a screenshot or GIF of the application in action -->
<!-- ![VibeCraft AI Demo](link-to-your-screenshot-or-gif.gif) -->

## 🌟 Key Features

- **🤖 AI-Powered Generation**: Leverages `gemini-2.5-flash` for narrative and color generation, and `imagen-4.0-generate-001` for stunning visuals.
- **🎨 Complete Moodboards**: Each creation includes a short, evocative story, a 5-color palette with descriptive names, and four unique, high-quality images.
- **✨ Interactive Interface**: A sleek, dark-mode UI where you can easily copy color hex codes to your clipboard with a single click.
- **📱 Fully Responsive**: Designed to look and work beautifully on desktops, tablets, and mobile devices.
- **⚡️ Dynamic Experience**: Smooth animations and an engaging loading screen provide a polished user experience.

## 🛠️ Tech Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **AI Models**: Google Gemini API (`gemini-2.5-flash`, `imagen-4.0-generate-001`)
- **Environment**: Runs directly in the browser with ES modules (no build step).

## 🚀 Getting Started

You can run this project locally to experiment with the Gemini API.

### Prerequisites

- A modern web browser.
- A local web server to serve the files.
- A Google Gemini API key.

### Local Development Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/vibecraft-ai.git
    cd vibecraft-ai
    ```

2.  **API Key Configuration**
    This application requires a Google Gemini API key to function. It is designed to be loaded from an environment variable `process.env.API_KEY`.

    > **Important**
    > For this browser-based project, the environment variable must be made available to the application at runtime. How you achieve this depends on your hosting or development environment. **Do not hardcode your API key directly into the source code.**

3.  **Run the Application**
    Since this project doesn't have a build step, you just need to serve the `index.html` file. You can use any simple static file server.

    - **Using Python:**
      ```bash
      # Make sure you are in the project's root directory
      python -m http.server
      ```

    - **Using Node.js (with `serve`):**
      ```bash
      # Install serve globally if you haven't already: npm install -g serve
      npx serve
      ```
    
    Once the server is running, open your browser and navigate to the provided local address (e.g., `http://localhost:8000` or `http://localhost:3000`).

## 🧠 How It Works

VibeCraft AI performs a two-stage generation process when you submit a prompt:

1.  **Text & Palette Generation**: A request is sent to the `gemini-2.5-flash` model with a prompt and a strict JSON schema. The model returns a structured JSON object containing an evocative description and a 5-color palette with names and hex codes.
2.  **Image Generation**: Concurrently, a request is sent to the `imagen-4.0-generate-001` model with the same user prompt, asking for four high-quality, aesthetic images that match the vibe.

The results are then combined and displayed in a beautifully formatted moodboard.

---

This project was created to demonstrate a creative and practical application of the Google Gemini API. Enjoy bringing your vibes to life!
