# NoCO2

<p align="center">
  <img width="460" height="300" src="./src/assets/noco2-logo.png">
</p>

NoCO2 is a React app that allows users to monitor their daily CO2 emissions by visualizing their emission history in a line chart. Users can input their daily activities through a form, which is then sent to the backend for CO2 emission calculation. The app also provides a dashboard page where users can view statistic cards, such as the highest or average emission activity.

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
cd NoCO2
```

3. Install the dependencies:

```bash
npm install
```

4. Define correct environment variables. Create a `.env` file containing environment variables. Then, add the following environment variables to your backend URL and firebase authentication configurations (Replace `...` accordingly).

```
REACT_APP_FIREBASE_API_KEY = "..."
REACT_APP_FIREBASE_AUTH_DOMAIN = "..."
REACT_APP_FIREBASE_PROJECT_ID = "..."
REACT_APP_FIREBASE_STORAGE_BUCKET = "..."
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "..."
REACT_APP_FIREBASE_API_ID = "..."
REACT_APP_FIREBASE_MEASUREMENT_ID = "..."
REACT_APP_NOCO2_API_URL = "..."
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

The NoCO2 app relies on a backend for CO2 emission calculation. The backend code is located on a different repository. The backend is a C# .NET Azure function project that performs emission calculation on user activities, then store data in a MySQL database hosted on AWS RDS. For more information, please check https://github.com/luc779/BackEndFunctions
