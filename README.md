# Carbon Compass

**Carbon Compass** is a web application designed to empower individuals to understand, track, and reduce their environmental impact. It offers tools to calculate carbon footprints, offset emissions, engage with a sustainability community, and earn rewards for eco-friendly actions, making sustainable living accessible and engaging.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Architecture Highlights](#architecture-highlights)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication & Profiles**  
  Register, log in, and manage personal profiles with details like name, email, location, and earned points.  
  ([`src/pages/RegisterPage.tsx`](./src/pages/RegisterPage.tsx), [`src/pages/LoginPage.tsx`](./src/pages/LoginPage.tsx), [`src/pages/ProfilePage.tsx`](./src/pages/ProfilePage.tsx), [`src/context/AppContext.tsx`](./src/context/AppContext.tsx))

- **Carbon Footprint Calculator**  
  Estimate your carbon footprint based on transport, energy, and diet inputs, powered by a Supabase Edge Function.  
  ([`src/pages/CalculatorPage.tsx`](./src/pages/CalculatorPage.tsx), [`supabase/functions/estimateCarbon/index.ts`](./supabase/functions/estimateCarbon/index.ts))

- **Personalized Dashboard**  
  Visualize carbon emissions over time with trends and category breakdowns.  
  ([`src/pages/DashboardPage.tsx`](./src/pages/DashboardPage.tsx))

- **Carbon Offsetting**  
  Neutralize unavoidable emissions by supporting verified carbon offset projects, with simulated purchases and redemption history tracking.  
  ([`src/pages/OffsetPage.tsx`](./src/pages/OffsetPage.tsx), [`src/pages/OffsetGuidePage.tsx`](./src/pages/OffsetGuidePage.tsx), [`supabase/functions/offsetCarbon/index.ts`](./supabase/functions/offsetCarbon/index.ts))

- **Gamification & Rewards**
  - **Green Points System**: Earn points for tracking footprints, completing challenges, and sustainable actions, managed via Supabase Edge Functions.  
    ([`src/context/AppContext.tsx`](./src/context/AppContext.tsx), [`src/pages/RewardsPage.tsx`](./src/pages/RewardsPage.tsx), [`supabase/functions/awardPoints/index.ts`](./supabase/functions/awardPoints/index.ts), [`supabase/functions/redeemReward/index.ts`](./supabase/functions/redeemReward/index.ts))
  - **Badges & Achievements**: Unlock badges for milestones and accomplishments.  
    ([`src/components/achievements/AchievementBadge.tsx`](./src/components/achievements/AchievementBadge.tsx), [`src/pages/ProfilePage.tsx`](./src/pages/ProfilePage.tsx))
  - **Challenges**: Participate in individual or group challenges to reduce your carbon footprint and earn rewards.  
    ([`src/pages/ChallengesPage.tsx`](./src/pages/ChallengesPage.tsx))

- **Community Forum**  
  Connect with others, share sustainability journeys, ask questions, and find inspiration.  
  ([`src/pages/CommunityPage.tsx`](./src/pages/CommunityPage.tsx))

- **AI-Powered Suggestions**  
  Receive personalized recommendations to reduce your carbon footprint, currently implemented as a mock via Supabase Edge Function.  
  ([`src/pages/DashboardPage.tsx`](./src/pages/DashboardPage.tsx), [`supabase/functions/suggestionAI/index.ts`](./supabase/functions/suggestionAI/index.ts))

- **Notifications**  
  Stay informed about challenge completions, new suggestions, and community activity.  
  ([`src/pages/NotificationsPage.tsx`](./src/pages/NotificationsPage.tsx))

- **Educational Resources**  
  Access articles, guides, and tips on climate science, sustainable living, and carbon offsetting.  
  ([`src/pages/ResourcesPage.tsx`](./src/pages/ResourcesPage.tsx), [`src/pages/BlogPage.tsx`](./src/pages/BlogPage.tsx), [`src/pages/ClimateSciencePage.tsx`](./src/pages/ClimateSciencePage.tsx), [`src/pages/SustainabilityTipsPage.tsx`](./src/pages/SustainabilityTipsPage.tsx))

- **Informational Pages**  
  Learn more through "About Us," "Contact Us," "Privacy Policy," "Terms of Service," and "API Documentation" pages.  
  ([`src/pages/AboutPage.tsx`](./src/pages/AboutPage.tsx), [`src/pages/ContactPage.tsx`](./src/pages/ContactPage.tsx), [`src/pages/PrivacyPage.tsx`](./src/pages/PrivacyPage.tsx), [`src/pages/TermsPage.tsx`](./src/pages/TermsPage.tsx), [`src/pages/ApiDocsPage.tsx`](./src/pages/ApiDocsPage.tsx))

## Technologies Used

### Frontend
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript for enhanced code reliability.
- **Vite**: Fast build tool for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Lucide React**: Open-source icon library.
- **Framer Motion**: Declarative animations for React.
- **React Router DOM**: Declarative routing for React applications.
- **Recharts**: Composable charting library built with React and D3.

### Backend & Database
- **Supabase**: Open-source Firebase alternative with PostgreSQL database, authentication, and serverless Edge Functions.
- **Supabase Edge Functions**: Handles backend logic for carbon calculations, point awarding, and AI suggestions.

### Deployment
- **Netlify**: Continuous deployment and hosting for the web application.

## Architecture Highlights
- **Client-Side Rendering (CSR)**: Built as a single-page application (SPA) with React for a seamless user experience.
- **Global State Management**: Uses React's Context API (`AppContext`) to manage user sessions, carbon data, and global states.  
  ([`src/context/AppContext.tsx`](./src/context/AppContext.tsx))
- **Database Schema**: Well-defined Supabase schema with tables for `users`, `carbon_entries`, `offset_transactions`, `point_transactions`, `rewards`, `user_preferences`, and `analytics`.
- **Row Level Security (RLS)**: Ensures users can only access and modify their own data, implemented across Supabase tables.  
  ([Supabase migrations](./supabase/migrations))
- **Modular Component Design**: Reusable React components for maintainability and scalability.

## Installation

To set up *Carbon Compass* locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/carbon-compass.git
   cd carbon-compass
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the application.

5. **Set up Supabase**:
   - Create a Supabase project and apply the database schema from the migrations folder (`supabase/migrations`).
   - Enable Row Level Security (RLS) on tables: `users`, `carbon_entries`, `offset_transactions`, `point_transactions`, `rewards`, `user_preferences`, `analytics`.
   - Deploy the Supabase Edge Functions:
     ```bash
     supabase functions deploy estimateCarbon
     supabase functions deploy offsetCarbon
     supabase functions deploy awardPoints
     supabase functions deploy redeemReward
     supabase functions deploy suggestionAI
     ```

## Usage

1. **Register/Login**: Create an account or log in to access the dashboard and features.
2. **Calculate Carbon Footprint**: Input transport, energy, and diet data in the calculator to estimate emissions.
3. **Offset Emissions**: Explore and support verified carbon offset projects.
4. **Participate in Challenges**: Join individual or group challenges to earn Green Points and badges.
5. **Engage with the Community**: Share tips and connect with others in the forum.
6. **Explore Resources**: Learn about sustainability through articles and guides.

## Deployment

The application is deployed on Netlify for continuous deployment. To deploy your own instance:

1. **Connect to Netlify**:
   - Link your GitHub repository to Netlify.
   - Set the build command to `npm run build` and the publish directory to `dist`.

2. **Add environment variables in Netlify**:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Deploy Supabase Edge Functions**:
   ```bash
   supabase functions deploy estimateCarbon
   supabase functions deploy offsetCarbon
   supabase functions deploy awardPoints
   supabase functions deploy redeemReward
   supabase functions deploy suggestionAI
   ```

## Contributing

We welcome contributions to *Carbon Compass*! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes and commit:
   ```bash
   git commit -m 'Add your feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

Ensure your code follows the project’s coding standards and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

For questions or feedback, reach out via the [Contact Us](#) page or open an issue on GitHub.

---

*Carbon Compass: Your guide to a sustainable future.*
