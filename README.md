# NoCO2

<p align="center">
  <img width="460" height="300" src="./src/assets/noco2-logo.png">
</p>

NoCO2 is a React app that allows users to monitor their daily CO2 emissions by visualizing their emission history in a line chart. Users can input their daily activities through a form, which is then sent to the backend for CO2 emission calculation. The app also provides a dashboard page where users can view statistic cards, such as the highest emission activity or average emissions.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Backend](#backend)

## Overview

- User-friendly interface for monitoring daily CO2 emissions
- User email login or signup
- Input form for recording daily activities and calculating emissions
- Dashboard page with line chart visualization of emission history and statistic cards for insights into emissions

To view deployed react page, please navigate to https://tsechapman.github.io/NoCO2/

## Installation

To run the NoCO2 app on your local machine, please follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/TseChapman/NoCO2.git
```

2. Navigate to the project directory:

```bash
cd NoCo2
```

3. Install the dependencies:

```bash
npm install
```

## Usage

Once you have completed the installation steps, you can start using NoCO2:

Start the development server:
```bash
npm start
```
Open your web browser and visit http://localhost:3000/NoCO2/ to access the NoCO2 app.

You can now explore the different features of the app, including entering your daily activities and viewing the line chart and statistic cards on the dashboard page once you login with a valid email and password.

## Backend

The NoCO2 app relies on a backend for CO2 emission calculation. The backend code is located on a different repository. The backend is a C# .NET azure function project that perform emission calculation on user activities, then store data in a MySQL database hosted on AWS RDS. For more information, please check https://github.com/luc779/BackEndFunctions