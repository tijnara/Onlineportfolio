# Aranjit D. Archita - Portfolio

A modern, professional portfolio website built with **Next.js 15**, **React 18**, and **Tailwind CSS 4**, showcasing my work as a Full-Stack Developer specializing in Vue.js, Laravel, and Node.js for enterprise applications.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn/ui with Radix UI
- **Icons**: Lucide React
- **Toast Notifications**: Sonner
- **TypeScript**: Full type safety

## 📁 Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Fixed navigation bar
│   ├── Hero.tsx          # Hero section with CTA
│   ├── Stats.tsx         # Statistics showcase
│   ├── About.tsx         # About me section
│   ├── Skills.tsx        # Technical skills
│   ├── Work.tsx          # Featured projects
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer
│   └── ui/               # Shadcn UI components
└── public/               # Static assets

```

## 🎨 Features

- ✅ **Server-Side Rendering (SSR)** for optimal SEO
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Modern UI/UX** - Orange and white color scheme
- ✅ **Interactive Components** - Smooth scrolling, form validation
- ✅ **Performance Optimized** - Next.js Image optimization
- ✅ **Type-Safe** - Full TypeScript implementation
- ✅ **Accessible** - WCAG compliant components

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

This portfolio is optimized for deployment on **Vercel** (the creators of Next.js):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

Alternatively, you can deploy to:
- Netlify
- AWS Amplify
- Railway
- Any platform supporting Next.js

## 📝 Customization

### Update Personal Information

1. **Hero Section** (`/components/Hero.tsx`):
   - Update name, title, and description
   - Replace social media links
   - Update profile image

2. **Projects** (`/components/Work.tsx`):
   - Add your project details
   - Update project images
   - Add live demo and GitHub links

3. **Skills** (`/components/Skills.tsx`):
   - Modify tech stack
   - Update skill categories

4. **Contact** (`/components/Contact.tsx`):
   - Update email, phone, and location
   - Configure form submission endpoint

5. **Metadata** (`/app/layout.tsx`):
   - Update SEO metadata
   - Add custom Open Graph images

### Add Resume Download

Update the resume link in `/components/About.tsx`:

```tsx
<Button className="bg-orange-500 hover:bg-orange-600" asChild>
  <a href="/resume.pdf" download>
    <FileText size={18} className="mr-2" />
    View Resume
  </a>
</Button>
```

Place your `resume.pdf` in the `/public` folder.

## 📧 Contact

- **GitHub**: [@tijnara](https://github.com/tijnara)
- **Email**: hello@example.com
- **LinkedIn**: [Your LinkedIn Profile]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js
