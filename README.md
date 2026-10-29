<div align="center">

  <img src="./public/logoo.png" alt="Medical Care logo" width="96" />

  # Medical Care

  ### A modern, responsive online pharmacy and personal-care storefront

  <p>
    Browse medicines and cosmetics, discover product details, save favorites,
    manage a cart, and complete a validated checkout flow.
  </p>

  <p>
    <a href="#-getting-started"><img src="https://img.shields.io/badge/quick_start-1F7B76?style=for-the-badge&logo=rocket&logoColor=white" alt="Quick start" /></a>
    <a href="#-architecture"><img src="https://img.shields.io/badge/architecture-documentation-75B482?style=for-the-badge&logo=readme&logoColor=white" alt="Architecture documentation" /></a>
    <a href="#-contributing"><img src="https://img.shields.io/badge/contributions-welcome-2F855A?style=for-the-badge&logo=git&logoColor=white" alt="Contributions welcome" /></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=20232A" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 7" />
    <img src="https://img.shields.io/badge/JavaScript-ESM-F7DF1E?style=flat-square&logo=javascript&logoColor=222" alt="JavaScript ESM" />
    <img src="https://img.shields.io/badge/MUI-7-007FFF?style=flat-square&logo=mui&logoColor=white" alt="Material UI 7" />
    <img src="https://img.shields.io/badge/Firebase-Auth_%26_Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=222" alt="Firebase Auth and Firestore" />
    <img src="https://img.shields.io/badge/Redux_Toolkit-2-764ABC?style=flat-square&logo=redux&logoColor=white" alt="Redux Toolkit" />
  </p>

</div>

## ✨ Product highlights

| Area | Included experience |
| --- | --- |
| 🏪 **Storefront** | Home page, featured products, latest products, deals, popular brands, categories, and promotional sections |
| 🔎 **Discovery** | Product search, category browsing, shop filters, sorting/layout controls, pagination, and related products |
| 💊 **Product details** | Image gallery, pricing and discount information, stock status, ratings, ingredients, benefits, care instructions, and sharing |
| 🛒 **Shopping flow** | Add/remove products, quantity controls, persisted cart, subtotal/tax/shipping calculation, and checkout form validation |
| ❤️ **Personalization** | Authenticated wishlist/favorites and cart synchronization through Firestore |
| 🔐 **Accounts** | Email/password sign-up and login with Firebase Authentication, profile image upload, and persisted session state |
| 📍 **Support pages** | About, FAQ, contact form, contact information, and an interactive Leaflet map |
| 📱 **Responsive UI** | Desktop and mobile navigation, responsive product layouts, carousels, toast feedback, and accessible loading/error/empty states |

> **Scope note:** This repository is a frontend application and learning/demo storefront. The product catalog is bundled from [`data.json`](./data.json), and checkout currently uses a mock order mutation rather than a payment gateway.

## 🧱 Architecture

Medical Care is a single-page application (SPA) with a small, feature-oriented component structure:

```text
src/
├── App.jsx                         # Route map and global toast/scroll behavior
├── main.jsx                        # React root, Redux, persistence, and router providers
├── index.css                       # Global styles and design tokens
└── components/
    ├── HomePage/                   # Hero, categories, deals, brands, reviews, features
    ├── shop/                       # Catalog pages, product lists, filters, and views
    ├── productPage/                # Product detail sections and actions
    ├── search/                     # Search input and result pages
    ├── cart/                       # Cart display, quantity changes, and order summary
    ├── checkout/                   # Checkout form, validation, and cart summary
    ├── wishList/                   # Wishlist display and removal actions
    ├── registerPages/              # Login, sign-up, validation, and auth tabs
    ├── firebase/                   # Firebase app, Authentication, and Firestore clients
    ├── cloudinary/                 # Profile image upload helper
    ├── store/                      # Redux store, persistence, and RTK Query API slice
    ├── reducers/                   # Logged-in user state
    ├── header/ and footer/          # Shared application shell
    ├── aboutUs/, faq/, ContactUs/   # Informational and support pages
    ├── filter/                     # Reusable catalog filters
    ├── customHook/                 # Shared cart/wishlist and UI hooks
    └── relatedProducts/             # Product recommendations
```

### Data and state flow

1. `main.jsx` mounts the app with `BrowserRouter`, Redux `Provider`, and `PersistGate`.
2. `store/apiSlice.jsx` exposes RTK Query hooks and reads the bundled `product` collection from `data.json`.
3. Product pages and catalog components consume `useGetProductsQuery`.
4. Firebase Authentication identifies the current user.
5. Firestore stores the user profile, `cart`, and `wishlist` arrays.
6. `redux-persist` keeps the logged-in user slice in browser storage between reloads.
7. `react-hot-toast` and SweetAlert provide success, error, and confirmation feedback.

## 🗺️ Application routes

| Route | Purpose |
| --- | --- |
| `/` | Home storefront |
| `/auth` | Login and registration |
| `/shop/:pageTitle` | Shop/catalog view |
| `/categories/:pageTitle` | Category-filtered catalog |
| `/product/:id/:slug` | Product details |
| `/Search/:query` | Search results |
| `/cart` | Shopping cart |
| `/favorites` | Wishlist |
| `/checkout` | Checkout |
| `/elements/about` | About the team/company |
| `/elements/fAQ` | Frequently asked questions |
| `/elements/contact` | Contact form and map |

All normal routes render inside the shared `UserInterface` shell, which provides the navigation, header, page outlet, and footer. Unknown routes render a simple not-found view.

## 🛠️ Tech stack

- **UI:** React 19, React Router 7, Material UI, Emotion
- **State:** Redux Toolkit, RTK Query, Redux Persist
- **Validation:** React Hook Form, Zod, `@hookform/resolvers`
- **Authentication and persistence:** Firebase Auth and Firestore
- **Maps:** React Leaflet and Leaflet
- **Media:** Cloudinary upload helper
- **Interaction:** Framer Motion, Motion, Swiper, React Hot Toast, SweetAlert2
- **Tooling:** Vite, ESLint, Vercel configuration

## 🚀 Getting started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer
- A Firebase project if you need to test authentication, cart, wishlist, or checkout persistence
- A Cloudinary upload preset if you need to test profile image uploads

### Installation

```bash
git clone https://github.com/Eslam6104/Medical-Care-master.git
cd Medical-Care-master
npm install
```

### Start development

```bash
npm run dev
```

The configured script starts Vite and attempts to start `json-server` on port `8000`. The current product implementation imports [`data.json`](./data.json) directly, so the JSON server is not required by the RTK Query product flow. If `npm run dev` reports that `json-server` is unavailable, run Vite directly:

```bash
npx vite
```

The Vite development server is normally available at [http://localhost:5173](http://localhost:5173).

### Production build and preview

```bash
npm run build
npm run preview
```

## 🔐 Configuration and integrations

The repository includes local environment files for development. Do not commit real credentials or tokens. Use `.env.local` for Vite variables and keep it ignored by Git.

| Integration | What it provides | Where it is wired |
| --- | --- | --- |
| Firebase | Email/password auth and Firestore user documents | [`src/components/firebase/firebase.jsx`](./src/components/firebase/firebase.jsx) |
| Cloudinary | Profile image upload during registration | [`src/components/cloudinary/uploadImageToCloudinary.jsx`](./src/components/cloudinary/uploadImageToCloudinary.jsx) |
| Leaflet | Contact-page map | [`src/components/ContactUs/LeafletMap.jsx`](./src/components/ContactUs/LeafletMap.jsx) |
| Local catalog | Product and merchandising content | [`data.json`](./data.json), [`src/components/store/apiSlice.jsx`](./src/components/store/apiSlice.jsx) |

Before deploying, move service configuration to environment variables, configure Firebase Authentication/Firestore security rules, and replace the mock checkout mutation with a trusted server-side order/payment integration.

## 📜 Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite and the configured local JSON server concurrently |
| `npm run build` | Create the optimized production bundle in `dist/` |
| `npm run preview` | Serve the production bundle locally |
| `npm run lint` | Run ESLint across the project |

## 🧪 Quality checklist

Before opening a pull request:

```bash
npm run lint
npm run build
```

When changing a user flow, also manually verify:

- Logged-out and logged-in cart behavior
- Wishlist add/remove behavior
- Product search, category filters, and deep links
- Checkout validation and empty-cart states
- Mobile navigation and responsive layouts
- A hard refresh on a nested route in the deployed SPA

## 🤝 Contributing

1. Create a focused branch from the default branch.
2. Keep changes scoped to one feature or fix.
3. Follow the existing component/module patterns and naming style.
4. Do not commit secrets, generated `dist/` output, or local environment files.
5. Run `npm run lint` and `npm run build`.
6. Open a pull request with a concise summary, screenshots for UI changes, and test steps.

## ⚠️ Production considerations

- Checkout submission is currently mocked and does not charge a payment method.
- Product data is static and bundled at build time.
- Firebase configuration is currently initialized in the client; enforce strict Firestore rules and rotate exposed credentials as appropriate.
- The Vercel SPA rewrite is defined in [`vercel.json`](./vercel.json) so nested client-side routes resolve to `index.html`.
- Medical content is for the application demo only and should not replace advice from a qualified healthcare professional.

## 📄 License

No license file is currently included. Add a `LICENSE` file before distributing this project outside its original repository.

<div align="center">

  **Built with care for a simpler healthcare shopping experience.**

</div>
