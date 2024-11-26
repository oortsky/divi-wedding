import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

const BottomNav = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  console.log(pathname);

  const key = searchParams.get("key");

  return (
    <div className="btm-nav">
      <button className={pathname == `/dashboard` ? "active" : ""}>
        <Link href={`/dashboard?key=${key}`}>
          <span className="btm-nav-label">Home</span>
        </Link>
      </button>
      <button
        className={pathname == `/dashboard/links` ? "active" : ""}
      >
        <Link href={`/dashboard/links?key=${key}`}>
          <span className="btm-nav-label">Utils</span>
        </Link>
      </button>
    </div>
  );
};

export default BottomNav;
