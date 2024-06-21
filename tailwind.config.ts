import { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin';

const config: Config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [
    flowbitePlugin
  ],

  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: { 
			'50': '#fff1f1',
			'100': '#ffe0e0',
			'200': '#ffc6c6',
			'300': '#ff9e9e',
			'400': '#ff6666',
			'500': '#fd3636',
			'600': '#eb1717',
			'700': '#c70f0f',
			'800': '#a31111',
			'900': '#871515',
			'950': '#4a0505',
        },
        blue: { 
			'50': '#fff1f1',
			'100': '#ffe0e0',
			'200': '#ffc6c6',
			'300': '#ff9e9e',
			'400': '#ff6666',
			'500': '#fd3636',
			'600': '#eb1717',
			'700': '#c70f0f',
			'800': '#a31111',
			'900': '#871515',
			'950': '#4a0505',
        },
      },
    },
  },
};

export default config;
