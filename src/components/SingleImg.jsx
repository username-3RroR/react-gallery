export default function SingleImg({ src, alt }) {
	return (
		<img
			tabIndex="0"
			src={src}
			alt={alt}
			className="h-[30vh] w-auto rounded-[0.25rem] hover:opacity-80 hover:outline-[0.25rem] hover:outline-white"
		/>
	);
}
