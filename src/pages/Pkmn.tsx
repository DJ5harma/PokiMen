import { Link, Navigate } from "react-router-dom";
import DB from "../assets/pokemonDB.json";
import { pokemonCry, pokemonImage, scaleUpSound, typeColors } from "../utils";
import { useEffect, useState } from "react";

import speakerIcon from "../assets/speaker-icon.png";
import { isMobile } from "react-device-detect";

export default function Pkmn() {
	const pokemon = () => {
		const parts = window.location.pathname.split("/");
		const id = parseInt(parts[parts.length - 1]);
		return DB[id - 1];
	};
	const { id, name, types, stats } = pokemon();
	const [id_state, set_id_state] = useState(id);

	const sideImageSize = isMobile ? "25vw" : "15vw";
	const mainImageSize = isMobile ? "50vw" : "20vw";

	useEffect(() => {
		if (id_state < 1 || id_state > DB.length) {
			<Navigate to="not-found" />;
		}
		pokemonCry(id_state).play();
	}, [id_state]);

	const SidePokemon = ({
		side,
		forFuture,
	}: {
		side: number;
		forFuture: boolean;
	}) => (
		<Link
			to={`/pokemon/${id_state + side}`}
			onClick={() => set_id_state(id_state + side)}
		>
			<img
				className="pkmnPageImage"
				src={pokemonImage(id_state + side)}
				onMouseEnter={() => {
					scaleUpSound.currentTime = 0;
					scaleUpSound.play();
				}}
				style={{
					width: forFuture ? 0 : sideImageSize,
					height: sideImageSize,
				}}
			/>
		</Link>
	);

	const MainPokemon = () => (
		<div className="flex-col items-center gap-6">
			<img
				style={{ width: mainImageSize, height: mainImageSize }}
				className="border-2 rounded-xl"
				src={pokemonImage(id)}
			/>
			<div className="gap-4">
				{types.map((type) => (
					<p
						key={type}
						className="px-4 py-2 rounded-xl border-2 border-black"
						style={{
							backgroundColor: typeColors[type].color,
							color: typeColors[type].textColor,
						}}
					>
						{type}
					</p>
				))}
			</div>
		</div>
	);

	return (
		<div className="w-full flex-col items-center justify-around gap-6 mt-6">
			<div className="text-2xl gap-3">
				<h1>
					{id}. {name}
				</h1>
				<img
					onClick={() => pokemonCry(id_state).play()}
					width={30}
					src={speakerIcon}
					className="cursor-pointer rounded-3xl"
				/>
			</div>
			<div className="w-full items-center justify-around">
				<SidePokemon side={-2} forFuture={true} />
				{id_state >= 2 && <SidePokemon side={-1} forFuture={false} />}
				<MainPokemon />
				{id_state < DB.length && (
					<SidePokemon side={1} forFuture={false} />
				)}
				<SidePokemon side={2} forFuture={true} />
			</div>
			<div className="w-full justify-around">
				{Object.entries(stats).map(([key, val]) => (
					<div
						key={key}
						className="flex-col items-center border p-2 bg-neutral-100"
					>
						<p>{val}</p>
						<p>{key.toLocaleUpperCase()}</p>
					</div>
				))}
			</div>
		</div>
	);
}
