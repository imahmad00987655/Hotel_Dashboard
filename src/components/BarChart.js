import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Occupancy Rate',
        data: [65, 59, 80, 81, 56, 55, 40, 75, 85, 90, 95, 80],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        borderRadius: 8,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        hoverBorderWidth: 2,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff',
          font: {
            size: 12,
          },
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(75, 192, 192, 0.5)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        boxPadding: 6,
        callbacks: {
          label: (context) => {
            return `${context.parsed.y}%`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#fff',
          padding: 10,
          callback: (value) => `${value}%`,
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#fff',
          padding: 10,
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
      onComplete: () => {
        const chart = document.querySelector('.bar-chart');
        if (chart) {
          chart.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(5deg)';
          chart.style.transition = 'transform 0.5s ease';
        }
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateX: 20, rotateY: 20 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ 
        height: '500px',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      className="bar-chart"
    >
      <Bar data={data} options={options} />
    </motion.div>
  );
};

export default BarChart; 