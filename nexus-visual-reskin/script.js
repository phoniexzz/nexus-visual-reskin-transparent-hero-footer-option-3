// ================= TESTIMONIALS DATA =================
const testimonials = [
  {
    name: "Elena",
    role: "Enterprise Ops Lead",
    img: "assets/enterprise.png",
    accent: "rgba(255, 122, 69, 0.12)",
    lines: [
      "Our teams are drowning in manual handoffs between the CRM, ERP and email.",
      "Every process improvement takes a 6-month IT roadmap.",
      "We need AI, but not another disconnected pilot."
    ]
  },
  {
    name: "Marcus",
    role: "Startup Founder",
    img: "assets/startup.png",
    accent: "rgba(116, 103, 255, 0.12)",
    lines: [
      "I need an MVP shipped in weeks, not quarters.",
      "It has to be production-grade from day one.",
      "And it should feel intelligent - not just CRUD."
    ]
  },
  {
    name: "Priya",
    role: "SMB Owner",
    img: "assets/smb.png",
    accent: "rgba(255, 209, 102, 0.12)",
    lines: [
      "I spend hours on invoices, quotes and customer replies.",
      "I can't hire five more people - but I can adopt automation.",
      "I want tools that just work, without a big IT team."
    ]
  }
];

// ================= WORKFLOW WIDGET DATA =================
const workflows = {
  support: {
    label: "Customer operations",
    stages: [
      {
        n: "01",
        state: "Detected",
        icon: "fa-triangle-exclamation",
        k: "Business problem",
        t: "Disconnected manual work",
        micro: "Email / CRM / policy",
        eyebrow: "01 / Detected",
        title: "Repetitive customer requests overwhelm the team",
        desc: "Support drowns in duplicate questions, slow triage and inconsistent replies across channels.",
        items: ["Inbound across email + chat", "No shared context", "Manual policy lookup", "Reply quality varies"]
      },
      {
        n: "02",
        state: "Connected",
        icon: "fa-plug",
        k: "MCPs + AI agents",
        t: "Tools become capabilities",
        micro: "CRM / docs / messages",
        eyebrow: "02 / Connected",
        title: "Agents connect to CRM, docs and messaging",
        desc: "Model-context bridges let one agent read tickets, look up policy and draft replies with full history.",
        items: ["CRM read + write", "Policy RAG index", "Slack + email channels", "Guardrails & scopes"]
      },
      {
        n: "03",
        state: "Working",
        icon: "fa-gear",
        k: "Automated processing",
        t: "Plan, execute, validate",
        micro: "Extract / reason / check",
        eyebrow: "03 / Working",
        title: "Agent plans, drafts and validates each reply",
        desc: "Classifies intent, drafts a grounded reply, checks it against policy and routes edge cases to humans.",
        items: ["Intent classification", "Grounded draft", "Policy validation", "Human-in-the-loop"]
      },
      {
        n: "04",
        state: "Delivered",
        icon: "fa-circle-check",
        k: "Business output",
        t: "Action completed & logged",
        micro: "Reply / update / audit",
        eyebrow: "04 / Delivered",
        title: "Customer gets a fast, accurate answer",
        desc: "Reply sent, CRM updated, audit trail written - cycle time drops from hours to minutes.",
        items: ["Reply sent", "Ticket resolved", "CRM record updated", "Full audit trail"]
      },
      {
        n: "05",
        state: "Learning",
        icon: "fa-rotate",
        k: "Feedback loop",
        t: "Every result improves the next",
        micro: "Review / measure / improve",
        eyebrow: "05 / Learning",
        title: "Human corrections and real outcomes improve the next run",
        desc: "Approvals, edits, exceptions and customer outcomes are measured. The workflow tunes its prompts, rules and context sources - without losing human oversight.",
        items: ["Capture edits & exceptions", "Measure quality + cycle time", "Improve context & rules", "Retain human governance"]
      }
    ],
    console: [
      ["09:42:07", "ok", "Ticket #4821 classified: billing question"],
      ["09:42:08", "ok", "Policy article #221 retrieved"],
      ["09:42:09", "ok", "Reply drafted (confidence 0.94)"],
      ["09:42:09", "ok", "Human approval - no edits"],
      ["09:42:10", "active", "Learning signal returned to workflow"]
    ],
    jobs: [
      { name: "Outcome capture", status: "Recorded", pct: 100 },
      { name: "Quality scoring", status: "Measured", pct: 94 },
      { name: "Workflow tuning", status: "Improving", pct: 68 }
    ]
  },
  invoice: {
    label: "Invoice processing",
    stages: [
      {
        n: "01",
        state: "Detected",
        icon: "fa-file-invoice",
        k: "Business problem",
        t: "Paper-heavy AP process",
        micro: "PDF / email / ERP",
        eyebrow: "01 / Detected",
        title: "Invoices arrive in every format imaginable",
        desc: "Finance manually reads PDFs, retypes line items and chases approvals across email.",
        items: ["Mixed formats", "Manual data entry", "Slow approvals", "Late payment penalties"]
      },
      {
        n: "02",
        state: "Connected",
        icon: "fa-plug",
        k: "MCPs + AI agents",
        t: "AP tools unified",
        micro: "ERP / OCR / storage",
        eyebrow: "02 / Connected",
        title: "Agents plug into ERP, storage and OCR",
        desc: "One pipeline ingests invoices from mailbox and portals, extracts fields and pushes to the ERP.",
        items: ["Mailbox ingestion", "Vision + OCR", "Vendor master lookup", "ERP write access"]
      },
      {
        n: "03",
        state: "Working",
        icon: "fa-gear",
        k: "Automated processing",
        t: "Extract, match, validate",
        micro: "Fields / match / check",
        eyebrow: "03 / Working",
        title: "Line-item extraction with 3-way match",
        desc: "Extracts header + lines, matches against PO and receipt, flags exceptions for a human reviewer.",
        items: ["Header + line extract", "3-way PO match", "Duplicate detection", "Exception routing"]
      },
      {
        n: "04",
        state: "Delivered",
        icon: "fa-circle-check",
        k: "Business output",
        t: "Approved, posted, paid",
        micro: "Post / approve / pay",
        eyebrow: "04 / Delivered",
        title: "Invoice posted and scheduled for payment",
        desc: "Approved invoices land in the ERP with full traceability. Exceptions get a clean review queue.",
        items: ["Auto-posted to ERP", "Approval trail", "Payment scheduled", "Full audit log"]
      },
      {
        n: "05",
        state: "Learning",
        icon: "fa-rotate",
        k: "Feedback loop",
        t: "Extractor keeps getting sharper",
        micro: "Review / retrain / improve",
        eyebrow: "05 / Learning",
        title: "Exceptions teach the extractor what to catch next time",
        desc: "Every correction becomes a training signal for extraction rules and vendor-specific templates.",
        items: ["Correction capture", "Vendor template tuning", "Confidence calibration", "Reviewer feedback loop"]
      }
    ],
    console: [
      ["10:15:22", "ok", "Invoice INV-8821 ingested from mailbox"],
      ["10:15:23", "ok", "12 line items extracted (confidence 0.97)"],
      ["10:15:24", "ok", "3-way match passed with PO-4412"],
      ["10:15:25", "ok", "Posted to ERP - awaiting payment run"],
      ["10:15:26", "active", "Vendor template refined from correction"]
    ],
    jobs: [
      { name: "OCR + extraction", status: "Complete", pct: 100 },
      { name: "PO matching", status: "Matched", pct: 96 },
      { name: "Template tuning", status: "Learning", pct: 54 }
    ]
  },
  onboarding: {
    label: "Employee onboarding",
    stages: [
      {
        n: "01",
        state: "Detected",
        icon: "fa-user-plus",
        k: "Business problem",
        t: "Fragmented onboarding",
        micro: "HRIS / IT / access",
        eyebrow: "01 / Detected",
        title: "New hires wait days for access and tools",
        desc: "IT, HR and managers all touch the process. Something always falls between the cracks.",
        items: ["Manual ticket chain", "Missed accesses", "Slow time-to-productive", "Poor first impression"]
      },
      {
        n: "02",
        state: "Connected",
        icon: "fa-plug",
        k: "MCPs + AI agents",
        t: "HRIS, IdP, tools",
        micro: "HRIS / IdP / SaaS",
        eyebrow: "02 / Connected",
        title: "One agent talks to HRIS, IdP and every SaaS tool",
        desc: "Provisioning happens through a single orchestrated flow instead of a dozen tickets.",
        items: ["HRIS trigger", "IdP + SSO groups", "SaaS provisioning", "Device orchestration"]
      },
      {
        n: "03",
        state: "Working",
        icon: "fa-gear",
        k: "Automated processing",
        t: "Provision, notify, verify",
        micro: "Create / assign / verify",
        eyebrow: "03 / Working",
        title: "Accounts, groups and welcome tasks are executed",
        desc: "Role-based access is applied, buddy is assigned, calendar invites go out and readiness is verified.",
        items: ["Role-based access", "Buddy assignment", "Welcome sequence", "Readiness verification"]
      },
      {
        n: "04",
        state: "Delivered",
        icon: "fa-circle-check",
        k: "Business output",
        t: "Productive on day one",
        micro: "Ready / welcomed / onboarded",
        eyebrow: "04 / Delivered",
        title: "The new hire is productive from day one",
        desc: "Full toolset, clear plan, human check-ins on the calendar. Manager gets a clean status dashboard.",
        items: ["All tools accessible", "30-60-90 plan created", "Buddy intro sent", "Manager dashboard"]
      },
      {
        n: "05",
        state: "Learning",
        icon: "fa-rotate",
        k: "Feedback loop",
        t: "Playbook improves with each cohort",
        micro: "Survey / adjust / improve",
        eyebrow: "05 / Learning",
        title: "Feedback from each new hire tunes the playbook",
        desc: "Onboarding surveys, time-to-productive metrics and manager feedback shape the next cohort's flow.",
        items: ["Pulse surveys", "Time-to-productive", "Playbook adjustments", "Manager feedback"]
      }
    ],
    console: [
      ["08:00:00", "ok", "Hire event received from HRIS"],
      ["08:00:03", "ok", "IdP groups + SSO provisioned"],
      ["08:00:05", "ok", "9 SaaS accounts created"],
      ["08:00:07", "ok", "Welcome sequence dispatched"],
      ["08:00:09", "active", "Playbook updated from last cohort"]
    ],
    jobs: [
      { name: "Access provisioning", status: "Complete", pct: 100 },
      { name: "Welcome sequence", status: "Sent", pct: 92 },
      { name: "Playbook tuning", status: "Learning", pct: 61 }
    ]
  }
};

// ================= GLOBAL STATE =================
let activeTestimonialIndex = 0;
let activeLineIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout = null;

let activeWorkflowKey = "support";
let activeStageIndex = 4; // Default to Learning / final stage
let isWorkflowPlaying = true;
let workflowInterval = null;

// ================= DOM ELEMENT REFERENCES =================
document.addEventListener("DOMContentLoaded", () => {
  // Navigation scroll effects
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Initialize Typewriter Testimonials
  initTypewriter();

  // Initialize Workflow Widget
  initWorkflowWidget();
});

// ================= TESTIMONIALS TYPEWRITER LOGIC =================
function initTypewriter() {
  const bubbleText = document.getElementById("testimonial-text");
  const authorImg = document.getElementById("author-img");
  const authorName = document.getElementById("author-name");
  const authorRole = document.getElementById("author-role");
  const card = document.getElementById("testimonial-card");

  function updateAuthorInfo() {
    const t = testimonials[activeTestimonialIndex];
    authorImg.src = t.img;
    authorImg.alt = t.name;
    authorName.textContent = t.name;
    authorRole.textContent = t.role;
    card.style.setProperty("--testimonial-accent", t.accent);
  }

  function typewrite() {
    const currentTestimonial = testimonials[activeTestimonialIndex];
    const currentLine = currentTestimonial.lines[activeLineIndex];
    
    if (!isDeleting) {
      // Type character
      bubbleText.innerHTML = currentLine.slice(0, charIndex) + '<span class="typewriter-cursor"></span>';
      charIndex++;
      
      if (charIndex > currentLine.length) {
        // Line fully typed, pause before delete
        isDeleting = true;
        typewriterTimeout = setTimeout(typewrite, 2200);
      } else {
        typewriterTimeout = setTimeout(typewrite, 35 + Math.random() * 20);
      }
    } else {
      // Delete character
      bubbleText.innerHTML = currentLine.slice(0, charIndex) + '<span class="typewriter-cursor"></span>';
      charIndex--;
      
      if (charIndex < 0) {
        isDeleting = false;
        charIndex = 0;
        activeLineIndex++;
        
        if (activeLineIndex >= currentTestimonial.lines.length) {
          // Finished all lines of this author, move to next author
          activeLineIndex = 0;
          
          // Fade out card before updating
          card.style.opacity = 0;
          card.style.transform = "translateY(10px) rotateX(-5deg)";
          
          setTimeout(() => {
            activeTestimonialIndex = (activeTestimonialIndex + 1) % testimonials.length;
            updateAuthorInfo();
            
            // Fade in card
            card.style.opacity = 1;
            card.style.transform = "translateY(0) rotateX(0deg)";
            
            typewriterTimeout = setTimeout(typewrite, 400);
          }, 450);
        } else {
          // Move to next line of same author
          typewriterTimeout = setTimeout(typewrite, 500);
        }
      } else {
        typewriterTimeout = setTimeout(typewrite, 15);
      }
    }
  }

  // Set initial info and start
  updateAuthorInfo();
  typewrite();
}

// ================= WORKFLOW WIDGET LOGIC =================
function initWorkflowWidget() {
  const tabButtons = document.querySelectorAll(".workflow-tab");
  const nodes = document.querySelectorAll(".wf-node");

  // Set up Tabs click listener
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      activeWorkflowKey = btn.dataset.workflow;
      activeStageIndex = 0; // Reset to first stage

      renderWorkflow();
    });
  });

  // Clicking a node pauses auto-cycle temporarily.
  nodes.forEach((node, index) => {
    node.addEventListener("click", () => {
      activeStageIndex = index;
      renderWorkflow();
      // Restart auto-cycle from the clicked stage
      startWorkflowAutoCycle();
    });
  });

  // Start auto cycle interval
  startWorkflowAutoCycle();

  // Initial render
  renderWorkflow();
}

function setWorkflowPlaying(play) {
  isWorkflowPlaying = play;
  if (isWorkflowPlaying) {
    startWorkflowAutoCycle();
  } else {
    clearInterval(workflowInterval);
  }
}

function startWorkflowAutoCycle() {
  clearInterval(workflowInterval);
  workflowInterval = setInterval(() => {
    if (isWorkflowPlaying) {
      activeStageIndex = (activeStageIndex + 1) % 5;
      renderWorkflow();
    }
  }, 3600);
}

function renderWorkflow() {
  const data = workflows[activeWorkflowKey];
  const stage = data.stages[activeStageIndex];

  // 1. Update nodes class/appearance
  const nodes = document.querySelectorAll(".wf-node");
  nodes.forEach((node, index) => {
    if (index === activeStageIndex) {
      node.classList.add("active");
    } else {
      node.classList.remove("active");
    }
    
    // Also update texts inside the nodes based on selected workflow
    const sData = data.stages[index];
    node.querySelector(".wf-node-state").textContent = sData.state;
    node.querySelector(".wf-node-k").textContent = sData.k;
    node.querySelector(".wf-node-t").textContent = sData.t;
    node.querySelector(".wf-node-micro").textContent = sData.micro;
    
    const iconEl = node.querySelector(".wf-node-icon i");
    iconEl.className = `fa-solid ${sData.icon}`;
  });

  // 2. Position the packet dot
  const packet = document.getElementById("wf-packet");
  packet.style.left = `calc(${activeStageIndex * 25}% - ${activeStageIndex === 0 ? '0px' : activeStageIndex === 4 ? '10px' : '5px'})`;

  // 3. Update active stage details box
  document.getElementById("wf-detail-eyebrow").textContent = stage.eyebrow;
  document.getElementById("wf-detail-title").textContent = stage.title;
  document.getElementById("wf-detail-desc").textContent = stage.desc;
  
  const detailIcon = document.getElementById("wf-detail-icon-i");
  detailIcon.className = `fa-solid ${stage.icon}`;

  // Update detail list checklist items
  const detailList = document.getElementById("wf-detail-list");
  detailList.innerHTML = "";
  stage.items.forEach(item => {
    const li = document.createElement("div");
    li.className = "wf-detail-item";
    li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${item}</span>`;
    detailList.appendChild(li);
  });

  // 4. Update stage counter if element exists
  const stageNum = document.getElementById("wf-stage-num");
  if (stageNum) stageNum.textContent = stage.n;

  // 5. Render metric progress bars
  const jobsList = document.getElementById("wf-jobs");
  jobsList.innerHTML = "";
  data.jobs.forEach((job, index) => {
    const jobDiv = document.createElement("div");
    jobDiv.className = "wf-job";
    
    // Compute progress: stages fully completed get 100%, future stages get 0%, active stage gets defined %
    let computedPct = 0;
    let computedStatus = "Queued";
    
    if (activeStageIndex > index) {
      computedPct = 100;
      computedStatus = index === 0 ? "Complete" : index === 1 ? "Matched" : "Recorded";
    } else if (activeStageIndex === index) {
      computedPct = job.pct;
      computedStatus = job.status;
    }
    
    jobDiv.innerHTML = `
      <div class="wf-job-icon"><i class="fa-solid fa-gears"></i></div>
      <div style="flex:1;">
        <div class="wf-job-name">${job.name}</div>
        <div class="wf-job-bar"><span style="width: ${computedPct}%"></span></div>
      </div>
      <div class="wf-job-status">${computedStatus}</div>
    `;
    jobsList.appendChild(jobDiv);
  });

  // 6. Print Console logs
  const consoleLog = document.getElementById("wf-console");
  consoleLog.innerHTML = "";
  
  // Show logs up to current stage index
  for (let i = 0; i <= activeStageIndex; i++) {
    const log = data.console[i];
    if (log) {
      const line = document.createElement("div");
      line.className = "wf-console-line";
      
      const checkMark = log[1] === "ok" ? `<span class="wf-console-ok">&#10003;</span>` : `<span class="wf-console-active">&#8634;</span>`;
      line.innerHTML = `
        <span class="wf-console-time">${log[0]}</span>
        ${checkMark}
        <span>${log[2]}</span>
      `;
      consoleLog.appendChild(line);
    }
  }
  
  // Scroll console to bottom
  consoleLog.scrollTop = consoleLog.scrollHeight;
}

// ================= PILLARS TEMPLE INTERACTION =================
document.addEventListener("DOMContentLoaded", () => {
  const temple = document.querySelector(".pillars-temple");
  const columns = Array.from(document.querySelectorAll(".pillar-column"));
  const readoutKicker = document.getElementById("pillar-readout-kicker");
  const readoutTitle = document.getElementById("pillar-readout-title");
  const readoutCopy = document.getElementById("pillar-readout-copy");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!temple || !columns.length || !readoutKicker || !readoutTitle || !readoutCopy) return;

  let activeIndex = columns.findIndex(column => column.classList.contains("active"));
  if (activeIndex < 0) activeIndex = Math.min(3, columns.length - 1);
  let timer = null;
  let paused = false;

  function selectPillar(column) {
    if (!column) return;

    activeIndex = columns.indexOf(column);
    columns.forEach(item => {
      const isActive = item === column;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    readoutKicker.textContent = column.dataset.kicker || "";
    readoutTitle.textContent = column.dataset.title || "";
    readoutCopy.textContent = column.dataset.copy || "";
  }

  function selectNextPillar() {
    const nextIndex = (activeIndex + 1) % columns.length;
    selectPillar(columns[nextIndex]);
  }

  function stopAutoAdvance() {
    if (!timer) return;
    window.clearInterval(timer);
    timer = null;
  }

  function startAutoAdvance() {
    if (timer || paused || reducedMotion.matches) return;
    timer = window.setInterval(selectNextPillar, 4200);
  }

  columns.forEach(column => {
    column.addEventListener("click", () => selectPillar(column));
    column.addEventListener("focus", () => selectPillar(column));
  });

  temple.addEventListener("mouseenter", () => {
    paused = true;
    stopAutoAdvance();
  });

  temple.addEventListener("mouseleave", () => {
    paused = false;
    startAutoAdvance();
  });

  temple.addEventListener("focusin", () => {
    paused = true;
    stopAutoAdvance();
  });

  temple.addEventListener("focusout", event => {
    if (temple.contains(event.relatedTarget)) return;
    paused = false;
    startAutoAdvance();
  });

  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", () => {
      if (reducedMotion.matches) {
        stopAutoAdvance();
      } else {
        startAutoAdvance();
      }
    });
  }

  selectPillar(columns[activeIndex] || columns[3] || columns[0]);
  startAutoAdvance();
});


// ================= HERO VIDEO PLAYBACK =================
document.addEventListener("DOMContentLoaded", () => {
  const heroVideo = document.querySelector("video.hero-background");
  if (!heroVideo) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function syncHeroVideoPlayback() {
    if (reducedMotion.matches || document.hidden) {
      heroVideo.pause();
      return;
    }

    const playPromise = heroVideo.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // The poster remains visible if a browser blocks autoplay.
      });
    }
  }

  document.addEventListener("visibilitychange", syncHeroVideoPlayback);

  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", syncHeroVideoPlayback);
  } else if (typeof reducedMotion.addListener === "function") {
    reducedMotion.addListener(syncHeroVideoPlayback);
  }

  syncHeroVideoPlayback();
});
