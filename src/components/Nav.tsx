import { useLocation, useNavigate } from "@solidjs/router";

export default function Nav() {
	const location = useLocation();
	const navigate = useNavigate();

	const goUpOneLevel = () => {
		const path = location.pathname.split("/");
		path.pop();
		navigate(path.length ? "/" : path.join("/"));
	};

	const active = (path: string) =>
		path == location.pathname
			? "border-sky-600"
			: "border-transparent hover:border-sky-600";
	return (
		<nav class="bg-sky-800">
			<ul class="container flex items-center p-3 text-gray-200">
				<li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
					<a href="/">Home</a>
				</li>
				<li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
					<a href="/about">About</a>
				</li>

				<li class="text-sm flex items-center space-x-1 ml-auto hidden md:flex">
					<button
						onClick={goUpOneLevel}
						class="p-1 rounded-lg hover:bg-gray-300 transition duration-200"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<polyline class="st0" points="14,9 9,4 4,9 " />
							<path
								class="st0"
								d="M17,20h-4c-2.2,0-4-1.8-4-4V4"
							/>
						</svg>
					</button>
					<span>URL:</span>
					<input
						class="w-75px p-1 bg-white text-sm rounded-lg text-gray-400"
						type="text"
						readOnly
						value={location.pathname}
					/>
				</li>
			</ul>
		</nav>
	);
}
