<script>
  fetch('nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;

      // Now that nav is loaded, add active class
      const currentPage = window.location.pathname.split("/").pop(); // get current filename
      const navLinks = document.querySelectorAll("nav ul.nav-list li a");

      navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
          link.classList.add("active");
        }
      });
    })
    .catch(err => console.error('Failed to load nav:', err));
</script>
