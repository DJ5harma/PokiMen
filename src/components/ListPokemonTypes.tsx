import { isMobile } from "react-device-detect";
import { typeColors } from "../utils";

export default function ListPokemonTypes({ types }: { types: string[] }) {
	return (
		<div
			style={{
				flexDirection: isMobile ? "column" : "row",
			}}
		>
			{types.map((type) => (
				<p
					key={type}
					className="px-4 py-2"
					style={{
						backgroundColor: typeColors[type].color,
						color: typeColors[type].textColor,
						fontSize: isMobile ? 12 : 15,
						padding: isMobile ? 8 : 10,
						width: 80,
						textAlign: "center",
					}}
				>
					{type}
				</p>
			))}
			{types.length === 1 && (
				<p
					className="px-4 py-2"
					style={{
						backgroundColor: typeColors[types[0]].color,
						color: typeColors[types[0]].textColor,
						fontSize: isMobile ? 12 : 15,
						padding: isMobile ? 8 : 10,
						width: 80,
						textAlign: "center",
					}}
				>
					None
				</p>
			)}
		</div>
	);
}
