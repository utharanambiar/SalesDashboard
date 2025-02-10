# Sales dashboard

Try at: https://utharanambiar.github.io/SalesDashboard/

### Problem statement

Build a responsive React dashboard that displays:

- Combination Chart – A bar chart for revenue and a line chart for profit over months.
- Donut Chart – A chart showing the distribution of sales across product categories.
The dashboard must include:

- Filter: Select a month range to update the charts dynamically.
- State Management: Use Context API or another suitable approach.
- Styling: Ensure a clean and responsive UI using Tailwind CSS.
- Data Handling: Use the provided sample data.

### Solution

#### Project Setup
- React was used for building the dashboard, and Chart.js (via react-chartjs-2) for rendering a combination bar/line chart and a donut chart.
- Tailwind CSS was chosen for responsive, utility-first styling, ensuring flexibility across devices.
- Context API managed global state for theme (light/dark mode) and chart data.


####  Dashboard Structure
- Combination Chart: A bar chart for revenue and a line chart for profit, with months as the X-axis.
- Donut Chart: Displays sales distribution across product categories.


####  Filtering Logic
- Month Range Filter: Users select start and end months via dropdowns, updating the chart data accordingly.
- Reset Filter: Resets the filter and restores full data.


#### Design Choices
- Chart.js: Chosen for its flexibility to display combined bar/line charts and donut charts.
- Tailwind CSS: Simplified layout and responsive design without custom CSS.
- Context API: Used for efficient state management across components.
- Typescript: Used to ensure type safety and avoid runtime errors.

## Installation

Go to root directory (SalesDashboard) of project and do the following:

```bash
  npm i
```

To start the application run
    
```bash
  npm run dev
```
## Screenshots

Dark theme:

[![image.png](https://i.postimg.cc/bNzZcFgp/image.png)](https://postimg.cc/t7MqFk8M)

Light theme:

[![image.png](https://i.postimg.cc/j50j88CV/image.png)](https://postimg.cc/5Hg1ySwp)

Filtered data:

[![image.png](https://i.postimg.cc/T1T3xprC/image.png)](https://postimg.cc/jwkbQq37)

Mobile screen:

[![image.png](https://i.postimg.cc/kX1grMDv/image.png)](https://postimg.cc/bsnhkhxZ)




## Features

- Light/dark mode toggle
- Filter based on months
- A data summary section displays total revenue and profit for the selected month range.
- Fully responsive using tailwind CSS

