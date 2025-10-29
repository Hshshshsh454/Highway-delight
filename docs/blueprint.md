# **App Name**: highway delight

## Core Features:

- Experience Listings: Display a curated list of experiences with images, descriptions, and pricing.
- Location Filtering: Allow users to filter experiences by location (e.g., Udupi, Bangalore, Coorg, Manali, Sunderban).
- Search Experiences: Enable users to search for specific experiences using keywords.
- Detailed View: Show a detailed view of each experience, including full description, images, and booking options.

## Style Guidelines:

- Primary color: Vibrant orange (#FF8C00), inspired by sunsets and adventure.
- Background color: Light orange (#FFF3E0), providing a warm, inviting backdrop.
- Accent color: Yellow-orange (#FFA500) to highlight interactive elements.
- Font: 'PT Sans' for both headlines and body text, offering a modern and readable appearance.
- Use simple, visually appealing icons representing different types of experiences.
- Card-based layout to showcase experiences, as displayed in the reference image.
- Subtle transition effects when loading experience details to enhance user engagement. Here’s a quick breakdown of what this screen is doing and how you can implement it in your web app:

  ---

  ### 🎯 **Page Purpose**

  This is the **Experience Details + Slot Selection** page — where the user:
  1. Reads about the experience (title, description, price).

  2. Picks a **date** and **time slot**.

  3. Sees remaining availability (e.g., “4 left”, “Sold out”).

  4. Proceeds to checkout (quantity, subtotal, taxes, total).

  ---

  ### ⚙️ **Core Functionalities**

  FeatureDescriptionImplementation**Experience info**Title, image, description, priceFetch from `/api/experiences/:slug`**Choose date**Available dates for the experienceRender from slot list filtered by date**Choose time**Time slots with availabilityEach slot has a capacity field (show remaining)**Price calculation**Price × Quantity + TaxesClient-side computation (recalculate on change)**Confirm button**Proceed to booking/checkoutPOST `/api/bookings` with chosen slot & quantity