const SCENES_DATA = {
  scene1: {
    title: "Scene 1: Cat, Potted Plant & TV (COCO #37907)",
    objects: "cat, potted plant, tv",
    modes: {
      raw: { label: "Raw RGB Image", mask_iou: 100.0, boundary_iou: 100.0, image: "assets/scenes/scene1_raw.webp" },
      clean: { label: "Clean Reference (LVIS v1)", mask_iou: 100.0, boundary_iou: 100.0, image: "assets/scenes/scene1_clean.webp" },
      cblnl_cleaned: { label: "CB-LNL Cleaned (Ours — Sfumato Copula)", mask_iou: 99.1, boundary_iou: 95.6, image: "assets/scenes/scene1_cblnl_cleaned.webp" },
      realnoise: { label: "Real Human (COCO-RealNoise)", mask_iou: 93.3, boundary_iou: 82.0, image: "assets/scenes/scene1_realnoise.webp" },
      wan_box: { label: "SAM2 Box (WAN-Box Noisy)", mask_iou: 93.8, boundary_iou: 74.2, image: "assets/scenes/scene1_wan_box.webp" },
      wan_point: { label: "SAM2 Click (WAN-Point Center)", mask_iou: 93.4, boundary_iou: 73.0, image: "assets/scenes/scene1_wan_point.webp" },
      cocon_med: { label: "COCO-N Medium (Procedural)", mask_iou: 95.6, boundary_iou: 75.2, image: "assets/scenes/scene1_cocon_med.webp" },
      cocon_hard: { label: "COCO-N Hard (Severe Stress)", mask_iou: 93.3, boundary_iou: 62.4, image: "assets/scenes/scene1_cocon_hard.webp" },
      approx: { label: "Polygon Simplification (Inward Cut)", mask_iou: 89.8, boundary_iou: 56.6, image: "assets/scenes/scene1_approx.webp" },
      drift: { label: "Rigid Spatial Drift", mask_iou: 73.7, boundary_iou: 22.9, image: "assets/scenes/scene1_drift.webp" },
      erode: { label: "Morphological Erosion", mask_iou: 76.7, boundary_iou: 27.1, image: "assets/scenes/scene1_erode.webp" },
      dilate: { label: "Morphological Dilation (Outward Bleed)", mask_iou: 79.9, boundary_iou: 28.3, image: "assets/scenes/scene1_dilate.webp" }
    }
  },
  scene2: {
    title: "Scene 2: Boat & Dog on Water (COCO #400)",
    objects: "boat, dog",
    modes: {
      raw: { label: "Raw RGB Image", mask_iou: 100.0, boundary_iou: 100.0, image: "assets/scenes/scene2_raw.webp" },
      clean: { label: "Clean Reference (LVIS v1)", mask_iou: 100.0, boundary_iou: 100.0, image: "assets/scenes/scene2_clean.webp" },
      cblnl_cleaned: { label: "CB-LNL Cleaned (Ours — Sfumato Copula)", mask_iou: 98.8, boundary_iou: 94.8, image: "assets/scenes/scene2_cblnl_cleaned.webp" },
      realnoise: { label: "Real Human (COCO-RealNoise)", mask_iou: 97.0, boundary_iou: 76.6, image: "assets/scenes/scene2_realnoise.webp" },
      wan_box: { label: "SAM2 Box (WAN-Box Noisy)", mask_iou: 92.8, boundary_iou: 79.0, image: "assets/scenes/scene2_wan_box.webp" },
      wan_point: { label: "SAM2 Click (WAN-Point Center)", mask_iou: 70.8, boundary_iou: 48.5, image: "assets/scenes/scene2_wan_point.webp" },
      cocon_med: { label: "COCO-N Medium (Procedural)", mask_iou: 94.5, boundary_iou: 81.3, image: "assets/scenes/scene2_cocon_med.webp" },
      cocon_hard: { label: "COCO-N Hard (Severe Stress)", mask_iou: 84.7, boundary_iou: 68.2, image: "assets/scenes/scene2_cocon_hard.webp" },
      approx: { label: "Polygon Simplification (Inward Cut)", mask_iou: 92.5, boundary_iou: 64.4, image: "assets/scenes/scene2_approx.webp" },
      drift: { label: "Rigid Spatial Drift", mask_iou: 69.8, boundary_iou: 26.5, image: "assets/scenes/scene2_drift.webp" },
      erode: { label: "Morphological Erosion", mask_iou: 76.8, boundary_iou: 35.5, image: "assets/scenes/scene2_erode.webp" },
      dilate: { label: "Morphological Dilation (Outward Bleed)", mask_iou: 77.0, boundary_iou: 35.0, image: "assets/scenes/scene2_dilate.webp" }
    }
  },
  scene3: {
    title: "Scene 3: Articulated Hulls & Equipment (COCO #31747)",
    objects: "boat, microwave",
    modes: {
      raw: { label: "Raw RGB Image", mask_iou: 100.0, boundary_iou: 100.0, image: "assets/scenes/scene3_raw.webp" },
      clean: { label: "Clean Reference (LVIS v1)", mask_iou: 100.0, boundary_iou: 100.0, image: "assets/scenes/scene3_clean.webp" },
      cblnl_cleaned: { label: "CB-LNL Cleaned (Ours — Sfumato Copula)", mask_iou: 97.3, boundary_iou: 93.5, image: "assets/scenes/scene3_cblnl_cleaned.webp" },
      realnoise: { label: "Real Human (COCO-RealNoise)", mask_iou: 94.2, boundary_iou: 78.4, image: "assets/scenes/scene3_realnoise.webp" },
      wan_box: { label: "SAM2 Box (WAN-Box Noisy)", mask_iou: 71.3, boundary_iou: 46.9, image: "assets/scenes/scene3_wan_box.webp" },
      wan_point: { label: "SAM2 Click (WAN-Point Center)", mask_iou: 69.7, boundary_iou: 69.7, image: "assets/scenes/scene3_wan_point.webp" },
      cocon_med: { label: "COCO-N Medium (Procedural)", mask_iou: 86.7, boundary_iou: 66.9, image: "assets/scenes/scene3_cocon_med.webp" },
      cocon_hard: { label: "COCO-N Hard (Severe Stress)", mask_iou: 56.3, boundary_iou: 46.7, image: "assets/scenes/scene3_cocon_hard.webp" },
      approx: { label: "Polygon Simplification (Inward Cut)", mask_iou: 87.5, boundary_iou: 67.4, image: "assets/scenes/scene3_approx.webp" },
      drift: { label: "Rigid Spatial Drift", mask_iou: 54.2, boundary_iou: 26.1, image: "assets/scenes/scene3_drift.webp" },
      erode: { label: "Morphological Erosion", mask_iou: 51.7, boundary_iou: 16.7, image: "assets/scenes/scene3_erode.webp" },
      dilate: { label: "Morphological Dilation (Outward Bleed)", mask_iou: 60.6, boundary_iou: 27.0, image: "assets/scenes/scene3_dilate.webp" }
    }
  },
  scene4: {
    title: "Scene 4: Person & Boat Concavities (COCO #387173)",
    objects: "boat, person",
    modes: {
      raw: { label: "Raw RGB Image", mask_iou: 100.0, boundary_iou: 100.0, image: "assets/scenes/scene4_raw.webp" },
      clean: { label: "Clean Reference (LVIS v1)", mask_iou: 100.0, boundary_iou: 100.0, image: "assets/scenes/scene4_clean.webp" },
      cblnl_cleaned: { label: "CB-LNL Cleaned (Ours — Sfumato Copula)", mask_iou: 98.1, boundary_iou: 94.2, image: "assets/scenes/scene4_cblnl_cleaned.webp" },
      realnoise: { label: "Real Human (COCO-RealNoise)", mask_iou: 95.0, boundary_iou: 84.4, image: "assets/scenes/scene4_realnoise.webp" },
      wan_box: { label: "SAM2 Box (WAN-Box Noisy)", mask_iou: 76.2, boundary_iou: 73.4, image: "assets/scenes/scene4_wan_box.webp" },
      wan_point: { label: "SAM2 Click (WAN-Point Center)", mask_iou: 56.4, boundary_iou: 51.5, image: "assets/scenes/scene4_wan_point.webp" },
      cocon_med: { label: "COCO-N Medium (Procedural)", mask_iou: 83.3, boundary_iou: 80.3, image: "assets/scenes/scene4_cocon_med.webp" },
      cocon_hard: { label: "COCO-N Hard (Severe Stress)", mask_iou: 60.1, boundary_iou: 48.5, image: "assets/scenes/scene4_cocon_hard.webp" },
      approx: { label: "Polygon Simplification (Inward Cut)", mask_iou: 64.2, boundary_iou: 58.8, image: "assets/scenes/scene4_approx.webp" },
      drift: { label: "Rigid Spatial Drift", mask_iou: 55.6, boundary_iou: 50.1, image: "assets/scenes/scene4_drift.webp" },
      erode: { label: "Morphological Erosion", mask_iou: 50.1, boundary_iou: 46.5, image: "assets/scenes/scene4_erode.webp" },
      dilate: { label: "Morphological Dilation (Outward Bleed)", mask_iou: 52.4, boundary_iou: 26.7, image: "assets/scenes/scene4_dilate.webp" }
    }
  }
};

const MODE_DESCRIPTIONS = {
  realnoise: "<strong>Real Human Noise (COCO-RealNoise):</strong> Original crowdsourced MS-COCO polygons use a median of only <strong>42.4%</strong> as many vertices as LVIS re-annotations, cutting corners across concavities and limbs while preserving high interior Mask IoU.",
  wan_box: "<strong>SAM2 Jittered Detector Boxes (WAN-Box Noisy):</strong> When detector boxes expand slightly (ω ∈ [1.05, 1.25]), SAM2 snaps to background clutter edges, causing <strong>25.6%</strong> of small objects to suffer outward contour bleed-out.",
  wan_point: "<strong>SAM2 Single Center Click (WAN-Point):</strong> Point prompts suffer severe <strong>part-vs.-whole ambiguity</strong> on large articulated objects (38%–43% under-segmentation), segmenting a sub-part instead of the full instance.",
  cocon_med: "<strong>COCO-N Medium (Calibrated Procedural Tier):</strong> Combines Douglas–Peucker simplification, hand-eye drift, symmetric scale, 8% within-supercategory confusion, and 8% omission—matching weak auto-annotation fidelity (mean BIoU = 0.630).",
  cocon_hard: "<strong>COCO-N Hard (Severe Stress Tier):</strong> High-severity multi-factor geometric and semantic corruption (mean BIoU = 0.447), where standard BCE collapses and CB-LNL gains +1.53 Mask AP.",
  approx: "<strong>Isolated Polygon Simplification:</strong> Ramer–Douglas–Peucker corner cutting removes concavities and articulated limbs. Highlighted coral regions show inward polygon shortcuts healed by our Foreground Continuation Copula C<sub>λ</sub>(p<sub>in</sub>, p<sub>out</sub>).",
  drift: "<strong>Isolated Rigid Spatial Drift:</strong> A 4–6 px translation barely changes object area on large instances, but devastates Boundary AP (17.10 → 11.43) and small-object AP<sub>S</sub> (16.38 → 8.24).",
  erode: "<strong>Isolated Morphological Erosion:</strong> Consistent inward contour bias cuts Boundary AP in half (17.10 → 8.59), proving that systematic directional bias is far more destructive than zero-mean variance (Unbiased 50/50 Scale = 15.29).",
  dilate: "<strong>Isolated Morphological Dilation:</strong> Outward background bleed across the contour. Both sides of the displaced border lie in background, firing our Inverse-Background Copula C<sub>λ</sub>(1−p<sub>in</sub>, 1−p<sub>out</sub>) to erode the bleed inward.",
  raw: "<strong>Raw RGB Image:</strong> Unannotated scene image from MS-COCO 2017. Drag the curtain to inspect how the right-hand reference or CB-LNL repaired mask aligns with soft natural object edges."
};

let currentScene = "scene1";
let currentLeftMode = "approx";
let currentRightMode = "cblnl_cleaned";
let sweepInterval = null;

function setCurtainPosition(pct) {
  const clamped = Math.max(2, Math.min(98, Number(pct)));
  const leftImg = document.getElementById("curtain-left-img");
  const divider = document.getElementById("curtain-divider");
  const slider = document.getElementById("curtain-slider");
  const readout = document.getElementById("curtain-pct-readout");
  if (leftImg) leftImg.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
  if (divider) divider.style.left = `${clamped}%`;
  if (slider) slider.value = String(Math.round(clamped));
  if (readout) readout.textContent = `${Math.round(clamped)}% / ${100 - Math.round(clamped)}%`;
}

function updateExplorerView() {
  const sceneObj = SCENES_DATA[currentScene];
  if (!sceneObj) return;
  const leftData = sceneObj.modes[currentLeftMode];
  const rightData = sceneObj.modes[currentRightMode];

  const leftImg = document.getElementById("curtain-left-img");
  const rightImg = document.getElementById("curtain-right-img");
  if (leftImg && leftData) leftImg.src = leftData.image;
  if (rightImg && rightData) rightImg.src = rightData.image;

  const badgeL = document.getElementById("curtain-badge-left");
  const badgeR = document.getElementById("curtain-badge-right");
  if (badgeL && leftData) {
    badgeL.textContent = currentLeftMode === "raw"
      ? "Left: Raw RGB Image"
      : `Left: ${leftData.label.split(" (")[0]} · BIoU ${leftData.boundary_iou.toFixed(1)}%`;
  }
  if (badgeR && rightData) {
    badgeR.textContent = `Right: ${rightData.label.split(" (")[0]} · BIoU ${rightData.boundary_iou.toFixed(1)}%`;
  }

  const sceneTitleEl = document.getElementById("telemetry-scene-title");
  if (sceneTitleEl) sceneTitleEl.textContent = sceneObj.title;

  const noisyBiouEl = document.getElementById("metric-left-biou");
  const noisyMiouEl = document.getElementById("metric-left-miou");
  const noisyLblEl = document.getElementById("metric-left-label");
  if (noisyBiouEl && leftData) {
    noisyBiouEl.textContent = currentLeftMode === "raw" ? "—" : `${leftData.boundary_iou.toFixed(1)}%`;
  }
  if (noisyMiouEl && leftData) {
    noisyMiouEl.textContent = currentLeftMode === "raw" ? "Unannotated RGB" : `Mask IoU: ${leftData.mask_iou.toFixed(1)}%`;
  }
  if (noisyLblEl && leftData) {
    noisyLblEl.textContent = leftData.label.split(" (")[0];
  }

  const rightBiouEl = document.getElementById("metric-right-biou");
  const rightMiouEl = document.getElementById("metric-right-miou");
  const rightLblEl = document.getElementById("metric-right-label");
  if (rightBiouEl && rightData) {
    const delta = (rightData.boundary_iou - leftData.boundary_iou).toFixed(1);
    const sign = Number(delta) >= 0 ? `+${delta}%` : `${delta}%`;
    rightBiouEl.textContent = currentLeftMode === "raw"
      ? `${rightData.boundary_iou.toFixed(1)}%`
      : `${rightData.boundary_iou.toFixed(1)}% (${sign})`;
  }
  if (rightMiouEl && rightData) {
    rightMiouEl.textContent = `Mask IoU: ${rightData.mask_iou.toFixed(1)}%`;
  }
  if (rightLblEl && rightData) {
    rightLblEl.textContent = rightData.label.split(" (")[0];
  }

  const diagEl = document.getElementById("explorer-diagnostic-text");
  if (diagEl) {
    diagEl.innerHTML = MODE_DESCRIPTIONS[currentLeftMode] || MODE_DESCRIPTIONS.approx;
  }
}

function initExplorer() {
  for (const btn of document.querySelectorAll("[data-scene]")) {
    btn.addEventListener("click", () => {
      currentScene = btn.dataset.scene;
      for (const b of document.querySelectorAll("[data-scene]")) {
        b.setAttribute("aria-pressed", String(b === btn));
      }
      updateExplorerView();
    });
  }

  for (const btn of document.querySelectorAll("[data-left-mode]")) {
    btn.addEventListener("click", () => {
      currentLeftMode = btn.dataset.leftMode;
      for (const b of document.querySelectorAll("[data-left-mode]")) {
        b.setAttribute("aria-pressed", String(b === btn));
      }
      updateExplorerView();
    });
  }

  for (const btn of document.querySelectorAll("[data-right-mode]")) {
    btn.addEventListener("click", () => {
      currentRightMode = btn.dataset.rightMode;
      for (const b of document.querySelectorAll("[data-right-mode]")) {
        b.setAttribute("aria-pressed", String(b === btn));
      }
      updateExplorerView();
    });
  }

  const slider = document.getElementById("curtain-slider");
  if (slider) {
    slider.addEventListener("input", () => {
      stopAutoSweep();
      setCurtainPosition(slider.value);
    });
  }

  const viewport = document.getElementById("curtain-viewport");
  if (viewport) {
    let dragging = false;
    const updateFromPointer = (clientX) => {
      const rect = viewport.getBoundingClientRect();
      const pct = ((clientX - rect.left) / Math.max(1, rect.width)) * 100;
      setCurtainPosition(pct);
    };
    viewport.addEventListener("pointerdown", (e) => {
      dragging = true;
      stopAutoSweep();
      viewport.setPointerCapture(e.pointerId);
      updateFromPointer(e.clientX);
    });
    viewport.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      updateFromPointer(e.clientX);
    });
    viewport.addEventListener("pointerup", () => { dragging = false; });
    viewport.addEventListener("pointercancel", () => { dragging = false; });
  }

  const sweepBtn = document.getElementById("auto-sweep-btn");
  if (sweepBtn) {
    sweepBtn.addEventListener("click", () => {
      if (sweepInterval) {
        stopAutoSweep();
      } else {
        startAutoSweep();
      }
    });
  }

  updateExplorerView();
  setCurtainPosition(52);
}

function stopAutoSweep() {
  if (sweepInterval) {
    clearInterval(sweepInterval);
    sweepInterval = null;
    const sweepBtn = document.getElementById("auto-sweep-btn");
    if (sweepBtn) sweepBtn.textContent = "Auto-sweep curtain ▷";
  }
}

function startAutoSweep() {
  stopAutoSweep();
  let t = 0;
  const sweepBtn = document.getElementById("auto-sweep-btn");
  if (sweepBtn) sweepBtn.textContent = "Stop sweep Ⅱ";
  sweepInterval = setInterval(() => {
    t += 0.045;
    const pct = 50 + 38 * Math.sin(t);
    setCurtainPosition(pct);
  }, 30);
}

/* INTERACTIVE SFUMATO COPULA CALCULATOR */
function frechetCopula(a, b, lam) {
  return (1 - lam) * (a * b) + lam * Math.min(a, b);
}

function updateCopulaInspector() {
  const lamSlider = document.getElementById("copula-lam");
  const pinSlider = document.getElementById("copula-pin");
  const poutSlider = document.getElementById("copula-pout");
  const puSlider = document.getElementById("copula-pu");
  if (!lamSlider || !pinSlider || !poutSlider || !puSlider) return;

  const lam = parseFloat(lamSlider.value);
  const pIn = parseFloat(pinSlider.value);
  const pOut = parseFloat(poutSlider.value);
  const pU = parseFloat(puSlider.value);
  const qOut = 1.0 - pOut;
  const qIn = 1.0 - pIn;

  document.getElementById("val-lam").textContent = lam.toFixed(2);
  document.getElementById("val-pin").textContent = pIn.toFixed(2);
  document.getElementById("val-pout").textContent = `${pOut.toFixed(2)} (q_out = ${qOut.toFixed(2)})`;
  document.getElementById("val-pu").textContent = pU.toFixed(2);

  const singlePixelBce = -Math.log(Math.max(1e-4, pU));
  const jEdge = frechetCopula(pIn, qOut, lam);
  const jCut = frechetCopula(pIn, pOut, lam);
  const jBleed = frechetCopula(qIn, qOut, lam);

  // Fréchet union soft target U_lam(u)
  const bFg = 0.55 * jEdge + 0.45 * jCut;
  const cUnionFg = frechetCopula(pU, bFg, lam);
  const uSoft = Math.min(0.99, Math.max(0.01, pU + 0.45 * (bFg - cUnionFg) - 0.45 * jBleed));

  document.getElementById("bar-bce-val").textContent = `${singlePixelBce.toFixed(2)} nats (floor ≈ 0.69)`;
  document.getElementById("bar-bce-fill").style.width = `${Math.min(100, (singlePixelBce / 2.2) * 100)}%`;

  document.getElementById("bar-edge-val").textContent = jEdge.toFixed(2);
  document.getElementById("bar-edge-fill").style.width = `${jEdge * 100}%`;

  document.getElementById("bar-cut-val").textContent = jCut.toFixed(2);
  document.getElementById("bar-cut-fill").style.width = `${jCut * 100}%`;

  document.getElementById("bar-bleed-val").textContent = jBleed.toFixed(2);
  document.getElementById("bar-bleed-fill").style.width = `${jBleed * 100}%`;

  const verdictEl = document.getElementById("copula-verdict");
  if (verdictEl) {
    if (jEdge >= jCut && jEdge >= jBleed && jEdge > 0.55) {
      verdictEl.innerHTML = `<strong>Verdict — State 1 (True Clean <em>Sfumato</em> Edge):</strong> Single-pixel probability is soft (<code>p(u)=${pU.toFixed(2)}</code>, near the ln 2 = 0.693 entropy floor), which fools pointwise BCE into flagging a false error. Because interior foreground (<code>p<sub>in</sub>=${pIn.toFixed(2)}</code>) and inverse-exterior background (<code>1−p<sub>out</sub>=${qOut.toFixed(2)}</code>) jointly agree (<strong>J<sub>edge</sub> = ${jEdge.toFixed(2)}</strong>), <code>CB-LNL</code> recognizes a valid soft boundary and suppresses false-positive penalties (<em>Sfumato</em> FPR = <strong>23.3%</strong>).`;
    } else if (jCut >= jBleed && jCut > 0.55) {
      verdictEl.innerHTML = `<strong>Verdict — State 2 (Inward Polygon Cut Detected):</strong> Both sides of the annotated contour lie inside the foreground object (<code>p<sub>in</sub>=${pIn.toFixed(2)}</code>, <code>p<sub>out</sub>=${pOut.toFixed(2)}</code>). The <strong>Foreground Continuation Copula J<sub>cut</sub> = ${jCut.toFixed(2)}</strong> fires and heals the polygon shortcut outward toward <code>1.0</code> (soft target <code>U<sub>λ</sub> = ${uSoft.toFixed(2)}</code>).`;
    } else if (jBleed > 0.55) {
      verdictEl.innerHTML = `<strong>Verdict — State 3 (Outward Background Bleed Detected):</strong> Both sides of the annotated contour lie in background clutter (<code>1−p<sub>in</sub>=${qIn.toFixed(2)}</code>, <code>1−p<sub>out</sub>=${qOut.toFixed(2)}</code>). The <strong>Inverse-Background Copula J<sub>bleed</sub> = ${jBleed.toFixed(2)}</strong> fires and erodes the bleed inward toward <code>0.0</code> (soft target <code>U<sub>λ</sub> = ${uSoft.toFixed(2)}</code>).`;
    } else {
      verdictEl.innerHTML = `<strong>Verdict — Mixed / Transitional Contour Zone:</strong> Soft Fréchet copula target blends evidence smoothly to <code>U<sub>λ</sub>(u) = ${uSoft.toFixed(2)}</code>.`;
    }
  }
}

function initCopulaInspector() {
  const presets = {
    state1: { lam: 0.53, pin: 0.91, pout: 0.09, pu: 0.49 },
    state2: { lam: 0.53, pin: 0.92, pout: 0.85, pu: 0.82 },
    state3: { lam: 0.53, pin: 0.12, pout: 0.08, pu: 0.16 }
  };

  for (const btn of document.querySelectorAll("[data-copula-preset]")) {
    btn.addEventListener("click", () => {
      const p = presets[btn.dataset.copulaPreset];
      if (!p) return;
      document.getElementById("copula-lam").value = p.lam;
      document.getElementById("copula-pin").value = p.pin;
      document.getElementById("copula-pout").value = p.pout;
      document.getElementById("copula-pu").value = p.pu;
      for (const b of document.querySelectorAll("[data-copula-preset]")) {
        b.setAttribute("aria-pressed", String(b === btn));
      }
      updateCopulaInspector();
    });
  }

  for (const id of ["copula-lam", "copula-pin", "copula-pout", "copula-pu"]) {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", updateCopulaInspector);
  }
  updateCopulaInspector();
}

/* FIGURE GALLERY TABS */
const FIGURE_GALLERY = {
  fig1: {
    src: "assets/figures/fig1_real_noise_audit.webp",
    caption: "<strong>Figure 1 — Empirical Audit of Real-World Human Annotation Noise (24,809 COCO vs. LVIS images; 59,840 matched object pairs).</strong> (a) While standard Mask IoU appears high (median 0.85), Boundary IoU reveals heavy tail degradation (median 0.76, mean 0.730, with 47.0% below BIoU = 0.75). (b) <em>Scale-Asymmetric Vulnerability Crossover:</em> Small objects suffer the worst inner Mask IoU loss (0.77) due to hand-eye drift, whereas Large objects suffer severe Boundary IoU collapse (0.63, with 59.2% below BIoU = 0.70) due to human polygon simplification. (c) Cross-regime fidelity spectrum. (d) Prevalence of real human error modes."
  },
  fig2: {
    src: "assets/figures/fig2_visual_taxonomy.webp",
    caption: "<strong>Figure 2 — Qualitative Comparison Across Our Benchmark Suite.</strong> From left to right on identical MS-COCO training images: Clean Reference (high-precision LVIS v1 contours), COCO-RealNoise (crowdsourced human polygons), COCO-WAN (SAM2 point-prompted masks exhibiting part-vs.-whole ambiguity), and COCO-N (Easy, Medium, Hard)."
  },
  fig3: {
    src: "assets/figures/fig3_loss_entanglement.webp",
    caption: "<strong>Figure 3 — Per-Instance Training Telemetry & The Semantic–Spatial Separability Gap.</strong> (a) Full-mask BCE exhibits only a 1.45× separation between clean and contour-corrupted masks (AUROC = 0.55) because 85%–95% of interior pixels are uncorrupted. (b) Boundary-band BCE lifts separation to 0.74 AUROC before hitting the ln 2 ≈ 0.693 nats clean-edge entropy floor. (c) Directional Fréchet copula refinement in CB-LNL breaks through the single-pixel floor to achieve 0.91–0.96 AUROC."
  },
  fig_ops: {
    src: "assets/figures/fig_supp_operators.webp",
    caption: "<strong>Figure S3 — Multi-Scene Visual Gallery of Isolated Spatial Noise Operators & Automated CB-LNL Mask Cleaning.</strong> Across four MS-COCO scenes, we compare Clean Reference (LVIS v1), Polygon Simplification (inward corner cutting), Rigid Spatial Drift, Morphological Erosion, Morphological Dilation (outward bleed), and the masks automatically repaired by our CB-LNL Cleaned pipeline."
  },
  fig_cases: {
    src: "assets/figures/fig_supp_cases.webp",
    caption: "<strong>Figure S4 — Positive Regimes (Top 2 Rows) vs. Fundamental Failure Modes (Bottom 2 Rows).</strong> Top: CB-LNL heals inward polygon cuts (91.8% repair rate, +14.2% BIoU), erodes outward SAM2 box bleeds (88.5% repair rate, +11.8% BIoU), and fixes within-supercategory class flips (91.4%). Bottom: Local RoI-band copulas reach physical limits on (1) extreme part-click truncation (>40% missing outside B_d), (2) crowded same-class merges, and (3) sub-RoI thin structures (<3 px)."
  },
  fig_viper: {
    src: "assets/figures/viper_comparison.webp",
    caption: "<strong>Figure S1 — High-Resolution Driving Instance Annotations in VIPER & VIPER-N (1920×1080).</strong> Comparison between clean ground-truth driving masks and our calibrated Easy, Medium, and Hard procedural noise tiers on urban driving scenes."
  }
};

function initFigureAndResultsTabs() {
  for (const btn of document.querySelectorAll("[data-fig-tab]")) {
    btn.addEventListener("click", () => {
      const f = FIGURE_GALLERY[btn.dataset.figTab];
      if (!f) return;
      document.getElementById("showcase-fig-img").src = f.src;
      document.getElementById("showcase-fig-cap").innerHTML = f.caption;
      for (const b of document.querySelectorAll("[data-fig-tab]")) {
        b.setAttribute("aria-pressed", String(b === btn));
      }
    });
  }

  for (const btn of document.querySelectorAll("[data-res-tab]")) {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.resTab;
      for (const panel of document.querySelectorAll(".results-panel")) {
        panel.hidden = panel.id !== targetId;
      }
      for (const b of document.querySelectorAll("[data-res-tab]")) {
        b.setAttribute("aria-pressed", String(b === btn));
      }
    });
  }

  for (const copyBtn of document.querySelectorAll("[data-copy-target]")) {
    copyBtn.addEventListener("click", async () => {
      const target = document.getElementById(copyBtn.dataset.copyTarget);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        const orig = copyBtn.textContent;
        copyBtn.textContent = "Copied ✓";
        setTimeout(() => { copyBtn.textContent = orig; }, 1800);
      } catch (_) {}
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initExplorer();
  initCopulaInspector();
  initFigureAndResultsTabs();
});
