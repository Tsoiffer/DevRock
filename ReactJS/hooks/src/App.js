import React from "react";
import "./App.css";

//Creando nuestro propio HOOK
function useCuenta(init, max) {
	const [cuenta, setCuenta] = React.useState(init);
	if (cuenta > max) {
		setCuenta(0);
	}
	return [cuenta, setCuenta];
}

//Usando el HOOK useState
function App() {
	const [cuenta, setCuenta] = useCuenta(0, 5);
	return (
		<button
			onClick={() => {
				setCuenta(cuenta + 1);
			}}
		>
			Sumar: {cuenta}
		</button>
	);
}

export default App;
