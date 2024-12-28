import { Component } from "solid-js";
import classes from "../data/classes.json";

const GetStarted: Component = () => {
	return (
		<div class="container mx-auto p-6">
			<h1 class="text-3xl font-bold mb-4">Get Started</h1>
			<p class="text-lg text-gray-600">
				Welcome to the Get Started page.
			</p>
			<p class="text-sm text-gray-600">
				Here, you will find resources for starting your learning
				journey.
			</p>
			<br />
			<hr />
			<br />
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{classes.classes.map((cls) => (
					<a
						href={cls.destination}
						class="block p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
					>
						<div class="square">
							<div class="square-title font-semibold text-xl mb-2">
								{cls.title}
							</div>
							<div class="square-description text-gray-700">
								<p class="p-2 m-2">{cls.description}</p>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default GetStarted;
