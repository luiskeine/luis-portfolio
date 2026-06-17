/**
* ARCHIVE TERMINAL LOGIC
* Developer: Luis
* Role: System-Building Data Scientist
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
                        <p>I am Luis, a 3rd-year student specializing in Data Science and Intelligent Systems. I built this terminal to act as a living record of my growth as a developer.</p>
                        <p>The goal was to move away from traditional resumes and create an interface that reflects the technical systems I enjoy building.</p>
                    </div>
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">
                        <h3>02_DEVELOPMENT_ETHOS</h3>
                        <p>This page uses no external libraries or frameworks. It is built with raw HTML, CSS, and JavaScript to prove a fundamental understanding of the web's core architecture.</p>
                        <ul>
                            <li><strong>Transparency:</strong> Skill levels reflect my current honest progress.</li>
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
                        <ul>
                            <li><strong>State Management:</strong> Dynamically toggles between "Pending" and "Calling" based on Admin actions.</li>
                            <li><strong>Data Binding:</strong> Directly linked to unique user IDs for personalized tracking.</li>
                        </ul>
                    </div>
                    <img src="images/customer_display.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">
                        <h3>04_TICKET_GENERATION_LOGIC</h3>
                        <p>I built an automated ticket assignment system that categorizes requests by service type. This ensures that the consultation flow remains organized and manageable.</p>
                        <ul>
                            <li><strong>Unique ID Logic:</strong> Generates formatted ticket strings (e.g., T-827) to prevent duplication.</li>
                            <li><strong>Service Mapping:</strong> Tickets are categorized into different consultation streams.</li>
                        </ul>
                    </div>
                    <img src="images/getting_ticket.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex">
                    <div class="section-text">
                        <h3>05_ADMIN_CONTROL_HUB</h3>
                        <p>The operational hub of the system. Admins have a bird's-eye view of all pending cases and can approve, serves, or remove tickets from the active database.</p>
                        <ul>
                            <li><strong>CRUD Operations:</strong> Full Create, Read, Update, and Delete capabilities for queue records.</li>
                            <li><strong>Database Synchronization:</strong> Centralized Singleton pattern manages the MySQL connection.</li>
                        </ul>
                    </div>
                    <img src="images/admin_display.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">
                        <h3>06_AUTOMATED_VOICE_SERVICE</h3>
                        <p>To improve accessibility, I integrated a voice announcement system. When an Admin "Calls" a ticket, the system announces the ID through the audio output.</p>
                        <ul>
                            <li><strong>Multi-threading:</strong> Audio runs on a background thread so the UI never freezes.</li>
                            <li><strong>System Integration:</strong> Triggers PowerShell TTS (Text-to-Speech) commands directly from Java.</li>
                        </ul>
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
                        <ul>
                            <li><strong>Deep Midnight Blue:</strong> Custom color palette for a professional technical vibe.</li>
                            <li><strong>Responsive UI:</strong> Layout scales perfectly to different window sizes.</li>
                        </ul>
                    </div>
                    <img src="images/organizer_gui.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">
                        <h3>02_STANDALONE_EXE_PACKAGING</h3>
                        <p>One of my main goals was to ship a finished product. I packaged the Python source code into a single, portable executable file for Windows users.</p>
                        <ul>
                            <li><strong>Asset Handling:</strong> Engineered a resource_path() function to find icons inside a compressed EXE.</li>
                            <li><strong>Zero Dependency:</strong> Users can run the tool without having Python installed.</li>
                        </ul>
                    </div>
                    <img src="images/organizer_exe.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex">
                    <div class="section-text">
                        <h3>03_UNIVERSAL_PATH_SELECTION</h3>
                        <p>To make the app "Universal," I implemented a dynamic Browse feature. This allows the system to organize any folder on the computer, not just a hardcoded path.</p>
                        <ul>
                            <li><strong>JSON Persistence:</strong> App "remembers" the last folder you used by saving settings to a config file.</li>
                            <li><strong>Dynamic Pathing:</strong> Uses the pathlib library for cross-platform directory handling.</li>
                        </ul>
                    </div>
                    <img src="images/organizer_browse.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">
                        <h3>04_TECHNICAL_AUDIT_LOGGING</h3>
                        <p>Transparency is key in automation. I built a system-level log that records every action taken by the background observer with precise timestamps.</p>
                        <ul>
                            <li><strong>Real-time Feedback:</strong> Every file move is displayed in the Matrix-Green console text.</li>
                            <li><strong>Error Handling:</strong> Catches "File in Use" errors to prevent script crashes.</li>
                        </ul>
                    </div>
                    <img src="images/organizer_log.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex">
                    <div class="section-text">
                        <h3>05_UNORGANIZED_STATE (THE PROBLEM)</h3>
                        <p>Demonstrating the need for automation. This shows a cluttered Downloads folder where documents, images, and system files are mixed together, making data retrieval slow.</p>
                    </div>
                    <img src="images/organizer_before.png">
                </div>
            </div>
            <div class="system-section">
                <div class="section-flex invert">
                    <div class="section-text">
                        <h3>06_AUTOMATED_CLASSIFICATION (THE SOLUTION)</h3>
                        <p>The final result of the automation engine. By utilizing <strong>O(1) Dictionary Mapping</strong>, the system instantly identifies extensions and moves them into their respective subfolders.</p>
                        <ul>
                            <li><strong>Logic Efficiency:</strong> Replaced slow Switch-cases with high-speed Python Dictionaries.</li>
                            <li><strong>Watchdog Observer:</strong> Runs in the background, listening for new file drops.</li>
                        </ul>
                    </div>
                    <img src="images/organizer_after.png">
                </div>
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
const typeText = "Data Science // Intelligent Systems // Automation";
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