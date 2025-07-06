export default function OpenModal({ src, alt, title, close }) {
	return (
		<dialog
			open
			className="p-[1rem] bg-emerald-100 absolute justify-self-center text-[1.5rem] rounded-[1rem]"
		>
			<h2>{title}</h2>
			<button onClick={close} className="text-red-700">
				Close
			</button>
			<img
				src={src}
				alt={alt}
				className="h-[70vh] w-auto m-[1rem] rounded-[0.5rem]"
			/>
		</dialog>
	);
}
