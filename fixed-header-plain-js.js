const header = {
	el: {
		win: window,
		html: document.documentElement,
		header: document.querySelector('.header'),
		main: document.querySelector('main')
	},

	events() {
		const
			headerWrap = this.el.header,
			scrollTopZero = 0

		// function that trigger when scroll the page
		this.el.win.addEventListener('scroll', e => {
			const currentScrollTop = e.currentTarget.scrollY

			// Condition for check if is Scroll Down or Scroll Up
			if (currentScrollTop > scrollTopZero) {
				// downscroll condition
				if (currentScrollTop > headerWrap.offsetHeight) {
					headerWrap.classList.add('header--fixed')
					this.el.main.style.paddingTop = headerWrap.offsetHeight + 'px'
				}

			} else {
				// upscroll condition
				if (currentScrollTop < headerWrap.offsetHeight) {
					headerWrap.classList.remove('header--fixed')
					this.el.main.removeAttribute('style')
				}
			}
		})

		// Check if the current page has the element below, if yes, the function works. Avoid js erros
		if (!this.el.header) return
	},

	init() {
		this.events()
	}
}

header.init()