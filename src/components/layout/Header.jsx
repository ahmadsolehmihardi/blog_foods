import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Recipes', href: '#recipes' },
]

function Header({ variant = 'transparent' }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isSolid = variant === 'solid' || isScrolled || isMenuOpen
  const useDarkText = variant === 'darkTransparent' || isSolid

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 transition-colors duration-300 ${
        isSolid ? 'bg-[#f4e8da]' : 'bg-transparent'
      }`}
    >
      <div className="flex h-18 items-center justify-between px-5 sm:px-8 lg:h-16 lg:px-11 xl:px-12">
        <a
          href="#"
          className={`origin-left font-serif text-5xl font-black leading-none tracking-normal transition-transform duration-300 sm:text-6xl lg:text-[3.15rem] ${
            isScrolled
              ? 'scale-110 text-[#3c4935]'
              : useDarkText
                ? 'text-[#3c4935]'
                : 'text-[#fff7ee]'
          }`}
          aria-label="Oliva home"
        >
          OLIVA
        </a>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-7 xl:gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`whitespace-nowrap rounded-full px-3 py-2 font-serif text-xl font-bold tracking-wide transition-colors hover:bg-[#f6c453] hover:text-[#2f2b22] xl:text-[1rem] ${
                      useDarkText ? 'text-[#2f2b22]' : 'text-[#fff7ee]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        <button
          type="button"
          className={`grid h-11 w-11 place-items-center rounded-full border transition-colors hover:border-[#2f2b22] hover:bg-[#f6c453] hover:text-[#2f2b22] lg:hidden ${
            useDarkText
              ? 'border-[#2f2b22] text-[#2f2b22]'
              : 'border-[#fff7ee] text-[#fff7ee]'
          }`}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#dfd1c2] bg-[#f4e8da] px-5 pb-6 lg:hidden">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1 py-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block rounded-full px-4 py-3 font-serif text-2xl font-bold text-[#2f2b22] hover:bg-[#f6c453]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid grid-cols-[1fr_1fr] gap-3">
            <button className="rounded-full border border-[#2f2b22] px-4 py-3 font-serif font-bold text-[#2f2b22] hover:bg-[#f6c453]">
              Search
            </button>
            <a
              href="#"
              className="rounded-full border border-[#2f2b22] px-4 py-3 text-center font-serif font-bold text-[#2f2b22] hover:bg-[#f6c453]"
            >
              Cart [0]
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
