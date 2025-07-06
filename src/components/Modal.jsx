export default function OpenModal({ key, src, alt, title }) {
	return (
		<dialog open className="p-[1rem] bg-emerald-50">
			<h2>{title}</h2>
			<img key={key} src={src} alt={alt} className="h-[80vh] w-auto" />
		</dialog>
	);
}
