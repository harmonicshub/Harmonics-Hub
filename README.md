# HARMONICS HUB Website

![HARMONICS HUB Logo](images/logo.png)

Official website source for **HARMONICS HUB**, a creative technology company delivering brand design, web and software development, practical technology training, and managed IT support.

Live domain: [harmonicshub.ng](https://harmonicshub.ng/)

## Overview

This repository contains the source code and site assets for the HARMONICS HUB website. The project serves as the company's public-facing web presence and supports:

- company and service information
- academy and training promotion
- downloadable resources
- business inquiry capture
- academy registration intake

The website is built with standard web technologies and includes a lightweight PHP backend for form submission handling.

## Key Features

- Responsive multi-page website
- Custom branded user interface
- Dedicated pages for services, academy, blog, resources, and contact
- Inquiry and academy registration forms
- Frontend form validation with asynchronous submission
- PHP-based form processing and JSON responses
- SQLite-backed local submission storage
- SEO essentials including metadata, canonical URLs, `robots.txt`, and `sitemap.xml`

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- PHP
- SQLite

## Project Structure

```text
.
|-- about.html
|-- academy-registration.html
|-- blog.html
|-- contactus.html
|-- cookie-policy.html
|-- exploreourservices.html
|-- index.html
|-- insights-custom-software-checklist.html
|-- insights-design-systems-trust.html
|-- insights-practical-training-performance.html
|-- ourcourses.html
|-- privacy.html
|-- robots.txt
|-- script.js
|-- shop.html
|-- signinregister.html
|-- sitemap.xml
|-- style.css
|-- terms.html
|-- api/
|   |-- bootstrap.php
|   `-- submit.php
|-- downloads/
|-- images/
`-- storage/
    `-- .gitignore
```

## How It Works

### Frontend

The frontend is composed of static HTML pages styled with a shared stylesheet and enhanced with vanilla JavaScript for:

- navigation behavior
- responsive interactions
- cookie/privacy notice handling
- client-side form validation
- asynchronous form submission

### Backend

The backend lives in `api/` and provides form processing for both general inquiries and academy registrations.

Current backend behavior includes:

- request validation
- email validation
- spam reduction using a honeypot field
- structured JSON success and error responses
- SQLite persistence for submitted form data

Runtime submission data is stored in the `storage/` directory and should remain excluded from version control.

## Getting Started

### Requirements

- PHP 8 or later recommended
- A local web server or the PHP built-in development server

### Run Locally

From the project root:

```bash
php -S localhost:8000
```

Then open:

```text
http://localhost:8000/
```

## Deployment

This project requires a **PHP-capable host** for full functionality.

GitHub Pages can host only the static frontend and will **not** run the PHP form backend. For production use, deploy to a hosting environment that supports:

- PHP execution
- writable server storage for SQLite
- HTTPS
- custom domain configuration

### Production Checklist

- Confirm all site pages load correctly
- Verify all navigation links and downloadable resources
- Test inquiry and academy registration forms
- Ensure the `storage/` directory is writable by the server
- Keep generated database files out of version control
- Configure the live domain and HTTPS certificate
- Review page metadata, Open Graph tags, and canonical URLs

## Version Control Scope

Recommended repository contents:

- root website files
- `api/`
- `downloads/`
- `images/`
- `storage/.gitignore`

Recommended exclusions:

- generated database files in `storage/`
- machine-specific cache or temporary files such as `temps/`

## Content and Branding

This website represents the HARMONICS HUB brand and business offering. Content, visuals, and downloadable materials should be reviewed before reuse or redistribution.

## Contact

Website: [harmonicshub.ng](https://harmonicshub.ng/)  
Email: [hello@harmonicshub.ng](mailto:hello@harmonicshub.ng)
Website: [harmonicshub.ng](https://harmonicshub.ng/)  
Email: [hello@harmonicshub.ng](mailto:hello@harmonicshub.ng)

## License

All rights reserved unless otherwise stated by HARMONICS HUB.

