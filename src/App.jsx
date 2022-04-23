import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';

import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { Category } from './pages/Category.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { Recipe } from './pages/Recipe.jsx';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<main className='content container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='contacts' element={<Contact />} />
						<Route path='category/:name' element={<Category />} />
						<Route path='meal/:id' element={<Recipe />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
