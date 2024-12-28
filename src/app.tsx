import { Suspense, type Component } from "solid-js";
import { A, useLocation, useNavigate } from "@solidjs/router";
import { classes } from "./data/classes.json";

const App: Component = (props: { children: Element }) => {
	const location = useLocation();
	const navigate = useNavigate();

	const goUpOneLevel = () => {
		const path = location.pathname.split("/");
		path.pop();
		navigate(path.join("/"));
	};

	return (
		<>
			<nav class="bg-gray-200 text-gray-900 px-4">
				<ul class="flex items-center">
					<li class="py-2 px-4">
						<A href="/" class="no-underline hover:underline">
							Home
						</A>
					</li>
					<li class="py-2 px-4">
						<A href="/about" class="no-underline hover:underline">
							About
						</A>
					</li>

					<div class="relative md:hidden ml-auto">
						<button
							class="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
							onClick={() => {
								const menu =
									document.getElementById("mobile-menu");
								if (menu) {
									menu.classList.toggle("hidden");
								}
							}}
						>
							<svg
								class="w-6 h-6"
								fill="none"
								stroke="currentColor"
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
							class="absolute left-0 top-full mt-2 w-full bg-gray-200 text-gray-900 hidden w-32 rounded-lg shadow-lg"
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
							class="p-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
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
									d="M20,20h-7c-2.2,0-4-1.8-4-4V4"
								/>
							</svg>
						</button>
						<span>URL:</span>
						<input
							class="w-75px p-1 bg-white text-sm rounded-lg"
							type="text"
							readOnly
							value={location.pathname}
						/>
					</li>
				</ul>
			</nav>

			<main>
				<Suspense>{props.children}</Suspense>
			</main>
		</>
	);
};

export default App;
