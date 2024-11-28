    <script>
        function toggleDropdown() {
            var dropdown = document.getElementById('profileDropdown');
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block';
            }
        }

        function navigateTo(page) {
            window.location.href = page;
        }
    </script>