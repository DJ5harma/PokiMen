import scaleUpAudio from "./assets/cartoon-jump.mp3";
import backgroundMusic from "./assets/Littleroot Town.mp3";
import notificationSound from "./assets/notification-sound.mp3";

export const pokemonImage = (id: number) => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};
export const pokemonCry = (id: number) => {
	return new Audio(
		`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`
	);
};
export const scaleUpSound = new Audio(scaleUpAudio);
export const bgM = new Audio(backgroundMusic);
export const clickSound = new Audio(notificationSound);

export const typeColors: {
	[key: string]: { textColor: string; color: string };
} = {
	Grass: { textColor: "white", color: "green" },
	Electric: { textColor: "black", color: "rgb(247, 247, 14)" },
	Poison: { textColor: "white", color: "purple" },
	Fire: { textColor: "black", color: "rgb(255, 136, 0)" },
	Fairy: { textColor: "black", color: "rgb(239, 133, 151)" },
	Flying: { textColor: "white", color: "cornflowerblue" },
	Dragon: { textColor: "white", color: "blue" },
	Psychic: { textColor: "black", color: "hotpink" },
	Ice: { textColor: "black", color: "rgb(84, 182, 182)" },
	Normal: { textColor: "white", color: "rgb(181, 150, 121)" },
	Rock: { textColor: "white", color: "darkgoldenrod" },
	Ground: { textColor: "white", color: "rgb(187, 144, 88)" },
	Fighting: { textColor: "white", color: "brown" },
	Water: { textColor: "white", color: "dodgerblue" },
	Bug: { textColor: "white", color: "rgb(106, 174, 38)" },
	Dark: { textColor: "white", color: "rgb(46, 43, 43)" },
	Steel: { textColor: "black", color: "rgb(186, 185, 185)" },
	Ghost: { textColor: "white", color: "rgb(97, 10, 97)" },
};
