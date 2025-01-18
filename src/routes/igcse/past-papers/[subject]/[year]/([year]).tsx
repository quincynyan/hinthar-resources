import { useLocation, A } from "@solidjs/router";
import pastPapers from "/src/data/past-papers.json";

export default function Subject() {
	const location = useLocation();
	const subject = location.pathname.split("/").slice(-2)[0];
	const year = location.pathname.split("/").slice(-1)[0];

	const subjectPapers = pastPapers.igcse.find(
		(item) => item.subject.toLowerCase() === subject.toLowerCase()
	);
	const yearPapers = subjectPapers?.papers.find((item) => item.year === year);

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
				{yearPapers?.papers.map((paper) => (
					<A
						href={paper.link}
						class="block p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
					>
						<div class="square">
							<div class="square-title font-semibold text-xl mb-2 text-black">
								{paper.title}
							</div>
							<div class="square-description text-gray-700">
								<p class="p-2 m-2">{paper.description}</p>
							</div>
						</div>
					</A>
				))}
			</div>
		</div>
	);
}
