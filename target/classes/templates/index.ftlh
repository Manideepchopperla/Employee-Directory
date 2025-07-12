<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Employee Directory</title>
    <link rel="stylesheet" href="./src/main/resources/static/css/style.css" />
</head>
<body>
    <div class="header">
        <h1>Employee Directory</h1>
        <div class="header-right">
            <div class="search-bar">
                <input type="text" id="searchInput" placeholder="Search by name or email" />
            </div>
            <button class="filter-btn" id="filterToggle">Filter</button>
        </div>
    </div>

    <div class="controls">
        <div class="controls-left">
            <label for="sortSelect">Sort:</label>
            <select id="sortSelect">
                <option value="">--Select--</option>
                <option value="firstName">Name</option>
                <option value="department">Department</option>
            </select>
            <label for="itemsPerPage">Show:</label>
            <select id="itemsPerPage">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
        </div>
        <button class="add-employee-btn" id="addEmployeeBtn">Add Employee</button>
    </div>

    <div class="main-container">
        <div class="content" id="content">
            <div class="employee-grid" id="employeeGrid"></div>
            <div class="pagination" id="pagination"></div>
        </div>

        <div class="filter-sidebar" id="filterSidebar">
            <button class="close-filter-btn" id="closeFilterBtn">✖</button>
            <h3>Filter Employees</h3>
            <div class="filter-group">
                <label for="filterFirstName">First Name:</label>
                <input type="text" id="filterFirstName" />
            </div>
            <div class="filter-group">
                <label for="filterDepartment">Department:</label>
                <input type="text" id="filterDepartment" />
            </div>
            <div class="filter-group">
                <label for="filterRole">Role:</label>
                <input type="text" id="filterRole" />
            </div>
            <div class="filter-actions">
                <button class="apply-btn" id="applyFilter">Apply</button>
                <button class="reset-btn" id="resetFilter">Reset</button>
            </div>
        </div>
    </div>

    <div class="modal" id="employeeModal">
        <div class="modal-content">
            <h2 id="modalTitle">Add Employee</h2>
            <form id="employeeForm">
                <input type="hidden" id="employeeId" />
                <div class="form-group full-width">
                    <label for="firstName">First name</label>
                    <input type="text" id="firstName" required />
                </div>
                <div class="form-group full-width">
                    <label for="lastName">Last name</label>
                    <input type="text" id="lastName" required />
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div class="form-group">
                        <label for="department">Department</label>
                        <select id="department" required>
                            <option value="">--Select--</option>
                            <option value="HR">HR</option>
                            <option value="IT">IT</option>
                            <option value="Finance">Finance</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                        </select>
                    </div>
                </div>
                <div class="form-group full-width">
                    <label for="role">Role</label>
                    <select id="role" required>
                        <option value="">--Select--</option>
                        <option value="Manager">Manager</option>
                        <option value="Developer">Developer</option>
                        <option value="Analyst">Analyst</option>
                        <option value="Designer">Designer</option>
                        <option value="Specialist">Specialist</option>
                    </select>
                </div>
                <div class="modal-actions">
                    <button type="button" class="cancel-btn" id="cancelBtn">Cancel</button>
                    <button type="submit" class="submit-btn" id="submitBtn">Add</button>
                </div>
            </form>
        </div>
    </div>

    <div class="footer">
        © 2025 Employee Directory App. All rights reserved.
    </div>

    <script>
        let employees = ${employeesJson?no_esc};
        let filteredEmployees = [...employees];
    </script>

    <script src="./src/main/resources/static/js/data.js"></script>
    <script src="./src/main/resources/static/js/app.js"></script>
</body>
</html>
