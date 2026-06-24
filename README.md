# 🇳🇬 NaijaFash

NaijaFash is a curated, high-end e-commerce platform dedicated to showcasing an elite array of contemporary Nigerian fashion brands. Blending raw streetwear aesthetics with luxury high-fashion elements, the platform features premium limited-edition collections, heavy cotton cuts, custom graphics, and bold alté statement pieces designed to break traditional boundaries.

---

## 🚀 Tech Stack

- **Frontend Framework:** Next.js (App Router, Turbopack)
- **Styling:** Tailwind CSS (featuring a high-contrast Neon Green `#00D865` design language)
- **State & Routing:** React Context API & Native Next.js Navigation
- **Backend Environment:** PHP / Apache (Local staging via XAMPP)
- **Database Management:** MySQL (Secure relational structure for customer data and inventory)

---

## 🛠️ Features

- **Dynamic Showcase UI:** High-impact, responsive grid components (`FeaturedProduct`, `HomeProducts`) featuring fluid image animations and hover states.
- **Interactive Multi-brand Cart:** Context-driven shopping cart management displaying item counts, adaptive currency configurations, real-time breakdown computation (subtotal, shipping, and a 2% custom local tax).
- **Comprehensive Vendor/Seller Dashboard:** Secure, isolated internal panels with sidebar routing for seamlessly adding items, modifying active product arrays, and tracking orders.
- **Seamless Drop Subscriptions:** High-contrast, interactive newsletter module built for capturing fast-paced customer engagement before limited-edition collection drops.

---

## 📂 Project Structure

```text
├── app/
│   ├── seller/
│   │   ├── layout.jsx        # Vendor admin isolated layout
│   │   ├── page.jsx          # "Add Product" management module
│   │   ├── product-list/     # Active catalog listing matrix
│   │   └── orders/           # Operational order tracking view
├── components/
│   ├── Navbar/
│   │   └── logong.jsx        # Unified brand identity component
│   ├── seller/
│   │   └── Navbar.jsx        # Dedicated seller dashboard layout
│   ├── FeaturedProduct.jsx   # Curated premium drop grids
│   ├── HomeProducts.jsx      # High-density popular item components
│   ├── ProductCard.jsx       # Individual dynamic item showcase nodes
│   ├── OrderSummary.jsx      # Address configurations and real-time ledger
│   └── NewsLetter.jsx        # Subscriber engagement banner
├── context/
│   └── AppContext.jsx        # Unified application runtime state
└── public/
    └── assets/               # Localized vector iconography and design assets