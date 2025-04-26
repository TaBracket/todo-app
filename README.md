📝 ToDo App

A simple and beautiful ToDo application built with React, TypeScript, TailwindCSS, and DaisyUI.This project is designed for practicing frontend development and showcasing skills in a clean, professional way.

💑 Live Demo

View Live Demo(Optional - Add this if you deploy on Vercel, Netlify, etc.)

📸 Screenshot

(Optional - Insert a nice screenshot of your app here)



📁 Table of Contents

Live Demo

Screenshot

Technologies Used

Features

Project Structure

Installation and Setup

Git Flow

How I Built It

Lessons Learned

Future Improvements

Contributing

License

Acknowledgements

📚 Technologies Used

















🌟 Features

Create new tasks

View tasks categorized in folders

Edit task details (title, description, priority, etc.)

Delete tasks

Organize tasks by folders and categories

Set task priorities (High / Medium / Low)

Fully responsive design (mobile and desktop)

Fetch tasks from a real API (MockAPI)

Proper error and loading handling

Clean and reusable components

Custom Hooks for fetching data

Professional Git flow (feature branches, develop, main)

📂 Project Structure

src/
|
|├— components/   # Reusable UI components like TaskCard, TaskList
|├— data/         # Mock or local data (if needed)
|├— hooks/        # Custom React Hooks
|├— types/        # TypeScript types/interfaces
|├— App.tsx       # Main app entry
|├— main.tsx      # Entry point for React app
└— index.css     # Global styles (TailwindCSS)

🛠️ Installation and Setup

Follow these steps to get a local copy up and running:

1. Clone the repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install dependencies

npm install

3. Start the development server

npm run dev

The app will be running at http://localhost:5173 🚀

🔀 Git Flow

This project follows a professional Git branching strategy to keep the codebase clean and organized:

main: Contains stable and production-ready code.

develop: Used for integrating features before merging into main.

feature/feature-name: Used for developing new features or improvements.

📜 Workflow Steps

Pull the latest changes from develop:

git checkout develop
git pull origin develop

Create a new feature branch:

git checkout -b feature/your-feature-name

Work on your feature and commit regularly with clear commit messages:

git commit -m "feat: implement task creation"

Push your feature branch to GitHub:

git push origin feature/your-feature-name

Create a Pull Request from feature/your-feature-name into develop.

After reviewing and testing, merge the Pull Request.

Merge develop into main when ready for production.

📝 Commit Message Guidelines

Type

Description

feat

New feature

fix

Bug fix

refactor

Code restructuring

style

Formatting or style changes

chore

Maintenance tasks (no code changes)

Example:

feat: create TaskCard component
fix: correct priority badge colors

🔥 How I Built It

This project helped me practice:

Building React apps with TypeScript

Structuring scalable frontend projects

Managing API calls and states properly

Designing responsive layouts with TailwindCSS

Creating reusable and clean components

Understanding Git Flow for professional team development

📌 Lessons Learned

How to structure a project with TypeScript

How to properly fetch data from an API

How to manage loading and error states

How to organize components, hooks, and types in a scalable way

How to maintain clean and readable code with good practices

📅 Future Improvements

Authentication (Login/Sign up)

Drag and drop functionality for task ordering

Dark mode support

Search and filter tasks

🤝 Contributing

Contributions, issues, and feature requests are welcome!Feel free to open a pull request or issue if you'd like to collaborate.

📝 License

This project is open source and available under the MIT License.

😊 Acknowledgements

Vite

React

TailwindCSS

DaisyUI

MockAPI

