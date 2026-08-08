import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const footerColumns = [
  {
    title: 'Oliva',
    links: [
      'About',
      'Blog',
      'Recipe Index',
      'Blogging Resources',
      'Income Reports',
      'Sponsored Content',
      'Media Mentions',
      'Contact',
    ],
  },
  {
    title: 'Food & Recipes',
    links: [
      'Sugar Free January',
      'Freezer Meals 101',
      'Quick and Easy Recipes',
      'Instant Pot Recipes',
      'Pasta Recipes',
      'Vegan Recipes',
      'Soup Recipes',
      'Taco Recipes',
      'Meal Prep Recipes',
    ],
  },
]

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram },
  { name: 'Pinterest', icon: FaPinterestP },
  { name: 'TikTok', icon: FaTiktok },
  { name: 'Facebook', icon: FaFacebookF },
  { name: 'X', icon: FaXTwitter },
  { name: 'YouTube', icon: FaYoutube },
]

function Footer() {
  return (
    <footer className="bg-[#faf8f5] px-6 py-14 text-[#6a625b] sm:px-8 lg:px-13">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.15fr]">
        <div className="grid gap-8 sm:grid-cols-2">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-[#7b3f64]">
                {column.title}
              </h3>

              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-[#7b3f64]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-10">
          <div className="bg-[#7b3f64] p-7 text-white">
            <p className="font-serif text-3xl italic leading-none text-[#e0b7ca]">
              signup{' '}
              <span className="text-sm font-bold uppercase not-italic tracking-widest text-white">
                for email updates
              </span>
            </p>

            <p className="mt-1 text-xs text-[#f4e8da]">
              Get a free cookbook with our top 25 recipes.
            </p>

            <form className="mt-5 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
              <input
                type="text"
                placeholder="First Name"
                className="min-h-11 bg-white px-4 text-sm text-[#2f2b22] outline-none placeholder:text-[#a9a09a] focus:ring-2 focus:ring-[#f6c453]"
              />
              <input
                type="email"
                placeholder="Email"
                className="min-h-11 bg-white px-4 text-sm text-[#2f2b22] outline-none placeholder:text-[#a9a09a] focus:ring-2 focus:ring-[#f6c453]"
              />
              <button
                type="submit"
                className="min-h-11 bg-[#f6c453] px-7 text-xs font-black uppercase tracking-widest text-[#24301f] transition-colors hover:bg-white"
              >
                Go
              </button>
            </form>
          </div>

          
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-8 border-t border-[#e6ded6] pt-9 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ name, icon: Icon }) => (
              <a
                key={name}
                href="#"
                className="grid h-8 w-8 place-items-center rounded-full bg-[#7b3f64] text-sm text-white transition-colors hover:bg-[#f6c453] hover:text-[#24301f]"
                aria-label={`Follow on ${name}`}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-end">
            <p className="font-serif text-4xl text-[#b98da3]">oliva</p>
            <p className="max-w-xs text-xs leading-5 text-[#9b928b]">
              Copyright 2026 by Ahmad Soleh Mihardi.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs text-[#9b928b] lg:text-right">
          <div className="flex gap-5 lg:justify-end">
            <a href="#" className="hover:text-[#7b3f64]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#7b3f64]">
              Terms
            </a>
          </div>
          <p>Information from your device can be used to personalize your ad experience.</p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer

