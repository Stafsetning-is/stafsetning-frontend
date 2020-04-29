import FileExplorer from "./FileExplorer";
import PublisherPage from "./PublisherPage";
import PublishSuccess from "./PublishSuccess";
import FileStats from "./StatsPage";

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
		route: "*/stats/",
		component: FileStats,
	},
	{
		route: "*/",
		component: FileExplorer,
	},
];
