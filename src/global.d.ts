declare module '*.pdf'

declare namespace JSX {
	interface IntrinsicElements {
	  'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
		navigation: string;
	  };
	  'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
		lazy: string;
	  };
	}
  }