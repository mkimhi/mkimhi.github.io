# Research website redesign

The homepage uses a standalone Jekyll layout, keeping the existing project and legacy URLs. No frontend build or runtime dependencies were added. Ivory, dark green ink, rust accents, serif display typography, and fine rules provide an editorial visual language.

The reading-depth slider controls paper summaries and author details. All papers remain accessible at every depth. Native details controls allow individual expansion, and native range keyboard controls remain available. Topic filters work independently of depth. The SVG network provides a user-triggered signal interaction, with no continuous animation or scroll interception. The glass vessel drawing expresses the bottleneck metaphor without suggesting a photograph documents a real glassblowing activity.

Publication data lives in `_data/research.json`, shared between the homepage and `/publications/`. Older collection pages retain their existing permalinks. Update the JSON when adding papers.

## Source reconciliation (2026-11-01)

Google Scholar returned HTTP 429, so completeness against the live Scholar profile could not be confirmed. Titles, authors, publication details and affiliations were reconciled against primary paper records:

- AwaRes: https://nimrodshabtay.github.io/AwaRes/
- CARES: https://mkimhi.github.io/CARES/ and https://arxiv.org/abs/2510.19496
- DNL: https://openreview.net/pdf?id=kN1s53X3zl (TMLR March 2026); repository https://github.com/IdoGalil/maximal-brain-damage
- CXR-Retrieve: https://arxiv.org/html/2607.27779
- R³: https://arxiv.org/html/2509.24022 and WACV 2026 proceedings
- WAVECLIP: https://arxiv.org/abs/2509.21153
- RISE: WACV 2025 proceedings
- Noisy Annotations: https://arxiv.org/abs/2406.10891 (updated title and authors; replaces earlier Benchmarking Label Noise version)
- S4MC: https://arxiv.org/html/2308.13900
- HeLU: https://proceedings.mlr.press/v262/kimhi24a.html (published author order; differs from latest arXiv)
- CPT: https://arxiv.org/pdf/2410.17222 (preprint; no unverified conference acceptance inferred)
- AMED: https://www.mdpi.com/2227-7390/12/12/1810 (2024, not 2023); affiliation metadata also https://doaj.org/article/2f7a755300d44e31a26bb805765319b9
- BD-BNN: https://www.mdpi.com/2227-7390/10/21/4107; affiliation metadata https://ideas.repec.org/a/gam/jmathe/v10y2022i21p4107-d962829.html

CARES ACL 2026 oral, AwaRes EMNLP 2026 workshop best paper, and DNL featured certificate/top 10% are supplied by the website owner. These distinctions were incorporated without inventing award URLs. Affiliations are paper-specific.

The existing portrait is used with a grayscale-to-color hover treatment. The owner's untracked `moshe_kids.jpg` is left untouched.

## Validation

Jekyll 3.10 (GitHub Pages version) and Jekyll 4.4 builds both succeeded. Browser smoke checks against the generated Jekyll 3.10 site pass for all 13 papers, all depth states, topic filtering, signal interaction, portrait loading, keyboard range operation, and no horizontal overflow at 375, 768, and 1440 pixels. No JavaScript errors were observed.

Repeat with `python scripts/check_website.py http://localhost:4000` after serving the site (requires Playwright Chromium). Existing theme Sass emits deprecation warnings under Jekyll 4; the new layout uses plain CSS.

## Design refinement

Design takes priority; remaining Scholar reconciliation is deferred at the owner's request. The network now animates individual signal paths. The sticky reading bar shows section location and page progress, offers clickable depth endpoints, and preserves the central visible paper when depth changes. A portrait resolution experiment lets visitors explore progressively coarser image representations with native keyboard-accessible controls. Motion preferences disable signal animations. Browser checks also cover resolution controls, scroll preservation, and reduced motion.

## Published content update

The page order is About, Perspective, Publications, Talks. The interactive resolution portrait is now in the opening About section, and the network illustration accompanies Perspective. Chaim Baskin appears before Ehud Rivlin, with the INSIGHT Lab at BGU explicitly named. Contact and coffee scheduling use moshekimhi91@gmail.com; the coffee link opens an email rather than an unspecified booking service. Talks include Mobileye (July 13) and Google Research Conference (October 13); no year was supplied, so none is invented. The CV page and navigation links were removed at the owner's request.

The opening layout now places the interactive portrait above the About label in the left column, with the bottleneck network restored to the top-right column. Perspective follows without the network illustration.

The owner-supplied `me.PNG` is now the homepage portrait and profile avatar. A second native range control below Resolution changes color independently: full RGB, 4,096 colors, 64 colors, 8 colors, or grayscale. RGB palettes use per-channel quantization; grayscale uses luminance. The default shows the full-color original. Browser checks verify grayscale channels, the eight-color palette, and combined resolution/color settings.
