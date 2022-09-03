import { useEffect, useState } from 'react';

export function useHeadingsObserve() {
	const [activeId, setActiveId] = useState<string>('');

	useEffect(() => {
		const elements = document.querySelectorAll('h2');

		const getClosestHeading = () => {
			const targetItem = {
				item: elements[0],
				distance: document.body.scrollHeight,
			};
			elements.forEach((item) => {
				const boundingRect = item.getBoundingClientRect();
				const currentDistance = Math.abs(boundingRect.top);
				if (currentDistance < targetItem.distance) {
					targetItem.item = item;
					targetItem.distance = currentDistance;
				}
			});
			setActiveId(targetItem.item.id);
		};

		window.addEventListener('scroll', getClosestHeading);

		return () => window.removeEventListener('resize', getClosestHeading);
	}, []);

	return { activeId };
}
