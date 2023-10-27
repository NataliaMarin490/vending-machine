# VENDING MACHINE

**React + Vite**

<p align="center">
    <a href="https://github.com/NataliaMarin490/vending-machine"></a>
</p>
<h1 align="center">Vending Machine Project</h1>
<p align="center">
  This Vending Machine project simulates the functionality of a real-world vending machine. Users can interact with the machine by inserting coins, selecting products, and viewing their selection on the screen. It's a fun project that demonstrates the power of React for building interactive user interfaces.
</p>

## Features:

- **Coin Insertion:** Users can insert coins into the virtual vending machine by selecting the corresponding coin image.

- **Product Selection:** Products are displayed as clickable items. Users can click on a product to select it and the available quantities can be seen in each item

- **Product Display:** The selected product is visually displayed on the screen, providing a user-friendly interface.

- **Credit and Change Calculation:** The project now includes a feature that shows the total credits available after coin insertion and calculates the change to be returned after a product is selected. Users can easily keep track of their credits and change on the screen.

- **Credit Refund:** If a user decides not to purchase a product, they can get their credits back by clicking on a dedicated button. This feature allows users to buy multiple products at a time, using remaining credits from a previous purchase.

This project is a great example of how React can be used to create dynamic and interactive web applications. It's perfect for learning and experimenting with React's component-based architecture and state management.

## Testing:

This project has undergone testing to ensure its functionality and reliability. Various test cases have been written to cover different scenarios and interactions. The testing framework used for this project is Vitest, and React Testing Library has been employed for testing React components.

## Usage

1.  Clone this repository to your local machine.
2.  Run `npm install` to install the necessary dependencies.
3.  Use `npm run dev` to start the development server and view the vending machine in your web browser.

## Docker

This section provides information on how to set up and run the application using Docker.

# Prerequisites

Before you start, ensure you have the following software installed on your machine:

- [Docker](https://www.docker.com/)

## Docker Compose Configuration (docker-compose.yml)

The `docker-compose.yml` file defines a Docker service for running the Vending Machine application. Here are the key details:

```yaml
version: "3.4"
services:
  vending_machine:
    image: node:18-alpine
    container_name: vending_machine
    entrypoint: /bin/sh
    ports:
      - 3000:3000
    working_dir: /srv/app
    volumes:
      - type: bind
        source: ./
        target: /srv/app
    tty: true
```

## Building and Running the Application

To build and run the application using Docker, follow these steps:

1.  Make sure you have Docker installed on your system.

2.  Open a terminal and navigate to the project directory.

3.  Build the Docker image and start the application:
    `docker-compose up --build --no-recreate -d`
    `docker exec -it vending_machine sh`
    `/svr/app # npm i && npm run dev`

The Vending Machine web app should be accessible at http://localhost:3000 in your browser.

That's it! You now have the Vending Machine web application running in a Docker container.

Feel free to modify the Docker Compose configuration or the Dockerfile according to your project's specific needs.
Explore the code to learn more about how this project is built and customize it to suit your needs. Enjoy your virtual vending machine experience!
