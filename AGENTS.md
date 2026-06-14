# Project Development Guidelines

These guidelines ensure high-quality, maintainable code and help you grow as a developer.

## Code Architecture & Design

Make sure to always follow DRY (Don't Repeat Yourself) and clean code principles, with separation of concerns, modularity, and reusability in mind. This means:

- Each component/function should have a single responsibility
- Code should be organized so it can be reused across the application
- Avoid code duplication - refactor common patterns into shared utilities

Make sure to always follow project structure and conventions, including file organization, naming conventions, and coding styles. However, feel free to suggest improvements when you identify better patterns or structures.

## Code Quality & Clarity

Do not prematurely optimize code. Focus on clarity and correctness first. Especially for frontend now that the React compiler optimizations are very good - modern React will handle performance optimizations automatically, so write readable code first.

## Learning & Communication

After every code generation, ALWAYS provide a brief explanation of the code changes you made and why. This is important because you're still learning and want to become a better developer. Explanations should cover:

- What was changed and why
- Any design decisions made
- How it fits into the larger system

Also, suggest a brief overview of the changes for a quality commit message so other team members and PR reviewers can understand the modifications easily.

## Documentation & Research

Make sure to always fetch and follow proper and most recent documentation, especially for libraries. Use the latest versions and best practices, not outdated patterns.

If there are libraries that do the exact or similar thing to what to user asks for, suggest using those libraries instead of writing custom code, espcially for complex tasks.

## Development Tools & Stack

**Core**

- Next.js `^16.2.6` (App Router, Turbopack, React Compiler)
- React + React DOM `19.2.3` (pinned)
- TypeScript `^5.9.2`
- ESLint `^9` with `eslint-config-next` (flat config, `core-web-vitals`)

- Tailwind CSS **v4** via `@tailwindcss/postcss` (no `tailwind.config` - config lives in CSS)
- shadcn/ui `^4.8.2` (style: `radix-nova`, components in `components/ui/`) built on `radix-ui`

- `react-hook-form` `^7.56`
- `zod` `^4.1` for schemas (resolver wired in `@/lib/resolver`)

- `@tanstack/react-query` `^5.92`
- Supabase: `@supabase/ssr` `^0.9` + `@supabase/supabase-js` `^2.98`

- `sonner` for toasts

## Critical Development Rules

### Never Run Dev Server or Build Commands

NEVER run "npm run dev" or any other development server command, because you always already have your dev server running. Also never run build commands.

### TypeScript Type Safety

NEVER use ":any" as a type in TypeScript code. This is critical for type safety and catching bugs. Instead:

- Check the types and define proper interfaces or types when necessary
- Spend time understanding what types are available
- Create new types/interfaces if needed to maintain type safety

If files are js instead of ts, ALWAYS convert them to ts (or jsx to tsx) before making any changes.
When refractoring, make sure to use tailwind classes instead of inline styles.

### Type Checking Before Finalizing Code

ALWAYS check if all TypeScript types are correct and there are no type errors by using "npm exec tsc --noEmit" before providing the final code.

### Frontend Design & User Experience

ALWAYS use Anthropic's frontend design skill when generating frontend code. This ensures components are not only functional but also well-designed, accessible, and follow best practices for user experience.

## API & Backend Integration

If you are asked to generate code that involves API calls, check if the API endpoints exist using Supabase. If they do not exist, inform you that the endpoints do not exist and ask for further instructions so you can implement them.

## Import Statements & Module Organization

If you need to import some hooks or components from the React library, ALWAYS import them by "import { x } from 'react';" instead of React.x or other ways.

When importing files using paths, always use "@/path/to/file" instead of relative paths like "../../path/to/file". This improves readability and maintainability, especially as the project grows. Alias imports are clearer and don't break when files are reorganized.

## Function Writing Standards

Write all functions with the syntax "function functionName() {}" instead of arrow functions like "const functionName = () => {}" unless it's a small inline function. This creates a clear distinction between:

- Named functions: main, reusable, or exported functions
- Arrow functions: small, inline, or callback functions

When writing functions, ALWAYS check if there already exists a similar function in the codebase and reuse it instead of writing a new one, especially in all utils/ folders. Code reuse prevents duplication and makes maintenance easier.

## Project Organization

Feature-specific code goes in feature folders, shared/generic code stays in central locations (utils/, lib/, constants/). This keeps related code together and makes it clear what's feature-specific versus what's used across the app.

If you're asked to refactor something into a separate component or function:

1. First, check if there already exists a similar component or function in the codebase
2. If it exists, reuse it instead of writing a new one
3. If it doesn't exist, create a new one in a separate file (not in the same file)
4. This prevents code duplication and encourages modular design

## Code Formatting & Readability

Add empty rows for better readability between logical blocks of code. Your Prettier configuration will handle the rest of the formatting automatically, so focus on logical grouping rather than exact spacing.
