import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginReactQuery } from "@kubb/plugin-react-query";
import { pluginClient } from "@kubb/plugin-client";

export default defineConfig({
	root: ".",
	input: {
		path: "./swagger.json",
	},
	output: {
		path: "./src/http",
		clean: true,
	},
	hooks: {
		done: [],
	},
	plugins: [
		pluginOas({
			generators: [],
			validate: false,
		}),
		pluginTs({
			output: {
				path: "models",
			},
		}),
		pluginClient({
			baseURL: "http://localhost:3333",
		}),
		pluginReactQuery({
			output: {
				path: "./hooks",
			},
			group: {
				type: "tag",
				name({ group }) {
					return `${group}Hooks`;
				},
			},
			paramsType: "inline",
			pathParamsType: "object",
			suspense: false,
		}),
	],
});
