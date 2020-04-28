import FileExplorer from "./FileExplorer";
import PublisherPage from "./PublisherPage";
import PublishSuccess from "./PublishSuccess";

export default [
	{
		route: "*/publish/done/",
		component: PublishSuccess,
	},
	{
		route: "*/publish/:id",
		component: PublisherPage,
	},
	{
		route: "*/",
		component: FileExplorer,
	},
];
