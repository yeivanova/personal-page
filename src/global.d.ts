declare module '*.pdf'

declare namespace JSX {
	interface IntrinsicElements {
	  'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
		navigation: string;
		// Add more properties
	  };
	  'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
		lazy: string;
		// Add more properties
	  };
	}
  }