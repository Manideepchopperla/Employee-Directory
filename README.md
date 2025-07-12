# Employee Directory Web Interface [Live Link](https://employee-directory-ruby.vercel.app/)  

A responsive and interactive Employee Directory built using **HTML**, **CSS**, **JavaScript**, and **Freemarker**. This project simulates front-end CRUD operations (Create, Read, Update, Delete) with client-side filtering, sorting, pagination, and form validation.

📍 **Live Demo:** [employee-directory-ruby.vercel.app](https://employee-directory-ruby.vercel.app/)  
📦 **GitHub Repo:** [github.com/Manideepchopperla/Employee-Directory](https://github.com/Manideepchopperla/Employee-Directory)

## 🚀 Features

- 🧑‍💼 View employee list with ID, name, email, department, and role
- ➕ Add and ✏️ edit employees using a styled form
- ❌ Delete employees with confirmation
- 🔍 Search by name or email
- 🎛️ Filter by first name, department, and role
- ⬇️ Sort by first name or department
- 📄 Pagination (10, 25, 50, 100 per page)
- 📱 Fully responsive layout for mobile and desktop

## 📂 Project Structure

```
📁 employee-directory/
├── pom.xml
├── index.html
├── src/
│   └── main/
│       ├── java/
│       │   └── com/manideep/employeedirectory/
│       │       ├── Main.java
│       └── resources/
│           ├── static/
│           │   ├── css/
│           │   │   └── style.css
│           │   └── js/
│           │       ├── app.js
│           │       └── data.js
│           └── templates/
│               ├── index.ftlh
└── README.md
```
## 🧩 Prerequisites
- Java 17+
- Maven 3.8+
- (Optional) Git

## 🛠 Setup & Run Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Manideepchopperla/Employee-Directory
   cd employee-directory
   ```

2. Serve the project :
   - simply open `index.html`.
   - if you made changes in index.ftlh then open terminal simply run this commands :
     ```bash
       cd Employee-Directory
       mvn clean install
       mvn exec:java
      ``` 

## 📸 Screenshots 

<img width="1913" height="972" alt="Screenshot 2025-07-12 154515" src="https://github.com/user-attachments/assets/b2ccd376-cbf8-4e75-8c99-cbdccec826bf" />
<img width="1918" height="972" alt="Screenshot 2025-07-12 154553" src="https://github.com/user-attachments/assets/6db231a6-7c11-4e20-acb7-bcfc5b67abc4" />
<img width="1919" height="973" alt="Screenshot 2025-07-12 154607" src="https://github.com/user-attachments/assets/4fc6867c-e407-42a3-995f-b2ed7a696040" />
<img width="1919" height="972" alt="Screenshot 2025-07-12 154626" src="https://github.com/user-attachments/assets/eaf95336-19f1-4213-b681-8603eaedb86d" />
<img width="1919" height="970" alt="Screenshot 2025-07-12 154640" src="https://github.com/user-attachments/assets/66bd6c3a-ed08-4b26-bbc1-e842c4df91bc" />
<img width="1917" height="979" alt="Screenshot 2025-07-12 154701" src="https://github.com/user-attachments/assets/d4e260b9-bd66-41b8-948a-3b33f6142ffe" />



## 💡 Reflection

### Challenges Faced:
- Integrating Freemaker template into the Code is the biggest challenge faced.

### 🔧 Future Improvements
- Imporve UI and add toasts for success and failure operations.

---

Made with ❤️ using vanilla JavaScript.

