<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple School Website</title>
    <!-- Link to your CSS styles -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to Our School</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#" id="home">Home</a></li>
            <li><a href="#" id="about">About</a></li>
            <li><a href="#" id="contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section id="home-section">
            <h2>Home</h2>
            <p>Welcome to our school website! Explore and learn more about us.</p>
        </section>
        <section id="about-section" style="display: none;">
            <h2>About</h2>
            <p>Learn about our school's history, mission, and values.</p>
        </section>
        <section id="contact-section" style="display: none;">
            <h2>Contact</h2>
            <p>Contact us for any inquiries or to schedule a visit.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Your School. All rights reserved.</p>
    </footer>

    <!-- JavaScript code -->
    <script>
        // Function to show/hide sections based on navigation clicks
        function showSection(sectionId) {
            // Hide all sections
            var sections = document.querySelectorAll('main section');
            sections.forEach(function(section) {
                section.style.display = 'none';
            });

            // Show the selected section
            var selectedSection = document.getElementById(sectionId + '-section');
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }
        }

        // Add event listeners to navigation links
        document.getElementById('home').addEventListener('click', function() {
            showSection('home');
        });

        document.getElementById('about').addEventListener('click', function() {
            showSection('about');
        });

        document.getElementById('contact').addEventListener('click', function() {
            showSection('contact');
        });
    </script>
</body>
</html>
