import { Component } from "solid-js";
import { useLocation } from "@solidjs/router";
import pastPapers from "../../../data/past-papers.json";

const PastPapersYears: Component = () => {
	const location = useLocation();
	const subject = location.pathname.split("/").pop();

	const subjectPapers = pastPapers.igcse.find((item) => item.subject.toLowerCase() === subject.toLowerCase());

	return (
		<div class="container mx-auto p-6">
			<h1 class="text-3xl font-bold mb-4">Past Papers</h1>
			<p class="text-lg text-gray-600">
				Welcome to the IGCSE Past Papers page.
			</p>
			<p class="text-sm text-gray-600">
				Here, you will find past papers for IGCSE subjects.
			</p>
			<br />
			<hr />
			<br />
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{subjectPapers?.papers.map((year) => (
					<a
						href={`/igcse/past-papers/${subject}/${year.year}`}
						class="block p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
					>
						<div class="square">
							<div class="square-title font-semibold text-xl mb-2">
								{year.year}
							</div>
							<div class="square-description text-gray-700">
								<p class="p-2 m-2">{year.year}</p>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default PastPapersYears;
