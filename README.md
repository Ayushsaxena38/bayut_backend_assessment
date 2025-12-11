<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 🏡 Bayut Clone - Backend Service

A robust RESTful API built with **NestJS**, **MySQL**, and **Sequelize**, designed to power a real-estate listing platform. This service handles user authentication (JWT), database interactions, and request validation.

---

## 🚀 The Challenge: "Learning by Doing"

> **Note to the Reviewer:**
> Coming from a strong **MERN Stack (Express.js)** background, this project was my first deep dive into **NestJS**.
>
> I viewed this assessment not just as a coding task, but as a challenge to adapt to a new architectural pattern (Dependency Injection, Decorators, Modules) in a short timeframe.
>
> By leveraging the official **NestJS Documentation** and **Google Gemini AI** as a learning companion, I successfully translated my Express.js knowledge into a structured, scalable NestJS application within the deadline.

---

## 🛠️ Tech Stack

* **Framework:** [NestJS](https://nestjs.com/) (Node.js)
* **Database:** MySQL
* **ORM:** Sequelize (w/ TypeScript)
* **Authentication:** JWT (JSON Web Tokens) + Bcrypt
* **Validation:** class-validator & class-transformer (DTOs)
* **Language:** TypeScript

---

## 🤖 AI Usage Report

Per the assessment requirements, I leveraged AI tools to accelerate development and bridge knowledge gaps. Here is a transparent breakdown:

| Task | Tool | Usage Description |
| :--- | :--- | :--- |
| **Concept Mapping** | **Gemini AI** | Used to translate Express concepts (Middleware, Routers) into NestJS equivalents (Interceptors, Modules, Controllers). |
| **Boilerplate** | **Nest CLI** | Used standard CLI commands (`nest g resource`) to generate modular structures. |
| **Debugging** | **Gemini AI** | Assisted in resolving TypeScript/Sequelize specific issues, such as the `declare` keyword for model properties to avoid shadowing. |
| **Documentation** | **NestJS Docs** | Primary source for understanding the Request Lifecycle (Pipes -> Guards -> Interceptors). |

---

## 📂 Project Structure

I adopted a **Modular Architecture** to ensure clean separation of concerns:

```text
src/
├── app.module.ts          # Main Application Module (The "Motherboard")
├── main.ts                # Entry point (Enables CORS & Global Pipes)
├── database/              # Database Connection Module (Sequelize Config)
├── auth/                  # Authentication Module (JWT Config & Strategies)
├── users/                 # Users Module (Feature Logic)
│   ├── dto/               # DTOs (Data Transfer Objects) for Validation
│   ├── entities/          # Sequelize Models (Database Schema)
│   ├── users.controller.ts# API Route Handlers
│   └── users.service.ts   # Business Logic (Hashing, Login, DB calls)