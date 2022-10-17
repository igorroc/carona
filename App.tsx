
import THEME from "./src/theme"


export default function App() {
	return (
		<ThemeProvider theme={THEME}>
			<Home />
		</ThemeProvider>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
