import { useLocation, useNavigate, A } from "@solidjs/router";
import { classes } from "/src/data/classes.json";

export default function Nav() {
	const location = useLocation();
	const navigate = useNavigate();

	const goUpOneLevel = () => {
		const path = location.pathname.split("/");
		path.pop();
		navigate(path.length ? "/" : path.join("/"));
	};

	const active = (path: string) =>
		path == location.pathname ? "border-sky-600" : "border-transparent";
	return (
		<nav class="bg-sky-800">
			<ul class="container flex items-center p-3 text-gray-200">
				<li
					class={`border-b-2 ${active("/")} hover:border-sky-200 mx-1.5 sm:mx-6`}
				>
					<A href="/">Home</A>
				</li>
				<li
					class={`border-b-2 ${active("/about")} hover:border-sky-200 mx-1.5 sm:mx-6`}
				>
					<A href="/about">About</A>
				</li>

				<div class="relative md:hidden ml-auto">
					<button
						class="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
						onClick={() => {
							const menu = document.getElementById("mobile-menu");
							if (menu) {
								menu.classList.toggle("hidden");
							}
						}}
					>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="gray"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16m-7 6h7"
							></path>
						</svg>
					</button>
					<ul
						id="mobile-menu"
						class="absolute left-0 top-full mt-2 bg-gray-200 text-gray-900 hidden w-32 rounded-lg shadow-lg"
						style={{ left: "-96px" }}
					>
						{classes.map((cls) => (
							<li class="py-2 px-4">
								<A
									href={cls.destination}
									class="no-underline hover:underline"
								>
									{cls.title}
								</A>
							</li>
						))}
					</ul>
				</div>
				<div class="hidden md:flex">
					{classes.map((cls) => (
						<li class="py-2 px-4">
							<A
								href={cls.destination}
								class="no-underline hover:underline"
							>
								{cls.title}
							</A>
						</li>
					))}
				</div>

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
