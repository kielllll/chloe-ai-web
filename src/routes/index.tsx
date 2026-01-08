import { createFileRoute } from "@tanstack/react-router";
import {
	BookOpen,
	CircleAlert,
	HandHeart,
	LibraryBig,
	Lock,
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

	return (
		<div className="bg-background py-10 space-y-8">
			<section className="relative max-w-[1280px] mx-auto p-4 pt-0 text-center overflow-hidden">
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

			<section className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 overflow-hidden">
				{features.map((feature) => (
					<Card key={feature.title} className="bg-paper-100! border-paper-800!">
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

			<section className="max-w-[1280px] mx-auto">
				<div className="mx-auto bg-paper-200 max-w-[60%] p-1 rounded-lg">
					<Accordion
						type="single"
						collapsible
						className="w-full"
						defaultValue="item-1"
					>
						<AccordionItem value="item-1">
							<AccordionTrigger className="p-6 bg-paper-50 flex gap-2 items-center">
								<CircleAlert className="size-6 text-orange-500" />
								<span className="flex-1">Important Disclaimer</span>
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
		</div>
	);
}
