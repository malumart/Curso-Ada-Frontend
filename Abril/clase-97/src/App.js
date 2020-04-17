import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MovieContainer = styled.section`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const Movie = styled.article`
	width: 180px;
	margin: 20px;

	img {
		width: 100%;
		height: auto;
	}
`;

const Modal = styled.div`
	border: 1px solid #ccc;
	padding: 20px;
	border-radius: 20px;
	position: absolute;
	right: 30%;
	background-color: #fff;
	height: 600px;
	width: 700px;

	img {
		width: 200px;
		height: auto;
	}
`;

const App = () => {
	const [listaDePeliculas, setListaDePeliculas] = useState([]);
	const [modalAbierto, setModalAbierto] = useState(false);
	const [peliculaElegida, setPeliculaElegida] = useState({});
	const [generos, setGeneros] = useState([]);
	const [generosPeliculaElegida, setGenerosPeliculaElegida] = useState([]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=3bc1034e19666dfcffe8bc51e6a49d97`
		)
			.then((res) => res.json())
			.then((data) => setListaDePeliculas(data.results));
	}, []);

	const handleClick = (pelicula) => {
		setPeliculaElegida(pelicula);
		fetch(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=3bc1034e19666dfcffe8bc51e6a49d97&language=en-US`
		)
			.then((res) => res.json())
			.then((data) => setGeneros(data.genres));
		handleClickModal();
		setGenerosPeliculaElegida(
			generos.filter((genero) => {
				return peliculaElegida.genre_ids.includes(genero.id);
			})
		);
	};

	const handleClickModal = () => {
		setModalAbierto(!modalAbierto);
	};

	return (
		<>
			<button onClick={handleClickModal}>Abrir modal</button>
			{modalAbierto && (
				<Modal>
					<button onClick={handleClickModal}>x</button>
					<h3>{peliculaElegida.title}</h3>
					<img
						alt="caratula de pelicula"
						src={`https://image.tmdb.org/t/p/w500${peliculaElegida.poster_path}`}
					/>
					<p>Resumen: {peliculaElegida.overview}</p>
					<p>Fecha de lanzamiento: {peliculaElegida.release_date}</p>
					<p>
						Generos:
						{generosPeliculaElegida.map((generos) => generos.name).join(", ")}
					</p>
				</Modal>
			)}

			<MovieContainer>
				{listaDePeliculas.map((pelicula, i) => (
					<Movie key={i} onClick={() => handleClick(pelicula)}>
						<p> {pelicula.title}</p>
						<img
							alt="caratula de pelicula"
							src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
						/>
					</Movie>
				))}
			</MovieContainer>
		</>
	);
};

export default App;
