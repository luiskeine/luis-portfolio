
/**
 * ARCHIVE TERMINAL LOGIC
 * Developer: Luis
 * Role: Computer Science Student | AI & Automation
 */

// ============================================================
// 1. PROJECT DATA ARCHIVE
// ============================================================

const projectData = {

    // --------------------------------------------------------
    // SYSTEM INFORMATION
    // --------------------------------------------------------

    "archive_system": {
        title: "About The Archive Terminal",

        spec: "STATUS: STABLE // ROLE: PERSONAL_SHOWROOM // ENGINE: ES6_VANILLA",

        repo: "https://github.com/luiskeine/luis-portfolio",

        content: `
            <div class="system-section">
                <div class="section-flex">
                    <div class="section-text">

                        <h3>01_THE_MISSION</h3>

                        <p>
                            I am Luis, a Computer Science student specializing
                            in AI and Automation. I built this terminal to act
                            as a living record of my technical growth.
                        </p>

                        <p>
                            The goal was to move away from traditional resumes
                            and create an interface that reflects the technical
                            systems I enjoy building.
                        </p>

                    </div>
                </div>
            </div>

            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">

                        <h3>02_DEVELOPMENT_ETHOS</h3>

                        <p>
                            This page uses no external libraries or frameworks.
                            It is built with raw HTML, CSS, and JavaScript
                            to demonstrate my understanding of web development.
                        </p>

                        <ul>
                            <li>
                                <strong>Transparency:</strong>
                                Project status and skills reflect my
                                learning journey.
                            </li>

                            <li>
                                <strong>Focus:</strong>
                                Every line of code is written to build
                                a functional and organized interface.
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div class="system-section">

                <div class="section-text"
                     style="text-align:center; border-top:1px solid var(--border-color); padding-top:20px;">

                    <p>
                        Thank you for exploring my work. If you're interested
                        in the logic behind this showroom, you can access
                        the manifest below.
                    </p>

                </div>

            </div>
        `
    },


    // --------------------------------------------------------
    // ARCHIVE 01 - ONLINE CONSULTATION QUEUE
    // --------------------------------------------------------

    "archive_01": {

        title: "Online Consultation Queue Management System",

        spec: "SYSTEM_ID: ARCHIVE_01 // CORE_LANGUAGE: JAVA_21 // DB: MYSQL_8.0",

        repo: "https://github.com/luiskeine/OnlineConsultationQueueSystem",

        content: `

            <div class="system-section">

                <div class="section-flex">

                    <div class="section-text">

                        <h3>01_PUBLIC_LOBBY_INTERFACE</h3>

                        <p>
                            I designed this high-visibility monitor interface
                            specifically for medical consultation lobbies.
                            The primary goal was to ensure zero-latency
                            updates for patients tracking their status.
                        </p>

                        <ul>
                            <li>
                                <strong>Auto-Refresh:</strong>
                                System pulses every 2000ms to fetch live SQL data.
                            </li>

                            <li>
                                <strong>FlatLaf Theme:</strong>
                                Utilized modern Swing Look-and-Feel
                                for a dark, professional aesthetic.
                            </li>
                        </ul>

                    </div>

                    <img src="images/lobby_display.png" alt="Lobby display">

                </div>

            </div>


            <div class="system-section">

                <div class="section-flex invert">

                    <div class="section-text">

                        <h3>02_SECURITY_&_ENCRYPTION</h3>

                        <p>
                            Security was a top priority. I moved beyond
                            simple plain-text storage by implementing
                            salted hashing to protect user credentials.
                        </p>

                        <ul>
                            <li><strong>jBCrypt Integration:</strong> Password hashing.</li>
                            <li><strong>SQL Injection Prevention:</strong> PreparedStatements.</li>
                        </ul>

                    </div>

                    <img src="images/login_system.png" alt="Login system">

                </div>

            </div>


            <div class="system-section">

                <div class="section-flex">

                    <div class="section-text">

                        <h3>03_CLIENT_PORTAL_DASHBOARD</h3>

                        <p>
                            The client interface focuses on a seamless
                            user journey. Once logged in, users can view
                            their current active tickets and their
                            position in the live queue.
                        </p>

                    </div>

                    <img src="images/customer_display.png" alt="Client dashboard">

                </div>

            </div>


            <div class="system-section">

                <div class="section-flex invert">

                    <div class="section-text">

                        <h3>04_TICKET_GENERATION_LOGIC</h3>

                        <p>
                            I built an automated ticket assignment system
                            that categorizes requests by service type.
                            This ensures that the consultation flow
                            remains organized.
                        </p>

                    </div>

                    <img src="images/getting_ticket.png" alt="Ticket generation">

                </div>

            </div>


            <div class="system-section">

                <div class="section-flex">

                    <div class="section-text">

                        <h3>05_ADMIN_CONTROL_HUB</h3>

                        <p>
                            The operational hub. Admins have a bird's-eye
                            view of all pending cases and can approve,
                            serve, or remove tickets from the active database.
                        </p>

                    </div>

                    <img src="images/admin_display.png" alt="Admin display">

                </div>

            </div>


            <div class="system-section">

                <div class="section-flex invert">

                    <div class="section-text">

                        <h3>06_AUTOMATED_VOICE_SERVICE</h3>

                        <p>
                            To improve accessibility, I integrated a voice
                            announcement system. Multi-threading allows
                            audio to run on a background thread so the
                            UI never freezes.
                        </p>

                    </div>

                    <img src="images/calling_client.png" alt="Calling client">

                </div>

            </div>

        `
    },


    // --------------------------------------------------------
    // ARCHIVE 02 - SMART FILE ORGANIZER
    // --------------------------------------------------------

    "archive_02": {

        title: "Smart File Organizer (Python Automation)",

        spec: "SYSTEM_ID: ARCHIVE_02 // CORE_LANGUAGE: PYTHON_3.10 // ARCH: EVENT-DRIVEN",

        repo: "https://github.com/luiskeine/Smart-File-Organizer.git",

        content: `

            <div class="system-section">

                <div class="section-flex">

                    <div class="section-text">

                        <h3>01_PROFESSIONAL_GUI_DESIGN</h3>

                        <p>
                            Transitioning from script-based tools to full
                            applications, I used CustomTkinter to build
                            a modern desktop interface that reflects
                            high-end system utilities.
                        </p>

                    </div>

                    <img src="images/organizer_gui.png" alt="Organizer GUI">

                </div>

            </div>


            <div class="system-section">

                <div class="section-flex invert">

                    <div class="section-text">

                        <h3>02_STANDALONE_EXE_PACKAGING</h3>

                        <p>
                            One of my main goals was to ship a finished
                            product. I packaged the Python source code
                            into a single, portable executable file
                            for Windows users.
                        </p>

                    </div>

                    <img src="images/organizer_exe.png" alt="Organizer executable">

                </div>

            </div>


            <div class="system-section">

                <div class="section-flex">

                    <div class="section-text">

                        <h3>03_UNIVERSAL_PATH_SELECTION</h3>

                        <p>
                            I implemented a dynamic Browse feature.
                            This allows the system to organize any folder
                            on the computer using the pathlib library.
                        </p>

                    </div>

                    <img src="images/organizer_browse.png" alt="Folder selection">

                </div>

            </div>


            <div class="system-section">

                <div class="section-flex invert">

                    <div class="section-text">

                        <h3>04_TECHNICAL_AUDIT_LOGGING</h3>

                        <p>
                            I built a system-level log that records
                            every action taken by the background observer
                            with precise timestamps in a Matrix-Green console.
                        </p>

                    </div>

                    <img src="images/organizer_log.png" alt="Organizer logs">

                </div>

            </div>


            <div class="system-section">

                <div class="section-flex">

                    <div class="section-text">

                        <h3>05_UNORGANIZED_STATE (THE PROBLEM)</h3>

                        <p>
                            Demonstrating the need for automation.
                            This shows a cluttered folder making
                            data retrieval slow.
                        </p>

                    </div>

                    <img src="images/organizer_before.png" alt="Unorganized folder">

                </div>

            </div>


            <div class="system-section">

                <div class="section-flex invert">

                    <div class="section-text">

                        <h3>06_AUTOMATED_CLASSIFICATION (THE SOLUTION)</h3>

                        <p>
                            By utilizing O(1) Dictionary Mapping,
                            the system instantly identifies extensions
                            and moves them into respective subfolders.
                        </p>

                    </div>

                    <img src="images/organizer_after.png" alt="Organized folder">

                </div>

            </div>

        `
    },


    // --------------------------------------------------------
    // ARCHIVE 03 - AI RESUME ANALYZER
    // --------------------------------------------------------

    "archive_03": {

        title: "AI Resume Analyzer (In Development)",

        spec: "SYSTEM_ID: ARCHIVE_03 // LANGUAGE: PYTHON / FLASK // STATUS: IN_PROGRESS",

        repo: "#",

        content: `

            <div class="system-section">

                <h3>01_DEVELOPMENT_LOG</h3>

                <p>
                    Currently architecting a Python-based tool to analyze
                    PDF resumes against job descriptions using
                    Natural Language Processing (NLP).
                </p>

                <ul>

                    <li>
                        <strong>Goal:</strong>
                        Automate the HR screening process using
                        AI matching logic.
                    </li>

                    <li>
                        <strong>Current Status:</strong>
                        Parsing engine complete; developing the
                        Flask-based web interface.
                    </li>

                </ul>

            </div>

        `
    },


    // --------------------------------------------------------
    // ARCHIVE 04 - SMARTFIND
    // --------------------------------------------------------

    "archive_04": {

        title: "SmartFind - Intelligent Lost & Found System",

        spec: "SYSTEM_ID: ARCHIVE_04 // CORE: OBJECT_DETECTION // DOMAIN: INTELLIGENT_AGENTS",

        repo: "https://github.com/luiskeine/SmartFind-yolov5-integration",

        content: `

            <!-- SECTION 01: PROJECT OVERVIEW -->

            <div class="system-section">

                <div class="section-flex">

                    <div class="section-text">

                        <h3>01_SMARTFIND_OVERVIEW</h3>

                        <p>
                            SmartFind is an intelligent lost-and-found
                            system designed to help users identify and
                            locate lost belongings through image-based
                            object detection and information matching.
                        </p>

                        <p>
                            The project combines AI-based image analysis
                            with structured lost and found records to
                            assist the process of finding potentially
                            matching items.
                        </p>

                        <ul>

                            <li><strong>Domain:</strong> Intelligent Agents and Computer Vision</li>

                            <li><strong>Purpose:</strong> Assist in lost-and-found item identification</li>

                            <li><strong>Core:</strong> Object detection and matching workflow</li>

                        </ul>

                    </div>

                    <img src="images/smartfind_dashboard.png"
                         alt="SmartFind dashboard">

                </div>

            </div>


            <!-- SECTION 02: LOST ITEM REPORT -->

            <div class="system-section">

                <div class="section-flex invert">

                    <div class="section-text">

                        <h3>02_LOST_ITEM_REPORTING</h3>

                        <p>
                            The lost item reporting interface allows
                            users to submit information about belongings
                            they have lost. This creates a structured
                            record that can be used for comparison
                            with found item reports.
                        </p>

                        <ul>

                            <li><strong>Input:</strong> Lost item information</li>

                            <li><strong>Record:</strong> Structured report details</li>

                            <li><strong>Purpose:</strong> Support item retrieval</li>

                        </ul>

                    </div>

                    <img src="images/smartfind_report_lost.png"
                         alt="SmartFind lost item report">

                </div>

            </div>


            <!-- SECTION 03: FOUND ITEM REPORT -->

            <div class="system-section">

                <div class="section-flex">

                    <div class="section-text">

                        <h3>03_FOUND_ITEM_REPORTING</h3>

                        <p>
                            Found items can be reported and documented
                            within the system. The report provides
                            information that can be compared against
                            existing lost item records.
                        </p>

                        <ul>

                            <li><strong>Input:</strong> Found item details</li>

                            <li><strong>Record:</strong> Item description and information</li>

                            <li><strong>Purpose:</strong> Create searchable found-item records</li>

                        </ul>

                    </div>

                    <img src="images/smartfind_report_found.png"
                         alt="SmartFind found item report">

                </div>

            </div>


            <!-- SECTION 04: IMAGE RECOGNITION -->

            <div class="system-section">

                <div class="section-flex invert">

                    <div class="section-text">

                        <h3>04_AI_OBJECT_DETECTION</h3>

                        <p>
                            SmartFind integrates an object detection
                            component to analyze submitted images
                            and identify potential object categories.
                            The detection results help provide
                            additional information for item reporting
                            and matching.
                        </p>

                        <ul>

                            <li><strong>Model:</strong> YOLO object detection</li>

                            <li><strong>Input:</strong> Item image</li>

                            <li><strong>Output:</strong> Detected object category</li>

                        </ul>

                    </div>

                    <img src="images/smartfind_records.png"
                         alt="SmartFind object detection and records">

                </div>

            </div>


            <!-- SECTION 05: INTELLIGENT MATCHING -->

            <div class="system-section">

                <div class="section-flex">

                    <div class="section-text">

                        <h3>05_INTELLIGENT_MATCHING_AGENT</h3>

                        <p>
                            The matching component evaluates reported
                            lost and found items to identify potential
                            matches. It uses item information and
                            detection-related data to support
                            the matching process.
                        </p>

                        <p>
                            Rather than relying on a single field,
                            the system considers item details
                            to assist in finding possible matching
                            reports.
                        </p>

                        <ul>

                            <li><strong>Process:</strong> Compare item records</li>

                            <li><strong>Goal:</strong> Identify potential matches</li>

                            <li><strong>Output:</strong> Matching suggestions</li>

                        </ul>

                    </div>

                    <img src="images/smartfind_possible_matches.png"
                         alt="SmartFind possible matching items">

                </div>

            </div>


            <!-- SECTION 06: ADMINISTRATION -->

            <div class="system-section">

                <div class="section-flex invert">

                    <div class="section-text">

                        <h3>06_ADMINISTRATION_AND_RECORDS</h3>

                        <p>
                            The administrative interface provides
                            a centralized view of system records
                            and reported items, helping manage
                            information within the lost-and-found
                            workflow.
                        </p>

                        <ul>

                            <li><strong>Records:</strong> Organized item information</li>

                            <li><strong>Monitoring:</strong> Overview of reports</li>

                            <li><strong>Management:</strong> Administrative interface</li>

                        </ul>

                    </div>

                    <img src="images/smartfind_admin.png"
                         alt="SmartFind admin interface">

                </div>

            </div>


            <!-- SECTION 07: MODEL EVALUATION -->

            <div class="system-section">

                <div class="section-flex">

                    <div class="section-text">

                        <h3>07_MODEL_EVALUATION</h3>

                        <p>
                            The object detection model was evaluated
                            using standard computer vision metrics
                            to measure its detection performance.
                        </p>

                        <ul>

                            <li><strong>Precision:</strong> 96.2%</li>

                            <li><strong>Recall:</strong> 89.8%</li>

                            <li><strong>mAP@0.5:</strong> 91.7%</li>

                            <li><strong>mAP@0.5–0.95:</strong> 84.7%</li>

                        </ul>

                        <p>
                            These evaluation results provide a
                            quantitative overview of the model's
                            object detection performance.
                        </p>

                    </div>

                </div>

            </div>

        `
    }

};


// ============================================================
// 2. MODAL SYSTEM LOGIC
// ============================================================

function openProject(id) {

    const project = projectData[id];

    if (!project) return;

    const modal = document.getElementById("project-modal");

    const body = document.getElementById("modal-body");

    const pathName = document.querySelector(".current-file");


    body.innerHTML = `

        <h2>${project.title}</h2>

        <div class="tech-spec">
            ${project.spec}
        </div>

        ${project.content}

        <a href="${project.repo}"
           target="_blank"
           class="link-btn">
            OPEN_REPOSITORY
        </a>

    `;


    if (pathName) {

        pathName.innerHTML = `${id.toUpperCase()}.sys`;

    }


    modal.style.display = "block";

    document.body.style.overflow = "hidden";

}


// Close modal

function closeProject() {

    document.getElementById("project-modal").style.display = "none";

    document.body.style.overflow = "auto";

}


// ============================================================
// 3. TYPING EFFECT
// ============================================================

const typeText = "Software Development // AI // Automation";

let typeIndex = 0;


function handleTyping() {

    const target = document.querySelector(".typing-text");

    if (target && typeIndex < typeText.length) {

        target.innerHTML += typeText.charAt(typeIndex);

        typeIndex++;

        setTimeout(handleTyping, 50);

    }

}


// ============================================================
// 4. IMAGE INSPECTOR / LIGHTBOX
// ============================================================

// Create lightbox

const lightbox = document.createElement("div");

lightbox.classList.add("lightbox");

document.body.appendChild(lightbox);


// Create lightbox image

const lightboxImg = document.createElement("img");

lightbox.appendChild(lightboxImg);


// Image click inside modal

document.getElementById("modal-body").addEventListener("click", function(e) {

    if (e.target.tagName === "IMG") {

        lightboxImg.src = e.target.src;

        lightbox.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

});


// Close lightbox

lightbox.onclick = function() {

    lightbox.style.display = "none";

    if (document.getElementById("project-modal").style.display === "none") {

        document.body.style.overflow = "auto";

    }

};


// ============================================================
// 5. GLOBAL INITIALIZATION
// ============================================================

window.onload = function() {

    handleTyping();

};


// Close modal when clicking outside

window.onclick = function(event) {

    const modal = document.getElementById("project-modal");

    if (event.target == modal) {

        closeProject();

    }

};


// Close modal/lightbox using ESC key

window.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeProject();

        lightbox.style.display = "none";

    }

});
