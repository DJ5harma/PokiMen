import { isMobile } from "react-device-detect";
import DB from "../assets/pokemonDB.json";
import { typeColors } from "../utils";
import ListPokemonIdAndImage from "./ListPokemonIdAndImage";
import ListPokemonTypes from "./ListPokemonTypes";
import { Link } from "react-router-dom";

export default function MappedList({
	rangeStart,
	rangeEnd,
}: {
	rangeStart: number;
	rangeEnd: number;
}) {
	return (
		<div className="flex-col gap-2">
			{DB.filter(({ id }) => id >= rangeStart && id <= rangeEnd).map(
				({ id, name, types, stats }) => {
					return (
						<Link to={`/pokemon/${id}`} key={id}>
							<div
								className="items-center border gap-4 justify-around"
								style={{
									backgroundImage: `linear-gradient(to right, ${
										typeColors[types[0]].color
									}, ${
										types.length === 2
											? typeColors[types[1]].color
											: typeColors[types[0]].color
									})`,
									height: isMobile ? 100 : 80,
									padding: isMobile ? 10 : 25,
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
							</div>
						</Link>
					);
				}
			)}
		</div>
	);
}
