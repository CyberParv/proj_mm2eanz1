import "./globals.css";
import { Inter } from "next/font/google";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarSticky
          logo="Zenith Analytics"
          navItems={[
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Start Free Trial"
          ctaHref="/contact"
        />
        {children}
        <FooterMultiColumn
          brand="Zenith Analytics"
          description="Real-time e-commerce intelligence for growth teams. Track revenue, optimize conversions, and scale with confidence."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "Integrations", href: "/features" },
                { label: "Security", href: "/features" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Careers", href: "/contact" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Help Center", href: "https://help.zenithanalytics.io" },
                { label: "Status", href: "https://status.zenithanalytics.io" },
                { label: "API Docs", href: "/features" },
                { label: "Community", href: "/blog" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy", href: "/contact" },
                { label: "Terms", href: "/contact" },
                { label: "Compliance", href: "/contact" },
                { label: "Security", href: "/contact" },
              ],
            },
          ]}
          copyright="© 2025 Zenith Analytics. All rights reserved."
        />
      </body>
    </html>
  );
}
