export function showHoverAnimation(e: React.MouseEvent) {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    const c = card as HTMLElement;
    c.style.setProperty("--mouse-x", `${x}px`);
    c.style.setProperty("--mouse-y", `${y}px`);
  }
}
