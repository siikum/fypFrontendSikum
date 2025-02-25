import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import "../styles/SentimentAnalysis.css";


export default function SentimentAnalysis() {
  return (
    <div className="sentiment-analysis-container" style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ color: "#333", fontFamily: "Arial, sans-serif" }}>
        Sentiment Analysis
      </h2>

      {/* Single Box containing both charts */}
      <div
        className="chart-box"
        style={{
          background: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          border: "1px solid black", // Check visibility
        }}
      >
        {/* Flexbox to arrange charts side by side */}
        <div
          className="charts-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap", // Ensures responsiveness on smaller screens
          }}
        >
          {/* Bar Chart */}
          <div style={{ flex: 1, minWidth: "500px" }}>
            <h3>Sentiment Comparison</h3>
            <BarChart
              xAxis={[{ scaleType: "band", data: ["Positive", "Neutral", "Negative"] }]}
              series={[
                { data: [10, 7, 5], label: "Sentiment 1", color: "green" },
                { data: [6, 9, 4], label: "Sentiment 2", color: "blue" },
              ]}
              width={500}
              height={300}
            />
          </div>

          {/* Line Chart */}
          <div style={{ flex: 1, minWidth: "500px" }}>
            <h3>Sentiment Trends</h3>
            <LineChart
              xAxis={[{ scaleType: "linear", data: [1, 2, 3, 4, 5, 6] }]}
              series={[
                { curve: "linear", data: [3, 5, 7, 8, 6, 9], label: "Positive", color: "green" },
                { curve: "linear", data: [2, 4, 6, 5, 3, 7], label: "Neutral", color: "yellow" },
                { curve: "linear", data: [1, 3, 4, 2, 5, 6], label: "Negative", color: "red" },
              ]}
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
