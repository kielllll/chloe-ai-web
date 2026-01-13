import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="bg-card border-b border-border shadow-soft">
			<div className="p-4 flex items-center justify-between max-w-[1280px] mx-auto">
				<h1 className="text-xl font-semibold font-serif">
					<Link
						to="/"
						className="text-foreground hover:text-accent transition-colors"
					>
						Chloe AI
					</Link>
				</h1>

				<Link
					to="/conversations"
					className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors shadow-soft"
				>
					Start Chatting
				</Link>
			</div>
		</header>
	);
}
