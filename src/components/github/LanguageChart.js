import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

// Define colors for different languages
const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Go: '#00ADD8',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Rust: '#dea584',
  Dart: '#00B4AB',
  // Add more languages and colors as needed
};

// Get color for a language, with fallback for unknown languages
const getLanguageColor = (language) => {
  return languageColors[language] || `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const LanguageChart = ({ languages }) => {
  // Convert languages object to sorted array
  const sortedLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8); // Show top 8 languages

  const languageNames = sortedLanguages.map(([name]) => name);
  const languageValues = sortedLanguages.map(([, value]) => value);
  const languageColors = languageNames.map(name => getLanguageColor(name));

  const data = {
    labels: languageNames,
    datasets: [
      {
        data: languageValues,
        backgroundColor: languageColors,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 12,
          },
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${context.label}: ${percentage}%`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  // Calculate total bytes
  const totalBytes = languageValues.reduce((a, b) => a + b, 0);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2">
        <Pie data={data} options={options} />
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <h4 className="font-semibold mb-3">Top Languages</h4>
        <div className="space-y-2">
          {sortedLanguages.map(([name, bytes]) => (
            <div key={name} className="flex items-center">
              <div 
                className="w-4 h-4 rounded-full mr-2" 
                style={{ backgroundColor: getLanguageColor(name) }}
              ></div>
              <span className="flex-1">{name}</span>
              <span className="text-sm font-medium">
                {Math.round((bytes / totalBytes) * 100)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageChart;