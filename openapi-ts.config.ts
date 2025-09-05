import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
	input: './openapi.json',
	output: {
		format: 'biome',
		lint: 'biome',
		indexFile: true,
		path: './generated',
	},
	plugins: [
		...defaultPlugins,
		{
			name: '@hey-api/typescript',
			exportFromIndex: true,
		},
		{
			name: '@hey-api/client-fetch',
			exportFromIndex: true,
			throwOnError: true,
		},
		{
			name: '@hey-api/transformers',
			dates: true,
		},
		{
			name: '@hey-api/sdk',
			transformer: true,
		},
	],
})
