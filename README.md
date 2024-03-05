# Gasprice Calculator Web Application! ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)

![Project Status](https://img.shields.io/badge/Project_Status-PAUSED-red)
![](https://img.shields.io/badge/Code-Angular-informational?style=flat&logo=angular&logoColor=white&color=2bbc8a)

# WARNING, THIS PROJECT WAS PAUSED!!!
## The Code will be still there, but the infrustructure will be gone until I started it again.

The Gasprice Calculator Web Application is a dynamic tool built with Angular, designed to provide real-time calculations and predictions of future gas prices. It leverages a sophisticated algorithm from our [backend application](https://github.com/JanoschA/gasprice-calculator), which takes into account various factors such as historical data, current market trends, and geopolitical events to deliver accurate predictions.


[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=JanoschA_gasprice-calculator-web&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=JanoschA_gasprice-calculator-web)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=JanoschA_gasprice-calculator-web&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=JanoschA_gasprice-calculator-web)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=JanoschA_gasprice-calculator-web&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=JanoschA_gasprice-calculator-web)

## Table Of Contents
- [Online Application](#online-application)
- [Prerequisites](#prerequisites)
- [Other Components](#other-components)
- [Installation](#installation)
  - [Node.js and npm Installation](#nodejs-and-npm-installation)
- [Inspiration](#inspiration)

## Online Application
Experience the Gasprice Calculator Web Application in action at [gasprice-calculator.com](https://gasprice-calculator.com).

## Prerequisites

To utilize this application effectively, ensure you have the following:

- A gas heating system and a gas tank.
- Several past gas bills for precise calculations.

## Other Components

[Backend Application](https://github.com/JanoschA/gasprice-calculator)

[Wiki](https://github.com/JanoschA/gasprice-calculator/wiki)

## Installation
### Node.js and npm Installation

Node.js is a JavaScript runtime that allows you to run JavaScript on your server or your machine. npm (Node Package Manager) is a package manager for Node.js. It is used to install Node.js programs from the npm registry.

Follow the steps below to install Node.js and npm:

1. **Download Node.js Installer**: Visit the [official Node.js website](https://nodejs.org/) to download the installer. Choose the version that is appropriate for your operating system.

2. **Install Node.js and npm**: Run the installer (the .msi installer for Windows or the .pkg installer for MacOS). This will install both Node.js and npm on your machine. Follow the prompts in the installer and accept the license agreement to complete the installation.

3. **Verify Installation**: Open a terminal or command prompt and type the following commands to verify that Node.js and npm are installed correctly:

```bash
node -v
npm -v
```
These commands should display the versions of Node.js and npm installed on your machine.

### Running the Application Locally

After successfully cloning this repository, you can run the application on your local machine with the following command:

```bash
ng serve --configuration=production
```
This command starts the Angular development server with the production configuration, which you can access by navigating to http://localhost:4200/ in your web browser.

### Building the Application for Production

To compile the application for a production environment, use the following npm script:

```bash
npm run build:prod
```
This command will create an optimized build of your application in the dist/ directory, ready for deployment to a production server.

## Inspiration

This project was inspired by the following article: [Hosting an Angular application on GitHub Pages using GitHub Actions](https://dev.to/rodrigokamada/hosting-an-angular-application-on-github-pages-using-github-actions-5ag8).
