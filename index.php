<?php ?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PUM Copper Mining Limited</title>
<link rel="stylesheet" href="assets/css/style.css">
<script defer src="assets/js/main.js"></script>
</head>
<body>

<!-- CONSULTATION MODAL -->
<div id="consultModal" class="modal">
  <div class="modal-content">

    <!-- STEP 1 -->
    <div class="step active">
      <h2>Consultation Process</h2>
      <p>
        Step 1: Review our consultation process carefully.
      </p>
      <p>
        Step 2: Deposit ZMK 250 to Airtel Money number:
        <strong>+260772786809</strong>
      </p>
      <button onclick="nextStep()">Continue</button>
    </div>

    <!-- STEP 2 -->
    <div class="step">
      <h2>Payment Confirmation</h2>
      <p>
        Please ensure payment has been made before proceeding.
      </p>
      <button onclick="nextStep()">Proceed to Form</button>
    </div>

    <!-- STEP 3 -->
    <div class="step">
      <h2>Consultation Request</h2>

      <form id="consultForm">
        <input type="text" id="name" placeholder="Full Name" required>
        <input type="email" id="email" placeholder="Email" required>
        <input type="text" id="phone" placeholder="Phone Number" required>
        <input type="text" id="company" placeholder="Company">
        <input type="text" id="project" placeholder="Project Type">
        <textarea id="details" placeholder="Project Details"></textarea>
        <button type="submit">Submit via WhatsApp</button>
      </form>
    </div>

    <span class="close" onclick="closeModal()">&times;</span>
  </div>
</div>

<div id="preloader"><div class="loader"></div></div>
<div id="progress-bar"></div>
<div id="particles"></div>

<header class="navbar">
  <div class="logo">PUM Copper Mining Ltd</div>
  <nav>
    <a href="#about">About</a>
    <a href="#operations">Operations</a>
    <a href="#services">Services</a>
    <a href="#minerals">Minerals</a>
    <a href="#stats">Impact</a>
    <button onclick="openModal()">Book Consultation</button>
  </nav>
</header>

<!-- HERO -->
<section class="hero">
  <div class="hero-content">
    <h1>PUM Copper Mining Limited</h1>
    <p>
      A Zambian-based mining company committed to responsible copper extraction,
      mineral trading, and sustainable mining development.
    </p>
    <button onclick="openModal()">Book a Consultation</button>
  </div>
</section>

<!-- ABOUT US -->
<section class="about-premium">
  <div class="about-container">

    <span class="about-label">ABOUT US</span>

    <h2>
      Pioneering Copper Mining <br>
      Excellence in Zambia
    </h2>

    <p>
      Founded with a vision to responsibly harness Zambia's vast mineral wealth,
      PUM Copper Mine has grown into a trusted name in the mining industry.
      Operating from our base in Chilenge South, Lusaka, we combine traditional
      expertise with modern technology to deliver exceptional results for our
      partners and stakeholders.
    </p>

    <div class="grid">
    <div class="card">
      <h3>Mineral Exploration</h3>
      <p>Geological surveys and mineral assessments.</p>
    </div>

    <div class="card">
      <h3>Copper Extraction</h3>
      <p>Professional extraction and processing of copper minerals.</p>
    </div>

    <div class="card">
      <h3>Mineral Trading</h3>
      <p>Reliable supply of minerals to local and international markets.</p>
    </div>

    <div class="card">
      <h3>Mining Consultation</h3>
      <p>Professional advisory services for mining investments and operations.</p>
    </div>

    <div class="card">
      <h3>Mining Consultation</h3>
      <p>Professional advisory services for mining investments and operations.</p>
    </div>
    
    <div class="card">
      <h3>Mining Consultation</h3>
      <p>Professional advisory services for mining investments and operations.</p>
    </div>
  </div>

  </div>
</section>

<!-- PARALLAX -->
<section class="parallax">
  <div class="parallax-content">
    <h2>Driving Zambia’s Mining Excellence</h2>
  </div>
</section>

<!-- OPERATIONS -->
<section id="operations" class="section dark-section">
  <h2>Our Operations</h2>
  <p>
    We are involved in mineral exploration, extraction, processing,
    and supply of copper and related minerals. Our operational strategy
    focuses on efficiency, safety, and environmental sustainability.
  </p>

  <p>
    We utilize modern mining techniques to maximize output while
    minimizing environmental impact.
  </p>
</section>

<!-- SERVICES -->
<section id="services" class="section">
  <h2>Our Services</h2>
  <div class="grid">
    <div class="card">
      <h3>Mineral Exploration</h3>
      <p>Geological surveys and mineral assessments.</p>
    </div>

    <div class="card">
      <h3>Copper Extraction</h3>
      <p>Professional extraction and processing of copper minerals.</p>
    </div>

    <div class="card">
      <h3>Mineral Trading</h3>
      <p>Reliable supply of minerals to local and international markets.</p>
    </div>

    <div class="card">
      <h3>Mining Consultation</h3>
      <p>Professional advisory services for mining investments and operations.</p>
    </div>
  </div>
</section>

<!-- MINERALS -->
<section id="minerals" class="section dark-section">
  <h2>Our Minerals</h2>
  <div class="slider">
    <div class="slides">
      <div class="slide">
        <img src="public/minerals/copper.jpg">
        <h3>Copper</h3>
      </div>

      <div class="slide">
        <img src="public/minerals/malachite.jpg">
        <h3>Malachite</h3>
      </div>

      <div class="slide">
        <img src="public/minerals/cobalt.jpg">
        <h3>Cobalt</h3>
      </div>
    </div>
  </div>
</section>

<!-- STATS -->
<section id="stats" class="section">
  <h2>Company Impact</h2>
  <div class="stats-grid">
    <div>
      <span class="counter" data-target="10">0</span>
      <p>Years of Experience</p>
    </div>

    <div>
      <span class="counter" data-target="50">0</span>
      <p>Projects Completed</p>
    </div>

    <div>
      <span class="counter" data-target="200">0</span>
      <p>Employees</p>
    </div>

    <div>
      <span class="counter" data-target="100">0</span>
      <p>% Regulatory Compliance</p>
    </div>
  </div>
</section>

<footer>
  <p>© <?php echo date("Y"); ?> PUM Copper Mining Limited | Zambia</p>
</footer>

<a href="https://wa.me/260772786809" class="whatsapp-float" target="_blank">
  💬
</a>

</body>
</html>