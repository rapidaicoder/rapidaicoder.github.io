# Track Specification: Initial Website Structure & Design

## 1. Overview
This track focuses on establishing the core foundation of the AICoder product website. The goal is to create a multi-page, static website using Jekyll hosted on GitHub Pages, featuring a "Modern Blue" aesthetic and full bilingual support (Simplified Chinese & English).

## 2. Requirements

### 2.1 Information Architecture
The website will consist of the following pages:
- **Home (`index.md`):** High-level overview, hero section with "Install" CTA, value proposition.
- **Features (`features.md`):** Detailed breakdown of AICoder capabilities.
- **Download (`download.md`):** Installation instructions, binaries, and version history.
- **Tutorials (`tutorials.md`):** Guides, documentation, and usage examples.
- **Support (`support.md`):** Customer service contact (WeChat, Email) and FAQs.

### 2.2 Design & User Experience
- **Theme:** "Modern Blue" - Deep, professional blues with abstract tech patterns (grids/networks).
- **Navigation:** Sticky top navbar accessible on all pages.
- **Responsiveness:** Fully responsive design for mobile, tablet, and desktop.
- **Assets:** Placeholders for high-quality UI screenshots and icons.

### 2.3 Bilingual Support
- **Mechanism:** Dual-file structure or Front Matter configuration to support `en` and `zh-cn`.
- **Default:** Auto-detect or default to English with a clear switcher.

### 2.4 Technical Constraints
- **Generator:** Jekyll.
- **Hosting:** GitHub Pages.
- **Styling:** SASS/SCSS.

## 3. Detailed Specifications

### 3.1 Global Elements
- **Navigation Bar:** Logo (Left), Links (Features, Download, Tutorials, Support, GitHub), Language Switcher (Right).
- **Footer:** Copyright, Quick Links, Social Icons.

### 3.2 Page-Specific Content
- **Home:** Hero Banner (Headline + Subhead + 2 Buttons: Install & GitHub), "Why AICoder" Grid, Testimonials/Trust (optional), CTA Footer.
- **Features:** Alternating text/image sections detailing "Vibe Coding" integration.
- **Download:** OS selectors (Mac, Windows, Linux), Code snippets for terminal installation.
- **Tutorials:** List of articles/guides.
- **Support:** Simple contact card layout.
