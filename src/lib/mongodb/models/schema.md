# 📦 MongoDB Driver Usage (Schema-less)

This project uses the official **MongoDB driver (`mongodb`)** for direct database access.  
Unlike Mongoose, the driver is *schema-less*—documents can have varying structures.  
To keep track of the logical schemas we use across collections, this doc serves as a reference.

---

## 🗂️ Collections Overview

### 1. `expenses`

**Purpose:** Tracks monthly expenses (operational or personal).

**Example fields:**
```json
{
    "month": "september",
    "title": "Electricity Bill",
    "amount": 1200,
    "category": "Utilities",
    "date": "2025-10-01T00:00:00Z"
}
```

---

### 2. `fees`

**Purpose:** Records monthly fees (e.g., maintenance, subscriptions, service charges).

**Example fields:**
```json
{
    "name": "manikandaraja",
    "amount": 250,
    "month": "September",
    "status": "paid",
    "paidOn": "2025-09-05T00:00:00Z",
    "plotno": "121",
    "phone": "6382817065",
}
```

---

### 3. `member`

**Purpose:** Stores details of lead post members (residents / users / tenants).

**Example fields:**
```json
{
    "name": "Naveen Rajan",
    "email": "naveen@example.com",
    "phone": "+91-9876543210",
    "role": "Lead",
    "joinedOn": "2025-01-15T00:00:00Z"
}
```

---

## ⚡ Notes

- MongoDB driver does **not enforce schemas**—you are responsible for maintaining consistency.
- This doc acts as a schema reference for developers.
