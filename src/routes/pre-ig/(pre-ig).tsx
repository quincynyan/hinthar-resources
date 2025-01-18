import { A } from "@solidjs/router";
import resources from "/src/data/resources.json";

export default function PreIg() {
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
					<A
						href={"/pre-ig/" + resource.destination}
						class="block p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
					>
						<div class="square">
							<div class="square-title font-semibold text-xl mb-2 text-black">
								{resource.title}
							</div>
							<div class="square-description text-gray-700">
								<p class="p-2 m-2">{resource.description}</p>
							</div>
						</div>
					</A>
				))}
			</div>
			<br />
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{[
					{
						name: "Year 7",
						description: "Grade 6 (Primary) curriculum overview"
					},
					{
						name: "Year 8",
						description: "Grade 7 (Primary) curriculum overview"
					},
					{
						name: "Year 9",
						description: "Grade 8 (Primary) curriculum overview"
					}
				].map((cls) => (
					<A
						href={
							"/pre-ig/" +
							cls.name.toLowerCase().replace(" ", "-") +
							"/"
						}
						class="block p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ml-20 left-20 relative"
					>
						<div class="square">
							<div class="square-title font-semibold text-xl mb-2 text-black">
								{cls.name}
							</div>
							<div class="square-description text-gray-700">
								{cls.description}
							</div>
						</div>
					</A>
				))}
			</div>
		</div>
	);
}
