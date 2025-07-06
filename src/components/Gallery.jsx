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
	const [currentIndex, setCurrentIndex] = useState(null);

	function handleClick(i) {
		setModal(!modal);
		setCurrentIndex(i);
	}

	return (
		<>
			<div className="flex flex-wrap gap-[0.5rem]">
				{data.map((img, i) => (
					<div
						key={i}
						className="relative flex justify-center"
						onClick={() => handleClick(img.url, img.alt, img.title)}
					>
						<SingleImg src={img.url} alt={img.alt} />
					</div>
				))}

				{modal ? (
					<OpenModal
						src={currentIndex}
						alt={currentIndex}
						title={currentIndex}
					/>
				) : null}
			</div>
		</>
	);
}
