import FileExplorer from "./FileExplorer";
import PublisherPage from "./PublisherPage";

export default [
	{
		route: "*/publish/:id",
		component: PublisherPage,
	},
	{
		route: "*/",
		component: FileExplorer,
	},
];
