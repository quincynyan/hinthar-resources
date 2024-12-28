import { Component } from "solid-js";
import resources from "../../data/resources.json";

const PreIg: Component = () => {
	return (
		<div class="container mx-auto p-6">
			<h1 class="text-3xl font-bold mb-4">Pre-IG Page</h1>
			<p class="text-lg text-gray-600">
				Welcome to the Pre-IG resources page.
			</p>
			<p class="text-sm text-gray-600">
				Here, you will find resources for Year 7, 8, 9.
			</p>
			<br />
			<hr />
			<br />
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{resources.resources.map((resource) => (
					<a
						href={"/pre-ig/" + resource.destination}
						class="block p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
					>
						<div class="square">
							<div class="square-title font-semibold text-xl mb-2">
								{resource.title}
							</div>
							<div class="square-description text-gray-700">
								<p class="p-2 m-2">{resource.description}</p>
							</div>
						</div>
					</a>
				))}
			</div>
			<br />
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{["Year 7", "Year 8", "Year 9"].map((cls) => (
					<a
						href={
							"/pre-ig/" +
							cls.toLowerCase().replace(" ", "-") +
							"/"
						}
						class="block p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ml-20 relative left-20"
					>
						<div class="square">
							<div class="square-title font-semibold text-xl mb-2">
								{cls}
							</div>
							<div class="square-description text-gray-700"></div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default PreIg;
