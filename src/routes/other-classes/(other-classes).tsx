import { A } from "@solidjs/router";

export default function OtherClasses() {
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
				{[
					{ name: "SAT", description: "SAT preparation classes" },
					{ name: "BCS", description: "BCS coaching classes" },
					{ name: "CCST", description: "CCST certification classes" },
					{ name: "German", description: "German language classes" }
				].map((cls) => (
					<A
						href={
							"/other-classes/" +
							cls.name.toLowerCase().replace(" ", "-") +
							"/"
						}
						class="block p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-20"
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
