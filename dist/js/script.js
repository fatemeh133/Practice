// // start red requiredInputs
// const requiredInputs = document.querySelectorAll("input[required]");
// requiredInputs.forEach(function (input) {
//   input.addEventListener("input", function () {
//     input.classList.remove("form-error");
//     if (input.value.trim() === "") {
//       input.classList.add("form-error");
//     }
//   });
//   input.addEventListener("blur", function () {
//     if (input.value.trim() === "") {
//       input.classList.add("form-error");
//     } else {
//       input.classList.remove("form-error");
//     }
//   });
// });

// //message
// var elements = document.getElementsByTagName("input");
// for (var i = 0; i < elements.length; i++) {
//   elements[i].oninvalid = function (e) {
//     e.target.setCustomValidity("");
//     if (!e.target.validity.valid) {
//       e.target.setCustomValidity("فیلد الزامی.");
//       // e.classList.add("form-error");
//     }
//   };
//   elements[i].oninput = function (e) {
//     e.target.setCustomValidity("");
//   };
// }

// // end red requiredInputs

// // start floating inputs transform
// const inputFields = document.querySelectorAll(".input-floating");
// const floatingLabels = document.querySelectorAll(".label-floating");
// // Attaching event listeners to all input fields
// inputFields.forEach((inputField, index) => {
//   const floatingLabel = floatingLabels[index];

//   inputField.addEventListener("focus", function () {
//     floatingLabel.style.top = "5px";
//     floatingLabel.style.transform =
//       "translate3d(0, 0rem, 0) scale3d(0.8, 0.8, 0.8)";
//     floatingLabel.style.color = "#000";
//   });

//   inputField.addEventListener("blur", function () {
//     if (inputField.value.length === 0) {
//       floatingLabel.style.top = "16px";
//       floatingLabel.style.transform =
//         "translate3d(0, 0rem, 0) scale3d(1, 1, 1)";
//       floatingLabel.style.color = "rgba(0, 0, 0, 0.5)";
//     }
//   });

//   inputField.addEventListener("input", function () {
//     if (inputField.value.length > 0) {
//       floatingLabel.style.top = "5px";
//       floatingLabel.style.transform =
//         "translate3d(0, 0rem, 0) scale3d(0.8, 0.8, 0.8)";
//       floatingLabel.style.color = "#000";
//     } else {
//       floatingLabel.style.top = "16px";
//       floatingLabel.style.transform =
//         "translate3d(0, 0rem, 0) scale3d(1, 1, 1)";
//       floatingLabel.style.color = "rgba(0, 0, 0, 0.5)";
//     }
//   });
// });
// // end floating inputs transform
// // start clickable lables
// floatingLabels.forEach((label, index) => {
//   label.addEventListener("click", () => {
//     inputFields[index].focus();
//   });
// });
// // end clickable lables

// // start pagination
// // Function to display data in the table
// function displayData(pageNumber, rowsPerPage, tableId) {
//   const rows = document.querySelectorAll(`#${tableId} tbody tr`);
//   rows.forEach((row, index) => {
//     if (
//       index >= (pageNumber - 1) * rowsPerPage &&
//       index < pageNumber * rowsPerPage
//     ) {
//       row.style.display = "table-row";
//     } else {
//       row.style.display = "none";
//     }
//   });
// }

// // Function to generate pagination buttons
// function renderPagination(
//   currentPage,
//   totalPages,
//   paginationId,
//   maxRowsId,
//   tableId
// ) {
//   const pagination = document.getElementById(paginationId);
//   pagination.innerHTML = "";

//   let startPage = Math.max(1, currentPage - 1);
//   let endPage = Math.min(startPage + 2, totalPages);

//   // Adding the "First" button
//   const firstLi = document.createElement("li");
//   const firstLink = document.createElement("a");
//   const firstIcon = document.createElement("i");
//   firstIcon.setAttribute("data-feather", "chevrons-right");
//   firstIcon.classList.add("w-4", "h-4", "ml-1");
//   firstLink.appendChild(firstIcon);
//   firstLink.classList.add("pagination__link");
//   firstLi.appendChild(firstLink);
//   firstLi.addEventListener("click", function () {
//     currentPage = 1;
//     displayData(
//       currentPage,
//       parseInt(document.getElementById(maxRowsId).value, 10),
//       tableId
//     );
//     renderPagination(currentPage, totalPages, paginationId, maxRowsId, tableId);
//   });
//   pagination.appendChild(firstLi);

//   // Adding the page number buttons
//   for (let i = startPage; i <= endPage; i++) {
//     const li = document.createElement("li");
//     const link = document.createElement("a");
//     link.textContent = i;
//     link.classList.add("pagination__link");
//     link.style.width = "40px";
//     if (i === currentPage) {
//       link.classList.add("pagination__link--active");
//     }
//     link.addEventListener("click", function () {
//       currentPage = i;
//       displayData(
//         currentPage,
//         parseInt(document.getElementById(maxRowsId).value, 10),
//         tableId
//       );
//       renderPagination(
//         currentPage,
//         totalPages,
//         paginationId,
//         maxRowsId,
//         tableId
//       );
//     });
//     li.appendChild(link);
//     pagination.appendChild(li);
//   }

//   // Adding the "Last" button
//   const lastLi = document.createElement("li");
//   const lastLink = document.createElement("a");
//   const lastIcon = document.createElement("i");
//   lastIcon.setAttribute("data-feather", "chevrons-left");
//   lastIcon.classList.add("w-4", "h-4", "ml-1");
//   lastLink.appendChild(lastIcon);
//   lastLink.classList.add("pagination__link");
//   lastLi.appendChild(lastLink);
//   lastLi.addEventListener("click", function () {
//     currentPage = totalPages;
//     displayData(
//       currentPage,
//       parseInt(document.getElementById(maxRowsId).value, 10),
//       tableId
//     );
//     renderPagination(currentPage, totalPages, paginationId, maxRowsId, tableId);
//   });
//   pagination.appendChild(lastLi);

//   // Initializing Feather Icons
//   feather.replace();
// }

// // Initializing table with the first page
// function initializeTable(tableId, maxRowsId, paginationId) {
//   const selectElement = document.getElementById(maxRowsId);
//   let rowsPerPage = parseInt(selectElement.value, 10);
//   let currentPage = 1;

//   selectElement.addEventListener("change", function () {
//     currentPage = 1;
//     rowsPerPage = parseInt(selectElement.value, 10);
//     displayData(currentPage, rowsPerPage, tableId);
//     const totalPages = Math.ceil(rows.length / rowsPerPage);
//     renderPagination(currentPage, totalPages, paginationId, maxRowsId, tableId);
//   });

//   const rows = document.querySelectorAll(`#${tableId} tbody tr`);
//   const totalPages = Math.ceil(rows.length / rowsPerPage);
//   displayData(currentPage, rowsPerPage, tableId);
//   renderPagination(currentPage, totalPages, paginationId, maxRowsId, tableId);
// }

// // Initializing table 1
// initializeTable("myTable", "maxRows", "pagination");

// // Initializing table 2
// initializeTable("filterTable", "maxRows2", "pagination2");
// // end paginatuion

// // single search
// const searchInput = document.getElementById("searchInput");
// const table = document.getElementById("myTable");
// let allRows = Array.from(table.querySelectorAll("tbody tr"));

// // Function to convert Persian/Arabic numerals to Latin numerals
// function convertToLatinNumerals(text) {
//   const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
//   for (let i = 0; i < 10; i++) {
//     const persianDigit = persianDigits[i];
//     const latinDigit = String(i);
//     text = text.replace(new RegExp(persianDigit, "g"), latinDigit);
//   }
//   return text;
// }
// searchInput.addEventListener("input", function () {
//   const searchText = convertToLatinNumerals(searchInput.value.toLowerCase());
//   let allRows = Array.from(table.querySelectorAll("tbody tr"));
//   allRows.forEach((row) => {
//     let found = false;

//     const allCells = row.querySelectorAll(
//       "td:not(:nth-child(1), :nth-child(2))"
//     );
//     allCells.forEach((cell) => {
//       const cellText = convertToLatinNumerals(cell.textContent.toLowerCase());
//       cell.innerHTML = cellText;

//       if (cellText.includes(searchText)) {
//         const startIndex = cellText.indexOf(searchText);
//         const endIndex = startIndex + searchText.length;
//         const foundText = cellText.slice(startIndex, endIndex);
//         const highlightedText = `<span style="background-color: #ffafaf;
//         border-radius: 0.4rem;">${foundText}</span>`;
//         const newText =
//           cellText.slice(0, startIndex) +
//           highlightedText +
//           cellText.slice(endIndex);

//         if (foundText.length > 0) {
//           cell.innerHTML = newText;
//         } else cell.innerHTML = cellText;
//         found = true;
//       }
//     });

//     // Show/hide rows based on search result
//     if (found) {
//       row.style.display = "";
//     } else {
//       row.style.display = "none";
//     }
//   });
//   // Reset the select dropdown to the first option
//   selectElement.selectedIndex = 0;
// });

// // pagination on submit
// const filterForm = document.getElementById("filterForm");

// filterForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   // find the current page
//   const paginationLink = document.querySelector(".pagination__link--active");
//   const content = paginationLink.textContent;
//   const numberContent = parseInt(content);

//   currentPage = numberContent;
//   displayData(currentPage, rowsPerPage);

//   // Update the pagination buttons
//   const totalPages = Math.ceil(rows.length / rowsPerPage);
//   renderPagination(totalPages);
// });

// /// start check all
// function enableCheckAll(checkAllId, rowCheckboxClass, tableId) {
//   const checkAllCheckbox = document.getElementById(checkAllId);
//   const rowCheckboxes = document.querySelectorAll(`.${rowCheckboxClass}`);

//   checkAllCheckbox.addEventListener("change", function () {
//     const isChecked = this.checked;
//     const table = document.getElementById(tableId);
//     const tbodyRows = table.querySelectorAll("tbody tr");

//     for (let i = 0; i < tbodyRows.length; i++) {
//       const rowDisplayStyle = window
//         .getComputedStyle(tbodyRows[i])
//         .getPropertyValue("display");

//       if (rowDisplayStyle !== "none") {
//         if (rowCheckboxes[i]) {
//           rowCheckboxes[i].checked = isChecked;
//         }
//       } else {
//         if (rowCheckboxes[i]) {
//           rowCheckboxes[i].checked = false;
//         }
//         const inputs = tbodyRows[i].querySelectorAll("input");
//         inputs.forEach((input) => {
//           input.value = "";
//         });
//       }
//     }
//   });
// }
// // the rest of code is on pages themselves
// // end check all

// // select all text
// // Selects every td in any table which has contenteditable="true"
// const editableTds = document.querySelectorAll(
//   'table td[contenteditable="true"]'
// );
// // Function to select all text
// function selectAllText(element) {
//   const range = document.createRange();
//   range.selectNodeContents(element);

//   const selection = window.getSelection();
//   selection.removeAllRanges();
//   selection.addRange(range);
// }
// // Attaching onclick event to each editable td
// editableTds.forEach((td) => {
//   td.onclick = function () {
//     selectAllText(this);
//   };
// });

// // end select all text

// // start reset table
// function resetBtn() {
//   let table = document.getElementById("filterTable");
//   let rows = table.getElementsByTagName("tr");

//   // Loop through the rows and apply filters
//   for (let i = 1; i < rows.length; i++) {
//     rows[i].style.display = "";
//   }
//   // Get all dropdown-option elements
//   const dropdownOptions = document.querySelectorAll(
//     ".search-form .dropdown-option"
//   );
//   const label = document.querySelectorAll(".search-form .label-inner");
//   // first value of dropdown
//   const labelInner = document.querySelectorAll(
//     '.search-form .dropdown-option[data-key="1"]'
//   );
//   // Iterate over the labels
//   for (let i = 0; i < label.length; i++) {
//     label[i].innerHTML = labelInner[i].textContent;
//   }

//   // Loop through each dropdown-option element to reset selected
//   dropdownOptions.forEach((option) => {
//     // If the data-key is 1 (the first option), add the selected class, else remove the selected class
//     if (option.getAttribute("data-key") === "1") {
//       option.classList.add("selected");
//     } else {
//       option.classList.remove("selected");
//     }
//   });
// }
// // end reset table

// // start delete rows
// $(document).ready(function () {
//   // select delete link
//   const deleteButtons = document.querySelectorAll(".table-report__action a");

//   // select delete button
//   const modalDeleteButton = document.querySelector(
//     ".modal-content .btn-danger"
//   );
//   let rowToDelete;

//   deleteButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       const row = this.closest("tr");
//       rowToDelete = row;
//     });
//   });

//   modalDeleteButton.addEventListener("click", function () {
//     if (rowToDelete) {
//       rowToDelete.remove();
//       rowToDelete = null; // Reset the rowToDelete variable
//     }
//   });

//   // Delete all checked rows after confirmation jQuery
//   $("#delete-all-button").on("click", function () {
//     // Listen for confirmation modal delete button
//     $(".modal-content .btn-danger").on("click", function () {
//       $("input:checked").not("#check-all-checkbox").closest("tr").remove();
//     });
//   });
// });
// // end delete rows
// // start select pic
// const realFileBtn = document.getElementById("real-file");
// const customBtn = document.getElementById("custom-button");
// const customTxt = document.getElementById("custom-text");

// customBtn.addEventListener("click", function () {
//   realFileBtn.click();
// });
// customTxt.addEventListener("click", function () {
//   realFileBtn.click();
// });

// realFileBtn.addEventListener("change", function () {
//   if (realFileBtn.value) {
//     customTxt.innerHTML = realFileBtn.value.match(
//       /[\/\\]([\w\d\s\.\-\(\)]+)$/
//     )[1];
//   } else {
//     customTxt.innerHTML = "فایلی انتخاب نشده.";
//   }
// });

let addBtn = document.querySelector(".add");
let closesvgs = document.querySelectorAll(".close");
let checkboxes = document.querySelectorAll("#default-checkbox");

// Function to add event listeners to a task
function addTaskEventListeners(task) {
  let checkbox = task.querySelector(".form-check-input");
  let closeSvg = task.querySelector(".close");

  checkbox.addEventListener("click", function () {
    // Handle checkbox click
    if (checkbox.checked === true) {
      let s = document.createElement("s");
      let closestP = checkbox.closest(".task").querySelector("p");

      s.textContent = closestP.textContent;
      closestP.textContent = "";
      closestP.appendChild(s);
      closestP.style.color = "#b7b7b7";
    } else {
      let closestP = checkbox.closest(".task").querySelector("p");
      let s = checkbox.closest(".task").querySelector("p").querySelector("s");
      closestP.style.color = "black";
      closestP.textContent = s.textContent;
      s.remove();
    }
  });

  closeSvg.addEventListener("click", function () {
    // Handle close button click
    closeSvg.closest(".task").remove();
  });
}

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let taskInput = document.querySelector("#taskInput");

  if (taskInput.value.length > 0) {
    // Create the main div element
    let task = document.createElement("div");
    task.classList.add("flex", "mb-5", "task");

    // Create the checkbox element
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add(
      "ml-3",
      "form-check-input",
      "w-4",
      "h-4",
      "text-blue-600",
      "bg-gray-100",
      "border-gray-300",
      "rounded",
      "focus:ring-blue-500",
      "dark:focus:ring-blue-600",
      "dark:ring-offset-gray-800",
      "focus:ring-2",
      "dark:bg-gray-700",
      "dark:border-gray-600"
    );

    // Create the task title paragraph element
    let taskTitle = document.createElement("p");
    taskTitle.classList.add("ml-auto", "taskTitle");
    taskTitle.textContent = taskInput.value;

    // Create the close button (SVG) element
    let closeSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    closeSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    closeSvg.setAttribute("width", "16");
    closeSvg.setAttribute("height", "16");
    closeSvg.setAttribute("fill", "currentColor");
    closeSvg.classList.add("bi", "bi-x", "close");
    closeSvg.setAttribute("viewBox", "0 0 16 16");

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    );

    // Append elements to the main div
    closeSvg.appendChild(path);
    task.appendChild(checkbox);
    task.appendChild(taskTitle);
    task.appendChild(closeSvg);

    document.querySelector(".tasks").appendChild(task);
    taskInput.value = "";

    // Add event listeners to the newly created task
    addTaskEventListeners(task);
  }
});

// Add initial event listeners to existing checkboxes and close buttons
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    // Existing checkbox click handler
    // if checkbox chcecked cross out and change the color
    if (checkbox.checked === true) {
      let s = document.createElement("s");
      let closestP = checkbox.closest(".task").querySelector("p");

      s.textContent = closestP.textContent; // Copy the text content
      closestP.textContent = ""; // Clear the text content
      closestP.appendChild(s);
      closestP.style.color = "#b7b7b7";
    }
    if (checkbox.checked === false) {
      let closestP = checkbox.closest(".task").querySelector("p");
      let s = checkbox.closest(".task").querySelector("p").querySelector("s");
      closestP.style.color = "black";
      closestP.textContent = s.textContent;
      s.remove();
    }
  });
});

closesvgs.forEach((closesvg) => {
  closesvg.addEventListener("click", function () {
    // Existing close button click handler
    closesvg.closest(".task").remove();
  });
});

// todo list form
let todoForm = document.querySelector("#todoList");
let formSection = document.querySelector("#form-section");
let todolink = document.querySelector(".todo-menu");
let formlink = document.querySelector(".form-menu");

todoForm.style.display = "none";
todolink.addEventListener(`click`, function (event) {
  event.preventDefault();
  todoForm.style.display = "block";
  formSection.style.display = "none";
});

formlink.addEventListener(`click`, function (event) {
  event.preventDefault();
  formSection.style.display = "block";
  todoForm.style.display = "none";
});

// floating label
let label = document.querySelectorAll(".label-floating");
let input = document.querySelectorAll(".input-floating");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener(`focus`, function () {
    label[i].style.color = "black";
    label[i].style.transform = "scale3d(0.7, 0.7, 5) translate(0%, -75%)";
  });
}

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener(`blur`, function () {
    if (input[i].value.length === 0) {
      label[i].style.color = "";
      label[i].style.transform = "";
    }
  });
}

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener(`input`, function () {
    if (input[i].value.length > 0) {
      label[i].style.color = "black";
      label[i].style.transform = "scale3d(0.7, 0.7, 5) translate(0%, -75%)";
    } else {
      label[i].style.color = "";
      label[i].style.transform = "";
    }
  });
}
