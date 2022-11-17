import type { IconType } from 'react-icons';

export type Skill = {
	title: string;
	data: {
		name: string;
		description: string;
		Icon: IconType;
		url: string;
	}[];
};

import {
	SiCss3,
	SiFigma,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';

const skills: Skill = {
	title: 'Skills',
	data: [
		{
			name: 'HTML',
			Icon: SiHtml5,
			description:
				'HTML is the standard markup language for creating Web pages.',
			url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		},
		{
			name: 'CSS',
			Icon: SiCss3,
			description:
				'CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
			url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		},
		{
			name: 'JavaScript',
			Icon: SiJavascript,
			description:
				'JavaScript is a high-level, interpreted programming language.',
			url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		},
		{
			name: 'TypeScript',
			Icon: SiTypescript,
			description:
				'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
			url: 'https://www.typescriptlang.org/',
		},
		{
			name: 'React',
			Icon: SiReact,
			description:
				'React is a JavaScript library for building user interfaces.',
			url: 'https://reactjs.org/',
		},
		{
			name: 'Nextjs',
			Icon: SiNextdotjs,
			description:
				'Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.',
			url: 'https://nextjs.org/',
		},
		{
			name: 'Git',
			Icon: SiGit,
			description:
				'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
			url: 'https://git-scm.com/',
		},
		{
			name: 'GitHub',
			Icon: SiGithub,
			description:
				'GitHub is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management functionality of Git as well as adding its own features.',
			url: 'https://github.com/',
		},
		{
			name: 'Figma',
			Icon: SiFigma,
			description:
				'Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.',
			url: 'https://www.figma.com/',
		},
		{
			name: 'TailwindCSS',
			Icon: SiTailwindcss,
			description:
				'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
			url: 'https://tailwindcss.com/',
		},
	],
};

export default skills;
