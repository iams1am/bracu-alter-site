# How to Add Hero Background Images

Your site now has colorful gradient backgrounds similar to Bumblebee! Here's how to add your own rover/team images:

## 1. Add Images to Static Folder

Place your images in:
```
static/images/hero/
```

For example:
- `static/images/hero/rover-hero.jpg`
- `static/images/hero/featured-platform.jpg`

## 2. Update CSS to Use Your Images

Open: `themes/alter/assets/css/main.css`

### Main Hero Section

Find this line (around line 53):
```css
.hero-banner{
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
```

Replace the `background:` line with:
```css
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 50%, rgba(240, 147, 251, 0.8) 100%), url('/images/hero/rover-hero.jpg');
```

### Featured Platform Section

Find this line (around line 194):
```css
.featured-banner{
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 80px 0;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #feca57 100%);
```

Replace the `background:` line with:
```css
  background: linear-gradient(135deg, rgba(240, 147, 251, 0.7) 0%, rgba(245, 87, 108, 0.7) 50%, rgba(254, 202, 87, 0.7) 100%), url('/images/hero/featured-platform.jpg');
```

## 3. Tips for Best Results

- **Image size**: Use high-resolution images (at least 1920x1080px)
- **File format**: JPG works best for photos
- **Dark overlay**: The gradient overlay helps text remain readable
- **Adjust opacity**: Change the `rgba()` values (last number 0-1) to make overlay lighter/darker

## 4. Example Structure

```
static/
└── images/
    └── hero/
        ├── rover-hero.jpg         (Main hero background)
        ├── featured-platform.jpg  (Featured section)
        └── robocup-2025.jpg       (Optional: for other sections)
```

## 5. Rebuild Site

After adding images, rebuild:
```bash
hugo
```

The dev server will auto-reload at http://localhost:1313/

---

**Current Design**: Your site now has beautiful gradient backgrounds that match Bumblebee's colorful style. When you add photos of your rovers/team, they'll create an even more impressive visual impact!
