# Home Hero

A project with FastAPI backend and React TypeScript frontend.

## Setup

1. Ensure you have conda installed.

2. Create the conda environment:
   ```
   conda create -n home-hero python=3.11 -y
   conda activate home-hero
   ```

3. Install backend dependencies:
   ```
   cd backend
   pip install -r requirements.txt
   ```

4. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

## Running

1. Start the backend:
   ```
   cd backend
   uvicorn main:app --reload
   ```

2. Start the frontend:
   ```
   cd frontend
   npm run dev
   ```

Backend will run on http://127.0.0.1:8000

Frontend will run on http://localhost:5173
