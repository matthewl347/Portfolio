# matthew-lin-site

## Structure
```
src/
  data.js            all editable content: profile info, projects, experience, skills
  styles.css         all styling
  App.jsx            composes the sections together
  components/
    Nav.jsx
    Hero.jsx
    About.jsx
    Projects.jsx     includes the expandable ProjectRow
    Experience.jsx
    Skills.jsx
    Contact.jsx
```

To update the site's content (add a project, change your tagline, swap your email),
edit `src/data.js` — you shouldn't need to touch the component files for that.

## Running it
This folder only has `src/`, not a full project scaffold. Drop it into a Vite React app:

```
npm create vite@latest matthew-lin-site -- --template react
cd matthew-lin-site
npm install
npm install lucide-react
```

Then copy this `src/` folder over the generated one (replacing App.jsx and the default
files), and run:

```
npm run dev
```
