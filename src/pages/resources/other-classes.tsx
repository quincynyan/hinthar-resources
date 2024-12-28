import { Component } from "solid-js";
import resources from "../../data/resources.json";

const OtherClasses: Component = () => {
	return (
		<div class="container mx-auto p-6">
			<h1 class="text-3xl font-bold mb-4">Other Classes</h1>
			<p class="text-lg text-gray-600">This is the Other Classes page.</p>
			<p class="text-sm text-gray-600">
				Here, you will find resources for SAT, BCS, CCST and German.
			</p>
			<br />
			<hr />
			<br />
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{["SAT", "BCS", "CCST", "German"].map((cls) => (
					<a
						href={
							"/pre-ig/" +
							cls.toLowerCase().replace(" ", "-") +
							"/"
						}
						class="block p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-20"
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

export default OtherClasses;
