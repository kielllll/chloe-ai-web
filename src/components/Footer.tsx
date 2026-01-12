import { Link } from "@tanstack/react-router";

export default function Footer() {
	return (
		<footer className="p-6 text-xs mt-auto bg-paper-200 flex items-center justify-center gap-1">
			Made with ❤️ by
			<Link
				to="https://www.eatarranza.dev"
				className="underline underline-offset-2"
				target="_blank"
			>
				eatarranza.dev
			</Link>
		</footer>
	);
}
