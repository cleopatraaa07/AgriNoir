# AgriNoir 🌾

**AgriNoir** is a modern, dark-themed precision agriculture application designed to empower farmers with real-time data, direct market access, and educational resources. It bridges the gap between traditional farming and modern technology, focusing on maximizing yield and profitability through data-driven decisions.

## 📱 Features & Modules

### 1. Smart Dashboard (Beranda)
*   **Real-time Weather**: Localized weather forecasts, humidity, wind speed, and precipitation alerts.
*   **Land Status Overview**: Quick snapshot of soil moisture, pH levels, and crop health across different plots.
*   **Actionable Alerts**: Immediate notifications for pest detections (e.g., Fall Armyworm) and scheduled tasks (e.g., Fertilization).
*   **Market Ticker**: Live price updates for key commodities (Rice, Chili, Corn).

### 2. Farm Management (Lahan Saya)
*   **Plot Digitization**: Manage multiple land plots with specific crop details.
*   **IoT Integration Mockup**: Visualizes sensor data for soil moisture, temperature, and NPK levels.
*   **Growth Tracking**: Interactive charts showing crop growth progress over weeks.
*   **Task Management**: Track farming activities like watering, fertilizing, and harvesting.

### 3. Marketplace (Pasar)
*   **E-Commerce**: Buy agricultural inputs (seeds, fertilizers, tools) directly from suppliers.
*   **Sell Harvest**: Feature for farmers to list their produce for sale (B2B/B2C).
*   **Order Tracking**: Real-time status updates on purchases (Packed, Shipped, Delivered).
*   **Product Recommendations**: AI-driven suggestions based on farm needs.

### 4. Education Hub (Pustaka)
*   **Video Tutorials**: Curated content on farming techniques (e.g., Hydroponics, Pest Control).
*   **Articles**: Guides on cultivation, business, and market trends.
*   **FAQ**: Common farming questions and answers.

### 5. Farmer Profile & Utilities
*   **Digital Farmer Card (Kartu Tani)**: QR-based identification for subsidies and verification.
*   **Subscription**: Premium access to advanced analytics and agronomy consultation.
*   **Planting Guide**: Weather-based recommendations for optimal planting windows.

---

## 🚀 Use Cases

### Scenario A: The Morning Routine
1.  **User (Pak Budi)** opens the app at 6:00 AM.
2.  Checks the **Home Dashboard** for weather; sees it will rain at 3:00 PM.
3.  Notices a **"Fertilization Schedule"** alert.
4.  Clicks **Mark Complete** after finishing the task in the field.

### Scenario B: Pest Management
1.  User receives a **High Priority Alert** on the Home screen: "Pest Detected".
2.  Navigates to **Pest Detail** screen.
3.  Identifies the pest as "Fall Armyworm" via the provided image and description.
4.  Reviews recommended chemical controls.
5.  Clicks **Buy Pesticide** to be redirected to the Marketplace with the specific product pre-searched.

### Scenario C: Buying Supplies
1.  User needs new seeds for the next season.
2.  Goes to **Marketplace**.
3.  Searches for "Bibit Padi IR64".
4.  Views product details, checks seller rating, and purchases.
5.  Later, uses **Order Tracking** to see the courier's location.

### Scenario D: Precision Farming Analysis
1.  User wants to check if the soil is healthy.
2.  Goes to **My Farm** and selects "Lahan Padi Blok A".
3.  Analyzes the **Soil Stats** card (pH 6.2, Moisture 65%).
4.  Views the **Growth Chart** to compare current progress against expected yield.

---

## 🛠 Tech Stack

*   **Framework**: React (v19)
*   **Styling**: Tailwind CSS (Dark Mode focused)
*   **Language**: TypeScript
*   **Icons**: Material Symbols Outlined
*   **Fonts**: Spline Sans (Display), Work Sans, Noto Sans
*   **Charting**: Recharts

## 🎨 Design Philosophy

AgriNoir utilizes a "Dark Mode" first approach (`bg-background-dark`) to reduce eye strain for farmers checking the app in low-light conditions (dawn/dusk) and to save battery life on mobile devices. The color palette uses deep greens (`#102217`, `#1c2e24`) accented by a vibrant neon green (`#2bee79`) to highlight actionable elements and positive statuses.
