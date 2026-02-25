import HeroAurora from "@/components/HeroAurora";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import StatsCounter from "@/components/StatsCounter";
import PricingTable from "@/components/PricingTable";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import GalleryMasonry from "@/components/GalleryMasonry";
import NewsletterSignup from "@/components/NewsletterSignup";
import CTASparkles from "@/components/CTASparkles";

export default function HomePage() {
  return (
    <main className="bg-[#0F172A] text-slate-100">
      <HeroAurora
        badge="Real-time Intelligence"
        title="Turn E-commerce Data Into Revenue Growth"
        subtitle="Zenith Analytics transforms your store data into actionable insights. Track customer behavior, optimize conversions, and scale revenue with real-time intelligence trusted by 2,500+ e-commerce brands."
        primaryCta={{ label: "Start Free Trial", href: "/contact" }}
        secondaryCta={{ label: "Watch Demo", href: "#demo" }}
      />

      <FeaturesCards3D
        badge="Growth Drivers"
        title="Analytics That Actually Drive Growth"
        subtitle="Stop drowning in data. Start making decisions that move the needle."
        features={[
          {
            icon: "LineChart",
            title: "Real-Time Revenue Tracking",
            description:
              "Watch sales happen live with sub-second latency and track revenue by source, product, and customer segment.",
          },
          {
            icon: "Users",
            title: "Customer Journey Mapping",
            description:
              "Visualize every touchpoint from first click to repeat purchase and optimize the path to conversion.",
          },
          {
            icon: "Target",
            title: "Predictive Analytics",
            description:
              "AI-powered forecasting predicts inventory needs, churn risk, and lifetime value before trends appear.",
          },
          {
            icon: "Zap",
            title: "Automated Insights",
            description:
              "Get Slack alerts when metrics spike or dip to react faster to opportunities and risks.",
          },
          {
            icon: "BarChart3",
            title: "Cohort Analysis",
            description:
              "Understand how different customer groups behave over time to lower CAC and improve retention.",
          },
          {
            icon: "Globe",
            title: "Multi-Store Dashboard",
            description:
              "Manage all your stores from one unified view and compare performance across regions.",
          },
        ]}
      />

      <StatsCounter
        stats={[
          { value: "2,500+", label: "Active Stores" },
          { value: "$2.4B", label: "Revenue Tracked" },
          { value: "150M+", label: "Events/Day" },
          { value: "99.99%", label: "Uptime" },
        ]}
        bgColor="bg-slate-900/40"
      />

      <GalleryMasonry
        headline="Integration Ecosystem"
        subheadline="Connect Zenith Analytics with your e-commerce stack in minutes."
        images={[
          {
            url: "/images/gallery.jpg",
            alt: "Zenith integrations dashboard overview",
            caption: "50+ native integrations",
          },
          {
            url: "/images/team.jpg",
            alt: "Partner ecosystem overview",
            caption: "Shopify, Stripe, and Klaviyo",
          },
          {
            url: "/images/about.jpg",
            alt: "Unified data pipeline visualization",
            caption: "Unified data pipelines",
          },
          {
            url: "/images/hero.jpg",
            alt: "Live data sync across tools",
            caption: "Real-time syncing",
          },
        ]}
      />

      <PricingTable
        headline="Simple, Transparent Pricing"
        subheadline="Start free, scale as you grow. No hidden fees, no surprises."
        tiers={[
          {
            name: "Starter",
            price: "$49",
            period: "/month",
            description: "Perfect for growing stores",
            features: [
              "Up to 10,000 orders/month",
              "Real-time dashboard",
              "7-day data retention",
              "Email support",
              "2 team members",
              "Basic integrations",
            ],
            ctaLabel: "Start Free Trial",
            ctaHref: "/contact",
          },
          {
            name: "Growth",
            price: "$149",
            period: "/month",
            description: "For scaling e-commerce brands",
            features: [
              "Up to 100,000 orders/month",
              "Advanced analytics & AI insights",
              "90-day data retention",
              "Priority support",
              "10 team members",
              "All integrations",
              "Custom dashboards",
              "Slack & webhook alerts",
            ],
            ctaLabel: "Start Free Trial",
            ctaHref: "/contact",
            highlighted: true,
          },
          {
            name: "Enterprise",
            price: "Custom",
            description: "For high-volume operations",
            features: [
              "Unlimited orders",
              "Dedicated success manager",
              "Unlimited data retention",
              "24/7 phone support",
              "Unlimited team members",
              "Custom integrations",
              "White-label options",
              "SLA guarantee",
              "On-premise deployment",
            ],
            ctaLabel: "Contact Sales",
            ctaHref: "/contact",
          },
        ]}
      />

      <TestimonialsAnimated
        title="Loved by E-commerce Leaders"
        subtitle="See why growth teams choose Zenith Analytics"
        autoplay
        testimonials={[
          {
            quote:
              "Zenith Analytics helped us identify a 23% revenue leak in our checkout flow. We fixed it in a week and saw immediate results.",
            name: "Sarah Chen",
            designation: "VP of Growth, Luxe Botanicals",
            src: "/images/team.jpg",
          },
          {
            quote:
              "We switched from Google Analytics and the difference is night and day. Real-time data and actually useful insights.",
            name: "Marcus Thompson",
            designation: "Founder & CEO, Urban Threads Co",
            src: "/images/gallery.jpg",
          },
          {
            quote:
              "The predictive inventory feature alone saved us $200K in overstock costs last quarter.",
            name: "Emily Rodriguez",
            designation: "Head of Operations, FreshFit Nutrition",
            src: "/images/about.jpg",
          },
          {
            quote:
              "Managing 12 Shopify stores used to be chaos. Now I have one dashboard that shows me everything.",
            name: "David Park",
            designation: "Director of E-commerce, Apex Retail Group",
            src: "/images/hero.jpg",
          },
        ]}
      />

      <NewsletterSignup
        headline="Get Weekly E-commerce Insights"
        subheadline="Join 15,000+ founders and growth leaders getting actionable analytics tips every Thursday."
        ctaLabel="Subscribe"
      />

      <CTASparkles
        title="Ready to Unlock Your Growth Potential?"
        subtitle="Join 2,500+ e-commerce brands using Zenith Analytics to drive smarter decisions."
        ctaLabel="Start Your Free 14-Day Trial"
        ctaHref="/contact"
        secondaryCtaLabel="Schedule a Demo"
        secondaryCtaHref="/contact#demo"
      />
    </main>
  );
}
