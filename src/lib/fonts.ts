export async function loadGoogleFont(font: string, weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&display=swap`;
  const css = await fetch(url).then((res) => res.text());
  // Parse font file URL from CSS
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  // Fallback: try to match any src url if specific format check fails
  const simpleMatch = css.match(/src: url\((.+)\)/);
  if (simpleMatch) {
    const response = await fetch(simpleMatch[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}
