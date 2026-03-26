# How to Add Video Background to Hero Section

Your home page hero section now supports video backgrounds! Follow these steps to add your video.

## Step 1: Add Your Video File

1. Place your video file in: `static/videos/`
2. Name it: `hero-background.mp4` (or update the path in the code)

Example path: `f:\bracu-alter-site\static\videos\hero-background.mp4`

## Step 2: Video Requirements

For best results, your video should:
- **Format**: MP4 (H.264 codec)
- **Duration**: 10-30 seconds (will loop)
- **Resolution**: 1920x1080 (Full HD) or higher
- **File size**: Keep under 5MB for fast loading
- **Content**: Should look good with text overlay

## Step 3: Video Optimization Tips

To keep file size small:
1. Use a video compression tool like HandBrake
2. Lower the bitrate to 2-4 Mbps
3. Compress to H.264 codec
4. Consider using a shorter loop

## Step 4: Alternative Video Path

If you want to use a different path or filename, edit:
`themes/alter/layouts/_default/home.html`

Change this line:
```html
<source src="/videos/hero-background.mp4" type="video/mp4">
```

To your path:
```html
<source src="/videos/my-custom-video.mp4" type="video/mp4">
```

## Step 5: Fallback Background

If no video is found, the hero will show the gradient background automatically.

## Video Background Features

✅ Auto-plays on page load  
✅ Muted (no sound)  
✅ Loops continuously  
✅ Responsive (covers full area)  
✅ Works on mobile (with `playsinline` attribute)  
✅ Dark overlay for text readability

## Example Videos to Try

Free stock video sites:
- Pexels: https://www.pexels.com/videos/
- Pixabay: https://pixabay.com/videos/
- Coverr: https://coverr.co/

Search for: "technology", "robotics", "circuit board", "abstract", "particles"

---

**Note**: The hero section will show the gradient background until you add a video file!
