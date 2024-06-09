import { useNavigate } from "react-router-dom";
import MappedList from "../components/MappedList";
import { useEffect, useState } from "react";
import DB from "../assets/pokemonDB.json";
import ListStatBar from "../components/ListStatBar";

export default function PkmnList() {
	const [rangeStart, setRangeStart] = useState(0);
	const [rangeEnd, setRangeEnd] = useState(15);

	const navigate = useNavigate();

	const [flicker, invertFlicker] = useState(true);

	useEffect(() => {
		const pathname = window.location.pathname.split("/");
		const rangeStr = pathname[pathname.length - 1];
		const rangeArray = rangeStr.split("-").map((str) => parseInt(str));
		if (
			rangeStr.split("-").length !== 2 ||
			rangeArray[0] > rangeArray[1] ||
			rangeArray[0] < 0 ||
			rangeArray[1] > DB.length
		) {
			navigate("/pokemon-list/0-15");
		} else {
			setRangeStart(rangeArray[0]);
			setRangeEnd(rangeArray[1]);
		}
	}, [flicker]);

	return (
		<div className="w-full flex-col">
			<div className="w-full px-6 justify-between my-2 items-center">
				<div>
					<button
						className="border-2 border-black p-3"
						onClick={() => {
							const diff = rangeEnd - rangeStart;
							if (rangeStart - diff < 0)
								navigate(`/pokemon-list/0-${diff}`);
							else
								navigate(
									`/pokemon-list/${rangeStart - diff}-${
										rangeEnd - diff
									}`
								);
							invertFlicker(!flicker);
						}}
					>
						{"<"} Previous Portion
					</button>
					<button
						className="border-2 border-black p-3"
						onClick={() => {
							const diff = rangeEnd - rangeStart;
							if (rangeEnd + diff > DB.length)
								navigate(
									`/pokemon-list/${DB.length - diff}-${
										DB.length
									}`
								);
							else
								navigate(
									`/pokemon-list/${rangeStart + diff}-${
										rangeEnd + diff
									}`
								);
							invertFlicker(!flicker);
						}}
					>
						Next Portion {">"}
					</button>
				</div>
				<ListStatBar />
			</div>
			<MappedList rangeStart={rangeStart} rangeEnd={rangeEnd} />
		</div>
	);
}
