import { isMobile } from "react-device-detect";
import DB from "../assets/pokemonDB.json";
import { typeColors } from "../utils";
import ListPokemonIdAndImage from "./ListPokemonIdAndImage";
import ListPokemonTypes from "./ListPokemonTypes";
import { Link } from "react-router-dom";
import ListStatBar from "./ListStatBar";

export default function MappedList({
	rangeStart,
	rangeEnd,
	query,
}: {
	rangeStart: number;
	rangeEnd: number;
	query: string;
}) {
	return (
		<div className="flex-col gap-1 items-center">
			<ListStatBar />
			{DB.filter(({ id, name, types }) => {
				if (query === "") {
					if (id >= rangeStart && id <= rangeEnd) return true;
				} else if (
					name
						.toLocaleLowerCase()
						.includes(query.toLocaleLowerCase()) ||
					query === id.toString() ||
					types[0]
						.toLocaleLowerCase()
						.includes(query.toLocaleLowerCase()) ||
					(types.length === 2 &&
						types[1]
							.toLocaleLowerCase()
							.includes(query.toLocaleLowerCase()))
				)
					return true;
			}).map(({ id, name, types, stats }) => {
				return (
					<Link
						to={`/pokemon/${id}`}
						key={id}
						className="w-full flex items-center border justify-around"
						style={{
							backgroundImage: `linear-gradient(to right, ${
								typeColors[types[0]].color
							}, ${
								types.length === 2
									? typeColors[types[1]].color
									: typeColors[types[0]].color
							})`,
							height: isMobile ? 100 : 80,
						}}
					>
						<ListPokemonIdAndImage
							id={id}
							name={name}
							types={types}
						/>
						<ListPokemonTypes types={types} />
						<div>
							{Object.entries(stats).map(([key, val]) => (
								<div
									key={key}
									className="items-center border bg-neutral-100 p-1"
								>
									<p className="w-5">{val}</p>
									{/* <p>{key.toLocaleUpperCase()}</p> */}
								</div>
							))}
						</div>
					</Link>
				);
			})}
		</div>
	);
}
