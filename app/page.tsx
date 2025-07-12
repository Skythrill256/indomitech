import HeroComponent from "@/components/hero-component";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroParallax } from "@/components/ui/hero-parallax";
import About3 from "@/components/ui/about-3";

const navItems = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "About",
		link: "/about",
	},
	{
		name: "Services",
		link: "/services",
	},
	{
		name: "Portfolio",
		link: "/portfolio",
	},
	{
		name: "Contact",
		link: "/contact",
	},
];

export default function Home() {
	// Film production themed images from Unsplash
	const products = [
		{
			title: "Cinematic Lighting",
			link: "https://unsplash.com/photos/cinema",
			thumbnail:
				"https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Film Equipment",
			link: "https://unsplash.com/photos/camera",
			thumbnail:
				"https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Studio Setup",
			link: "https://unsplash.com/photos/studio",
			thumbnail:
				"https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Creative Direction",
			link: "https://unsplash.com/photos/director",
			thumbnail:
				"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Post Production",
			link: "https://unsplash.com/photos/editing",
			thumbnail:
				"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Brand Stories",
			link: "https://unsplash.com/photos/brand",
			thumbnail:
				"https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Corporate Videos",
			link: "https://unsplash.com/photos/corporate",
			thumbnail:
				"https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Documentary Work",
			link: "https://unsplash.com/photos/documentary",
			thumbnail:
				"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Commercial Production",
			link: "https://unsplash.com/photos/commercial",
			thumbnail:
				"https://images.unsplash.com/photo-1489599314464-1b493fd1b9d5?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Motion Graphics",
			link: "https://unsplash.com/photos/motion",
			thumbnail:
				"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Event Coverage",
			link: "https://unsplash.com/photos/event",
			thumbnail:
				"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Aerial Cinematography",
			link: "https://unsplash.com/photos/aerial",
			thumbnail:
				"https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Color Grading",
			link: "https://unsplash.com/photos/color",
			thumbnail:
				"https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Sound Design",
			link: "https://unsplash.com/photos/sound",
			thumbnail:
				"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
		},
		{
			title: "Visual Effects",
			link: "https://unsplash.com/photos/vfx",
			thumbnail:
				"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?auto=format&fit=crop&w=600&q=80",
		},
	];

	return (
		<main className="relative">
			<FloatingNav navItems={navItems} />
			<HeroComponent />
			<HeroParallax products={products} />
			<About3 />
		</main>
	);
}
