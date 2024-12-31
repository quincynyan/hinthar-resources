import { A } from "@solidjs/router";

export default function About() {
	return (
		<main class="text-center mx-auto text-gray-700 p-4">
			<h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
				About Page
			</h1>
			<br />
			<hr />
			<br />
			<p class="text-lg">
				Hello, i am a p div. edit me to add information hehe
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
				<A href="/" class="text-sky-600 hover:underline">
					Home
				</A>
				{" - "}
				<span>About Page</span>
			</p>
		</main>
	);
}
