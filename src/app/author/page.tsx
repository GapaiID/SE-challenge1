import AuthorBioCard from '@/modules/author/AuthorBioCard';
import PostCards from '@/modules/author/PostCards';
import Footer from '@/modules/shared/components/Footer/Footer';
import DesktopHeader from '@/modules/shared/components/Header/DesktopHeader';
import MobileHeader from '@/modules/shared/components/Header/MobileHeader';

export default function Page() {
	return (
		<>
			<DesktopHeader />
			<MobileHeader />
			<AuthorBioCard />
			<PostCards />
			<Footer />
		</>
	);
}
