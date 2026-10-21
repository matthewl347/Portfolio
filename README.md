# Matthew Lin Portfolio

Portfolio site built with React + Vite and aligned to Matthew Lin's current resume.

## Structure

```text
src/
  data.js            profile, education, projects, experience, skills
  styles.css         responsive site styling
  App.jsx            page composition
  components/
    Nav.jsx
    Hero.jsx
    About.jsx
    Projects.jsx
    Experience.jsx
    Skills.jsx
    Contact.jsx
public/
  Matthew_Lin_Resume.pdf
  favicon.svg
```

Most future content changes can be made in `src/data.js` without modifying components.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

The existing Vite base path is `/Portfolio/` and the project includes a `deploy` script:

```bash
npm run deploy
```

## Contact form

The contact form sends submissions through the existing Formspree endpoint configured in `src/data.js` as `profile.formEndpoint`. The form posts `name`, `email`, and `message`, and includes loading, success, and error states.
