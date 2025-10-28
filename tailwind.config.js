export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: '#0a0a0a',
				'dark-light': '#1a1a1a',
				light: '#f5f5f5'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			animation: {
				'fade-in': 'fadeIn 1.5s ease-out',
				'zoom-in': 'zoomIn 2s ease-out',
				'slide-up': 'slideUp 1s ease-out'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				zoomIn: {
					'0%': { transform: 'scale(1.1)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				}
			}
		}
	},
	plugins: []
};
