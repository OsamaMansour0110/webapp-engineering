import SecondaryNavbar, { NavItem } from "@/components/SecondaryNavbar";
import SecondaryFooter, { SocialLink, FooterLink } from "@/components/SecondaryFooter";

const powerSolutionsNav: NavItem[] = [
  { name: "Home", href: "/power-solutions" },
  { name: "About Us", href: "/power-solutions/about" },
  { name: "Products", href: "#", hasDropdown: true },
  { name: "Our partners", href: "/power-solutions/partners" },
  { name: "News", href: "/power-solutions/news" },
  { name: "Careers", href: "/power-solutions/careers" },
  { name: "Contact us", href: "/power-solutions/contact" },
];

const powerSolutionsFooterLinks: FooterLink[] = [
  { name: "About Us", href: "/power-solutions/about" },
  { name: "Careers", href: "/power-solutions/careers" },
  { name: "Contact us", href: "/power-solutions/contact" },
  { name: "Products", href: "/power-solutions/products" },
];

const powerSolutionsSocials: SocialLink[] = [
  { platform: "facebook", href: "#" },
  { platform: "twitter", href: "#" },
  { platform: "instagram", href: "#" },
  { platform: "youtube", href: "#" },
  { platform: "linkedin", href: "#" },
];

export default function PowerSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SecondaryNavbar 
        logoSrc="/logo.png"
        brandName="01 Electronics"
        navItems={powerSolutionsNav}
        activeColor="#005599"
        topBarColor="#003366"
      />
      
      <main className="flex-1 pt-24 md:pt-28">
        {children}
      </main>

      <SecondaryFooter 
        overviewText="01 Electronics is a leading power solution provider, general and industrial contractor and construction services integrator. 01 Electronics enables your industry transformation with power and energy solutions that include UPSs, generators and solar panels. We also provide your business/industry with the construction and development services needed."
        socialLinks={powerSolutionsSocials}
        importantLinks={powerSolutionsFooterLinks}
        contactAddress="130, The Industrial Zone, New Cairo, Cairo, Egypt"
        contactPhones={["+20225723501", "+201002329153", "+971525164400"]}
        contactEmail="info@01electronics.net"
        copyrightText="All rights reserved for 01 Electronics – Power Solutions © 2026"
        poweredByText="Powered by Factory Yard"
      />
    </div>
  );
}
