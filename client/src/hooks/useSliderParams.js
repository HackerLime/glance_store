import { useScreenWidth } from "./useScreenWidth"

export const useSliderParams = () => {
	const screenWidth = useScreenWidth()
	if (screenWidth >= 1440) {
		return { mySlidesPerView: 5.9, mySlidesSpaceBetween: 1.5 }
	}
	if (screenWidth < 1440 && screenWidth >= 1024) {
		return { mySlidesPerView: 4, mySlidesSpaceBetween: 1.5 }
	}
	if (screenWidth < 1024 && screenWidth >= 768) {
		return { mySlidesPerView: 3, mySlidesSpaceBetween: 1.5 }
	}
	if (screenWidth < 768 && screenWidth >= 450) {
		return { mySlidesPerView: 2, mySlidesSpaceBetween: 1.5 }
	}
	if (screenWidth < 450) {
		return { mySlidesPerView: 1.2, mySlidesSpaceBetween: 5 }
	}

	return { mySlidesPerView: 5.9, mySlidesSpaceBetween: 1.5 }
}