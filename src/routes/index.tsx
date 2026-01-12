import { createFileRoute } from "@tanstack/react-router";
import {
	BookOpen,
	Brain,
	CircleAlert,
	Cpu,
	Database,
	HandHeart,
	LibraryBig,
	Lock,
	Sprout,
	TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const features = [
		{
			icon: <Lock className="size-8 text-paper-900" />,
			title: "Private with Optional Saving",
			description:
				"No login required. Chats are anonymnous. You explicity decide whether to save a conversation for future reference.",
		},
		{
			icon: <LibraryBig className="size-8 text-paper-900" />,
			title: "Curated Wisdom",
			description:
				"Access insights distilled from top psychology and self-improvement literature instantly, organized for your personal growth.",
		},
		{
			icon: <HandHeart className="size-8 text-paper-900" />,
			title: "Always Free",
			description:
				"Democratizing access to mental wellness tools. Use Chloe AI as much as you need, completely free of charge.",
		},
	];

	const coreTechnologies = [
		{
			icon: <Cpu className="size-8 text-paper-900" />,
			title: "LLM Architecture",
			description:
				"Powered by Google Gemini's Flash LLM for nuanced understanding of complex emotional queries and plugged with limited context retention.",
		},
		{
			icon: <Database className="size-8 text-paper-900" />,
			title: "Vector Database",
			description:
				"Integrated with semantic search indexing over 100+ classic self-help titles to provide accurate citations.",
		},
	];

	const genres = [
		{
			icon: <Brain className="size-8 text-paper-900" />,
			title: "Cognitive Behavioral Therapy",
			description: "Techniques for cognitive restructuring",
		},
		{
			icon: <Sprout className="size-8 text-paper-900" />,
			title: "Stoicism & Mindfulness",
			description: "Ancient wisdom for modern emotional resilience",
		},
		{
			icon: <TrendingUp className="size-8 text-paper-900" />,
			title: "Productivity & Habits",
			description: "Systems for personal growth and efficiency",
		},
	];

	return (
		<div className="bg-background py-10 space-y-8">
			<section className="relative max-w-7xl mx-auto p-4 pt-0 text-center overflow-hidden">
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

			<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 overflow-hidden">
				{features.map((feature) => (
					<Card key={feature.title} className="bg-paper-100! border-paper-300!">
						<CardHeader className="flex flex-col gap-2">
							<div className="p-2 bg-paper-200 rounded-lg">{feature.icon}</div>
							<span className="font-semibold text-xl text-black">
								{feature.title}
							</span>
						</CardHeader>
						<CardContent>
							<p className="text-black">{feature.description}</p>
						</CardContent>
					</Card>
				))}
			</section>

			<section className="max-w-7xl mx-auto p-4 md:p-0">
				<div className="mx-auto bg-paper-200 w-full md:max-w-[60%] p-1 rounded-lg">
					<Accordion
						type="single"
						collapsible
						className="w-full"
						defaultValue="item-1"
					>
						<AccordionItem value="item-1">
							<AccordionTrigger className="p-6 bg-paper-50 flex gap-2 items-center">
								<CircleAlert className="size-6 text-orange-500" />
								<span className="flex-1 text-lg font-semibold">
									Important Disclaimer
								</span>
							</AccordionTrigger>
							<AccordionContent className="p-6 space-y-4">
								<p>
									<strong>Not Medical Advice: </strong>This AI provides guidance
									based on literature, not medical diagnosis. The advice
									generated is for informational purposes only and should not be
									considered a substitute for professional medical advice,
									diagnosis, or treatment.
								</p>
								<p>
									<strong>No Professional Relationship: </strong>Using this tool
									does not create a doctor-patient or therapist-client
									relationship.
								</p>
								<p>
									<strong>Crisis Situations: </strong>If you are in crisis or
									having thoughts of harming yourself or others, please contact
									emergency services immediately or use the crisis resource
									hotline in your area.
								</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</section>

			<section className="bg-paper-200">
				<div className="max-w-7xl p-6 flex flex-col gap-4 mx-auto">
					<span className="text-2xl font-bold">Core Technology</span>
					<p>
						Chloe utilizes vector embeddings to retrieve relevant passages
						from a curated library of self-help literature, along with Google
						Gemini's fast LLM. Chloe doesn't just generate text, it grounds
						responses in established psychological frameworks.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{coreTechnologies.map((coreTechnology) => (
							<Card
								key={coreTechnology.title}
								className="bg-paper-100! border-paper-300!"
							>
								<CardHeader className="flex flex-col gap-2">
									<div className="p-2 bg-paper-200 rounded-lg">
										{coreTechnology.icon}
									</div>
									<span className="font-semibold text-xl text-black">
										{coreTechnology.title}
									</span>
								</CardHeader>
								<CardContent>
									<p className="text-black">{coreTechnology.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="max-w-7xl mx-auto flex flex-col gap-4 p-4">
				<span className="text-2xl font-bold">Knowledge Base Sources</span>
				<p>
					Chloe is trained on a specific subset of literature focusing on
					personal development, psychology, and philosophy. We do not use
					general internet crawl data for our core reasoning.
				</p>

				<div className="rounded-lg border border-paper-300">
					<div className="bg-paper-100 p-4 rounded-t-lg border-b border-paper-300">
						<span className="uppercase font-semibold">Included Genres</span>
					</div>

					<div className="divide-y divide-paper-300">
						{genres.map((genre) => (
							<div className="flex items-center gap-2 p-4" key={genre.title}>
								<div className="p-2 bg-paper-200 rounded-full">
									{genre.icon}
								</div>

								<div className="flex flex-col gap-0.5">
									<span className="font-semibold">{genre.title}</span>
									<p className="text-xs">{genre.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
