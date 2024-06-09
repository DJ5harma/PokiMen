import { useEffect } from "react";
import { bgM } from "../utils";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
	useEffect(() => {
		bgM.play();
	}, []);

	const navigate = useNavigate();

	return (
		<div className="fixed bg-white border-2 p-2 h-16 w-full text-white text-base justify-around [&>*]:rounded-xl [&>*]:bg-black [&>*]:px-3">
			<button>
				<Link to="/">PokiMen</Link>
			</button>
			<button
				onClick={() => {
					if (window.location.pathname.includes("/pokemon-list/"))
						return;
					navigate("/pokemon-list/0-15");
				}}
			>
				GoTo List
			</button>
			<button
				onClick={() => {
					if (bgM.paused) bgM.play();
					else bgM.pause();
				}}
			>
				Toggle BgM
			</button>
			<button>
				<Link to="/about">About</Link>
			</button>
		</div>
	);
}
