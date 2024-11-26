# API Documentation

This document outlines the API endpoints for user-interface related operations.

## Base URL

The base URL for all API endpoints is:

```arduino
127.0.0.1:3000
```

## Endpoints

### 1. Login

URL:
GET /api/v1/signin

Description:
Allows a user to log in by providing username or email and password.

#### Request Body:

```json
{
  "userORemail": "user@example.com",
  "pwd": "yourpassword"
}
```

#### Response:

- On success:

```json
{
  "status": "success",
  "data": {
    "user": {
      "memid": "5dcd17e4-e2cd-4eb2-8d73-e89abff1849a",
      "username": "sathi",
      "full_name": "sathish",
      "email": "sathish.s@cli.in",
      "phoneno": "7639750827",
      "address": "chennai",
      "dob": "1995-03-14",
      "country": "india",
      "pwd": "12345",
      "photo_loc": "http//",
      "bio": "xxxxxx",
      "regdate": "2024-11-15T15:30:00",
      "status": true,
      "member_level": "junior",
      "rol": "developer",
      "moddate": "2024-11-15T15:30:00",
      "createdate": "2024-11-15T15:30:00"
    }
  }
}
```

- On failure:

```json
{
  "status": "fail",
  "message": "Invalid credentials"
}
```

### 2. Signup

Not yet completed

### 3. Fetch All Users

URL:
GET /api/v1/techie

Description:
Fetches all the techies.

#### Response:

- On success:

```json
{
  "status": "success",
  "results": 1,
  "data": {
    "users": [
      {
        "memid": "5dcd17e4-e2cd-4eb2-8d73-e89abff1849a",
        "username": "sathi",
        "full_name": "sathish",
        "email": "sathish.s@cli.in",
        "phoneno": "7639750827",
        "address": "chennai",
        "dob": "1995-03-14",
        "country": "india",
        "pwd": "12345",
        "photo_loc": "http//",
        "bio": "xxxxxx",
        "regdate": "2024-11-15T15:30:00",
        "status": true,
        "member_level": "junior",
        "rol": "developer",
        "moddate": "2024-11-15T15:30:00",
        "createdate": "2024-11-15T15:30:00"
      }
    ]
  }
}
```

- On failure:

```json
{
  "status": "fail",
  "message": "No techies found"
}
```

### 4. Fetch Single User

URL:
GET /api/v1/techie/:userid

Description:
Fetches details of a single techie by their unique ID.

Path Parameters:

userid (required): The ID of the user to fetch.

#### Response:

- On success:

```json
{
  "status": "success",
  "data": {
    "user": {
      "memid": "5dcd17e4-e2cd-4eb2-8d73-e89abff1849a",
      "username": "sathi",
      "full_name": "sathish",
      "email": "sathish.s@cli.in",
      "phoneno": "7639750827",
      "address": "chennai",
      "dob": "1995-03-14",
      "country": "india",
      "pwd": "12345",
      "photo_loc": "http//",
      "bio": "xxxxxx",
      "regdate": "2024-11-15T15:30:00",
      "status": true,
      "member_level": "junior",
      "rol": "developer",
      "moddate": "2024-11-15T15:30:00",
      "createdate": "2024-11-15T15:30:00"
    }
  }
}
```

- On failure:

```json
{
  "status": "fail",
  "message": "Techie not found"
}
```
