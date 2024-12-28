export default function Home() {
	return (
		<section class="bg-gray-100 text-gray-700 p-8">
			<h1 class="text-2xl font-bold">Home</h1>
			<p class="mt-4">This is the home page.</p>
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
		</section>
	);
}
