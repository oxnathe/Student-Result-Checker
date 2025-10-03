
# Student Result Checker

A simple Node.js web application that allows students to check their results by entering their matriculation number. Built with Express.js and EJS templates for server-side rendering.

## 📁 Project Structure

```
Student-Results-Checker/
├── app.js           # Express server with routing logic
├── package.json        # Project dependencies and scripts
├── results.json        # Student database (JSON format)
├── views/
│   |___result.ejs       # Main EJS templates
|   └── index.ejs      
|__README.md          # Project documentation
```

## 🚀 Features

- **Simple Search Interface**: Clean form to enter matriculation numbers
- **Server-Side Rendering**: Uses EJS templates for dynamic content
- **JSON Database**: Student data stored in easy-to-edit JSON format
- **Error Handling**: Shows appropriate messages for invalid entries
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Sample Data**: Includes 20 test students with complete academic records

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A text editor or IDE
- A web browser

## ⚙️ Installation & Setup

### Step 1: Clone or Download
Download the project files or clone from repository and navigate to the student-results folder.

### Step 2: Install Dependencies
Run `npm install` in your terminal. This will install:
- `express` - Web framework for Node.js
- `ejs` - Template engine for rendering HTML
- `nodemon` - Development tool for auto-restarting server

### Step 3: Start the Server
For development (auto-restart on changes): `npm run start`


### Step 4: Access the Application
Open your web browser and go to: `http://localhost:3000`

## 📊 Sample Test Data

The application includes 10  sample students for testing but 10 for readme sample:

| Matric |    StudentName |      Department      |  studentEmail   |  Course   |      Score |
|---------------|--------------|------|-------------|-------|-------------|------------------|-----------
|  BD/2025/TC3/125 | Owolola Gabriel |Computer Science |owololagabriel@gmail.com |Introduction to Algorithm | 55 |
|  BD/2025/TC3/006 | Adebayo Emmanuel |  Data Science | adebayoemmanuel@outlook.com | OOP  | 70 |
|  BD/2025/TC3/040 | Onuoha Deborah |Computer Science |onuohdeborah23@gmail.com | Software Development | 93 |
|  BD/2025/TC3/159 | Wilson Utieyin |Mathematics | utiwilx@gmail.com |Introduction to Algorithm | 79 |
|  BD/2025/TC3/004 | Abdulwaasi Saliu  |Computer Science | adedayo.williams@gmail.com |Data and Logic Management| 83 |
|  BD/2025/TC3/008 | Adedayo Williams |Computer Science | adedayo.williams09@gmail.com | Data science | 91 |
|  BD/2025/TC3/010 | Adeyoola Adebayo |Computer Science |adeaboyade@gmail.com | Software engineering| 85 |
|  BD/2025/TC3/023 | Olatunji Bisola |Computer Science | adeoltunjivictor@gmail.com | OOP | 95 |
|  BD/2025/TC3/025 | Charles Robinson |Computer Science |robinsoncharles28@gmail.com |Introduction to Algorithm | 75 |
|  BD/2025/TC3/026 | Nwazota Chibuike |Computer Science | tonydavjj@gmail.com |Introduction to Algorithm | 55 |

### Testing Examples:
- **Valid Search**: Enter `BD/2025/TC3/006` to see Adebayo Emmanuel's results
- **Invalid Search**: Enter ` BD/TC4/2024/004` to see "Not Found" message
- **Empty Search**: Submit without entering anything to see validation

## 🔧 How It Works

### 1. **Server Startup**
The server loads student data from the JSON file when it starts up.

### 2. **Route Handling**
- **GET /**: Renders the search form
- **POST /search**: Processes search and returns results

### 3. **Search Logic**
The server searches through the student array to find a matching matriculation number (case-insensitive).

### 4. **Template Rendering**
The server passes the search results to the EJS template for rendering.

### 5. **EJS Template**
The template conditionally displays either the student results or an error message based on the search outcome.

## � JSON Data Format

Each student record contains:
- Matriculation number (unique identifier)
- Student name and course information
- Course results with grades

## 🛠️ Customization

### Adding New Students
1. Open the `results.json` file
2. Add a new student object following the existing format
3. Include all required fields: matricNumber, name, department, email,courses, scores
4. Save the file and restart the server

### Modifying the Interface
- Edit `views/index.ejs` to change the HTML structure
- Modify Tailwind CSS classes for styling changes
- Add new form fields or display elements as needed

### Changing Server Behavior
- Edit `server.js` to modify routes or search logic
- Add new endpoints for additional functionality
- Implement database connections instead of JSON file storage

## 🐛 Troubleshooting

### Common Issues:

**Server won't start:**
- Check if Node.js is installed by running `node --version`
- Ensure dependencies are installed with `npm install`
- Check if port 3000 is available or being used by another application

**"Cannot find module" error:**
- Run `npm install` to install all required dependencies
- Verify that `package.json` exists in the project directory

**Results not showing:**
- Verify `results.json` exists and contains valid JSON data
- Check browser console for any JavaScript errors
- Ensure matric number format matches exactly (case-insensitive but format matters)

**Page not loading:**
- Confirm server is running (check terminal output for "Server running" message)
- Try accessing `http://127.0.0.1:3000` instead of localhost



# Members/Collaborators
Wilson Utieyin
Adeyoola Adebayo
Charles Robinson
Onuoha Deborah
Adedayo Williams
Adeola Oluwaseyi
Owolola Gabriel
Abdulwaasi Saliu
Nwazota Chibuike
Olatunji Bisola 

# Tech Stack
Traditional CSS
HTML/ejs
NODE.JS/Express.js

# Modules
Express : installed using npm i express and imported into app.js.
Nodemon : installed using npm i nodemon for automatic restart.
views/Ejs : installed using npm i ejs for templating engine.



# Testing
Postman

Testing the GET Request (Home Page)
Method: GET
URL: http://localhost:3000/
What to expect: HTML response with index page

Testing the POST Request (Check Results)
Method: POST
URL: http://localhost:3000/check
Headers: Content-Type: application/x-www-form-urlencoded
Body:
Select "x-www-form-urlencoded"
Key: matricNo
Value: [any matric number from results.json]
Expected Responses: Status: 200 OK, Response: HTML page with student results