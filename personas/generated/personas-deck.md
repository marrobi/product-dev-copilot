---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
    font-size: 0.8rem;
    height: 100vh;
    overflow: hidden;
  }
  
  .persona-header {
    text-align: center;
    margin-bottom: 0.8rem;
    flex-shrink: 0;
  }
  
  .persona-title {
    font-size: 2rem;
    font-weight: bold;
    color: #005eb8;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .persona-subtitle {
    font-size: 0.8rem;
    color: #666;
    margin: 0.2rem 0 0 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .persona-content {
    display: flex;
    gap: 1rem;
    flex: 1;
    min-height: 0;
    align-items: stretch;
  }

  .profile-column {
    flex: 0 0 260px;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    min-height: 100%;
    height: auto;
    align-self: stretch;
  }
  
  .profile-section {
    background: white;
    border: 3px solid #005eb8;
    border-radius: 10px;
    padding: 0.6rem 0.75rem;
    text-align: center;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
  }
  
  .sample-text {
    font-size: 0.55rem;
    color: #999;
    margin-bottom: 0.4rem;
    background: #f5f5f5;
    padding: 0.1rem 0.3rem;
    border-radius: 3px;
  }
  
  .profile-section img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 2px solid #005eb8;
    margin: 0 auto;
    flex-shrink: 0;
    object-fit: cover;
  }
  
  .persona-name {
    font-size: 1.1rem;
    font-weight: bold;
    color: #005eb8;
    margin: 0.2rem 0 0.1rem 0;
    text-transform: uppercase;
    line-height: 1.0;
    flex-shrink: 0;
  }
  
  .job-title {
    color: #666;
    font-weight: bold;
    margin-bottom: 0.4rem;
    font-size: 0.75rem;
    line-height: 1.0;
    flex-shrink: 0;
  }
  
  .personal-data {
    flex: 1 1 auto;
    overflow-y: auto;
    padding-right: 0.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    min-height: 4rem;
    max-height: calc(100% - 12rem);
  }

  .personal-data > div {
    background: transparent;
    border-radius: 0;
    padding: 0;
    border-left: none;
    box-shadow: none;
  }

  .personal-data h4 {
    color: #005eb8;
    font-size: 0.75rem;
    margin: 0;
    text-transform: uppercase;
    text-align: left;
    letter-spacing: 0.5px;
  }

  .persona-facts {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .data-item {
    display: flex;
    align-items: flex-start;
    gap: 0.35rem;
    text-align: left;
    font-size: 0.68rem;
    line-height: 1.2;
    color: #1f1f1f;
  }

  .data-icon {
    font-size: 0.8rem;
    line-height: 1;
    flex-shrink: 0;
    margin-top: 0.1rem;
  }

  .data-item span:last-child {
    flex: 1;
  }

  .personal-data ul {
    text-align: left;
    font-size: 0.7rem;
    line-height: 1.2;
    margin: 0;
    padding-left: 0.9rem;
  }

  .personal-data li {
    margin-bottom: 0.2rem;
    color: #333;
  }
  
  .content-columns {
    display: flex;
    flex: 1;
    gap: 1.2rem;
    min-height: 0;
  }
  
  .content-single-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    min-height: 0;
  }
  
  .content-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  
  .content-box {
    background: rgba(0, 94, 184, 0.05);
    border-radius: 6px;
    padding: 0.7rem;
    margin-bottom: 0.6rem;
    border-left: 3px solid #005eb8;
    flex-shrink: 0;
  }
  
  .section-title {
    font-size: 0.9rem;
    font-weight: bold;
    color: #005eb8;
    margin: 0 0 0.4rem 0;
    text-transform: uppercase;
    line-height: 1.1;
  }
  
  .content-box ul {
    margin: 0;
    padding-left: 0.8rem;
  }
  
  .content-box li {
    margin-bottom: 0.2rem;
    line-height: 1.1;
    color: #333;
    font-size: 0.75rem;
  }
  
  .skills-box {
    background: rgba(0, 94, 184, 0.05);
    border-radius: 8px;
    padding: 1rem;
    border-left: 3px solid #005eb8;
    flex: 1;
    min-height: 0;
  }
  
  .skill-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.4rem 0;
    font-size: 0.8rem;
  }
  
  .stars {
    color: #005eb8;
    font-size: 0.9rem;
  }
  
  .systems-grid {
    display: flex;
    justify-content: space-between;
    margin-top: 0.6rem;
    gap: 0.3rem;
  }
  
  .system-badge {
    background: #005eb8;
    color: white;
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.7rem;
    text-align: center;
    flex: 1;
  }
  
  .logo-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-shrink: 0;
    height: auto;
  }

  .logo-container img {
    height: 40px;
    padding: 0 0.5rem;
    object-fit: contain;
    flex-shrink: 0;
  }

---
# EQUALITY & INCLUSION MANAGER

<div class="persona-content">

<div class="profile-column">
  <div class="profile-section">
  <img src="../images/placeholder.jpg" alt="Profile Photo" />
    <h2 class="persona-name">Caroline Ahmed</h2>
    <p class="job-title">Equality & Inclusion Manager (Patient Experience Lead)</p>
    <div class="personal-data">
      <div>
        <h4>Professional Data</h4>
        <div class="persona-facts">
          <div class="data-item"><span class="data-icon">👤</span><span>5 years in EDI and patient experience roles</span></div>
          <div class="data-item"><span class="data-icon">📍</span><span>NHS Trust - Patient Experience</span></div>
          <div class="data-item"><span class="data-icon">💼</span><span>Patient Experience / EDI</span></div>
        </div>
      </div>
      <div>
        <h4>Role & Background</h4>
        <ul>
          <li>I transitioned from speech and language therapy into EDI work to improve access for vulnerable groups.</li>
          <li>I’m multilingual (Urdu, Punjabi) and deeply involved in community outreach.</li>
          <li>I manage patient feedback, complaints related to communication, and AIS compliance.</li>
          <li>I coordinate culturally appropriate resources and staff training on communication needs</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="logo-container">
    <img src="../images/nhs-logo.jpg" alt="NHS logo" />
    <br />
    <img src="../images/microsoft-logo.png" alt="Microsoft logo" />
  </div>
</div>

<div class="content-single-column">
  
  <div class="content-box">
    <h3 class="section-title">Goals & Desired Outcomes</h3>
    <ul>
          <li>Ensure patients receive information in a way they understand (Accessible Information Standard)</li>
          <li>Reduce complaints related to language and communication to near zero</li>
          <li>Increase trust and engagement among minority communities through better communication</li>
          <li>Support staff with training and tools to address communication needs empathetically</li>
    </ul>
  </div>
  
  <div class="content-box">
    <h3 class="section-title">Wants & Needs</h3>
    <ul>
          <li>Near-human translation accuracy and cultural competence in phrasing</li>
          <li>Easy-read outputs and adjustable literacy levels for patient materials</li>
          <li>Quick generation of translated leaflets and surveys for immediate patient feedback</li>
          <li>Mechanisms to monitor issues and escalate if translations fail</li>
    </ul>
  </div>

  <div class="content-box">
    <h3 class="section-title">Pain Points & Frustrations</h3>
    <ul>
          <li>Relying on ad-hoc family interpreters and inappropriate alternatives</li>
          <li>Slow turnaround for written translations that renders them useless at discharge</li>
          <li>Gaps in accessibility for Deaf or low-literacy patients</li>
          <li>Sustaining adoption after initial rollout (change fatigue)</li>
    </ul>
  </div>

</div>

</div>



---

# INTERPRETER SERVICES COORDINATOR

<div class="persona-content">

<div class="profile-column">
  <div class="profile-section">
  <img src="../images/placeholder.jpg" alt="Profile Photo" />
    <h2 class="persona-name">Daniel Green</h2>
    <p class="job-title">Interpreter Services Coordinator (PALS)</p>
    <div class="personal-data">
      <div>
        <h4>Professional Data</h4>
        <div class="persona-facts">
          <div class="data-item"><span class="data-icon">👤</span><span>4 years coordinating interpreter logistics</span></div>
          <div class="data-item"><span class="data-icon">📍</span><span>NHS Trust - Patient Liaison</span></div>
          <div class="data-item"><span class="data-icon">💼</span><span>Patient Administration / PALS</span></div>
        </div>
      </div>
      <div>
        <h4>Role & Background</h4>
        <ul>
          <li>I manage bookings for telephone and face-to-face interpreters across the hospital.</li>
          <li>I keep detailed stats on language demand and coordinate with vendor partners.</li>
          <li>I’m tech-savvy and interested in analytics to optimize services.</li>
          <li>I once started as a PALS officer and evolved into this specialist role</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="logo-container">
    <img src="../images/nhs-logo.jpg" alt="NHS logo" />
    <br />
    <img src="../images/microsoft-logo.png" alt="Microsoft logo" />
  </div>
</div>

<div class="content-single-column">
  
  <div class="content-box">
    <h3 class="section-title">Goals & Desired Outcomes</h3>
    <ul>
          <li>Ensure every patient who needs language support gets it promptly</li>
          <li>Optimize interpreter spend by using AI for ad-hoc cases and reserving humans for complex needs</li>
          <li>Provide clear guidance to staff on when to use AI vs human interpreters</li>
          <li>Use analytics to plan staffing and language coverage</li>
    </ul>
  </div>
  
  <div class="content-box">
    <h3 class="section-title">Wants & Needs</h3>
    <ul>
          <li>Admin dashboard with usage logs and language breakdowns</li>
          <li>Automated reporting to replace manual invoice parsing</li>
          <li>Clear escalation paths when AI cannot handle a language or dialect</li>
          <li>Ability to set templates or saved phrases for frequent instructions</li>
    </ul>
  </div>

  <div class="content-box">
    <h3 class="section-title">Pain Points & Frustrations</h3>
    <ul>
          <li>24/7 urgent interpreter requests and limited availability for rare languages</li>
          <li>Manual invoice reconciliation and time-consuming admin</li>
          <li>Quality assurance: ensuring AI output is clinically accurate and culturally appropriate</li>
          <li>Adapting his role from dispatcher to system quality manager</li>
    </ul>
  </div>

</div>

</div>



---

# CHIEF INFORMATION OFFICER

<div class="persona-content">

<div class="profile-column">
  <div class="profile-section">
  <img src="../images/placeholder.jpg" alt="Profile Photo" />
    <h2 class="persona-name">Lauren Thompson</h2>
    <p class="job-title">Chief Information Officer</p>
    <div class="personal-data">
      <div>
        <h4>Professional Data</h4>
        <div class="persona-facts">
          <div class="data-item"><span class="data-icon">👤</span><span>15 years in NHS IT and digital transformation</span></div>
          <div class="data-item"><span class="data-icon">📍</span><span>NHS Trust - Corporate HQ</span></div>
          <div class="data-item"><span class="data-icon">💼</span><span>Informatics / Digital</span></div>
        </div>
      </div>
      <div>
        <h4>Role & Background</h4>
        <ul>
          <li>I led previous EPR rollouts and now sponsor digital hospital initiatives.</li>
          <li>I grew up bilingual (Welsh-English) and am passionate about supporting language needs.</li>
          <li>I manage IT strategy, vendor contracts, and digital governance at trust level.</li>
          <li>I am responsible for uptime, integration, and compliance across clinical systems</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="logo-container">
    <img src="../images/nhs-logo.jpg" alt="NHS logo" />
    <br />
    <img src="../images/microsoft-logo.png" alt="Microsoft logo" />
  </div>
</div>

<div class="content-single-column">
  
  <div class="content-box">
    <h3 class="section-title">Goals & Desired Outcomes</h3>
    <ul>
          <li>Deliver an integrated translation service that measurably improves equity and patient experience</li>
          <li>Achieve high uptime and integration with EPR and single sign-on</li>
          <li>Demonstrate ROI by reducing interpreter spend while maintaining quality</li>
          <li>Ensure training completion and adoption across clinical staff (>95%)</li>
    </ul>
  </div>
  
  <div class="content-box">
    <h3 class="section-title">Wants & Needs</h3>
    <ul>
          <li>Enterprise-grade reliability (99% uptime) and NHS-compliant security</li>
          <li>Analytics dashboard showing usage, languages, and cost savings</li>
          <li>APIs/HL7-FHIR integration to save transcripts into patient records</li>
          <li>Vendor documentation and a clear support contract with SLAs</li>
    </ul>
  </div>

  <div class="content-box">
    <h3 class="section-title">Pain Points & Frustrations</h3>
    <ul>
          <li>Fragmented interpreter services and lack of data for decision-making</li>
          <li>Compliance risks if communication needs aren’t documented</li>
          <li>Procurement and scaling challenges across the trust</li>
          <li>Staff resistance to new tech due to change fatigue</li>
    </ul>
  </div>

</div>

</div>



---

# EMERGENCY MEDICINE CONSULTANT

<div class="persona-content">

<div class="profile-column">
  <div class="profile-section">
  <img src="../images/placeholder.jpg" alt="Profile Photo" />
    <h2 class="persona-name">Raj Patel</h2>
    <p class="job-title">Emergency Medicine Consultant (Clinical Lead)</p>
    <div class="personal-data">
      <div>
        <h4>Professional Data</h4>
        <div class="persona-facts">
          <div class="data-item"><span class="data-icon">👤</span><span>20 years in Emergency Medicine, 3 years as ED Clinical Lead</span></div>
          <div class="data-item"><span class="data-icon">📍</span><span>Urban NHS Trust - Emergency Department</span></div>
          <div class="data-item"><span class="data-icon">💼</span><span>Emergency Department</span></div>
        </div>
      </div>
      <div>
        <h4>Role & Background</h4>
        <ul>
          <li>I've led ED teams for two decades and champion patient safety.</li>
          <li>I grew up bilingual in a Gujarati household and appreciate language needs.</li>
          <li>I oversee clinical flow and 4-hour target performance in a busy urban ED.</li>
          <li>I’ve experienced critical incidents from miscommunication that changed my practice</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="logo-container">
    <img src="../images/nhs-logo.jpg" alt="NHS logo" />
    <br />
    <img src="../images/microsoft-logo.png" alt="Microsoft logo" />
  </div>
</div>

<div class="content-single-column">
  
  <div class="content-box">
    <h3 class="section-title">Goals & Desired Outcomes</h3>
    <ul>
          <li>Ensure every patient receives safe, timely treatment regardless of language</li>
          <li>Reduce diagnostic errors and adverse events caused by language gaps</li>
          <li>Integrate interpreter/transcription outputs into the EPR for medico-legal safety</li>
          <li>Cut communication-related delays in triage by at least 5-10 minutes</li>
    </ul>
  </div>
  
  <div class="content-box">
    <h3 class="section-title">Wants & Needs</h3>
    <ul>
          <li>A one-click solution that auto-detects language and starts real-time clinical translation</li>
          <li>Medical terminology fidelity (e.g., drug names, symptom nuance) with clinical accuracy</li>
          <li>Automatic transcript or note integration into the EPR</li>
          <li>A reliable system that works in resus and noisy ED environments</li>
    </ul>
  </div>

  <div class="content-box">
    <h3 class="section-title">Pain Points & Frustrations</h3>
    <ul>
          <li>Interpreter delays during critical cases leading to unsafe care</li>
          <li>Inaccurate ad-hoc translation by relatives or staff</li>
          <li>Lack of integration: phone interpreters don't document into patient records</li>
          <li>Consent conversations are challenging via speakerphone interpreters in emergencies</li>
    </ul>
  </div>

</div>

</div>



---

# EMERGENCY DEPARTMENT MATRON

<div class="persona-content">

<div class="profile-column">
  <div class="profile-section">
  <img src="../images/placeholder.jpg" alt="Profile Photo" />
    <h2 class="persona-name">Susan Miller</h2>
    <p class="job-title">Emergency Department Matron (Band 8a)</p>
    <div class="personal-data">
      <div>
        <h4>Professional Data</h4>
        <div class="persona-facts">
          <div class="data-item"><span class="data-icon">👤</span><span>18 years in nursing, 10 in A&E, 3 as Matron</span></div>
          <div class="data-item"><span class="data-icon">📍</span><span>Urban NHS Trust - Emergency Department</span></div>
          <div class="data-item"><span class="data-icon">💼</span><span>Emergency Department</span></div>
        </div>
      </div>
      <div>
        <h4>Role & Background</h4>
        <ul>
          <li>I started as a staff nurse in this ED and progressed to Matron overseeing operations.</li>
          <li>I champion practical solutions that keep the department running smoothly.</li>
          <li>I ensure devices are available at triage and staff are confident using them.</li>
          <li>I value efficient workflows and staff wellbeing during busy shifts</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="logo-container">
    <img src="../images/nhs-logo.jpg" alt="NHS logo" />
    <br />
    <img src="../images/microsoft-logo.png" alt="Microsoft logo" />
  </div>
</div>

<div class="content-single-column">
  
  <div class="content-box">
    <h3 class="section-title">Goals & Desired Outcomes</h3>
    <ul>
          <li>Ensure safe, efficient nursing care where language barriers do not delay treatment</li>
          <li>Reduce time-to-triage and time-to-analgesia for patients with limited English</li>
          <li>Embed translator usage into nursing protocols and handovers</li>
          <li>Improve documentation quality when communication needs exist</li>
    </ul>
  </div>
  
  <div class="content-box">
    <h3 class="section-title">Wants & Needs</h3>
    <ul>
          <li>Devices available at triage and resus with spare units for peak times</li>
          <li>Quick reliable translation in noisy ED environments (headset/offline modes)</li>
          <li>Simple workflows so nurses aren’t slowed by tech in emergencies</li>
          <li>Charge/check protocols and superuser champions on each shift</li>
    </ul>
  </div>

  <div class="content-box">
    <h3 class="section-title">Pain Points & Frustrations</h3>
    <ul>
          <li>Triage bottlenecks when language prevents efficient history taking</li>
          <li>Staff morale hit when nurses feel helpless managing LEP patients</li>
          <li>Device contention during peak times and occasional dialect gaps</li>
          <li>Privacy and noise issues when using speaker output in ED</li>
    </ul>
  </div>

</div>

</div>
