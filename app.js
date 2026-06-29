const schools = [
  { no: 1, region: "서울권", name: "국민대학교", book: 17, pdf: 9, grade: true },
  { no: 2, region: "서울권", name: "동국대학교", book: 18, pdf: 9, grade: true },
  { no: 3, region: "서울권", name: "서울대학교", book: 19, pdf: 10, grade: false },
  { no: 4, region: "서울권", name: "서울시립대학교", book: 20, pdf: 10, grade: false },
  { no: 5, region: "서울권", name: "성균관대학교", book: 21, pdf: 11, grade: true },
  { no: 6, region: "서울권", name: "중앙대학교", book: 22, pdf: 11, grade: true },
  { no: 7, region: "서울권", name: "한양대학교", campus: "서울", book: 23, pdf: 12, grade: true },
  { no: 8, region: "서울권", name: "이화여자대학교", book: 24, pdf: 12, grade: true },
  { no: 9, region: "서울권", name: "서울여자대학교", book: 25, pdf: 13, grade: true },
  { no: 10, region: "서울권", name: "숙명여자대학교", book: 26, pdf: 13, grade: true },
  { no: 11, region: "서울권", name: "한국체육대학교", book: 27, pdf: 14, grade: true },
  { no: 12, region: "서울권", name: "서울과학기술대학교", book: 29, pdf: 15, grade: false },
  { no: 13, region: "서울권", name: "상명대학교", book: 30, pdf: 15, grade: true },
  { no: 14, region: "서울권", name: "삼육대학교", book: 31, pdf: 16, grade: true },
  { no: 15, region: "경기권", name: "성균관대학교", campus: "수원캠퍼스", book: 32, pdf: 16, grade: true },
  { no: 16, region: "경기권", name: "경희대학교", campus: "국제", book: 33, pdf: 17, grade: true },
  { no: 17, region: "경기권", name: "성결대학교", book: 35, pdf: 18, grade: true },
  { no: 18, region: "경기권", name: "용인대학교", book: 36, pdf: 18, grade: true },
  { no: 19, region: "경기권", name: "단국대학교", campus: "용인", book: 37, pdf: 19, grade: true },
  { no: 20, region: "경기권", name: "가천대학교", campus: "성남", book: 38, pdf: 19, grade: true },
  { no: 21, region: "경기권", name: "신한대학교", campus: "의정부", book: 39, pdf: 20, grade: true },
  { no: 22, region: "경기권", name: "대진대학교", campus: "포천", book: 40, pdf: 20, grade: true },
  { no: 23, region: "경기권", name: "경동대학교", campus: "양주", book: 41, pdf: 21, grade: true },
  { no: 24, region: "경기권", name: "한양대학교", campus: "에리카", book: 42, pdf: 21, grade: true },
  { no: 25, region: "경기권", name: "중부대학교", campus: "고양", book: 43, pdf: 22, grade: true },
  { no: 26, region: "경기권", name: "경기대학교", campus: "수원", book: 44, pdf: 22, grade: true },
  { no: 27, region: "경기권", name: "수원대학교", campus: "화성", book: 45, pdf: 23, grade: true },
  { no: 28, region: "인천대전(세종)강원권", name: "인천대학교", book: 46, pdf: 23, grade: true },
  { no: 29, region: "인천대전(세종)강원권", name: "인하대학교", book: 47, pdf: 24, grade: true },
  { no: 30, region: "인천대전(세종)강원권", name: "안양대학교", campus: "인천", book: 48, pdf: 24, grade: true },
  { no: 31, region: "인천대전(세종)강원권", name: "대전대학교", book: 49, pdf: 25, grade: true },
  { no: 32, region: "인천대전(세종)강원권", name: "충남대학교", book: 51, pdf: 26, grade: true },
  { no: 33, region: "인천대전(세종)강원권", name: "한남대학교", book: 52, pdf: 26, grade: true },
  { no: 34, region: "인천대전(세종)강원권", name: "우송대학교", book: 53, pdf: 27, grade: true },
  { no: 35, region: "인천대전(세종)강원권", name: "고려대학교", campus: "세종", book: 54, pdf: 27, grade: true },
  { no: 36, region: "인천대전(세종)강원권", name: "목원대학교", book: 55, pdf: 28, grade: true },
  { no: 37, region: "인천대전(세종)강원권", name: "가톨릭관동대학교", book: 56, pdf: 28, grade: true },
  { no: 38, region: "인천대전(세종)강원권", name: "강원대학교", campus: "춘천, 삼척", book: 58, pdf: 29, grade: true },
  { no: 39, region: "인천대전(세종)강원권", name: "한림대학교", book: 60, pdf: 30, grade: true },
  { no: 40, region: "인천대전(세종)강원권", name: "상지대학교", book: 61, pdf: 31, grade: true },
  { no: 41, region: "충청권", name: "한국교원대", book: 62, pdf: 31, grade: false },
  { no: 42, region: "충청권", name: "건국대학교", campus: "글로컬", book: 63, pdf: 32, grade: true },
  { no: 43, region: "충청권", name: "서원대학교", book: 64, pdf: 32, grade: true },
  { no: 44, region: "충청권", name: "충북대학교", book: 66, pdf: 33, grade: true },
  { no: 45, region: "충청권", name: "청주대학교", book: 67, pdf: 34, grade: true },
  { no: 46, region: "충청권", name: "단국대학교", campus: "천안", book: 68, pdf: 34, grade: true },
  { no: 47, region: "충청권", name: "백석대학교", book: 69, pdf: 35, grade: true },
  { no: 48, region: "충청권", name: "순천향대학교", book: 70, pdf: 35, grade: true },
  { no: 49, region: "충청권", name: "공주대학교", book: 71, pdf: 36, grade: true },
  { no: 50, region: "충청권", name: "건양대학교", book: 72, pdf: 36, grade: true },
  { no: 51, region: "충청권", name: "중부대학교", campus: "충청권", book: 73, pdf: 37, grade: true },
  { no: 52, region: "충청권", name: "청운대학교", book: 74, pdf: 37, grade: true },
  { no: 53, region: "대구 경북권", name: "경북대학교", book: 75, pdf: 38, grade: true },
  { no: 54, region: "대구 경북권", name: "계명대학교", book: 76, pdf: 38, grade: true },
  { no: 55, region: "대구 경북권", name: "경일대학교", book: 78, pdf: 39, grade: true },
  { no: 56, region: "대구 경북권", name: "대구가톨릭대학교", book: 79, pdf: 40, grade: true },
  { no: 57, region: "대구 경북권", name: "대구대학교", book: 80, pdf: 40, grade: true },
  { no: 58, region: "대구 경북권", name: "영남대학교", book: 81, pdf: 41, grade: true },
  { no: 59, region: "대구 경북권", name: "경북대학교", campus: "상주", book: 82, pdf: 41, grade: true },
  { no: 60, region: "대구 경북권", name: "경운대학교", campus: "구미", book: 83, pdf: 42, grade: true },
  { no: 61, region: "대구 경북권", name: "김천대학교", campus: "김천", book: 84, pdf: 42, grade: true },
  { no: 62, region: "대구 경북권", name: "동국대학교", campus: "WISE", book: 85, pdf: 43, grade: true },
  { no: 63, region: "대구 경북권", name: "위덕대학교", campus: "경주", book: 86, pdf: 43, grade: true },
  { no: 64, region: "대구 경북권", name: "국립경국대학교", book: 87, pdf: 44, grade: true },
  { no: 65, region: "부산(울산) 경남권", name: "부산대학교", book: 88, pdf: 44, grade: true },
  { no: 66, region: "부산(울산) 경남권", name: "부경대학교", book: 90, pdf: 45, grade: true },
  { no: 67, region: "부산(울산) 경남권", name: "한국해양대학교", book: 92, pdf: 46, grade: true },
  { no: 68, region: "부산(울산) 경남권", name: "동아대학교", book: 93, pdf: 47, grade: true },
  { no: 69, region: "부산(울산) 경남권", name: "동의대학교", book: 94, pdf: 47, grade: true },
  { no: 70, region: "부산(울산) 경남권", name: "경성대학교", book: 96, pdf: 48, grade: true },
  { no: 71, region: "부산(울산) 경남권", name: "동서대학교", book: 97, pdf: 49, grade: true },
  { no: 72, region: "부산(울산) 경남권", name: "동명대학교", book: 99, pdf: 50, grade: true },
  { no: 73, region: "부산(울산) 경남권", name: "신라대학교", book: 101, pdf: 51, grade: true },
  { no: 74, region: "부산(울산) 경남권", name: "울산대학교", book: 102, pdf: 51, grade: true },
  { no: 75, region: "부산(울산) 경남권", name: "경상대학교", fileName: "경상국립대학교", book: 103, pdf: 52, grade: true },
  { no: 76, region: "부산(울산) 경남권", name: "경남대학교", book: 105, pdf: 53, grade: true },
  { no: 77, region: "부산(울산) 경남권", name: "창원대학교", fileName: "국립창원대학교", book: 106, pdf: 53, grade: true },
  { no: 78, region: "부산(울산) 경남권", name: "가야대학교", book: 107, pdf: 54, grade: false },
  { no: 79, region: "부산(울산) 경남권", name: "인제대학교", book: 108, pdf: 54, grade: true },
  { no: 80, region: "광주(제주)전라권", name: "전남대학교", campus: "광주", book: 109, pdf: 55, grade: true },
  { no: 81, region: "광주(제주)전라권", name: "광주대학교", campus: "광주", book: 110, pdf: 55, grade: true },
  { no: 82, region: "광주(제주)전라권", name: "조선대학교", campus: "광주", book: 111, pdf: 56, grade: true },
  { no: 83, region: "광주(제주)전라권", name: "호남대학교", campus: "광주", book: 112, pdf: 56, grade: false },
  { no: 84, region: "광주(제주)전라권", name: "남부대학교", campus: "광주", book: 113, pdf: 57, grade: false },
  { no: 85, region: "광주(제주)전라권", name: "군산대학교", fileName: "국립군산대학교", campus: "군산", book: 114, pdf: 57, grade: false },
  { no: 86, region: "광주(제주)전라권", name: "원광대학교", campus: "익산", book: 115, pdf: 58, grade: true },
  { no: 87, region: "광주(제주)전라권", name: "전주대학교", campus: "전주", book: 117, pdf: 59, grade: true },
  { no: 88, region: "광주(제주)전라권", name: "목포대학교", fileName: "국립목포대학교", campus: "목포", book: 118, pdf: 59, grade: false },
  { no: 89, region: "광주(제주)전라권", name: "순천대학교", fileName: "국립순천대학교", campus: "순천", book: 119, pdf: 60, grade: true },
  { no: 90, region: "광주(제주)전라권", name: "동신대학교", campus: "나주", book: 120, pdf: 60, grade: true },
  { no: 91, region: "광주(제주)전라권", name: "제주대학교", campus: "제주", book: 121, pdf: 61, grade: true },
];

const schoolResourceOverrides = window.schoolResourceOverrides || {};

const state = {
  query: "",
  region: "전체",
};

const els = {
  search: document.querySelector("#school-search"),
  region: document.querySelector("#region-filter"),
  tabs: document.querySelector("#region-tabs"),
  list: document.querySelector("#school-list"),
  summary: document.querySelector("#list-summary"),
  detailSection: document.querySelector("#school-detail"),
  detail: document.querySelector("#detail-content"),
};

const regions = ["전체", ...Array.from(new Set(schools.map((school) => school.region)))];

function padNo(no) {
  return String(no).padStart(3, "0");
}

function displayName(school) {
  return school.campus ? `${school.name}(${school.campus})` : school.name;
}

function fileBaseName(school) {
  return school.fileName || school.name;
}

function driveSearchUrl(query) {
  return `https://drive.google.com/drive/search?q=${encodeURIComponent(query)}`;
}

function driveFileUrl(fileId) {
  return `https://drive.google.com/file/d/${fileId}/view?usp=drivesdk`;
}

function driveThumbnailUrl(fileId) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;
}

function guideQuery(school) {
  return `${school.no}.${fileBaseName(school)}_2027_수시모집요강.pdf`;
}

function schoolResource(school) {
  return {
    guideUrl: driveSearchUrl(guideQuery(school)),
    admissionsSections: [],
    evidenceImages: [],
    ...schoolResourceOverrides[school.no],
  };
}

function schoolHash(school) {
  return `#school-${padNo(school.no)}`;
}

function selectedSchoolFromHash() {
  const match = window.location.hash.match(/^#school-(\d{3})$/);
  if (!match) return null;
  const selectedNo = Number(match[1]);
  return schools.find((school) => school.no === selectedNo) || null;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function searchableText(school) {
  return [
    padNo(school.no),
    school.region,
    school.name,
    school.campus || "",
    school.fileName || "",
    school.grade ? "실기등급표" : "등급표없음",
  ]
    .join(" ")
    .toLowerCase();
}

function filteredSchools() {
  const query = state.query.trim().toLowerCase();
  return schools.filter((school) => {
    const matchesRegion = state.region === "전체" || school.region === state.region;
    const matchesQuery = !query || searchableText(school).includes(query);
    return matchesRegion && matchesQuery;
  });
}

function renderRegionControls() {
  els.region.innerHTML = regions.map((region) => `<option value="${region}">${region}</option>`).join("");
  els.tabs.innerHTML = regions
    .map(
      (region) =>
        `<button type="button" data-region="${region}" aria-pressed="${region === state.region}">${region}</button>`
    )
    .join("");
}

function renderSchools() {
  const list = filteredSchools();
  const gradeCount = list.filter((school) => school.grade).length;
  els.summary.textContent = `${list.length}개 학교 표시 · 실기등급표 포함 ${gradeCount}개`;
  els.list.innerHTML = list
    .map((school) => {
      const no = padNo(school.no);
      const name = displayName(school);
      const gradeLabel = school.grade ? "실기등급표 포함" : "실기등급표 없음";
      const resource = schoolResource(school);

      return `
        <article class="school-card">
          <div class="school-number">${no}</div>
          <div class="school-main">
            <div class="school-topline">
              <span class="school-region">${school.region}</span>
              <span class="school-grade">${gradeLabel}</span>
            </div>
            <h3>${name}</h3>
            <div class="school-meta">
              <span>책자 ${school.book}쪽</span>
              <span>PDF ${school.pdf}쪽</span>
            </div>
            <div class="school-actions">
              <a class="primary-link" href="${schoolHash(school)}">상세 보기</a>
              <a href="${resource.guideUrl}" target="_blank" rel="noreferrer">모집요강</a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderSummaryCards(school, resource) {
  const summary = resource.summary || {
    모집요강: `책자 ${school.book}쪽`,
    핵심페이지: `PDF ${school.pdf}쪽`,
    실기등급표: school.grade ? "포함" : "없음",
  };

  return Object.entries(summary)
    .map(
      ([label, value]) => `
        <article class="detail-stat">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </article>
      `
    )
    .join("");
}

function renderInfoList(resource) {
  const entries = Object.entries(resource.schoolInfo || {});
  if (!entries.length && !resource.qrImage) return "";

  return `
    <div class="school-info-strip">
      ${entries
        .map(
          ([label, value]) => `
            <article>
              <span>${escapeHtml(label)}</span>
              <strong>${escapeHtml(value)}</strong>
            </article>
          `
        )
        .join("")}
      ${
        resource.qrImage
          ? `
            <a class="qr-inline-card qr-link-card" href="${resource.guideUrl}" target="_blank" rel="noreferrer">
              <span>모집요강 QR</span>
              <div class="qr-inline-content">
                <img src="${resource.qrImage}" alt="모집요강 QR 코드">
                <strong>모집요강 확인</strong>
              </div>
            </a>
          `
          : ""
      }
    </div>
  `;
}

function renderGuideTable(section) {
  return `
    <section class="guide-block">
      <h4>${escapeHtml(section.title)}</h4>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>${section.columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${section.rows
              .map(
                (row) => `
                  <tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderAdmissionsGuide(resource) {
  if (!resource.admissionsSections.length) return "";

  return `
    <section class="detail-panel admissions-guide">
      <h3 class="guide-title">입시 핵심요강</h3>
      ${renderInfoList(resource)}
      <div class="guide-stack">
        ${resource.admissionsSections.map(renderGuideTable).join("")}
      </div>
    </section>
  `;
}

function renderEvidenceSlideshow(resource) {
  if (!resource.evidenceImages.length) return "";

  const firstImage = resource.evidenceImages[0];
  return `
    <section class="detail-panel evidence-panel">
      <div class="evidence-slider" data-slider>
        <div class="slider-frame">
          <button class="slider-nav prev" type="button" data-slide-prev aria-label="이전 핵심페이지">‹</button>
          <a class="slider-image-link" href="${driveFileUrl(firstImage.fileId)}" target="_blank" rel="noreferrer">
            <img data-slide-image src="${driveThumbnailUrl(firstImage.fileId)}" alt="${escapeHtml(firstImage.title)} 핵심페이지">
          </a>
          <button class="slider-nav next" type="button" data-slide-next aria-label="다음 핵심페이지">›</button>
        </div>
        <div class="slider-caption">
          <span data-slide-page>${escapeHtml(firstImage.page)}</span>
          <strong data-slide-title>${escapeHtml(firstImage.title)}</strong>
          <em data-slide-count>1 / ${resource.evidenceImages.length}</em>
        </div>
        <div class="slider-dots" aria-label="핵심페이지 선택">
          ${resource.evidenceImages
            .map(
              (image, index) => `
                <button type="button" data-slide-index="${index}" aria-label="${escapeHtml(image.title)}" aria-pressed="${index === 0}">
                  ${index + 1}
                </button>
              `
            )
          .join("")}
        </div>
      </div>
    </section>
  `;
}

function updateEvidenceSlide(index) {
  const school = selectedSchoolFromHash();
  if (!school) return;

  const resource = schoolResource(school);
  if (!resource.evidenceImages.length) return;

  const slider = document.querySelector("[data-slider]");
  if (!slider) return;

  const imageCount = resource.evidenceImages.length;
  const safeIndex = ((index % imageCount) + imageCount) % imageCount;
  const image = resource.evidenceImages[safeIndex];
  const imageEl = slider.querySelector("[data-slide-image]");
  const linkEl = slider.querySelector(".slider-image-link");
  const pageEl = slider.querySelector("[data-slide-page]");
  const titleEl = slider.querySelector("[data-slide-title]");
  const countEl = slider.querySelector("[data-slide-count]");

  slider.dataset.activeSlide = String(safeIndex);
  imageEl.src = driveThumbnailUrl(image.fileId);
  imageEl.alt = `${image.title} 핵심페이지`;
  linkEl.href = driveFileUrl(image.fileId);
  pageEl.textContent = image.page;
  titleEl.textContent = image.title;
  countEl.textContent = `${safeIndex + 1} / ${imageCount}`;
  slider.querySelectorAll("[data-slide-index]").forEach((button) => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.slideIndex) === safeIndex));
  });
}

function renderDetail() {
  const school = selectedSchoolFromHash();

  if (!school) {
    document.body.classList.remove("detail-mode");
    els.detailSection.hidden = true;
    return;
  }

  const resource = schoolResource(school);
  const name = displayName(school);
  document.body.classList.add("detail-mode");
  els.detailSection.hidden = false;
  els.detail.innerHTML = `
    <div class="detail-shell">
      <a class="back-link" href="#schools">학교 목록으로</a>
      <div class="detail-header">
        <div>
          <p class="eyebrow">${escapeHtml(school.region)}</p>
          <h2>${padNo(school.no)}. ${escapeHtml(name)}</h2>
        </div>
      </div>
      <div class="detail-stat-grid">
        ${renderSummaryCards(school, resource)}
      </div>
      <div class="detail-layout">
        <div>
          ${renderAdmissionsGuide(resource)}
          ${renderEvidenceSlideshow(resource)}
        </div>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    window.scrollTo({ top: 0 });
  });
}

function setRegion(region) {
  state.region = region;
  els.region.value = region;
  document.querySelectorAll("#region-tabs button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.region === region));
  });
  renderSchools();
}

els.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderSchools();
});

els.region.addEventListener("change", (event) => {
  setRegion(event.target.value);
});

els.tabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-region]");
  if (!button) return;
  setRegion(button.dataset.region);
});

window.addEventListener("hashchange", renderDetail);

document.addEventListener("click", (event) => {
  const slider = event.target.closest("[data-slider]");
  if (!slider) return;

  const currentIndex = Number(slider.dataset.activeSlide || "0");
  const prevButton = event.target.closest("[data-slide-prev]");
  const nextButton = event.target.closest("[data-slide-next]");
  const indexButton = event.target.closest("[data-slide-index]");

  if (prevButton) updateEvidenceSlide(currentIndex - 1);
  if (nextButton) updateEvidenceSlide(currentIndex + 1);
  if (indexButton) updateEvidenceSlide(Number(indexButton.dataset.slideIndex));
});

renderRegionControls();
renderSchools();
renderDetail();
