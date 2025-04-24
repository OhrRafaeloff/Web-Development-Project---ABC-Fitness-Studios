<!-- HOMEPAGE: index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>ABC Fitness Studio</title>
    <link rel="stylesheet" href="style.css" />
    <script defer src="script.js"></script>
  </head>
  <body>
    <header>
      <h1>ABC Fitness Studio</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="gallery.html">Gallery</a>
        <a href="about-contact.html">About Us</a>
        <a href="extras.html">Extras</a>
      </nav>
    </header>

    <main>
      <section>
        <h2>Get fit with us!</h2>
        <p>[Hero Image Placeholder]</p>
        <button id="subscribeBtn">Join us now!</button>
      </section>
    </main>

    <footer>
      <p>Eleven | Twelve | Thirteen</p>
      <p>CompanyName © 202X. All rights reserved.</p>
    </footer>
  </body>
</html>

<!-- GALLERY PAGE: gallery.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Gallery - ABC Fitness Studio</title>
    <link rel="stylesheet" href="style.css" />
    <script defer src="script.js"></script>
  </head>
  <body>
    <header>
      <h1>Photo Gallery</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="gallery.html">Gallery</a>
        <a href="about-contact.html">About Us</a>
        <a href="extras.html">Extras</a>
      </nav>
    </header>

    <main>
      <table>
        <tr>
          <td><img src="#" alt="Image 1" /><br /><button class="addToCart">Add to Cart</button></td>
          <td><img src="#" alt="Image 2" /><br /><button class="addToCart">Add to Cart</button></td>
          <td><img src="#" alt="Image 3" /><br /><button class="addToCart">Add to Cart</button></td>
        </tr>
        <tr>
          <td><img src="#" alt="Image 4" /><br /><button class="addToCart">Add to Cart</button></td>
          <td><img src="#" alt="Image 5" /><br /><button class="addToCart">Add to Cart</button></td>
          <td><img src="#" alt="Image 6" /><br /><button class="addToCart">Add to Cart</button></td>
        </tr>
      </table>
      <button id="viewCart">View Cart</button>
    </main>

    <footer>
      <p>Eleven | Twelve | Thirteen</p>
      <p>CompanyName © 202X. All rights reserved.</p>
    </footer>
  </body>
</html>

<!-- ABOUT / CONTACT PAGE: about-contact.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>About Us - ABC Fitness Studio</title>
    <link rel="stylesheet" href="style.css" />
    <script defer src="script.js"></script>
  </head>
  <body>
    <header>
      <h1>About Us</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="gallery.html">Gallery</a>
        <a href="about-contact.html">About Us</a>
        <a href="extras.html">Extras</a>
      </nav>
    </header>

    <main>
      <section>
        <h2>Our Story</h2>
        <p>[Team Photo Placeholder]</p>
        <p>ABC Fitness Studio was founded with one goal: to help our community stay healthy and strong.</p>
      </section>
      <section>
        <h2>Contact Us</h2>
        <form id="feedbackForm">
          <label for="name">Name:</label><br />
          <input type="text" id="name" name="name" /><br />

          <label for="email">Email:</label><br />
          <input type="email" id="email" name="email" /><br />

          <label for="message">Message:</label><br />
          <textarea id="message" name="message"></textarea><br />

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>

    <footer>
      <p>Eleven | Twelve | Thirteen</p>
      <p>CompanyName © 202X. All rights reserved.</p>
    </footer>
  </body>
</html>

<!-- EXTRAS PAGE: extras.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Extras - ABC Fitness Studio</title>
    <link rel="stylesheet" href="style.css" />
    <script defer src="script.js"></script>
  </head>
  <body>
    <header>
      <h1>Community & Testimonials</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="gallery.html">Gallery</a>
        <a href="about-contact.html">About Us</a>
        <a href="extras.html">Extras</a>
      </nav>
    </header>

    <main>
      <section>
        <h2>What Our Members Say</h2>
        <blockquote>"I’ve never felt more motivated to work out. The trainers at ABC Fitness are amazing!" — Sarah L.</blockquote>
        <blockquote>"The community vibe is real here. Love it." — Mike D.</blockquote>
      </section>
    </main>

    <footer>
      <p>Eleven | Twelve | Thirteen</p>
      <p>CompanyName © 202X. All rights reserved.</p>
    </footer>
  </body>
</html>