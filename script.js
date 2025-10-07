    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let name = document.getElementById("reg-name").value.trim();
      let email = document.getElementById("reg-email").value.trim();
      let pass = document.getElementById("reg-pass").value.trim();

      let users = JSON.parse(localStorage.getItem("users")) || [];

      // check if email exists
      let exist = users.find(u => u.email === email);
      if (exist) {
        alert("Email already registered!");
        return;
      }

      users.push({ name, email, pass });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registered successfully!");
      window.location.href = "login.html";
    });