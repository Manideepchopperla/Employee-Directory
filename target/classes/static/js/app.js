// app.js

let currentPage = 1;
let itemsPerPage = 10;
// let filteredEmployees = [...employees];

// DOM Elements
const employeeGrid = document.getElementById("employeeGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const itemsPerPageSelect = document.getElementById("itemsPerPage");
const pagination = document.getElementById("pagination");

const filterFirstName = document.getElementById("filterFirstName");
const filterDepartment = document.getElementById("filterDepartment");
const filterRole = document.getElementById("filterRole");

const applyFilterBtn = document.getElementById("applyFilter");
const resetFilterBtn = document.getElementById("resetFilter");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const modal = document.getElementById("employeeModal");
const cancelBtn = document.getElementById("cancelBtn");
const employeeForm = document.getElementById("employeeForm");
const modalTitle = document.getElementById("modalTitle");
const submitBtn = document.getElementById("submitBtn");

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const departmentInput = document.getElementById("department");
const roleInput = document.getElementById("role");
const employeeIdInput = document.getElementById("employeeId");
const filterBtn = document.getElementById("filterToggle");
const filterSidebar = document.getElementById("filterSidebar");
const closeFilterBtn = document.getElementById("closeFilterBtn");


filterBtn.addEventListener("click", () => {
  filterSidebar.classList.toggle("active");
});

closeFilterBtn.addEventListener("click", () => {
  filterSidebar.classList.remove("active");
});


// Render employee cards
function renderEmployees() {
  employeeGrid.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageEmployees = filteredEmployees.slice(start, end);
  if(pageEmployees.length === 0) {
    employeeGrid.classList.add("no-employees");
    employeeGrid.innerHTML = '<p class="no-employee-card">No employees found.</p>';
    return;
  }
  else {
    employeeGrid.classList.remove("no-employees");
  }


  pageEmployees.forEach((emp, index) => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.innerHTML = `
      <h3 id="employee-name">${emp.firstName} ${emp.lastName}</h3>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <div class="card-actions">
        <button class="edit-btn" onclick="editEmployee(${start + index})">Edit</button>
        <button class="delete-btn" onclick="deleteEmployee(${start + index})">Delete</button>
      </div>
    `;
    employeeGrid.appendChild(card);
  });


  renderPagination();
}

function renderPagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => {
      currentPage = i;
      renderEmployees();
    };
    pagination.appendChild(btn);
  }
}

function applyFilters() {
  const name = filterFirstName.value.toLowerCase();
  const dept = filterDepartment.value.toLowerCase();
  const role = filterRole.value.toLowerCase();

  filteredEmployees = employees.filter(emp => {
    return (
      emp.firstName.toLowerCase().includes(name) &&
      emp.department.toLowerCase().includes(dept) &&
      emp.role.toLowerCase().includes(role)
    );
  });
  currentPage = 1;
  renderEmployees();
}

function resetFilters() {
  filterFirstName.value = "";
  filterDepartment.value = "";
  filterRole.value = "";
  filteredEmployees = [...employees];
  currentPage = 1;
  renderEmployees();
}

function handleSearch() {
  const query = searchInput.value.toLowerCase();
  filteredEmployees = employees.filter(emp =>
    emp.firstName.toLowerCase().includes(query) ||
    emp.lastName.toLowerCase().includes(query) ||
    emp.email.toLowerCase().includes(query)
  );
  currentPage = 1;
  renderEmployees();
}

function handleSort() {
  const sortBy = sortSelect.value;
  if (!sortBy) return;
  filteredEmployees.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  renderEmployees();
}

function handleItemsPerPageChange() {
  itemsPerPage = parseInt(itemsPerPageSelect.value, 10);
  currentPage = 1;
  renderEmployees();
}

function showModal(edit = false, index = -1) {
  modalTitle.textContent = edit ? "Edit Employee" : "Add Employee";
  submitBtn.textContent = edit ? "Update" : "Add";
  modal.style.display = "flex"; // Must be flex, not block

  if (edit) {
    const emp = filteredEmployees[index];
    firstNameInput.value = emp.firstName;
    lastNameInput.value = emp.lastName;
    emailInput.value = emp.email;
    departmentInput.value = emp.department;
    roleInput.value = emp.role;
    employeeIdInput.value = employees.findIndex(e => e.email === emp.email);
  } else {
    employeeForm.reset();
    employeeIdInput.value = "";
  }
}


function hideModal() {
  modal.style.display = "none";
}

function editEmployee(index) {
  showModal(true, index);
}

function deleteEmployee(index) {
  const globalIndex = employees.findIndex(emp => emp.email === filteredEmployees[index].email);
  if (globalIndex !== -1) {
    if (confirm("Are you sure you want to delete this employee?")) {
      employees.splice(globalIndex, 1);
      filteredEmployees = [...employees];
      renderEmployees();
    }
  } else {
    alert("Employee not found.");
  }
}

function validateForm() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!firstNameInput.value.trim() ||
      !lastNameInput.value.trim() ||
      !emailInput.value.trim() ||
      !departmentInput.value ||
      !roleInput.value) {
    alert("All fields are required.");
    return false;
  }
  if (!emailPattern.test(emailInput.value.trim())) {
    alert("Invalid email format.");
    return false;
  }
  return true;
}

function handleFormSubmit(e) {
  e.preventDefault();
  if (!validateForm()) return;

  const newEmp = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    department: departmentInput.value,
    role: roleInput.value
  };

  const index = employeeIdInput.value;
  if (index === "") {
    employees.push(newEmp);
  } else {
    employees[index] = newEmp;
  }

  filteredEmployees = [...employees];
  hideModal();
  renderEmployees();
}

// Event Listeners
searchInput.addEventListener("input", handleSearch);
sortSelect.addEventListener("change", handleSort);
itemsPerPageSelect.addEventListener("change", handleItemsPerPageChange);
applyFilterBtn.addEventListener("click", applyFilters);
resetFilterBtn.addEventListener("click", resetFilters);
addEmployeeBtn.addEventListener("click", () => showModal());
cancelBtn.addEventListener("click", hideModal);
employeeForm.addEventListener("submit", handleFormSubmit);

// Initial Render
renderEmployees();
