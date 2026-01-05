import { createFileRoute } from "@tanstack/react-router";
import {
	Route as RouteIcon,
	Server,
	Shield,
	Sparkles,
	Waves,
	Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const features = [
		{
			icon: <Zap className="w-12 h-12" />,
			title: "Intelligent Recommendations",
			description:
				"Get personalized book suggestions based on your reading history and preferences using advanced AI algorithms.",
		},
		{
			icon: <Server className="w-12 h-12" />,
			title: "Smart Reading Insights",
			description:
				"Receive real-time analysis of your reading patterns, comprehension levels, and learning progress.",
		},
		{
			icon: <RouteIcon className="w-12 h-12" />,
			title: "Digital Library Management",
			description:
				"Organize your entire book collection with powerful search, tagging, and categorization features.",
		},
		{
			icon: <Shield className="w-12 h-12" />,
			title: "Privacy-First Design",
			description:
				"Your reading data stays secure with end-to-end encryption and local storage options.",
		},
		{
			icon: <Waves className="w-12 h-12" />,
			title: "Adaptive Reading Experience",
			description:
				"Enjoy personalized typography, lighting, and pacing that adapts to your reading environment.",
		},
		{
			icon: <Sparkles className="w-12 h-12" />,
			title: "AI-Powered Summaries",
			description:
				"Generate intelligent book summaries and key insights to enhance your understanding and retention.",
		},
	];

	return (
		<div className="min-h-screen bg-background">
			<section className="relative py-20 px-6 text-center overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-accent-light/20 to-background"></div>
				<div className="relative max-w-5xl mx-auto">
					<div className="flex items-center justify-center gap-6 mb-6">
						<div className="w-24 h-24 md:w-32 md:h-32 bg-accent rounded-full flex items-center justify-center shadow-soft">
							<span className="text-4xl md:text-5xl font-bold text-white font-serif">
								C
							</span>
						</div>
						<h1 className="text-6xl md:text-7xl font-black text-text font-serif [letter-spacing:-0.08em]">
							<span className="text-muted">Chloe</span>{" "}
							<span className="text-accent">AI</span>
						</h1>
					</div>
					<p className="text-2xl md:text-3xl text-text mb-4 font-light font-serif">
						Your intelligent reading companion
					</p>
					<p className="text-lg text-muted max-w-3xl mx-auto mb-8 font-serif">
						Experience the future of digital reading with AI-powered insights,
						personalized recommendations, and seamless book management.
					</p>
					<div className="flex flex-col items-center gap-4">
						<button
							type="button"
							className="px-8 py-3 bg-accent hover:bg-primary text-white font-semibold rounded-lg transition-colors shadow-soft"
						>
							Get Started
						</button>
						<p className="text-muted text-sm mt-2">
							Begin your reading journey by exploring{" "}
							<code className="px-2 py-1 bg-surface-highlight rounded text-accent">
								/src/routes/index.tsx
							</code>
						</p>
					</div>
				</div>
			</section>

			<section className="py-16 px-6 max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="bg-surface border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-soft"
						>
							<div className="mb-4 text-accent">{feature.icon}</div>
							<h3 className="text-xl font-semibold text-text mb-3 font-serif">
								{feature.title}
							</h3>
							<p className="text-muted leading-relaxed font-serif">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
