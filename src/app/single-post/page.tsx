import DesktopHeader from '@/modules/shared/components/Header/DesktopHeader';
import PostContent from '@/modules/single-post/PostContent';
import Footer from '@/modules/shared/components/Footer/Footer';
import MobileHeader from '@/modules/shared/components/Header/MobileHeader';

export default function Page() {
	return (
		<>
			<DesktopHeader />
			<MobileHeader />
			<PostContent />
			<Footer />
		</>
	);
}
