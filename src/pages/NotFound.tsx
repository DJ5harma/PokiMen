import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="p-10 flex-col gap-3 text-xl">
			<h1>Error Code: 404 {"=>"} Page Not Found!</h1>
			<h3>It seems like you are on an invalid address.</h3>
			<Link to="/" style={{ textDecoration: "none" }}>
				<button className="w-full bg-black text-white">Go Home</button>
			</Link>
		</div>
	);
}
