import { createFileRoute } from "@tanstack/react-router";
import {
	BookOpen,
	Route as RouteIcon,
	Server,
	Shield,
	Sparkles,
	Waves,
	Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
		<div className="bg-background">
			<section className="relative p-4 text-center overflow-hidden">
				<div className="relative mx-auto py-16 px-10 bg-paper-200 rounded-lg">
					<div className="flex flex-col gap-3 items-center">
						<h1 className="text-6xl md:text-7xl font-bold font-black text-foreground font-serif [letter-spacing:-0.08em]">
							Welcome to Chloe AI
						</h1>
						<Badge className="uppercase px-2 py-1 flex gap-2">
							<BookOpen />
							<span>Your Book-Smart Companion</span>
						</Badge>
						<q className="font-semibold text-lg">
							Wisdom is not a product of schooling but of the lifelong attempt
							to acquire it.
						</q>
						<p className="text-lg max-w-3xl mx-auto mb-8">
							A free, anonymous space to chat with an AI mentor connected to a
							vast library of self-help books. Find clarity and perspective
							through the pages of history's best advice
						</p>
						<div className="flex flex-col items-center gap-4">
							<button
								type="button"
								className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors shadow-soft"
							>
								Start Chatting
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
