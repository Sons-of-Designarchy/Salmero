export function getScreenSize(): 'large' | 'medium' | 'small' {
  const width = window.innerWidth;
  let screenSize: 'large' | 'medium' | 'small';

  if (width > 1200) {
    screenSize = 'large';
  } else if (width > 768) {
    screenSize = 'medium';
  } else {
    screenSize = 'small';
  }

  return screenSize;
}
