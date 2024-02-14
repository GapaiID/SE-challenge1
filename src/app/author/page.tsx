import AuthorBioCard from '@/modules/author/AuthorBioCard';
import Footer from '@/modules/shared/components/Footer/Footer';
import Header from '@/modules/shared/components/Header/Header';

export default function Page() {
	return (
		<>
			<Header />
			<AuthorBioCard />
			<Footer />
		</>
	);
}
