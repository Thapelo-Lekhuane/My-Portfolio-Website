.# Thapelo Lekhuane - Personal Portfolio Website.

Welcome to my personal portfolio! This website showcases my professional experience, projects, certifications, and business ventures. It features a modern, responsive design with interactive elements and a contact form for direct communication.

##  Features

- **Responsive Design:** Optimized for all devices and screen sizes
- **Professional Experience Timeline:** Showcasing work history with visual timeline
- **Project Portfolio:** Display of technical projects and achievements
- **Certifications Gallery:** Visual showcase of professional certifications
- **Business Ventures (Hustles):** Timeline of entrepreneurial activities
- **Interactive Resume Modal:** PDF resume viewer with image fallback
- **Contact Form:** Integrated with Formspree for direct email communication
- **Modern UI/UX:** Clean, professional design with smooth animations
- **Counter Animations:** Dynamic statistics display
- **Image Carousels:** Interactive image galleries for projects and ventures

## 🛠️ Technologies Used

### Frontend
- **HTML5:** Semantic markup and structure
- **CSS3:** Advanced styling with animations and responsive design
- **JavaScript (ES6+):** Interactive functionality and DOM manipulation
- **Bootstrap 4:** Responsive grid system and components
- **jQuery:** DOM manipulation and AJAX requests

### Libraries & Frameworks
- **Font Awesome:** Icon library for UI elements
- **Ionicons:** Additional icon set
- **Owl Carousel:** Image carousel functionality
- **Lightbox:** Image gallery and modal functionality
- **Typed.js:** Animated text typing effects
- **Counter Up:** Animated number counters
- **Animate.css:** CSS animation library
- **Easing:** Smooth animation transitions

### Backend & Services
- **Formspree:** Contact form email service
- **PHP:** Server-side form processing (contact.php)

### Development Tools
- **Python HTTP Server:** Local development server
- **Git:** Version control
- **GitHub Pages:** Hosting and deployment

## 📁 Project Structure

```
My-Portfolio-Website/
├── index.html                 # Main portfolio page
├── blog-single.html          # Blog template page
├── contact.php               # Contact form processing
├── README.md                 # Project documentation
├── pdfjs.zip                 # PDF.js library for resume viewing
│
├── css/                      # Stylesheets
│   ├── style.css            # Main stylesheet
│   ├── style2.css           # Additional custom styles
│   ├── style-green.css      # Green theme variant
│   ├── style-orange.css     # Orange theme variant
│   ├── style-purple.css     # Purple theme variant
│   ├── style-red.css        # Red theme variant
│   ├── style-sky-blue.css   # Sky blue theme variant
│   └── scss-files.txt       # SCSS source files reference
│
├── js/                       # JavaScript files
│   └── main.js              # Main JavaScript functionality
│
├── img/                      # Images and assets
│   ├── [Profile Images]     # Personal and professional photos
│   ├── [Project Images]     # Screenshots and project visuals
│   ├── [Certification Images] # Professional certificates
│   ├── [Business Images]    # Hustles and ventures photos
│   └── [UI Assets]          # Icons, backgrounds, etc.
│
├── lib/                      # Third-party libraries
│   ├── bootstrap/           # Bootstrap CSS/JS framework
│   ├── jquery/              # jQuery library
│   ├── font-awesome/        # Font Awesome icons
│   ├── ionicons/            # Ionicons
│   ├── owlcarousel/         # Owl Carousel plugin
│   ├── lightbox/            # Lightbox gallery
│   ├── typed/               # Typed.js library
│   ├── counterup/           # Counter Up plugin
│   ├── animate/             # Animate.css
│   ├── easing/              # Easing functions
│   └── popper/              # Popper.js for tooltips
│
├── contactform/             # Contact form assets
│   └── contactform.js       # Contact form JavaScript
│
├── docs/                    # Documentation
│   └── [Resume PDF]         # Professional resume
│
└── pdfjs-dist/              # PDF.js distribution files
```

##  Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for local development server)
- Git (for version control)

### Local Development Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Thapelo-Lekhuane/My-Portfolio-Website.git
   cd My-Portfolio-Website
   ```

2. **Start Local Server:**
   ```bash
   python -m http.server 8000
   ```

3. **Open in Browser:**
   Navigate to `http://localhost:8000` to view the portfolio

### Production Deployment

1. **Upload to Web Server:**
   - Upload all files to your web server's root directory
   - Ensure PHP support is enabled for contact form functionality

2. **Configure Contact Form:**
   - Update Formspree endpoint in `contactform/contactform.js`
   - Test contact form functionality

3. **Domain Configuration:**
   - Point your domain to the web server
   - Configure SSL certificate for HTTPS

##  Sections Overview

### Home Section
- Hero banner with animated text
- Professional introduction
- Call-to-action buttons

### About Me
- Personal background and skills
- Professional summary
- Direct link to resume

### Professional Experience
- Timeline-based work history
- Company details and achievements
- Visual timeline layout

### Services
- Technical skills and offerings
- Service descriptions
- Professional capabilities

### Projects
- Portfolio of technical projects
- Project descriptions and technologies
- Image galleries for each project

### Certifications
- Professional certifications display
- Certification details and dates
- Visual certificate gallery

### Hustles (Business Ventures)
- Entrepreneurial activities timeline
- Business descriptions and achievements
- Visual timeline with images

### Contact
- Contact form with Formspree integration
- Contact information
- Social media links

##  Customization

### Themes
The portfolio supports multiple color themes:
- Green (default)
- Orange
- Purple
- Red
- Sky Blue

To change themes, modify the CSS file reference in `index.html`.

### Content Updates
- Update personal information in `index.html`
- Replace images in the `img/` directory
- Modify contact form settings in `contactform/contactform.js`
- Update resume in `docs/` directory

## 🔧 Configuration

### Contact Form
The contact form is configured to use Formspree. To set up your own:
1. Create a Formspree account
2. Create a new form
3. Update the form action URL in `contactform/contactform.js`

### Resume Modal
The resume modal displays PDF files. Ensure:
- Resume PDF is placed in `docs/` directory
- PDF.js library is properly configured
- Image fallbacks are available

## 📄 License

This project is licensed under the **Lekhuane's DevLoops License**.

## 🤝 Contributing

Feel free to fork the repository and submit pull requests for improvements!

## 📞 Contact

- **Email:** thapelolekhuane2@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/thapelo-lekhuane-4092112b1/
- **GitHub:** https://github.com/Thapelo-Lekhuane
- **Portfolio:** https://my-portfolio-website-sigma-beryl.vercel.app/

---

**Built with ❤️ by Thapelo Lekhuane**

