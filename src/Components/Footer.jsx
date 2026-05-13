"use client"
import { Phone } from 'lucide-react';
import Link from "next/link"
import Image from "next/image"
import { footerData } from "@/Data/footerLinks"

export default function Footer({
  image="/Images/footer.png",
  image2="/Images/foo.png",
  color = "bg-primary-main",
  text = "text-on-primary",
  hover = "hover:text-white/70"
}) {

  return (
    <footer className={`${color} ${text} rounded-r40 m-s32 md:mx-s40 md:mt-s80  xl:mx-s40 xl:mt-s160  md:mb-s24 overflow-hidden`}>

      {/* ================= TOP SECTION ================= */}
      <div className="px-s24 md:px-s40 lg:px-s40 py-s64">

        <div className="max-w-7xl mx-auto flex flex-col gap-s64 md:gap-s80 lg:flex-row gap-x-s104">

          {/* 🔥 LOGO */}
          <div className="flex justify-center lg:justify-start">

            {/* Desktop Logo */}
            <div className="hidden lg:block">
              <Image
                src={image} // desktop logo
                alt="Ayansh Logo"
                width={260}
                height={250}
                className="object-contain"
              />
            </div>

            {/* Mobile Logo */}
            <div className="block lg:hidden">
              <Image
                src={image2} // 👉 your mobile logo path
                alt="Ayansh Mobile Logo"
                width={340}
                height={340}
                className="object-contain"
              />
            </div>

          </div>
          {/* 🔥 GLASS CARD */}
          <div className="flex-1 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[28px] p-6 md:p-8 shadow-[0_8px_32px_0_rgba(255, 255, 255, 0.1);
]">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              {/* Services */}
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  {footerData.services.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href}  className={`${hover} transition`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  {footerData.company.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href}  className={`${hover} transition`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Social Links</h4>
                <ul className="space-y-2">
                  {footerData.social.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} target="_blank" className={`${hover} transition`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* 🔥 CONTACT CARD */}
            <div className="mt-s32 bg-white/80 text-black rounded-[20px] px-s24 py-s16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

              <div>
                <p className="font-semibold mb-s8">Contact Details</p>
                <p className="text-sm">
                  <span className="body-default text-primary-main">Office Location:</span>{" "}
                  {footerData.contact.address}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm">
            <Phone
  size={16}
  className="text-primary-main"
/>
                {footerData.contact.phone || "6345373457345"}
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
     <div className="border-t border-white py-s16 md:py-s24 mx-s24 md:mx-s40 md:px-12 lg:px-20">
  <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between gap-4 text-sm">

    {/* 🔥 LINKS (TOP ON MOBILE) */}
    <div className="flex gap-s8 order-1 md:order-2">
      <Link href="/comingsoon" className={`${hover} transition`}>
        Privacy Policy
      </Link>
      <span>|</span>
      <Link href="/comingsoon" className={`${hover} transition`}>
        Terms & Condition
      </Link>
    </div>

    {/* 🔥 COPYRIGHT (BOTTOM ON MOBILE) */}
    <p className="order-2 md:order-1 text-center md:text-left">
      © 2026 Ayansh Elevates. All rights reserved.
    </p>

  </div>
</div>

    </footer>
  )
}