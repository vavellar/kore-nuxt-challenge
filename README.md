# Kore Technical Challenge

This repository contains a technical challenge for Kore, built with **Nuxt 3 SSR**, Pinia, and TailwindCSS.

---

## Project Structure

```
app/            → Root Vue component (`app.vue`) and layouts
components/     → Reusable Vue.js components
pages/          → Nuxt.js pages that define routes
assets/         → Stylesheets and static assets
store/          → Pinia store files for state management
server/         → API routes
tests/          → Unit tests
public/         → Static files (images, icons, etc.)
```

---

## About the Application

* The app fetches data from a mocked API located in the `server/` folder.
* Only the following IDs are available: `1` and `2`. Requests for other IDs will return an error.
![Error Page](./public/images/error-page.png)
* The information fetched by APi are displayed in the SummaryCard and the Offering Terms components.
* Fully **responsive** — accessible on mobile and desktop devices.


---

## Demo

The app is deployed on Netlify:
[https://kore-nuxt-challenge.netlify.app/](https://kore-nuxt-challenge.netlify.app/)

---

## Prerequisites

* Node.js >= 18
* npm >= 9
* Docker (optional, for containerized setup)

---

## Running Locally

You can run the project either **with Docker** or **directly with Node.js**.

### Option 1: Using Docker

1. Clone the repository:

```bash
git clone <repository-url>
cd kore-tech-challenge
```

2. Build and run the Docker container:

```bash
docker-compose up --build
```

3. Open your browser and go to:

```
http://localhost:3000
```

---

### Option 2: Using Node.js

1. Clone the repository and navigate to the project:

```bash
git clone <repository-url>
cd kore-tech-challenge
```

2. Use Node Version Manager (NVM) to select Node.js version:

```bash
nvm use
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and go to:

```
http://localhost:3000
```

---

## Running Tests

1. Ensure dependencies are installed (see Node.js setup).
2. Run unit tests with Vitest:

```bash
npm run test
```

---

## Technologies Used

* **Nuxt 3** (SSR)
* **Pinia** for state management
* **TailwindCSS** for styling
* **Vitest** for unit testing
* **Docker** for containerized setup

---

## Notes

* Make sure `assets/` is inside the root project folder (alongside `app/`) for proper CSS compilation.
* API endpoints are inside `server/api/`.
* All static assets such as images and icons should be in `public/` and can be referenced with `/images/...` in templates.
