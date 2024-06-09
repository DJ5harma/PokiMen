import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Pkmn from "./pages/Pkmn";
import PkmnList from "./pages/PkmnList";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
	return (
		<div className="w-full h-full flex-col">
			<Nav />
			<div className="pt-8 mt-8">
				<Routes>
					<Route
						index
						element={<Navigate to="/pokemon/25" replace />}
					/>
					<Route path="/pokemon/:id" element={<Pkmn />} />
					<Route
						path="/pokemon-list"
						element={<Navigate to="/pokemon-list/0-15" replace />}
					/>
					<Route path="/pokemon-list/:range" element={<PkmnList />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
