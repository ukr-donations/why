async function loadMarkdown(filePath, targetId) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
        console.error(`Element with ID "${targetId}" not found.`);
        return;
    }

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch markdown file: ${filePath}`);
        }
        const markdownText = await response.text();
        targetElement.innerHTML = marked.parse(markdownText);
    } catch (error) {
        targetElement.innerHTML = '<p>Error loading content.</p>';
        console.error(error);
    }
}