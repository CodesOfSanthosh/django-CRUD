# React Django CRUD

A full-stack web application combining React frontend with Django REST Framework backend for CRUD operations.

## Project Structure

```
react-django-CRUD/
├── backend/              # Django REST API
│   ├── backend/         # Main Django app configuration
│   ├── members/         # Members app with models, views, serializers
│   ├── manage.py        # Django management script
│   ├── db.sqlite3       # SQLite database
│   └── requirements.txt # Python dependencies
├── frontend/            # React application
│   ├── my-app/         # React app
│   ├── package.json    # Node dependencies
│   └── public/         # Static assets
└── env/                # Python virtual environment
```

## Backend Setup

### Requirements
- Python 3.x
- Django 6.0
- Django REST Framework 3.16.1
- Django CORS Headers 4.9.0

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate virtual environment:
```bash
python -m venv env
source env/Scripts/activate  # On Windows
```

3. Install dependencies:
```bash
pip install django djangorestframework django-cors-headers
```

4. Run migrations:
```bash
python manage.py migrate
```

5. Create superuser:
```bash
python manage.py createsuperuser
```

6. Start the development server:
```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000`

## Frontend Setup

### Requirements
- Node.js
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend/my-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## API Endpoints

The application provides REST API endpoints for member CRUD operations at:
- `http://localhost:8000/api/members/`

## Features

- **Full CRUD Operations**: Create, Read, Update, Delete members
- **Django REST API**: RESTful API with Django REST Framework
- **React Frontend**: Modern React application for user interface
- **CORS Support**: Cross-Origin Resource Sharing configured for frontend-backend communication
- **SQLite Database**: Lightweight database for development

## Usage

1. Start the Django backend server
2. Start the React frontend development server
3. Use the web interface to perform CRUD operations on members

## License

This project is open source and available under the MIT License.
