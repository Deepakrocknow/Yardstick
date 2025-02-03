# Task Manager Yardstick

A modern, responsive task management application built with Next.js 13+, featuring a beautiful UI with gradient designs and glassmorphism effects.

![image](https://github.com/user-attachments/assets/59145d45-75b4-4062-8402-aa41cd19b3f8)
![image](https://github.com/user-attachments/assets/2a35b028-b3a5-4fcc-9e4f-b0d55137ea25)


## 🌟 Features

- **Task Management**
  - Create new tasks with title, description, and due date
  - Update existing tasks
  - Mark tasks as complete/incomplete
  - Delete tasks
  - View all tasks in a clean, organized interface

- **Modern UI/UX**
  - Responsive design that works on all devices
  - Beautiful gradient backgrounds and glassmorphism effects
  - Smooth animations and transitions
  - Loading states and skeleton screens
  - Clean and intuitive interface

- **Technical Features**
  - Server-side rendering with Next.js 13+
  - MongoDB integration for data persistence
  - TypeScript for type safety
  - Server Actions for data mutations
  - Real-time updates
  - Error handling

## 🚀 Tech Stack

- **Frontend**
  - Next.js 13+
  - TypeScript
  - TailwindCSS
  - Date-fns for date formatting

- **Backend**
  - Next.js Server Actions
  - MongoDB & Mongoose
  - Node.js

- **Development Tools**
  - ESLint
  - Prettier
  - Git

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
npm install
MONGODB_URI=your_mongodb_connection_string
npm run dev

task-manager/
├── app/
│   ├── api/
│   ├── components/
│   │   ├── TaskForm.tsx
│   │   ├── TaskItem.tsx
│   │   └── TaskList.tsx
│   ├── lib/
│   │   ├── mongodb.ts
│   │   └── actions.ts
│   ├── types/
│   │   └── task.ts
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── your-logo.png
└── package.json


Here's a comprehensive README.md documentation for your Task Management project:

Markdown

Collapse
# Task Manager Yardstick

A modern, responsive task management application built with Next.js 13+, featuring a beautiful UI with gradient designs and glassmorphism effects.

![Task Manager Screenshot](screenshot.png) <!-- Add your application screenshot here -->

## 🌟 Features

- **Task Management**
  - Create new tasks with title, description, and due date
  - Update existing tasks
  - Mark tasks as complete/incomplete
  - Delete tasks
  - View all tasks in a clean, organized interface

- **Modern UI/UX**
  - Responsive design that works on all devices
  - Beautiful gradient backgrounds and glassmorphism effects
  - Smooth animations and transitions
  - Loading states and skeleton screens
  - Clean and intuitive interface

- **Technical Features**
  - Server-side rendering with Next.js 13+
  - MongoDB integration for data persistence
  - TypeScript for type safety
  - Server Actions for data mutations
  - Real-time updates
  - Error handling

## 🚀 Tech Stack

- **Frontend**
  - Next.js 13+
  - TypeScript
  - TailwindCSS
  - Date-fns for date formatting

- **Backend**
  - Next.js Server Actions
  - MongoDB & Mongoose
  - Node.js

- **Development Tools**
  - ESLint
  - Prettier
  - Git

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
Install dependencies:
BASH

npm install
Create a .env.local file in the root directory and add your MongoDB connection string:
ENV

MONGODB_URI=your_mongodb_connection_string
Run the development server:
BASH

npm run dev
Open http://localhost:3000 in your browser.
🏗️ Project Structure

Collapse
task-manager/
├── app/
│   ├── api/
│   ├── components/
│   │   ├── TaskForm.tsx
│   │   ├── TaskItem.tsx
│   │   └── TaskList.tsx
│   ├── lib/
│   │   ├── mongodb.ts
│   │   └── actions.ts
│   ├── types/
│   │   └── task.ts
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── your-logo.png
└── package.json
