import { useEffect, useState } from 'react';
import SingleImg from './SingleImg';
import OpenModal from './Modal';

export default function Gallery() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(`https://week-6-api.vercel.app/api/images`);
			const apiData = await res.json();

			setData(apiData);
		}

		fetchData();
	}, []);

	const [modal, setModal] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	function handleClick(index) {
		setModal(!modal);
		setCurrentIndex(index);
		// console.log(bigImage);
	}

	let bigImage = data[currentIndex];

	return (
		<>
			<div className="flex flex-wrap gap-[0.5rem] justify-center relative">
				{data.map((img, index) => (
					<div key={index} onClick={() => handleClick(index)}>
						<SingleImg src={img.url} alt={img.alt} />
					</div>
				))}

				{modal ? (
					<OpenModal
						src={bigImage.url}
						alt={bigImage.alt}
						title={bigImage.title}
						close={() => setModal(false)}
					/>
				) : null}
			</div>
		</>
	);
}
