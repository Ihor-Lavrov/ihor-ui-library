# Ihor UI Library

A React TypeScript UI component library built with Vite and Storybook, featuring Material UI components.

## Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 19** with TypeScript
- 🎨 **Material UI** - Beautiful, accessible components
- 📚 **Storybook** - Component documentation and testing
- 🧪 **Vitest** - Unit testing with browser support

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

### Storybook

View and interact with components in Storybook:

```bash
npm run storybook
```

This will open Storybook at `http://localhost:6006`

### Building

Build the library for production:

```bash
npm run build
```

Build Storybook for deployment:

```bash
npm run build-storybook
```

## Components

### Button

A Material UI Button wrapper with TypeScript support.

**Variants:**
- Primary, Secondary, Outlined, Text
- Small, Medium, Large sizes
- All Material UI colors and props

## Project Structure

```
src/
├── components/          # UI Components
│   ├── Button.tsx      # Button component
│   └── Button.stories.tsx # Button stories
└── ...
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Material UI** - Component library
- **Storybook** - Documentation
- **Vitest** - Testing
