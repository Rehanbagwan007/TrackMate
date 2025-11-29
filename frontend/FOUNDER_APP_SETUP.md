# EduVision Founder App - Standalone Project Setup

## Project Structure
```
eduvision-founder/
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── index.html
├── postcss.config.js
├── components.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── vite-env.d.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── components/
│   │   ├── ui/ (all shadcn components)
│   │   ├── AppSidebar.tsx
│   │   └── FounderAuth.tsx
│   └── pages/
│       ├── FounderDashboard.tsx
│       ├── Applications.tsx
│       └── ActiveInstitutes.tsx
```

## Setup Instructions
1. Create new React project: `npm create vite@latest eduvision-founder -- --template react-ts`
2. Install dependencies: `npm install`
3. Install shadcn: `npx shadcn@latest init`
4. Install required packages: `npm install lucide-react react-router-dom sonner`
5. Copy all files from below
6. Run: `npm run dev`

## Dependencies to install
```bash
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip class-variance-authority clsx lucide-react tailwind-merge tailwindcss-animate react-router-dom sonner
```