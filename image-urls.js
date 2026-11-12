(function() {
    const urls = Array.from(document.images)
        .map(img => img.src)
        .filter(src => src && src.length > 0);
    
    const uniqueUrls = [...new Set(urls)];
    const result = uniqueUrls.join('\n');
    
    if (uniqueUrls.length === 0) {
        alert('No images found on this page.');
        return;
    }
    
    navigator.clipboard.writeText(result).then(() => {
        alert(`Successfully copied ${uniqueUrls.length} unique image URL(s) to your clipboard!`);
    }).catch(() => {
        window.prompt(`Found ${uniqueUrls.length} unique image URLs (Copy below):`, result);
    });
})();
