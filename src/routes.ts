import { lazy } from "solid-js";
import type { RouteDefinition } from "@solidjs/router";

import Home from "./pages/home";

export const routes: RouteDefinition[] = [
	{
		path: "/",
		component: Home
	},
	{
		path: "/get-started",
		component: lazy(() => import("./pages/get-started"))
	},
	{
		path: "/about",
		component: lazy(() => import("./pages/about"))
	},
	{
		path: "/ial",
		component: lazy(() => import("./pages/resources/ial"))
	},
	{
		path: "/igcse",
		component: lazy(() => import("./pages/resources/igcse"))
	},
	{
		path: "/igcse/past-papers",
		component: lazy(
			() => import("./pages/resources/igcse/past-papers-subjects")
		)
	},
	{
		path: "/igcse/past-papers/:subject",
		component: lazy(
			() => import("./pages/resources/igcse/past-papers-years")
		)
	},
	{
		path: "/igcse/past-papers/:subject/:year",
		component: lazy(
			() => import("./pages/resources/igcse/past-papers-papers")
		)
	},
	{
		path: "/pre-ig",
		component: lazy(() => import("./pages/resources/pre-ig"))
	},
	{
		path: "/other-classes",
		component: lazy(() => import("./pages/resources/other-classes"))
	},
	{
		path: "**",
		component: lazy(() => import("./errors/404"))
	}
];
