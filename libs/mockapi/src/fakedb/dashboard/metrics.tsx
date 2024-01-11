import { indigo, red, teal } from '@mui/material/colors';
import { MetricsType } from '@crema/models/dashboards/Metrics';

const metricsData: MetricsType = {
  ordersThisYear: '2,380',
  queryIcon: '/assets/images/metricsIcons/querries.png',
  revenueThisYear: '10,380',
  visitsThisYear: '1,22,380',
  queriesThisYear: '22,563',
  websiteTraffic: '2,364.7k',
  incomeLastYear: {
    value: '$55,658',
    graphData: [
      { name: '', revenue: 2000 },
      { name: '$2000', revenue: 10000 },
      { name: '', revenue: 8000 },
      { name: '$19000', revenue: 19000 },
      { name: '', revenue: 15000 },
      { name: '$28000', revenue: 28000 },
      { name: '', revenue: 20000 },
      { name: '$55000', revenue: 65000 },
      { name: '', revenue: 45000 },
    ],
  },
  websiteTrafficData: {
    value: '07%',
    graphData: [
      { name: '', traffic: 2000 },
      { name: '$2000', traffic: 10000 },
      { name: '', traffic: 8000 },
      { name: '$19000', traffic: 19000 },
      { name: '', traffic: 15000 },
      { name: '$28000', traffic: 28000 },
      { name: '', traffic: 20000 },
      { name: '$55000', traffic: 65000 },
      { name: '', traffic: 45000 },
    ],
  },
  revenueGrowthData: {
    value: '38%',
    graphData: [
      { name: '', growth: 2000 },
      { name: '$2000', growth: 10000 },
      { name: '', growth: 8000 },
      { name: '$19000', growth: 19000 },
      { name: '', growth: 15000 },
      { name: '$28000', growth: 28000 },
      { name: '', growth: 20000 },
      { name: '$55000', growth: 65000 },
      { name: '', growth: 45000 },
    ],
  },
  incrementActiveUsers: {
    value: '96%',
    graphData: [
      { name: '', activeUsers: 2000 },
      { name: '$2000', activeUsers: 10000 },
      { name: '', activeUsers: 8000 },
      { name: '$19000', activeUsers: 19000 },
      { name: '', activeUsers: 15000 },
      { name: '$28000', activeUsers: 28000 },
      { name: '', activeUsers: 20000 },
      { name: '$55000', activeUsers: 65000 },
      { name: '', activeUsers: 45000 },
    ],
  },
  extraRevenue: {
    value: '88%',
    graphData: [
      { name: '', revenue: 2000 },
      { name: '$2000', revenue: 10000 },
      { name: '', revenue: 8000 },
      { name: '$19000', revenue: 19000 },
      { name: '', revenue: 15000 },
      { name: '$28000', revenue: 28000 },
      { name: '', revenue: 20000 },
      { name: '$55000', revenue: 65000 },
      { name: '', revenue: 45000 },
    ],
  },
  trafficRaise: {
    value: '50%',
    graphData: [
      { name: '', traffic: 2000 },
      { name: '$2000', traffic: 25000 },
      { name: '', traffic: 8000 },
      { name: '$19000', traffic: 19000 },
      { name: '', traffic: 15000 },
      { name: '$28000', traffic: 45000 },
      { name: '', traffic: 20000 },
      { name: '$55000', traffic: 65000 },
      { name: '', traffic: 45000 },
    ],
  },
  lessOrders: {
    value: '33%',
    graphData: [
      { name: '', orders: 2000 },
      { name: '$2000', orders: 10000 },
      { name: '', orders: 8000 },
      { name: '$19000', orders: 19000 },
      { name: '', orders: 15000 },
      { name: '$28000', orders: 28000 },
      { name: '', orders: 20000 },
      { name: '$55000', orders: 65000 },
      { name: '', orders: 45000 },
    ],
  },
  salesData: {
    salesToday: '149',
    salesYesterday: '101',
    salesGraphData: [
      { day: 1, number: 149 },
      { day: 2, number: 109 },
      { day: 3, number: 28 },
      { day: 4, number: 220 },
      { day: 5, number: 190 },
      { day: 6, number: 140 },
      { day: 7, number: 115 },
      { day: 8, number: 90 },
      { day: 9, number: 70 },
      { day: 10, number: 55 },
      { day: 11, number: 30 },
      { day: 12, number: 60 },
      { day: 13, number: 85 },
      { day: 14, number: 115 },
      { day: 15, number: 140 },
      { day: 16, number: 180 },
      { day: 17, number: 223 },
      { day: 18, number: 255 },
      { day: 19, number: 200 },
      { day: 20, number: 167 },
      { day: 21, number: 134 },
      { day: 22, number: 112 },
      { day: 23, number: 92 },
      { day: 24, number: 50 },
      { day: 25, number: 88 },
      { day: 26, number: 111 },
      { day: 27, number: 144 },
      { day: 28, number: 200 },
      { day: 29, number: 226 },
      { day: 30, number: 180 },
    ],
  },
  earningInMonth: [
    {
      id: 1001,
      name: 'Earning',
      value: 59,
      color: '#4299E1',
      colorName: indigo[400],
    },
    {
      id: 1002,
      name: 'Pending',
      value: 21,
      color: '#E53E3E',
      colorName: red[600],
    },
    {
      id: 1003,
      name: 'Refund',
      value: 20,
      color: '#38B2AC',
      colorName: teal[400],
    },
  ],
  subscriptionData: {
    dataOne: [
      { number: 1, value: 100 },
      { number: 2, value: 120 },
      { number: 3, value: 140 },
      { number: 4, value: 130 },
      { number: 5, value: 160 },
      { number: 6, value: 185 },
      { number: 7, value: 200 },
      { number: 8, value: 223 },
      { number: 9, value: 210 },
      { number: 10, value: 200 },
      { number: 11, value: 230 },
      { number: 12, value: 250 },
      { number: 13, value: 235 },
      { number: 14, value: 270 },
      { number: 15, value: 300 },
      { number: 16, value: 280 },
      { number: 17, value: 240 },
      { number: 18, value: 290 },
      { number: 19, value: 320 },
      { number: 20, value: 340 },
      { number: 21, value: 370 },
      { number: 22, value: 410 },
      { number: 23, value: 365 },
      { number: 24, value: 390 },
      { number: 25, value: 425 },
      { number: 26, value: 460 },
      { number: 27, value: 435 },
      { number: 28, value: 480 },
      { number: 29, value: 505 },
      { number: 30, value: 515 },
      { number: 31, value: 535 },
      { number: 32, value: 510 },
      { number: 33, value: 560 },
      { number: 34, value: 590 },
      { number: 35, value: 565 },
      { number: 36, value: 535 },
      { number: 37, value: 495 },
      { number: 38, value: 550 },
      { number: 39, value: 580 },
      { number: 40, value: 545 },
      { number: 41, value: 575 },
      { number: 42, value: 555 },
      { number: 43, value: 575 },
      { number: 44, value: 540 },
      { number: 45, value: 510 },
      { number: 46, value: 560 },
      { number: 47, value: 520 },
      { number: 48, value: 540 },
      { number: 49, value: 570 },
      { number: 50, value: 510 },
      { number: 51, value: 465 },
      { number: 52, value: 490 },
      { number: 53, value: 425 },
      { number: 54, value: 460 },
      { number: 55, value: 535 },
      { number: 56, value: 480 },
      { number: 57, value: 505 },
      { number: 58, value: 515 },
    ],
    dataTwo: [
      { number: 1, value: 80 },
      { number: 2, value: 110 },
      { number: 3, value: 120 },
      { number: 4, value: 170 },
      { number: 5, value: 130 },
      { number: 6, value: 145 },
      { number: 7, value: 210 },
      { number: 8, value: 213 },
      { number: 9, value: 240 },
      { number: 10, value: 190 },
      { number: 11, value: 220 },
      { number: 12, value: 270 },
      { number: 13, value: 215 },
      { number: 14, value: 290 },
      { number: 15, value: 350 },
      { number: 16, value: 280 },
      { number: 17, value: 240 },
      { number: 18, value: 290 },
      { number: 19, value: 360 },
      { number: 20, value: 390 },
      { number: 21, value: 420 },
      { number: 22, value: 410 },
      { number: 23, value: 365 },
      { number: 24, value: 370 },
      { number: 25, value: 445 },
      { number: 26, value: 470 },
      { number: 27, value: 425 },
      { number: 28, value: 490 },
      { number: 29, value: 515 },
      { number: 30, value: 545 },
      { number: 31, value: 535 },
      { number: 32, value: 500 },
      { number: 33, value: 550 },
      { number: 34, value: 580 },
      { number: 35, value: 565 },
      { number: 36, value: 505 },
      { number: 37, value: 485 },
      { number: 38, value: 540 },
      { number: 39, value: 580 },
      { number: 40, value: 515 },
      { number: 41, value: 505 },
      { number: 42, value: 555 },
      { number: 43, value: 585 },
      { number: 44, value: 550 },
      { number: 45, value: 590 },
      { number: 46, value: 560 },
      { number: 47, value: 520 },
      { number: 48, value: 540 },
      { number: 49, value: 570 },
      { number: 50, value: 510 },
      { number: 51, value: 465 },
      { number: 52, value: 490 },
      { number: 53, value: 425 },
      { number: 54, value: 460 },
      { number: 55, value: 535 },
      { number: 56, value: 480 },
      { number: 57, value: 505 },
      { number: 58, value: 515 },
    ],
    dataThree: [
      { number: 1, value: 60 },
      { number: 2, value: 90 },
      { number: 3, value: 120 },
      { number: 4, value: 190 },
      { number: 5, value: 120 },
      { number: 6, value: 155 },
      { number: 7, value: 190 },
      { number: 8, value: 215 },
      { number: 9, value: 200 },
      { number: 10, value: 250 },
      { number: 11, value: 300 },
      { number: 12, value: 250 },
      { number: 13, value: 220 },
      { number: 14, value: 270 },
      { number: 15, value: 190 },
      { number: 16, value: 300 },
      { number: 17, value: 330 },
      { number: 18, value: 360 },
      { number: 19, value: 320 },
      { number: 20, value: 370 },
      { number: 21, value: 420 },
      { number: 22, value: 460 },
      { number: 23, value: 380 },
      { number: 24, value: 390 },
      { number: 25, value: 450 },
      { number: 26, value: 500 },
      { number: 27, value: 420 },
      { number: 28, value: 490 },
      { number: 29, value: 535 },
      { number: 30, value: 555 },
      { number: 31, value: 500 },
      { number: 32, value: 570 },
      { number: 33, value: 480 },
      { number: 34, value: 580 },
      { number: 35, value: 520 },
      { number: 36, value: 480 },
      { number: 37, value: 450 },
      { number: 38, value: 400 },
      { number: 39, value: 560 },
      { number: 40, value: 500 },
      { number: 41, value: 400 },
      { number: 42, value: 350 },
      { number: 43, value: 300 },
      { number: 44, value: 325 },
      { number: 45, value: 450 },
      { number: 46, value: 560 },
      { number: 47, value: 520 },
      { number: 48, value: 540 },
      { number: 49, value: 570 },
      { number: 50, value: 510 },
      { number: 51, value: 465 },
      { number: 52, value: 490 },
      { number: 53, value: 425 },
      { number: 54, value: 460 },
      { number: 55, value: 535 },
      { number: 56, value: 480 },
      { number: 57, value: 505 },
      { number: 58, value: 515 },
    ],
  },
  metricsLineGraphData: {
    value: '749',
    difference: '+ 65',
    differencePercent: '6%',
    graphData: [
      { number: '0', value: 650 },
      { number: '1', value: 749 },
      { number: '2', value: 900 },
      { number: '3', value: 770 },
      { number: '4', value: 950 },
      { number: '5', value: 750 },
      { number: '6', value: 1020 },
      { number: '7', value: 800 },
      { number: '8', value: 950 },
    ],
  },
  metricsFloatingGraphData: {
    salesData: {
      value: '$5000k',
      change: -5.9,
      strokeColor: '#4299E1',
      areaColor: '#90CDF4',
      graphData: [
        { number: '0', value: 650 },
        { number: '1', value: 823 },
        { number: '2', value: 635 },
        { number: '3', value: 900 },
        { number: '4', value: 760 },
        { number: '5', value: 874 },
        { number: '6', value: 575 },
        { number: '7', value: 800 },
        { number: '8', value: 680 },
        { number: '9', value: 1130 },
        { number: '10', value: 920 },
      ],
    },
    clientsData: {
      value: '56,733',
      change: 2.9,
      strokeColor: '#F56565',
      areaColor: '#FEB2B2',
      graphData: [
        { number: '0', value: 650 },
        { number: '1', value: 823 },
        { number: '2', value: 635 },
        { number: '3', value: 900 },
        { number: '4', value: 760 },
        { number: '5', value: 874 },
        { number: '6', value: 575 },
        { number: '7', value: 800 },
        { number: '8', value: 680 },
        { number: '9', value: 1130 },
        { number: '10', value: 920 },
      ],
    },
    revenueData: {
      value: '$999k',
      change: -1.4,
      strokeColor: '#6B46C1',
      areaColor: '#D6BCFA',
      graphData: [
        { number: '0', value: 650 },
        { number: '1', value: 823 },
        { number: '2', value: 635 },
        { number: '3', value: 900 },
        { number: '4', value: 760 },
        { number: '5', value: 874 },
        { number: '6', value: 575 },
        { number: '7', value: 800 },
        { number: '8', value: 680 },
        { number: '9', value: 1130 },
        { number: '10', value: 920 },
      ],
    },
    newUserData: {
      value: '99,463',
      change: -7.9,
      strokeColor: '#38B2AC',
      areaColor: '#81E6D9',
      graphData: [
        { number: '0', value: 650 },
        { number: '1', value: 823 },
        { number: '2', value: 635 },
        { number: '3', value: 900 },
        { number: '4', value: 760 },
        { number: '5', value: 874 },
        { number: '6', value: 575 },
        { number: '7', value: 800 },
        { number: '8', value: 680 },
        { number: '9', value: 1130 },
        { number: '10', value: 920 },
      ],
    },
  },
  visitsData: {
    new: 54,
    returning: 23,
    graphData: {
      dataOne: [
        { number: '1', value: 90 },
        { number: '2', value: 51 },
        { number: '3', value: 52 },
        { number: '4', value: 21 },
        { number: '5', value: 64 },
        { number: '6', value: 57 },
        { number: '7', value: 71 },
        { number: '8', value: 119 },
        { number: '9', value: 99 },
        { number: '10', value: 103 },
        { number: '11', value: 42 },
        { number: '12', value: 96 },
      ],
      dataTwo: [
        { number: '1', value: 70 },
        { number: '2', value: 45 },
        { number: '3', value: 59 },
        { number: '4', value: 30 },
        { number: '5', value: 68 },
        { number: '6', value: 40 },
        { number: '7', value: 65 },
        { number: '8', value: 110 },
        { number: '9', value: 80 },
        { number: '10', value: 122 },
        { number: '11', value: 60 },
        { number: '12', value: 40 },
      ],
      dataThree: [
        { number: '1', value: 30 },
        { number: '2', value: 45 },
        { number: '3', value: 25 },
        { number: '4', value: 55 },
        { number: '5', value: 35 },
        { number: '6', value: 70 },
        { number: '7', value: 50 },
        { number: '8', value: 90 },
        { number: '9', value: 120 },
        { number: '10', value: 82 },
        { number: '11', value: 65 },
        { number: '12', value: 35 },
      ],
    },
  },
  ordersData: {
    revenue: 54,
    orders: 23,
    graphData: {
      dataOne: [
        { number: '1', value: 90 },
        { number: '2', value: 51 },
        { number: '3', value: 52 },
        { number: '4', value: 21 },
        { number: '5', value: 64 },
        { number: '6', value: 57 },
        { number: '7', value: 71 },
        { number: '8', value: 105 },
        { number: '9', value: 99 },
        { number: '10', value: 103 },
        { number: '11', value: 42 },
        { number: '12', value: 96 },
      ],
      dataTwo: [
        { number: '1', value: 70 },
        { number: '2', value: 45 },
        { number: '3', value: 59 },
        { number: '4', value: 30 },
        { number: '5', value: 68 },
        { number: '6', value: 40 },
        { number: '7', value: 65 },
        { number: '8', value: 110 },
        { number: '9', value: 80 },
        { number: '10', value: 122 },
        { number: '11', value: 60 },
        { number: '12', value: 40 },
      ],
      dataThree: [
        { number: '1', value: 30 },
        { number: '2', value: 45 },
        { number: '3', value: 25 },
        { number: '4', value: 55 },
        { number: '5', value: 35 },
        { number: '6', value: 70 },
        { number: '7', value: 50 },
        { number: '8', value: 90 },
        { number: '9', value: 104 },
        { number: '10', value: 82 },
        { number: '11', value: 65 },
        { number: '12', value: 35 },
      ],
    },
  },
  profileViewsData: {
    views: '23,345',
    graphData: [
      { day: 1, number: 149 },
      { day: 2, number: 109 },
      { day: 3, number: 28 },
      { day: 4, number: 220 },
      { day: 5, number: 190 },
      { day: 6, number: 140 },
      { day: 7, number: 115 },
      { day: 8, number: 90 },
      { day: 9, number: 70 },
      { day: 10, number: 55 },
      { day: 11, number: 30 },
      { day: 12, number: 60 },
      { day: 13, number: 85 },
      { day: 14, number: 115 },
      { day: 15, number: 140 },
      { day: 16, number: 180 },
      { day: 17, number: 223 },
      { day: 18, number: 255 },
      { day: 19, number: 200 },
      { day: 20, number: 167 },
      { day: 21, number: 134 },
      { day: 22, number: 112 },
      { day: 23, number: 92 },
      { day: 24, number: 50 },
      { day: 25, number: 88 },
      { day: 26, number: 111 },
      { day: 27, number: 144 },
      { day: 28, number: 200 },
      { day: 29, number: 226 },
      { day: 30, number: 180 },
    ],
  },
  workViewsData: {
    views: '12,987',
    graphData: [
      { name: 'reviews', value: 14 },
      { name: 'reviews', value: 10 },
      { name: 'reviews', value: 18 },
      { name: 'reviews', value: 13 },
      { name: 'reviews', value: 21 },
      { name: 'reviews', value: 19 },
      { name: 'reviews', value: 24 },
      { name: 'reviews', value: 29 },
      { name: 'reviews', value: 22 },
      { name: 'reviews', value: 17 },
      { name: 'reviews', value: 26 },
      { name: 'reviews', value: 19 },
      { name: 'reviews', value: 31 },
      { name: 'reviews', value: 33 },
      { name: 'reviews', value: 26 },
      { name: 'reviews', value: 30 },
      { name: 'reviews', value: 26 },
      { name: 'reviews', value: 22 },
      { name: 'reviews', value: 17 },
      { name: 'reviews', value: 19 },
      { name: 'reviews', value: 14 },
      { name: 'reviews', value: 17 },
      { name: 'reviews', value: 23 },
      { name: 'reviews', value: 16 },
      { name: 'reviews', value: 10 },
    ],
  },
  socialData: {
    likes: 268,
    comments: 162,
  },
  statsGraph: {
    dataOne: {
      stats1: [
        { number: 1, value: 1000 },
        { number: 2, value: 1200 },
        { number: 3, value: 1400 },
        { number: 4, value: 1300 },
        { number: 5, value: 1600 },
        { number: 6, value: 1850 },
        { number: 7, value: 2000 },
        { number: 8, value: 2230 },
        { number: 9, value: 2100 },
        { number: 10, value: 2000 },
        { number: 11, value: 2300 },
        { number: 12, value: 2500 },
        { number: 13, value: 2350 },
        { number: 14, value: 2700 },
        { number: 15, value: 3000 },
        { number: 16, value: 2800 },
        { number: 17, value: 2400 },
        { number: 18, value: 2900 },
        { number: 19, value: 3200 },
        { number: 20, value: 3400 },
        { number: 21, value: 3700 },
        { number: 22, value: 4100 },
        { number: 23, value: 3650 },
        { number: 24, value: 3900 },
        { number: 25, value: 4250 },
        { number: 26, value: 4600 },
        { number: 27, value: 4350 },
        { number: 28, value: 4800 },
        { number: 29, value: 5050 },
        { number: 30, value: 5150 },
        { number: 31, value: 5350 },
        { number: 32, value: 5100 },
        { number: 33, value: 5600 },
        { number: 34, value: 5900 },
        { number: 35, value: 5650 },
        { number: 36, value: 5350 },
        { number: 37, value: 4950 },
        { number: 38, value: 5500 },
        { number: 39, value: 5800 },
        { number: 40, value: 5450 },
        { number: 41, value: 5950 },
        { number: 42, value: 5550 },
        { number: 43, value: 5750 },
        { number: 44, value: 5400 },
        { number: 45, value: 5100 },
        { number: 46, value: 5150 },
        { number: 47, value: 5350 },
        { number: 48, value: 5100 },
        { number: 49, value: 5600 },
        { number: 50, value: 5900 },
        { number: 51, value: 5650 },
        { number: 52, value: 5350 },
        { number: 53, value: 4950 },
        { number: 54, value: 5500 },
        { number: 55, value: 5800 },
        { number: 56, value: 5450 },
        { number: 57, value: 5950 },
        { number: 58, value: 5550 },
      ],
      stats2: [
        { number: 1, value: 1120 },
        { number: 2, value: 1040 },
        { number: 3, value: 1200 },
        { number: 4, value: 1350 },
        { number: 5, value: 1500 },
        { number: 6, value: 1520 },
        { number: 7, value: 1800 },
        { number: 8, value: 1650 },
        { number: 9, value: 1900 },
        { number: 10, value: 1800 },
        { number: 11, value: 2100 },
        { number: 12, value: 2275 },
        { number: 13, value: 2400 },
        { number: 14, value: 2320 },
        { number: 15, value: 2600 },
        { number: 16, value: 2550 },
        { number: 17, value: 2800 },
        { number: 18, value: 2900 },
        { number: 19, value: 3110 },
        { number: 20, value: 3300 },
        { number: 21, value: 3450 },
        { number: 22, value: 3745 },
        { number: 23, value: 3534 },
        { number: 24, value: 3790 },
        { number: 25, value: 4100 },
        { number: 26, value: 4230 },
        { number: 27, value: 4400 },
        { number: 28, value: 4600 },
        { number: 29, value: 4970 },
        { number: 30, value: 5230 },
        { number: 31, value: 5600 },
        { number: 32, value: 5230 },
        { number: 33, value: 5500 },
        { number: 34, value: 5750 },
        { number: 35, value: 5960 },
        { number: 36, value: 5400 },
        { number: 37, value: 5150 },
        { number: 38, value: 5300 },
        { number: 39, value: 5640 },
        { number: 40, value: 5890 },
        { number: 41, value: 5770 },
        { number: 42, value: 5300 },
        { number: 43, value: 5100 },
        { number: 44, value: 4890 },
        { number: 45, value: 5200 },
        { number: 46, value: 4400 },
        { number: 47, value: 4600 },
        { number: 48, value: 4970 },
        { number: 49, value: 5230 },
        { number: 50, value: 5600 },
        { number: 51, value: 5230 },
        { number: 52, value: 5500 },
        { number: 53, value: 5750 },
        { number: 54, value: 5960 },
        { number: 55, value: 5400 },
        { number: 56, value: 5150 },
        { number: 57, value: 5300 },
        { number: 58, value: 5640 },
      ],
    },
    dataTwo: {
      stats1: [
        { number: 1, value: 800 },
        { number: 2, value: 950 },
        { number: 3, value: 700 },
        { number: 4, value: 1100 },
        { number: 5, value: 1400 },
        { number: 6, value: 1650 },
        { number: 7, value: 1400 },
        { number: 8, value: 1930 },
        { number: 9, value: 2200 },
        { number: 10, value: 1950 },
        { number: 11, value: 2200 },
        { number: 12, value: 2700 },
        { number: 13, value: 2150 },
        { number: 14, value: 2900 },
        { number: 15, value: 3200 },
        { number: 16, value: 2650 },
        { number: 17, value: 2400 },
        { number: 18, value: 2900 },
        { number: 19, value: 3100 },
        { number: 20, value: 3600 },
        { number: 21, value: 3900 },
        { number: 22, value: 3550 },
        { number: 23, value: 3850 },
        { number: 24, value: 3900 },
        { number: 25, value: 4250 },
        { number: 26, value: 4600 },
        { number: 27, value: 4150 },
        { number: 28, value: 4700 },
        { number: 29, value: 5000 },
        { number: 30, value: 5250 },
        { number: 31, value: 5150 },
        { number: 32, value: 5600 },
        { number: 33, value: 5400 },
        { number: 34, value: 5800 },
        { number: 35, value: 5950 },
        { number: 36, value: 5150 },
        { number: 37, value: 4550 },
        { number: 38, value: 5600 },
        { number: 39, value: 5200 },
        { number: 40, value: 5750 },
        { number: 41, value: 5150 },
        { number: 42, value: 4750 },
        { number: 43, value: 4450 },
        { number: 44, value: 5100 },
        { number: 45, value: 5800 },
        { number: 46, value: 5150 },
        { number: 47, value: 5350 },
        { number: 48, value: 5100 },
        { number: 49, value: 5600 },
        { number: 50, value: 5900 },
        { number: 51, value: 5650 },
        { number: 52, value: 5350 },
        { number: 53, value: 4950 },
        { number: 54, value: 5500 },
        { number: 55, value: 5800 },
        { number: 56, value: 5450 },
        { number: 57, value: 5950 },
        { number: 58, value: 5550 },
      ],
      stats2: [
        { number: 1, value: 400 },
        { number: 2, value: 1140 },
        { number: 3, value: 1600 },
        { number: 4, value: 1250 },
        { number: 5, value: 1700 },
        { number: 6, value: 1120 },
        { number: 7, value: 1800 },
        { number: 8, value: 1950 },
        { number: 9, value: 1100 },
        { number: 10, value: 1000 },
        { number: 11, value: 1800 },
        { number: 12, value: 2175 },
        { number: 13, value: 2600 },
        { number: 14, value: 2220 },
        { number: 15, value: 1820 },
        { number: 16, value: 2350 },
        { number: 17, value: 2900 },
        { number: 18, value: 3200 },
        { number: 19, value: 3910 },
        { number: 20, value: 3100 },
        { number: 21, value: 3950 },
        { number: 22, value: 3345 },
        { number: 23, value: 3034 },
        { number: 24, value: 4090 },
        { number: 25, value: 4500 },
        { number: 26, value: 4130 },
        { number: 27, value: 4700 },
        { number: 28, value: 4100 },
        { number: 29, value: 4870 },
        { number: 30, value: 5230 },
        { number: 31, value: 5900 },
        { number: 32, value: 5130 },
        { number: 33, value: 5500 },
        { number: 34, value: 5250 },
        { number: 35, value: 5660 },
        { number: 36, value: 5800 },
        { number: 37, value: 5250 },
        { number: 38, value: 5900 },
        { number: 39, value: 5140 },
        { number: 40, value: 5490 },
        { number: 41, value: 4770 },
        { number: 42, value: 4100 },
        { number: 43, value: 3800 },
        { number: 44, value: 4590 },
        { number: 45, value: 4600 },
        { number: 46, value: 4400 },
        { number: 47, value: 4600 },
        { number: 48, value: 4970 },
        { number: 49, value: 5230 },
        { number: 50, value: 5600 },
        { number: 51, value: 5230 },
        { number: 52, value: 5500 },
        { number: 53, value: 5750 },
        { number: 54, value: 5960 },
        { number: 55, value: 5400 },
        { number: 56, value: 5150 },
        { number: 57, value: 5300 },
        { number: 58, value: 5640 },
      ],
    },
    dataThree: {
      stats1: [
        { number: 1, value: 600 },
        { number: 2, value: 750 },
        { number: 3, value: 900 },
        { number: 4, value: 1700 },
        { number: 5, value: 1200 },
        { number: 6, value: 1050 },
        { number: 7, value: 1900 },
        { number: 8, value: 2230 },
        { number: 9, value: 2100 },
        { number: 10, value: 1950 },
        { number: 11, value: 2900 },
        { number: 12, value: 2500 },
        { number: 13, value: 2850 },
        { number: 14, value: 2100 },
        { number: 15, value: 3400 },
        { number: 16, value: 2250 },
        { number: 17, value: 2100 },
        { number: 18, value: 2700 },
        { number: 19, value: 3900 },
        { number: 20, value: 4200 },
        { number: 21, value: 3500 },
        { number: 22, value: 3050 },
        { number: 23, value: 3850 },
        { number: 24, value: 4400 },
        { number: 25, value: 4750 },
        { number: 26, value: 4200 },
        { number: 27, value: 4950 },
        { number: 28, value: 5200 },
        { number: 29, value: 5000 },
        { number: 30, value: 5650 },
        { number: 31, value: 5250 },
        { number: 32, value: 5100 },
        { number: 33, value: 4700 },
        { number: 34, value: 5200 },
        { number: 35, value: 5050 },
        { number: 36, value: 5150 },
        { number: 37, value: 3950 },
        { number: 38, value: 4500 },
        { number: 39, value: 4200 },
        { number: 40, value: 5950 },
        { number: 41, value: 5250 },
        { number: 42, value: 4250 },
        { number: 43, value: 4750 },
        { number: 44, value: 5200 },
        { number: 45, value: 5600 },
        { number: 46, value: 5150 },
        { number: 47, value: 5350 },
        { number: 48, value: 5100 },
        { number: 49, value: 5600 },
        { number: 50, value: 5900 },
        { number: 51, value: 5650 },
        { number: 52, value: 5350 },
        { number: 53, value: 4950 },
        { number: 54, value: 5500 },
        { number: 55, value: 5800 },
        { number: 56, value: 5450 },
        { number: 57, value: 5950 },
        { number: 58, value: 5550 },
      ],
      stats2: [
        { number: 1, value: 1200 },
        { number: 2, value: 940 },
        { number: 3, value: 1300 },
        { number: 4, value: 1750 },
        { number: 5, value: 1300 },
        { number: 6, value: 1920 },
        { number: 7, value: 2000 },
        { number: 8, value: 1450 },
        { number: 9, value: 1800 },
        { number: 10, value: 2000 },
        { number: 11, value: 2280 },
        { number: 12, value: 2575 },
        { number: 13, value: 2800 },
        { number: 14, value: 2220 },
        { number: 15, value: 1020 },
        { number: 16, value: 2350 },
        { number: 17, value: 2900 },
        { number: 18, value: 3700 },
        { number: 19, value: 3210 },
        { number: 20, value: 3700 },
        { number: 21, value: 3050 },
        { number: 22, value: 4245 },
        { number: 23, value: 3434 },
        { number: 24, value: 4790 },
        { number: 25, value: 4300 },
        { number: 26, value: 4830 },
        { number: 27, value: 4200 },
        { number: 28, value: 4800 },
        { number: 29, value: 5270 },
        { number: 30, value: 5030 },
        { number: 31, value: 5600 },
        { number: 32, value: 5830 },
        { number: 33, value: 5300 },
        { number: 34, value: 5850 },
        { number: 35, value: 4960 },
        { number: 36, value: 5200 },
        { number: 37, value: 5750 },
        { number: 38, value: 5100 },
        { number: 39, value: 4540 },
        { number: 40, value: 5390 },
        { number: 41, value: 4970 },
        { number: 42, value: 4300 },
        { number: 43, value: 4700 },
        { number: 44, value: 4990 },
        { number: 45, value: 4100 },
        { number: 46, value: 4400 },
        { number: 47, value: 4600 },
        { number: 48, value: 4970 },
        { number: 49, value: 5230 },
        { number: 50, value: 5600 },
        { number: 51, value: 5230 },
        { number: 52, value: 5500 },
        { number: 53, value: 5750 },
        { number: 54, value: 5960 },
        { number: 55, value: 5400 },
        { number: 56, value: 5150 },
        { number: 57, value: 5300 },
        { number: 58, value: 5640 },
      ],
    },
  },
  socialVisitorsData: [
    {
      id: 133443,
      name: 'facebook',
      visitors: 78870,
      change: 30,
      color: '#4C51BF',
    },
    {
      id: 4343,
      name: 'twitter',
      visitors: 46600,
      change: -20,
      color: '#63B3ED',
    },
    {
      id: 43434,
      name: 'instagram',
      visitors: 63760,
      change: 25,
      color: '#744210',
    },
    {
      id: 44552,
      name: 'behance',
      visitors: 12670,
      change: -40,
      color: '#3182CE',
    },
    {
      id: 343232,
      name: 'pinterest',
      visitors: 24560,
      change: 10,
      color: '#E53E3E',
    },
  ],
  accountData: [
    { name: 'Jan', complete: 4000, week: 2400 },
    { name: 'Feb', complete: 3000, week: 1398 },
    { name: 'Mar', complete: 2000, week: 9800 },
    { name: 'Apr', complete: 2780, week: 3900 },
    { name: 'May', complete: 1890, week: 4800 },
    { name: 'June', complete: 2390, week: 3800 },
    { name: 'July', complete: 3490, week: 4300 },
  ],
  shareData: [
    {
      icon: 'facebook',
      color: '#303F9F',
      value: 192,
    },
    {
      icon: 'twitter',
      color: '#1976D2',
      value: 78,
    },
    {
      icon: 'dribbble',
      color: '#EC407A',
      value: 64,
    },
    {
      icon: 'vimeo',
      color: '#00796B',
      value: 324,
    },
    {
      icon: 'tumblr',
      color: '#004D40',
      value: 543,
    },
    {
      icon: 'youtube',
      color: '#E53935',
      value: 43,
    },
    {
      icon: 'linkedin',
      color: '#004D40',
      value: 23,
    },
    {
      icon: 'google',
      color: '#181D29',
      value: 32,
    },
  ],
};
export default metricsData;
