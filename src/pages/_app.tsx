import "../css/styles.css";

function MyApp({ Component, pageProps }) {
	return(
		<>
			<Component {...pageProps} />
			<div id="refresh">
				<a href="/">Back to Login</a>
			</div>
		</>
	);
}

export default MyApp;
