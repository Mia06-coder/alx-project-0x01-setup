# ALX Project 0x01

## Description

This project is a scaffolded Next.js TypeScript app with Tailwind CSS, ESLint, and custom import alias configured.

## Directory Structure

```plaintext
├── components
│ ├── common
│ │ ├── Button.tsx
│ │ └── PostCard.tsx
│ └── layout
│ ├── Footer.tsx
│ └── Header.tsx
├── pages
│ ├── index.tsx
│ ├── posts
│ │ └── index.tsx
│ └── users
│ └── index.tsx
├── public
│ └── assets
│ └── images
├── styles
│ └── globals.css
```

## 🚀 Getting Started

```bash
npm install
npm run dev -- -p 3000
```

Visit http://localhost:3000 in your browser.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- ESLint

## Tasks Completed

### ⭕Task 0 - Project Setup

- Initialized project using:

```bash
npx create-next-app@latest alx-project-0x01 --typescript --eslint --tailwind --import-alias "@/*"
```

- Edited `styles/globals.css` and `pages/index.tsx`
- Added placeholder files for reusable UI components and pages:
  - `Button.tsx`
  - `PostCard.tsx`
  - `Header.tsx`
  - `Footer.tsx`
  - `pages/posts/index.tsx`
  - `pages/users/index.tsx`
