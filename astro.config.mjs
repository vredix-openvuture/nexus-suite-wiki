// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mermaid({ theme: 'default', autoTheme: true }),
		starlight({
			title: 'Nexus Suite',
			description:
				'The complete documentation for Nexus Suite, one Obsidian plugin instead of a dozen.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/vredix-openvuture/nexus-suite',
				},
			],
			customCss: ['./src/styles/nexus.css'],
			editLink: {
				baseUrl: 'https://github.com/vredix-openvuture/nexus-suite-wiki/edit/main/',
			},
			lastUpdated: true,
			pagination: true,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			// The sidebar is written out by hand on purpose: the order should be a
			// decision, not a side effect of file names, and a page that is not
			// listed here is unreachable — which is the check that it was finished.
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'What it is', slug: 'start/what-it-is' },
						{ label: 'Installation', slug: 'start/install' },
						{ label: 'The first hour', slug: 'start/first-run' },
					],
				},
				{
					label: 'How it fits together',
					items: [
						{ label: 'One switch per module', slug: 'concepts/modules' },
						{ label: 'Blocks that are their own data', slug: 'concepts/blocks' },
						{ label: 'Where everything is stored', slug: 'concepts/storage' },
						{ label: 'What belongs to a device', slug: 'concepts/devices' },
					],
				},
				{
					label: 'Quick Sketch',
					items: [
						{ label: 'Overview', slug: 'sketch/overview' },
						{ label: 'The toolbar', slug: 'sketch/toolbar' },
						{ label: 'The tools', slug: 'sketch/tools' },
						{ label: 'The page', slug: 'sketch/page' },
						{ label: 'Pen buttons', slug: 'sketch/pen' },
						{ label: 'Export', slug: 'sketch/export' },
						{ label: 'Finding a sketch again', slug: 'sketch/search' },
						{ label: 'Slate notes', slug: 'sketch/slate' },
					],
				},
				{
					label: 'Tasks and planning',
					items: [
						{ label: 'Projects and tasks', slug: 'tasks/projects' },
						{ label: 'A note as a task', slug: 'tasks/note-as-task' },
						{ label: 'The agenda block', slug: 'tasks/agenda' },
						{ label: 'Kanban', slug: 'tasks/kanban' },
						{ label: 'The planner', slug: 'tasks/planner' },
						{ label: 'CalDAV and Vikunja', slug: 'tasks/caldav' },
					],
				},
				{
					label: 'Vault sync',
					items: [
						{ label: 'How it decides', slug: 'sync/overview' },
						{ label: 'Setting it up', slug: 'sync/setup' },
						{ label: 'Conflicts', slug: 'sync/conflicts' },
						{ label: 'Backups', slug: 'sync/backups' },
						{ label: 'A shared vault', slug: 'sync/shared' },
					],
				},
				{
					label: 'Writing',
					items: [
						{ label: 'Banners', slug: 'writing/banner' },
						{ label: 'Callouts', slug: 'writing/callouts' },
						{ label: 'Editorial marks', slug: 'writing/editorial' },
						{ label: 'Focus and sprints', slug: 'writing/focus-sprint' },
						{ label: 'Typography', slug: 'writing/typography' },
						{ label: 'QuickNote', slug: 'writing/quicknote' },
					],
				},
				{
					label: 'Around the vault',
					items: [
						{ label: 'Explorer', slug: 'vault/explorer' },
						{ label: 'Folder notes', slug: 'vault/folder-notes' },
						{ label: 'Icons', slug: 'vault/icons' },
						{ label: 'Search', slug: 'vault/search' },
						{ label: 'Workspaces and boards', slug: 'vault/workspaces' },
					],
				},
				{
					label: 'Look',
					items: [
						{ label: 'Style', slug: 'look/style' },
						{ label: 'Palette', slug: 'look/palette' },
						{ label: 'Phone and tablet', slug: 'look/devices' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Every setting', slug: 'reference/settings' },
						{ label: 'Commands', slug: 'reference/commands' },
						{ label: 'Code blocks', slug: 'reference/blocks' },
						{ label: 'Frontmatter', slug: 'reference/frontmatter' },
						{ label: 'Files and paths', slug: 'reference/files' },
					],
				},
				{
					label: 'Help',
					items: [
						{ label: 'Troubleshooting', slug: 'help/troubleshooting' },
						{ label: 'FAQ', slug: 'help/faq' },
						{ label: 'Development', slug: 'help/development' },
					],
				},
			],
		}),
	],
});
