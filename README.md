# LifeLAB Coaching Website

A static website for LifeLAB Coaching by Prateek Neupane, designed for deployment on GitHub Pages.

## Features

- Fully responsive design
- Contact form with client-side validation
- Calendly integration for booking sessions
- Smooth scrolling animations
- Toast notifications
- Nature photography backgrounds
- Earthy, neutral color palette

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Your site will be available at `https://yourusername.github.io/repository-name`

## Files Structure

- `index.html` - Main HTML file
- `styles.css` - All CSS styles
- `script.js` - JavaScript functionality
- `README.md` - This documentation

## Customization

### Calendly Link
Update the Calendly URL in `script.js`:
```javascript
function openCalendly() {
    window.open('https://calendly.com/your-calendly-username', '_blank');
}
```

### Contact Form
The contact form currently logs data to the console. To make it functional, you'll need to:
1. Set up a form handling service (like Formspree, Netlify Forms, or EmailJS)
2. Update the form submission handler in `script.js`

### Background Images
Replace the Unsplash URLs in `styles.css` with your own images if desired.

### Content
Update placeholders in `index.html`:
- Replace Prateek's bio placeholder with actual content
- Add real testimonials
- Update any other placeholder content

## Browser Support

This website works in all modern browsers including:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Performance

The website is optimized for performance with:
- Minimal external dependencies
- Optimized images from Unsplash
- Efficient CSS and JavaScript
- Google Fonts with font-display: swap

## Contact

For questions about this website, please contact Prateek Neupane through the contact form or Calendly booking.
