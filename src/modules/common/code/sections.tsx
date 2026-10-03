

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // 1. Die Position des Elements relativ zum Dokument holen
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    
    // 2. Die Höhe deines Headers dynamisch messen (oder fix z.B. 70 abziehen)
    const headerHeight = document.querySelector('header')?.clientHeight || 70;
    
    // 3. Sanft dahin scrollen minus Header-Höhe
    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: 'smooth'
    });
  }
};