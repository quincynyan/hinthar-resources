import { A } from "@solidjs/router";

export default function Home() {
	return (
		<main class="text-center mx-auto text-gray-700 p-4">
			<h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
				Hinthar Resources
			</h1>
			<br />
			<hr />
			<br />
			<div class="hero flex flex-col justify-center items-center">
				<div class="flex space-x-4">
					<a href="/get-started">
						<button class="btn bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
							Get started &rarr;
						</button>
					</a>
					<a href="/about">
						<button class="btn bg-gray-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-600 transition duration-300">
							Learn more &darr;
						</button>
					</a>
				</div>
			</div>

			<p class="mt-8 text-lg text-center text-gray-600">
				This is where you can download resources from Hinthar
			</p>
			<br />
			<p class="mt-8">
				Visit{" "}
				<a
					href="https://hinthar.education"
					target="_blank"
					class="text-sky-600 hover:underline"
				>
					hinthar.education
				</a>{" "}
				to learn more about Hinthar Education.
			</p>
			<p class="my-4">
				<span>Home</span>
				{" - "}
				<A href="/about" class="text-sky-600 hover:underline">
					About Page
				</A>{" "}
			</p>
		</main>
	);
}
