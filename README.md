# The Global Kitchen API

## Tech Stack
- **Runtime:** Node Version
- **Framework:**
- **Database:**
- **Configuration:**

## Features
**Full CRUD Operations** — Create, read, update, and delete recipes via a RESTful API
- **Category Filtering** — Filter recipes by category using query parameters
- **MongoDB Integration** — Persistent data storage using Mongoose with a well-defined schema
- **Schema Validation** — Enforces data integrity with required fields, enums, min values, and trimming
- **Automatic Timestamps** — Every recipe tracks `createdAt` and `updatedAt` using proper Date types
- **Non-Blocking I/O** — All database operations use `async/await` to keep the Event Loop free
- **Global Error Handling** — Centralized error handler returns proper HTTP status codes (404, 500) instead of crashing
- **3-Tier Architecture** — Clean separation of concerns across Routes, Controllers, Services, and Models
- **Environment Variables** — Sensitive config (DB URI, PORT) stored securely in `.env`

## Installation & Setup
1. Clone the repository:
```bash
git clone [your-repo-url]```
2. Install dependencies
3. Create a .env file in the root directory and add
4. Start the server