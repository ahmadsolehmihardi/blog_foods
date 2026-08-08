import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram },
  { name: 'Pinterest', icon: FaPinterestP },
  { name: 'TikTok', icon: FaTiktok },
  { name: 'Facebook', icon: FaFacebookF },
  { name: 'X', icon: FaXTwitter },
  { name: 'YouTube', icon: FaYoutube },
]

function SocialNewsletterBar() {
  return (
    <section className="bg-[#7b3f64] px-6 py-8 text-white sm:px-8 lg:px-13">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="text-xs font-black uppercase tracking-widest">
            Follow Us
          </p>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ name, icon: Icon }) => (
              <a
                key={name}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-white text-lg text-[#7b3f64] transition-colors hover:bg-[#f6c453] hover:text-[#24301f]"
                aria-label={`Follow on ${name}`}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <form className="w-full max-w-2xl">
          <p className="mb-2 font-serif text-2xl italic leading-none text-[#e0b7ca]">
            signup <span className="text-sm font-bold uppercase not-italic tracking-widest text-white">for email updates</span>
          </p>

          <div className="grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
            <input
              type="text"
              placeholder="First Name"
              className="min-h-12 bg-white px-4 text-sm text-[#2f2b22] outline-none placeholder:text-[#a9a09a] focus:ring-2 focus:ring-[#f6c453]"
            />
            <input
              type="email"
              placeholder="Email"
              className="min-h-12 bg-white px-4 text-sm text-[#2f2b22] outline-none placeholder:text-[#a9a09a] focus:ring-2 focus:ring-[#f6c453]"
            />
            <button
              type="submit"
              className="min-h-12 bg-[#f6c453] px-8 text-xs font-black uppercase tracking-widest text-[#24301f] transition-colors hover:bg-white"
            >
              Go
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SocialNewsletterBar
