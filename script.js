/**
* ARCHIVE TERMINAL LOGIC
* Developer: Luis
* Role: Computer Science Student | AI & Automation
*/

// 1. PROJECT DATA ARCHIVE
const projectData = {
    "archive_system": {
        title: "About The Archive Terminal",
        spec: "STATUS: STABLE // ROLE: PERSONAL_SHOWROOM // ENGINE: ES6_VANILLA",
        repo: "https://github.com/luiskeine/luis-portfolio",
        content: `
            <div class="system-section">
                <div class="section-flex">
                    <div class="section-text">
                        <h3>01_THE_MISSION</h3>
                        <p>I am Luis, a 3rd-year Computer Science student specializing in AI and Automation. I built this terminal to act as a living record of my technical growth.</p>
                        <p>The goal was to move away from traditional resumes and create an interface that reflects the technical systems I enjoy building.</p>
                    </div>
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">
                        <h3>02_DEVELOPMENT_ETHOS</h3>
                        <p>This page uses no external libraries or frameworks. It is built with raw HTML, CSS, and JavaScript to prove a fundamental understanding of web and software architecture.</p>
                        <ul>
                            <li><strong>Transparency:</strong> Project status and skills reflect my honest learning path.</li>
                            <li><strong>Focus:</strong> Every line of code is written to be efficient and authoritative.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="system-section">
                <div class="section-text" style="text-align: center; border-top: 1px solid var(--border-color); padding-top: 20px;">
                    <p>Thank you for exploring my work. If you're interested in the logic behind this showroom, you can access the manifest below.</p>
                </div>
            </div>
        `
    },
    "archive_01": {
        title: "Online Consultation Queue Management System",
        spec: "SYSTEM_ID: ARCHIVE_01 // CORE_LANGUAGE: JAVA_21 // DB: MYSQL_8.0",
        repo: "https://github.com/luiskeine/OnlineConsultationQueueSystem", 
        content: `
            <div class="system-section">
                <div class="section-flex">
                    <div class="section-text">
                        <h3>01_PUBLIC_LOBBY_INTERFACE</h3>
                        <p>I designed this high-visibility monitor interface specifically for medical consultation lobbies. The primary goal was to ensure zero-latency updates for patients tracking their status.</p>
                        <ul>
                            <li><strong>Auto-Refresh:</strong> System pulses every 2000ms to fetch live SQL data.</li>
                            <li><strong>FlatLaf Theme:</strong> Utilized modern Swing Look-and-Feel for a dark, professional aesthetic.</li>
                        </ul>
                    </div>
                    <img src="images/lobby_display.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">
                        <h3>02_SECURITY_&_ENCRYPTION</h3>
                        <p>Security was a top priority. I moved beyond simple plain-text storage by implementing industry-standard salted hashing to protect user credentials.</p>
                        <ul>
                            <li><strong>jBCrypt Integration:</strong> All passwords undergo one-way salted hashing.</li>
                            <li><strong>SQL Injection Prevention:</strong> Used PreparedStatements for all database queries to ensure enterprise-level safety.</li>
                        </ul>
                    </div>
                    <img src="images/login_system.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex">
                    <div class="section-text">
                        <h3>03_CLIENT_PORTAL_DASHBOARD</h3>
                        <p>The client interface focuses on a seamless user journey. Once logged in, users can view their current active tickets and their specific position in the live queue.</p>
                    </div>
                    <img src="images/customer_display.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">
                        <h3>04_TICKET_GENERATION_LOGIC</h3>
                        <p>I built an automated ticket assignment system that categorizes requests by service type. This ensures that the consultation flow remains organized.</p>
                    </div>
                    <img src="images/getting_ticket.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex">
                    <div class="section-text">
                        <h3>05_ADMIN_CONTROL_HUB</h3>
                        <p>The operational hub. Admins have a bird's-eye view of all pending cases and can approve, serve, or remove tickets from the active database.</p>
                    </div>
                    <img src="images/admin_display.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">
                        <h3>06_AUTOMATED_VOICE_SERVICE</h3>
                        <p>To improve accessibility, I integrated a voice announcement system. Multi-threading allows audio to run on a background thread so the UI never freezes.</p>
                    </div>
                    <img src="images/calling_client.png">
                </div>
            </div>
        `
    },
    "archive_02": {
        title: "Smart File Organizer (Python Automation)",
        spec: "SYSTEM_ID: ARCHIVE_02 // CORE_LANGUAGE: PYTHON_3.10 // ARCH: EVENT-DRIVEN",
        repo: "https://github.com/luiskeine/Smart-File-Organizer.git",
        content: `
            <div class="system-section">
                <div class="section-flex">
                    <div class="section-text">
                        <h3>01_PROFESSIONAL_GUI_DESIGN</h3>
                        <p>Transitioning from script-based tools to full applications, I used CustomTkinter to build a modern desktop interface that reflects high-end system utilities.</p>
                    </div>
                    <img src="images/organizer_gui.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">
                        <h3>02_STANDALONE_EXE_PACKAGING</h3>
                        <p>One of my main goals was to ship a finished product. I packaged the Python source code into a single, portable executable file for Windows users.</p>
                    </div>
                    <img src="images/organizer_exe.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex">
                    <div class="section-text">
                        <h3>03_UNIVERSAL_PATH_SELECTION</h3>
                        <p>I implemented a dynamic Browse feature. This allows the system to organize any folder on the computer using the pathlib library.</p>
                    </div>
                    <img src="images/organizer_browse.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">
                        <h3>04_TECHNICAL_AUDIT_LOGGING</h3>
                        <p>I built a system-level log that records every action taken by the background observer with precise timestamps in a Matrix-Green console.</p>
                    </div>
                    <img src="images/organizer_log.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex">
                    <div class="section-text">
                        <h3>05_UNORGANIZED_STATE (THE PROBLEM)</h3>
                        <p>Demonstrating the need for automation. This shows a cluttered folder making data retrieval slow.</p>
                    </div>
                    <img src="images/organizer_before.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">
                        <h3>06_AUTOMATED_CLASSIFICATION (THE SOLUTION)</h3>
                        <p>By utilizing O(1) Dictionary Mapping, the system instantly identifies extensions and moves them into respective subfolders.</p>
                    </div>
                    <img src="images/organizer_after.png">
                </div>
            </div>
        `
    },
    "archive_03": {
        title: "AI Resume Analyzer (In Development)",
        spec: "SYSTEM_ID: ARCHIVE_03 // LANGUAGE: PYTHON / FLASK // STATUS: IN_PROGRESS",
        repo: "#",
        content: `
            <div class="system-section">
                <h3>01_DEVELOPMENT_LOG</h3>
                <p>Currently architecting a Python-based tool to analyze PDF resumes against job descriptions using Natural Language Processing (NLP).</p>
                <ul>
                    <li><strong>Goal:</strong> Automate the HR screening process using AI matching logic.</li>
                    <li><strong>Current Status:</strong> Parsing engine complete; developing the Flask-based web interface.</li>
                </ul>
            </div>
        `
    }
};

// 2. MODAL SYSTEM LOGIC
function openProject(id) {
    const project = projectData[id];
    if (!project) return;
    const modal = document.getElementById("project-modal");
    const body = document.getElementById("modal-body");
    const pathName = document.querySelector(".current-file");
    
    body.innerHTML = `
        <h2>${project.title}</h2>
        <div class="tech-spec">${project.spec}</div>
        ${project.content}
        <a href="${project.repo}" target="_blank" class="link-btn">OPEN_REPOSITORY</a>
    `;
    
    if (pathName) {
        pathName.innerHTML = ` ${id.toUpperCase()}.sys`;
    }
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function closeProject() {
    document.getElementById("project-modal").style.display = "none";
    document.body.style.overflow = "auto"; 
}

// 3. TYPING EFFECT LOGIC
// Updated Branding: Focuses on Software & AI rather than Data Science
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

// 4. IMAGE INSPECTOR LOGIC (LIGHTBOX)
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);
const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

// Event Delegation for image clicks in modal
document.getElementById('modal-body').addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        lightboxImg.src = e.target.src;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
});

lightbox.onclick = function() {
    lightbox.style.display = 'none';
    if (document.getElementById('project-modal').style.display === 'none') {
        document.body.style.overflow = 'auto';
    }
}

// 5. GLOBAL INITIALIZATION
window.onload = function() {
    handleTyping();
};

// Global Click listener for closing modal
window.onclick = function(event) {
    const modal = document.getElementById("project-modal");
    if (event.target == modal) {
        closeProject();
    }
}

// Global Key listener for Escape key
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProject();
        lightbox.style.display = 'none';
    }
});