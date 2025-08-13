### **Surf Forecast App**

A web application for checking marine and weather forecasts for German coastal cities. This project was developed as part of a job application challenge.

#### **Features**

  - **Search Functionality:** Find and select a coastal city using a dynamic search bar.
  - **City Buttons:** Quickly access weather forecasts for a predefined list of German coastal cities.
  - **Detailed Forecasts:** View current conditions including swell height, period, and direction, as well as water temperature.
  - **Daily Weather Overview:** Get a 4-day temperature forecast.
  - **Multilingual Support:** Toggle between English and German for the application's text.

#### **Technology Stack**

  - **Frontend:** Next.js (React)
  - **Styling:** Tailwind CSS
  - **Routing:** Next.js App Router
  - **State Management:** React Hooks
  - **Data Fetching:** Custom hooks with `fetch`
  - **Icons:** Font Awesome with React
  - **Translations:** `react-i18next`

#### **API**

This application exclusively uses the **Open-Meteo API** for all weather and marine data. This constraint was a core requirement of the project.

  - **Open-Meteo Marine API:** Provides marine-specific data like swell height, period, and sea surface temperature.
  - **Open-Meteo Weather API:** Provides daily weather forecasts, including temperature ranges.

> **Note on Tides and Winds:** The Open-Meteo API does not provide tide data. As a result, this feature was intentionally omitted from the final application to adhere to the API constraint.

#### **Getting Started**

**1. Clone the repository:**

```bash
git clone https://github.com/jj-carrillo-dev/surfer-weather.git
cd surfer-weather
```

**2. Install dependencies:**

```bash
npm install
```

**3. Run the development server:**

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

#### **Project Structure**

The project is organized to be scalable and maintainable, following Next.js conventions with a focus on component reusability and clear separation of concerns.

  - `app/`: Main application directory with pages and API routes.
  - `app/api/`: API routes for fetching data.
  - `app/forecast/`: Forecast-specific components and page.
  - `components/`: Reusable UI components.
  - `hooks/`: Custom hooks for data fetching and logic.
  - `locales/`: Translation files for multilingual support.
  - `types/`: TypeScript type definitions.