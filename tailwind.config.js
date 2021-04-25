module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
		container: {
			center: 'true',
			padding: '2rem'
		}
  },
  variants: {
    extend: {
    	opacity: ['disabled'],
	    cursor: ['disabled'],
	    backgroundColor: ['active']
    },
  },
  plugins: [],
}
