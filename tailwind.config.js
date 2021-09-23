module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    container: {
			center: true,
			padding: '1rem'
		},

    extend: {
      inset: {
				'-15': '-3.75rem',
				'-13': '-3.25rem'
			},

			margin: {
				'-15': '-3.75rem',
				'-13': '-3.25rem'
			},

			width: {
				'1/7': '14.2857143%',
				'2/7': '28.5714286%',
				'3/7': '42.8571429%',
				'4/7': '57.1428571%',
				'5/7': '71.4285714%',
				'6/7': '85.7142857%'
			},

			colors: {
				paste: '#10c8b3',
				lightGreen: '#2bd891',
				LightOrange: '#ff924c',
				orange: '#ff6061',
				darkBlue: '#17a2b8'
			},

      zIndex: {
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        25: 25,
        50: 50,
        75: 75,
        100: 100,
        auto: 'auto'
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
			visibility: ['group-hover'],
			grayscale: ['hover'],
			gradientColorStops: ['active', 'group-hover'],
			borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
