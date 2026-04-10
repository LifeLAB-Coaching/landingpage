# LifeLAB Nepal

A contemplative, literary, and high-conversion landing page for LifeLAB Nepal, designed as a founder-hosted reflective journey. This site is built using **Hugo** for maximum performance and editorial flexibility.

## Features

- **Hugo-Powered**: Extremely fast build times and high lighthouse scores.
- **Premium Aesthetics**: "Quiet Luxury" design system with glassmorphism and refined typography.
- **Responsive Navigation**: Sophisticated mobile menu with a 1200px breakpoint for tablet compatibility.
- **Editorial Content**: Markdown-based content management for journals and philosophical pages.
- **Automated Deployment**: Integrated GitHub Actions for seamless delivery to GitHub Pages.

## Local Development

To run this project locally, ensure you have [Hugo](https://gohugo.io/installation/) installed on your machine.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chayev/lifelabnepal.com.git
   cd landingpage
   ```

2. **Start the development server**:
   ```bash
   hugo server -D
   ```
   The site will be available at `http://localhost:1313/`.

## Project Structure

- `content/`: Markdown files for all pages and journal entries.
- `layouts/`: HTML templates for the site structure.
  - `partials/`: Reusable components (header, footer, head).
- `static/`: Static assets such as images, CSS, and vanilla JavaScript.
  - `styles.css`: Core "Quiet Luxury" design system.
  - `script.js`: Interactive elements (FAQ accordion, mobile menu toggle).
- `hugo.toml`: Main site configuration.

## Content Management

### Journal Entries
New journals can be added as markdown files in `content/journals/`. Each entry should include frontmatter for metadata:
```yaml
---
title: "The Quiet Morning"
date: 2024-04-10
draft: false
---
Your content goes here...
```

### Main Pages
Key philosophical pages like "Who This Is For" and "Why Nepal" are located in the `content/` root.

## Deployment

This site is automatically deployed to GitHub Pages via the `.github/workflows/gh-pages.yml` workflow whenever changes are pushed to the `main` branch.

## Contact

For questions about LifeLAB Nepal or this website, please contact Prateek Neupane.
