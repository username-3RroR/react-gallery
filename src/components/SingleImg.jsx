export default function SingleImg({ key, src, alt }) {
	return <img key={key} src={src} alt={alt} className="h-[30vh] w-auto" />;
}
