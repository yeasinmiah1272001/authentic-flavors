import BottomNav from "./BottomNav";
import TopNav from "./TopNav";
const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <TopNav />
      <BottomNav />
    </div>
  );
};

export default Header;
