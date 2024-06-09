import { isMobile } from "react-device-detect";
import { pokemonImage, typeColors } from "../utils";

export default function ListPokemonIdAndImage({
	types,
	id,
	name,
}: {
	types: string[];
	id: number;
	name: string;
}) {
	return (
		<div
			className="items-center"
			style={{
				flexDirection: isMobile ? "column" : "row",
				width: isMobile ? 110 : 220,
			}}
		>
			<p
				style={{
					fontSize: isMobile ? 10 : "default",
					width: isMobile ? "default" : 120,
					color: typeColors[types[0]].textColor,
				}}
			>
				{id}. {name}{" "}
			</p>
			<img
				src={pokemonImage(id)}
				width={isMobile ? 80 : 140}
				style={{
					margin: isMobile ? "-8px 0" : 0,
				}}
			/>
		</div>
	);
}
