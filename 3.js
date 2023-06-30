
    var expenses = [];

    function showNotification(message) {
      var notificationDiv = document.getElementById("notification");
      notificationDiv.innerHTML = '<div class="notification">' + message + '</div>';
      setTimeout(function() {
        notificationDiv.innerHTML = '';
      }, 3000);
    }

 
    document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault();
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      document.getElementById("loginForm").style.display = "none";
      document.getElementById("expenseForm").style.display = "block";
    });

    document.getElementById("expenseForm").addEventListener("submit", function (event) {
      event.preventDefault();
      var expenseName = document.getElementById("expenseName").value;
      var expenseAmount = document.getElementById("expenseAmount").value;

   
      expenses.push({ name: expenseName, amount: expenseAmount });


      var expenseTable = document.getElementById("expenseTable");
      var newRow = expenseTable.insertRow();
      var nameCell = newRow.insertCell();
      var amountCell = newRow.insertCell();
      nameCell.innerHTML = expenseName;
      amountCell.innerHTML = expenseAmount;


      document.getElementById("expenseForm").reset();

      showNotification("Expense added successfully!");
    });
