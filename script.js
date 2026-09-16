/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* Tutup menu setelah klik link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


reveals.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   ACTIVE NAVBAR
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* =========================
   PROJECT DATA
========================= */

const projects = {

    lan: {

        category: "NETWORKING",

        title: "LAN Network Simulation",

        description:
        "Project simulasi jaringan LAN menggunakan Cisco Packet Tracer. Project ini digunakan untuk memahami konsep jaringan, hubungan antar perangkat, serta komunikasi antar komputer dalam sebuah jaringan.",

        tags: [
            "Cisco Packet Tracer",
            "Networking",
            "LAN"
        ]

    },


    absensi: {

        category: "WEB DEVELOPMENT",

        title: "Website Absensi",

        description:
        "Website absensi sederhana yang dibuat untuk mempelajari pengembangan website dan pengelolaan data. Sistem menggunakan PHP dan MySQL sebagai bagian dari proses pengolahan data.",

        tags: [
            "HTML",
            "CSS",
            "PHP",
            "MySQL"
        ]

    },


    "smart-home": {

        category: "IoT",

        title: "Smart Home",

        description:
        "Konsep sistem Smart Home sederhana yang berfokus pada otomatisasi perangkat rumah. Salah satu penerapannya adalah pengontrolan lampu menggunakan konsep Internet of Things.",

        tags: [
            "IoT",
            "Smart Home",
            "Automation"
        ]

    },


    "full-adder": {

        category: "DIGITAL LOGIC",

        title: "Full Adder",

        description:
        "Project rangkaian digital Full Adder untuk memahami proses penjumlahan bilangan biner menggunakan beberapa gerbang logika seperti XOR, AND, dan OR.",

        tags: [
            "XOR",
            "AND",
            "OR",
            "Digital Logic"
        ]

    },

        "toko-online": {

        category: "TOKO ONLINE",

        title: "Website Toko Online",

        description:
        "Website toko online yang dibuat untuk menampilkan produk, informasi produk, serta fitur dasar dalam proses pembelian.",

        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ]

    },


    "data-hujan": {

        category: "DATA HUJAN",

        title: "Analisis Data Curah Hujan",

        description:
        "Analisis data curah hujan untuk melihat pola dan perubahan curah hujan berdasarkan data yang tersedia.",

        tags: [
            "Data Analysis",
            "Python",
            "Data"
        ]

    },

    


};



/* =========================
   PROJECT MODAL
========================= */

const modal = document.getElementById("projectModal");

const modalCategory =
document.getElementById("modalCategory");

const modalTitle =
document.getElementById("modalTitle");

const modalDescription =
document.getElementById("modalDescription");

const modalTags =
document.getElementById("modalTags");


function openProject(projectName) {

    const project = projects[projectName];

    if (!project) return;


    modalCategory.textContent =
        project.category;

    modalTitle.textContent =
        project.title;

    modalDescription.textContent =
        project.description;


    modalTags.innerHTML = "";


    project.tags.forEach(tag => {

        const span = document.createElement("span");

        span.textContent = tag;

        modalTags.appendChild(span);

    });


    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeProject() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* Klik area luar modal */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeProject();

    }

});


/* Tombol ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeProject();

    }

});


/* =========================
   BUTTON RIPPLE EFFECT
========================= */

document.querySelectorAll(
    ".btn, .contact-button, .project-btn"
).forEach(button => {

    button.addEventListener("click", function() {

        this.style.transform = "scale(.96)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

});