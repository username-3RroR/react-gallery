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

	const [selectedImg, setSelectedImg] = useState(0);

	function handleClick() {
		setModal(!modal);
		setSelectedImg({ selectedImg });
	}

	return (
		<div className="flex flex-wrap gap-[0.5rem]">
			{data.map((img) => (
				<div
					className="relative flex justify-center"
					onClick={handleClick}
				>
					<SingleImg key={img.id} src={img.url} alt={img.alt} />
				</div>
			))}

			{modal ? (
				<OpenModal
					key={img.id}
					src={img.url}
					alt={img.alt}
					title={img.title}
				/>
			) : null}
		</div>
	);
}
