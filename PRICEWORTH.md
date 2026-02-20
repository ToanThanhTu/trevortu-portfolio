# PriceWorth Furniture E-commerce Platform

Full-stack, multi-tenant furniture e-commerce platform with customer storefront, admin dashboard, and RESTful API backend. Production deployment serving Australian market with Azure cloud-native infrastructure.

---

## 1. Frontend Architecture

- Built with **Next.js 16** (App Router, Server Components) and **React 19** using **TypeScript 5** in strict mode
- **Redux Toolkit** for centralized state management (cart, authentication, products), **Tailwind CSS 4** for responsive UI
- Integrated **multi-payment processing**: PayPal, Zip (BNPL), CommBank 3DS authentication
- Dynamic **SEO optimization** with auto-generated sitemaps, structured data schemas, and product feeds on build
- **Server-side rendering (SSR)** for product pages, **Incremental Static Regeneration (ISR)** for category listings

## 2. Backend & API

- **NestJS 11** microservices-style architecture with **17 feature modules** (products, orders, reviews, cart, shipping, blog, etc.)
- **TypeORM** with **MySQL** database, **Redis** for session management and query caching
- **JWT authentication** with bcrypt password hashing, role-based access control (customer/admin)
- **Rate limiting**, Helmet security headers, CORS allowlisting, input validation via class-validator DTOs
- **Swagger/OpenAPI** documentation at `/api-docs`, **Winston logging** with daily rotation, health check endpoints

## 3. Cloud Infrastructure & DevOps

- **Azure-native deployment**: Container Apps (frontend/admin), App Service (API), MySQL, Redis - all in Australia East region
- **AWS services**: S3 with CloudFront CDN (image hosting), DynamoDB (order tracking with flexible schema)
- **GitHub Actions CI/CD**: Multi-stage Docker builds → Azure Container Registry → automated deployment on `main` branch push
- **Azure Application Insights** for distributed tracing, performance monitoring, and real-time error tracking
- **Docker containerization** with multi-stage builds, pnpm package manager, standalone Next.js output for production

## 4. Integrations & Services

- **Microsoft Business Central** API integration for real-time inventory synchronization and SKU management
- **SendGrid** transactional emails (order confirmations, password resets), **Twilio** SMS verification
- **Separate admin dashboard** (Next.js 14 + Ant Design 5) with order management, product CRUD, analytics charts (ApexCharts), low-stock alerts
- **Firebase** analytics, **Google Analytics 4**, Tawk.to live chat, direct browser-to-S3 uploads with presigned URLs
- Search functionality with **Elasticsearch**, newsletter management with email tracking analytics

---

## Tech Stack Summary

**Frontend**: Next.js 16, React 19, TypeScript 5, Redux Toolkit, Tailwind CSS 4
**Backend**: NestJS 11, TypeORM, MySQL, Redis
**Cloud**: Azure (Container Apps, App Service, Application Insights), AWS (S3, DynamoDB)
**DevOps**: Docker, GitHub Actions, Azure Container Registry
**Integrations**: Microsoft Business Central, PayPal, Zip, SendGrid, Twilio, Firebase, Google Analytics

---

## Architecture

3 independent applications (customer frontend, admin dashboard, API backend) with containerized deployments and hybrid Azure/AWS cloud infrastructure

---

## Project Stats

- 17 backend feature modules
- 30+ frontend pages (checkout, product detail, blog, account management)
- 100% TypeScript coverage (strict mode)
- Multi-environment setup (development, UAT, production)
- Auto-scaling container-based architecture
