# For English scroll down

# 10x დასკვნითი გამოცდა - ელექტრონული კომერციის პლატფორმა

თანამედროვე, React-ზე დაფუძნებული ელექტრონული კომერციის პლატფორმა, რომელიც აწყობილია Vite-ით. მას აქვს მომხმარებლის ავთენტიფიკაცია, პროდუქტის დათვალიერება, ძიების ფუნქციონალი და ადაპტური დიზაინი.

## 🚀 სწრაფი დაწყება

### წინაპირობები

- Node.js (ვერსია 16 ან უფრო მაღალი)
- npm ან yarn პაკეტის მენეჯერი

### ინსტალაცია და დაყენება

1. **რეპოზიტორიის კლონირება**

   ```bash
   git clone <repository-url>
   cd 10x-final-exam
   ```

2. **დამოკიდებულებების ინსტალაცია**

   ```bash
   npm install
   ```

3. **განვითარების სერვერის გაშვება**

   ```bash
   npm run dev
   ```

4. **ბრაუზერის გახსნა**
   გადადით `http://localhost:5173` მისამართზე აპლიკაციის სანახავად

### პროდუქციისთვის აწყობა

```bash
npm run build
```

### პროდუქციის აწყობის წინასწარი ნახვა

```bash
npm run preview
```

## 📋 პროექტის მიმოხილვა

ეს ელექტრონული კომერციის პლატფორმა ახორციელებს ონლაინ შოპინგისთვის საჭირო ფუნქციების ყოვლისმომცველ კომპლექტს, მათ შორის მომხმარებლის ავთენტიფიკაცია, პროდუქტის დათვალიერება, ძიების ფუნქციონალი და ადაპტური დიზაინი.

## ✅ განხორციელებული ფუნქციები

### 🔐 ავთენტიფიკაცია და რეგისტრაცია (US-01, US-02)

**✅ დასრულებული ფუნქციები:**

- **შესვლის გვერდი** (`/login` მოდალის მეშვეობით)

  - ელ-ფოსტისა და პაროლის ავთენტიფიკაცია
  - ფორმის ვალიდაცია Zod სქემით
  - პაროლის ხილვადობის გადართვა
  - შეცდომების დამუშავება და ჩვენება
  - სიმულირებული 1-წამიანი დატვირთვის დაგვიანება
  - ავტომატური გადამისამართება მთავარ გვერდზე წარმატების შემთხვევაში

- **რეგისტრაციის გვერდი** (`/register` მოდალის მეშვეობით)

  - სახელის, ელ-ფოსტისა და პაროლის ველები
  - პაროლის დადასტურების ვალიდაცია
  - რეალურ დროში ფორმის ვალიდაცია
  - ელ-ფოსტის ფორმატის ვალიდაცია (მხოლოდ Gmail)
  - პაროლის მინიმალური სიგრძე (6 სიმბოლო)
  - წარმატების შეტყობინება და ავტომატური გადამისამართება

- **ავთენტიფიკაციის კონტექსტი**
  - გლობალური მდგომარეობის მართვა React Context-ით
  - Cookie-ზე დაფუძნებული სესიის შენახვა (7-დღიანი ვადა)
  - ავტომატური შესვლის მდგომარეობის აღდგენა
  - უსაფრთხო პაროლის ვალიდაცია

**❌ გამოტოვებული ფუნქციები:**

- Google შესვლის ღილაკი (US-03) - არ არის განხორციელებული
- პაროლის აღდგენის ფუნქციონალი
- OTP ვერიფიკაცია
- "დამახსოვრება" ფუნქციონალი

### 🛍️ პროდუქტის მართვა

**✅ დასრულებული ფუნქციები:**

- **პროდუქტის დეტალების გვერდი** (`/product/:id`)

  - დინამიური პროდუქტის ინფორმაციის ჩვენება
  - პროდუქტის სურათები, ფასები და აღწერები
  - ფერისა და შენახვის ოფციების არჩევა
  - ტექნიკური მახასიათებლების ჩვენება
  - "კალათაში დამატება" და "სურვილების სიაში დამატება" ღილაკები
  - უკან ნავიგაციის ფუნქციონალი
  - ადაპტური დიზაინი

- **პროდუქტის დათვალიერება**

  - კატეგორიაზე დაფუძნებული ფილტრაცია (`/category/:categoryName`)
  - ბრენდის ფილტრაცია კატეგორიების ფარგლებში
  - პროდუქტის ბადის განლაგება
  - "პროდუქტები ვერ მოიძებნა" ცარიელი მდგომარეობა

- **ძიების ფუნქციონალი** (US-09)
  - რეალურ დროში პროდუქტის ძიება
  - რეგისტრის მიუხედავად ნაწილობრივი შესატყობის
  - ძიების შედეგების ჩამოსაშვები მენიუ
  - "შესაბამისი პროდუქტები ვერ მოიძებნა" შეტყობინება
  - ძიების დახურვა გარეთ დაწკაპუნებით

**✅ დამატებული ფუნქციები:**

- **კალათის სრული ფუნქციონალი** (`/shopping_cart`)
  - კალათის ელემენტების ნახვა და მართვა
  - რაოდენობის შეცვლა (+/- ღილაკებით)
  - ელემენტების წაშლა კალათიდან
  - ჯამური ფასის გაანგარიშება (ქვეჯამი, გადასახადი, მიწოდება)
  - ცარიელი კალათის მდგომარეობის დამუშავება
  - localStorage-ზე დაფუძნებული მონაცემების შენახვა

- **ავთენტიფიკაციის მოთხოვნა**
  - არაავთენტიფიცირებული მომხმარებლებისთვის კალათის წვდომის შეზღუდვა
  - ავთენტიფიკაციის მოთხოვნის მოდალური ფანჯარა
  - რეგისტრაციაზე/შესვლაზე მიმართვა

**❌ გამოტოვებული ფუნქციები:**
- Google შესვლის ღილაკი (US-03) - არ არის განხორციელებული
- გადახდის პროცესი (US-16, US-17, US-18)
- მომხმარებლის პროფილის მართვა (US-19, US-20)

### 🎨 მომხმარებლის ინტერფეისი და გამოცდილება

**✅ დასრულებული ფუნქციები:**

- **ადაპტური დიზაინი** (US-04)

  - მობილურ-პირველი მიდგომა
  - პლანშეტისა და დესკტოპის ოპტიმიზაცია
  - თანმიმდევრული ინტერვალები და ტიპოგრაფია
  - Swiper.js ინტეგრაცია მობილური კაროსელებისთვის

- **ნავიგაცია**

  - ჰედერი ძიებით, კალათითა და მომხმარებლის მენიუთი
  - ფუტერი სერვისებისა და დახმარების ლინკებით
  - ნავიგაციის ბრედკრამბი
  - გლუვი გვერდის გადასვლები

- **შეცდომების დამუშავება** (US-21)
  - 404 არ მოიძებნა გვერდი (`/error`)
  - "მთავარ გვერდზე დაბრუნება" ნავიგაცია
  - მოწყობილი შეცდომის მდგომარეობები

**❌ გამოტოვებული ფუნქციები:**

- ცარიელი კალათის მდგომარეობის დამუშავება
- ძიების/ფილტრაციისთვის შედეგების გარეშე გვერდები

### 🏪 მაღაზიის ფუნქციები

**✅ დასრულებული ფუნქციები:**

- **კატეგორიის ფილტრაცია** (US-08)

  - დინამიური კატეგორიის გვერდები
  - ბრენდის ფილტრაცია კატეგორიების ფარგლებში
  - რეალურ დროში ფილტრის განახლებები
  - "ელემენტები ვერ მოიძებნა" შეტყობინებები

- **პროდუქტის ჩვენება**
  - ახალი ჩამოსული პროდუქტების სექცია
  - ყველაზე გაყიდვადი პროდუქტების სექცია
  - რეკომენდებული პროდუქტების სექცია
  - ფასდაკლების პროდუქტების სექცია
  - პოპულარული ელემენტების კაროსელი

**❌ გამოტოვებული ფუნქციები:**

- პაგინაცია/მეტის ჩატვირთვის ფუნქციონალი (US-10)
- კალათის მართვა (US-13, US-14, US-15)
- გადახდის პროცესი (US-16, US-17, US-18)
- მომხმარებლის პროფილის მართვა (US-19, US-20)

## 🛠️ ტექნიკური სტეკი

- **ფრონტენდ ფრეიმვორკი:** React 19.1.1
- **აწყობის ინსტრუმენტი:** Vite 7.1.2
- **როუტინგი:** React Router DOM 7.8.1
- **სტილიზაცია:** SCSS/Sass
- **მდგომარეობის მართვა:** React Context API
- **ფორმის ვალიდაცია:** Zod 4.0.17
- **იკონები:** React Icons 5.5.0
- **კაროსელი:** Swiper.js 11.2.10
- **Cookie-ები:** js-cookie 3.0.5
- **ლინტინგი:** ESLint 9.33.0

## 📁 პროექტის სტრუქტურა

```
src/
├── components/
│   ├── Authorization/          # შესვლა/რეგისტრაციის კომპონენტები
│   ├── BrowseCategory/         # კატეგორიის ფილტრაცია
│   ├── Cart/                   # პროდუქტის კარტები (მხოლოდ ჩვენება)
│   ├── Context/                # გლობალური მდგომარეობის მართვა
│   ├── Footer/                 # ფუტერის კომპონენტები
│   ├── Header/                 # ნავიგაცია და ძიება
│   ├── Main/                   # მთავარი გვერდის კომპონენტები
│   ├── ProductDetails/         # პროდუქტის დეტალების გვერდები
│   ├── Services/               # სერვისების გვერდები
│   └── User/                   # მომხმარებლის პროფილი (პლეისჰოლდერი)
├── assets/                     # სტატიკური ასეტები
├── App.jsx                     # მთავარი აპლიკაციის კომპონენტი
├── main.jsx                    # აპლიკაციის შესვლის წერტილი
└── index.scss                  # გლობალური სტილები
```

## 🎯 დავალების შესრულების სტატუსი

### ✅ დასრულებული დავალებები (12/22)

- US-01: შესვლის გვერდი (ელ-ფოსტა და პაროლი)
- US-02: რეგისტრაციის გვერდი (ელ-ფოსტა, პაროლი, დადასტურება)
- US-04: ადაპტური ავთენტიფიკაციის განლაგება
- US-08: კატეგორიის ფილტრი (ძირითადი)
- US-09: ძიების ზოლი
- US-12: კალათაში დამატების ღილაკი (ფუნქციონალური) ✅
- US-13: კალათის ელემენტების ნახვა ✅
- US-14: რაოდენობის შეცვლა / ელემენტების წაშლა ✅
- US-15: კალათის ჯამური გაანგარიშება ✅
- US-21: 404 არ მოიძებნა გვერდი
- US-22: ცარიელი კალათა / შედეგების გარეშე გვერდები ✅
- პროდუქტის დეტალების გვერდი (სრული)
- ძიების ფუნქციონალი
- ავთენტიფიკაციის მოთხოვნა ✅

### ❌ გამოტოვებული დავალებები (10/22)

- US-03: Google შესვლის ღილაკი
- US-10: მეტის ჩატვირთვა / პაგინაცია
- US-16: მიწოდების ფორმა (ძირითადი)
- US-17: გადახდის მეთოდის არჩევა
- US-18: შეკვეთის დადასტურების ეკრანი
- US-19: პროფილის ნახვა/რედაქტირება
- US-20: შეკვეთების ისტორიის ნახვა
- გადახდის პროცესი
- პაგინაცია/მეტის ჩატვირთვა
- მომხმარებლის პროფილის მართვა

## 🔧 განვითარების ბრძანებები

```bash
# განვითარების სერვერის გაშვება
npm run dev

# პროდუქციისთვის აწყობა
npm run build

# პროდუქციის აწყობის წინასწარი ნახვა
npm run preview

# ლინტერის გაშვება
npm run lint
```

## 🌐 ხელმისაწვდომი როუტები

- `/` - მთავარი გვერდი
- `/about` - ჩვენ შესახებ გვერდი
- `/contact` - კონტაქტის გვერდი
- `/blog` - ბლოგის გვერდი
- `/category/:categoryName` - კატეგორიის გვერდები
- `/product/:id` - პროდუქტის დეტალები
- `/shopping_cart` - კალათის გვერდი ✅
- `/account` - მომხმარებლის ანგარიში (პლეისჰოლდერი)
- `/error` - 404 არ მოიძებნა გვერდი
- სხვადასხვა სერვისების გვერდები (ბონუს პროგრამები, საჩუქრები და ა.შ.)

## 🎨 დიზაინის ფუნქციები

- **თანამედროვე UI/UX:** სუფთა, პროფესიონალური დიზაინი
- **ადაპტური განლაგება:** მობილურ-პირველი მიდგომა
- **ინტერაქტიული ელემენტები:** ჰოვერის ეფექტები, გლუვი გადასვლები
- **შესაძლებლობები:** სწორი ფორმის ლეიბლები და ARIA ატრიბუტები
- **დატვირთვის მდგომარეობები:** სიმულირებული დატვირთვა ვიზუალური უკუკავშირით

## 📱 ბრაუზერის მხარდაჭერა

- Chrome (უკანასკნელი)
- Firefox (უკანასკნელი)
- Safari (უკანასკნელი)
- Edge (უკანასკნელი)

## 🚀 დეპლოიმენტი

პროექტი კონფიგურირებულია Vercel-ზე დეპლოიმენტისთვის ჩართული `vercel.json` კონფიგურაციის ფაილით.

## 📝 შენიშვნები

- ავთენტიფიკაცია სიმულირებულია cookie-ებისა და ლოკალური მდგომარეობის გამოყენებით
- პროდუქტის მონაცემები იტვირთება `public/data.json`-დან
- ყველა API გამოძახება სიმულირებულია setTimeout დაგვიანებით
- პროექტი ფოკუსირებულია ფრონტენდ ფუნქციონალზე ბექენდის ინტეგრაციის გარეშე
- ზოგიერთი ფუნქცია აჩვენებს "მოვლის სამუშაოები მიმდინარეობს" პლეისჰოლდერებს

## 🤝 წვლილი

ეს არის დასკვნითი გამოცდის პროექტი. კითხვების ან პრობლემების შემთხვევაში, გთხოვთ მიმართოთ პროექტის დოკუმენტაციას ან დაუკავშირდეთ განვითარების გუნდს.

---

**პროექტის სტატუსი:** 55% დასრულებული (12/22 დავალება განხორციელებული)
**ბოლო განახლება:** სექტემბერი 2025

# 10x Final Exam - E-commerce Platform

A modern React-based e-commerce platform built with Vite, featuring user authentication, product browsing, search functionality, and responsive design.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd 10x-final-exam
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📋 Project Overview

This e-commerce platform implements a comprehensive set of features for online shopping, including user authentication, product browsing, search functionality, and responsive design.

## ✅ Implemented Features

### 🔐 Authentication & Registration (US-01, US-02)

**✅ Completed Features:**

- **Login Page** (`/login` via modal)

  - Email and password authentication
  - Form validation with Zod schema
  - Password visibility toggle
  - Error handling and display
  - Simulated 1-second loading delay
  - Auto-redirect to home page on success

- **Registration Page** (`/register` via modal)

  - Name, email, and password fields
  - Confirm password validation
  - Real-time form validation
  - Email format validation (Gmail only)
  - Password minimum length (6 characters)
  - Success message and auto-redirect

- **Authentication Context**
  - Global state management with React Context
  - Cookie-based session persistence (7-day expiry)
  - Automatic login state restoration
  - Secure password validation

**❌ Missing Features:**

- Google Login button (US-03) - Not implemented
- Password reset functionality
- OTP verification
- Remember me functionality

### 🛍️ Product Management

**✅ Completed Features:**

- **Product Details Page** (`/product/:id`)

  - Dynamic product information display
  - Product images, pricing, and descriptions
  - Color and storage options selection
  - Technical specifications display
  - "Add to Cart" and "Add to Wishlist" buttons
  - Back navigation functionality
  - Responsive design

- **Product Browsing**

  - Category-based filtering (`/category/:categoryName`)
  - Brand filtering within categories
  - Product grid layout
  - "No products found" empty state

- **Search Functionality** (US-09)
  - Real-time product search
  - Case-insensitive partial matching
  - Search results dropdown
  - "No matching products" message
  - Click outside to close search

**✅ New Features Added:**

- **Complete Cart Functionality** (`/shopping_cart`)
  - View and manage cart items
  - Quantity adjustment with +/- controls
  - Remove items from cart
  - Total price calculation (subtotal, tax, shipping)
  - Empty cart state handling
  - localStorage-based data persistence

- **Authentication Required Component**
  - Restrict cart access for unauthenticated users
  - Modal prompt for authentication requirement
  - Redirect to registration/login

**❌ Missing Features:**
- Google Login button (US-03) - Not implemented
- Checkout process (US-16, US-17, US-18)
- User profile management (US-19, US-20)

### 🎨 User Interface & Experience

**✅ Completed Features:**

- **Responsive Design** (US-04)

  - Mobile-first approach
  - Tablet and desktop optimization
  - Consistent spacing and typography
  - Swiper.js integration for mobile carousels

- **Navigation**

  - Header with search, cart, and user menu
  - Footer with services and assistance links
  - Breadcrumb navigation
  - Smooth page transitions

- **Error Handling** (US-21)
  - 404 Not Found page (`/error`)
  - "Back to home" navigation
  - Graceful error states

**❌ Missing Features:**

- Empty cart state handling
- No results pages for search/filtering

### 🏪 Shop Features

**✅ Completed Features:**

- **Category Filtering** (US-08)

  - Dynamic category pages
  - Brand filtering within categories
  - Real-time filter updates
  - "No items found" messages

- **Product Display**
  - New Arrival products section
  - Bestseller products section
  - Featured products section
  - Discount products section
  - Popular items carousel

**❌ Missing Features:**

- Pagination/Load More functionality (US-10)
- Cart management (US-13, US-14, US-15)
- Checkout process (US-16, US-17, US-18)
- User profile management (US-19, US-20)

## 🛠️ Technical Stack

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.2
- **Routing:** React Router DOM 7.8.1
- **Styling:** SCSS/Sass
- **State Management:** React Context API
- **Form Validation:** Zod 4.0.17
- **Icons:** React Icons 5.5.0
- **Carousel:** Swiper.js 11.2.10
- **Cookies:** js-cookie 3.0.5
- **Linting:** ESLint 9.33.0

## 📁 Project Structure

```
src/
├── components/
│   ├── Authorization/          # Login/Registration components
│   ├── BrowseCategory/         # Category filtering
│   ├── Cart/                   # Product cards (display only)
│   ├── Context/                # Global state management
│   ├── Footer/                 # Footer components
│   ├── Header/                 # Navigation and search
│   ├── Main/                   # Home page components
│   ├── ProductDetails/         # Product detail pages
│   ├── Services/               # Service pages
│   └── User/                   # User profile (placeholder)
├── assets/                     # Static assets
├── App.jsx                     # Main app component
├── main.jsx                    # Application entry point
└── index.scss                  # Global styles
```

## 🎯 Task Completion Status

### ✅ Completed Tasks (12/22)

- US-01: Login Page (Email & Password)
- US-02: Registration Page (Email, Password, Confirm)
- US-04: Responsive Auth Layout
- US-08: Category Filter (Basic)
- US-09: Search Bar
- US-12: Add to Cart Button (Functional) ✅
- US-13: View Cart Items ✅
- US-14: Change Quantity / Remove Items ✅
- US-15: Cart Total Calculation ✅
- US-21: 404 Not Found Page
- US-22: Empty Cart / No Results Pages ✅
- Product Details Page (Complete)
- Search Functionality
- Authentication Required Component ✅

### ❌ Missing Tasks (10/22)

- US-03: Google Login Button
- US-10: Load More / Pagination
- US-16: Shipping Form (Basic)
- US-17: Payment Method Selection
- US-18: Order Confirmation Screen
- US-19: View/Edit Profile
- US-20: View Order History
- Checkout Process
- Pagination/Load More
- User Profile Management

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🌐 Available Routes

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/blog` - Blog page
- `/category/:categoryName` - Category pages
- `/product/:id` - Product details
- `/shopping_cart` - Shopping cart page ✅
- `/account` - User account (placeholder)
- `/error` - 404 Not Found page
- Various service pages (bonus programs, gifts, etc.)

## 🎨 Design Features

- **Modern UI/UX:** Clean, professional design
- **Responsive Layout:** Mobile-first approach
- **Interactive Elements:** Hover effects, smooth transitions
- **Accessibility:** Proper form labels and ARIA attributes
- **Loading States:** Simulated loading with visual feedback

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

The project is configured for deployment on Vercel with the included `vercel.json` configuration file.

## 📝 Notes

- Authentication is simulated using cookies and local state
- Product data is loaded from `public/data.json`
- All API calls are simulated with setTimeout delays
- The project focuses on frontend functionality without backend integration
- Some features show "Maintenance work in progress" placeholders

## 🤝 Contributing

This is a final exam project. For questions or issues, please refer to the project documentation or contact the development team.

---

**Project Status:** 55% Complete (12/22 tasks implemented)
**Last Updated:** September 2025
