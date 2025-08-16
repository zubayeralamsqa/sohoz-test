shohoz-playwright-framework/
├── .github/workflows/playwright.yml   # GitHub Actions CI pipeline
├── config/
│   └── env.js                         # Environment configuration (base URLs, etc.)
├── helpers/
│   └── utils.js                       # Utility functions
├── pages/
│   ├── homePage.js                    # Page Object for home page (search form)
│   ├── resultsPage.js                 # Page Object for flight results
│   └── reviewPage.js                  # Page Object for review modal
├── tests/
│   ├── ui/airTicketBooking.spec.js    # End-to-end UI test
│   └── api/apiFlights.spec.js         # Sample API test
├── playwright.config.js               # Playwright configuration
├── package.json                       # NPM dependencies and scripts
└── README.md                          # Project documentation
Features

Playwright Test runner with Page Objects

Configurable environments via config/env.js

UI Automation: Full booking flow, fare verification, filter comparisons

API Automation: Sample flight search endpoint validation

Reusable helpers: Utilities for parsing and assertions

CI/CD: GitHub Actions pipeline included
Setup Instructions

Clone the repository:

https://github.com/zubayeralamsqa/sohoz-test.git
cd shohoz-playwright-framework

Install dependencies:

npm install

Install Playwright browsers:

Running Tests

Run all tests

npm test

Run only UI tests

npm run test:ui

Run only API tests

npm run test:api

Run tests in headed mode (UI visible)

npx playwright test --headed

Open the last HTML report

npm run report
Environment Config

Edit config/env.js to switch environments:
 GitHub Actions (CI)

This project includes a ready-to-use GitHub Actions workflow:

Runs on every push/PR to main or master

Installs dependencies & browsers

Executes UI + API tests

Uploads the HTML test report as an artifact

You can find the file at:
Author

Md Zubayer Alam Shuvo
SQA Engineer | Playwright Test Automation Enthusiast

