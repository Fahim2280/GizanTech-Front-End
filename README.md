# Real-Time Temperature Dashboard

This project is a **Real-Time Temperature Dashboard** built with React, which displays real-time temperature data from an API, visualized dynamically using a line chart. It also shows the most recent temperature reading at the top of the page.

---

## Features

1. **Real-Time Data Fetching**:
   - Fetches temperature data from an API every 5 seconds.
   - Displays the latest temperature reading with the unit and timestamp.

2. **Dynamic Chart Updates**:
   - Visualizes temperature trends dynamically using `chart.js`.
   - Keeps the chart updated without page reloads.

3. **Responsive Design**:
   - Fully responsive and mobile-friendly layout.

4. **User-Friendly Interface**:
   - Simple, clean, and visually appealing design.

---

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (<= 14.x)
- npm or yarn package manager

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd temperature-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## API Integration

The application fetches temperature data from the following API:
```
http://localhost:7000/temperature/temperatureData
```
### Expected JSON Response Format
```json
{
  "temperature": "41°C",
  "unit": "Celsius",
  "timestamp": "2024-12-27T13:38:46.456Z"
}
```

---

## Project Structure

```
├── public
├── src
│   ├── components
│   │   └── TemperatureChart.js  # Line chart component using Chart.js
│   ├── pages
│   │   └── Home.js              # Main dashboard page
│   ├── services
│   │   └── api.js               # API call function
│   ├── App.js                   # Root component
│   └── index.js                 # Entry point
└── README.md                    # Project documentation
```

---

## Usage

1. Launch the application using the installation instructions above.
2. The dashboard will display:
   - The **current temperature**, unit, and last updated time at the top.
   - A dynamically updating line chart showing temperature trends.

---

## Technologies Used

- **Frontend**:
  - React.js
  - Chart.js

- **Backend**:
  - API should be hosted separately (sample URL: `http://localhost:7000`)

- **Styling**:
  - Inline CSS for simplicity

---

## Future Enhancements

1. Implement WebSocket for true real-time updates.
2. Add unit conversion between Celsius and Fahrenheit.
3. Add support for multiple sensors and locations.
4. Enhance the design with more advanced UI libraries.

---

## License

This project is licensed under the MIT License.

---

## Contributors

- **Md Fahim Alam**

Feel free to fork and contribute to this project!

