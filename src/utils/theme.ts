export const toggleTheme = () => {
  const html = document.querySelector('html')
  const currentTheme = html?.getAttribute('data-mode')

  const themes =
    {
      dark: 'light',
      light: 'dark',
    }[currentTheme ?? 'light'] || 'dark'

  html?.setAttribute('data-mode', themes)
}
