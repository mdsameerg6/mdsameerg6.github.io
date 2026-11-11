const projectData = {
  flood: {
    title: "Landslide & Flood Early Warning System",
    description: "An IoT-based academic prototype for monitoring environmental conditions that may indicate flood or landslide risk.",
    objective: "To monitor rainfall, soil moisture and water level, and provide a local alert when configured threshold values are crossed.",
    components: "ESP32, rain sensor, soil moisture sensor, water-level sensor, DHT11, LCD, buzzer and Wi-Fi connectivity.",
    working: "Sensors provide readings to the ESP32. The controller compares readings against programmed threshold values, displays system information on the LCD and activates a buzzer for alert conditions. Wi-Fi can be used to communicate status information. Add your actual threshold values, alert platform and test results here."
  },
  antenna: {
    title: "Microstrip Patch Antenna for UWB Applications",
    description: "An academic RF design and simulation project focused on a microstrip patch antenna for ultra-wideband applications.",
    objective: "To design and evaluate a microstrip patch antenna structure and study its simulated RF characteristics.",
    components: "ANSYS HFSS, FR4 substrate, copper patch and ground plane.",
    working: "The antenna geometry and substrate are modelled in HFSS, followed by simulation and analysis of parameters such as return loss, bandwidth, gain and radiation pattern. Add your actual dimensions, frequency range and simulation plots."
  },
  distance: {
    title: "Distance Measuring Vehicle",
    description: "A sensor-based mini project that uses ultrasonic ranging to detect the distance to an object.",
    objective: "To demonstrate non-contact distance measurement using an Arduino and an ultrasonic sensor.",
    components: "Arduino Uno, HC-SR04 ultrasonic sensor, jumper wires, power supply and vehicle/platform setup.",
    working: "The HC-SR04 sends an ultrasonic pulse and measures the echo return time. Arduino uses the time-of-flight to estimate distance. Add your display/output method and measured accuracy."
  },
  streetlight: {
    title: "Automatic Street Light",
    description: "An automatic lighting mini project that responds to surrounding light conditions.",
    objective: "To switch a light output automatically based on ambient brightness, reducing the need for manual operation.",
    components: "Arduino, LDR, resistor, LED or relay module and connecting wires.",
    working: "The LDR circuit provides a light-dependent signal to the controller. Arduino compares the sensor reading with a chosen threshold and switches the output accordingly. Add your actual circuit and threshold details."
  }
};

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

const progress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
});

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

const modal = document.getElementById("projectModal");
const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};
document.querySelectorAll(".project-details").forEach(button => {
  button.addEventListener("click", () => {
    const project = projectData[button.dataset.project];
    if (!project) return;
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalDescription").textContent = project.description;
    document.getElementById("modalObjective").textContent = project.objective;
    document.getElementById("modalComponents").textContent = project.components;
    document.getElementById("modalWorking").textContent = project.working;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("modalClose").focus();
  });
});
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.querySelector("[data-close-modal]").addEventListener("click", closeModal);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
});
