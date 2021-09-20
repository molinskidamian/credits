(function () {
    const currentMonthField = document.querySelector(
        ".calendar-header-down .current-month"
    );
    const currentYearField = document.querySelector(
        ".calendar-header-down .current-year"
    );

    const prevMonthBtn = document.querySelector(
        ".calendar-header-down .fa-chevron-circle-left"
    );
    const nextMonthBtn = document.querySelector(
        ".calendar-header-down .fa-chevron-circle-right"
    );

    const date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();

    currentMonthField.textContent = date.getMonth();
    currentYearField.textContent = date.getFullYear();

    prevMonthBtn.addEventListener("click", function () {
        if (month > 0) {
            currentMonthField.textContent = month -= 1;
        } else {
            currentYearField.textContent = year -= 1;
            currentMonthField.textContent = 11;
            month = 11;
        }
    });

    nextMonthBtn.addEventListener("click", function () {
        if (month < 11) {
            currentMonthField.textContent = month += 1;
        } else {
            currentYearField.textContent = year += 1;
            currentMonthField.textContent = 0;
            month = 0;
        }
    });
})();
