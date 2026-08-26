import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="section-content max-w-3xl">
        <p className="section-index mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-semibold heading-font text-foreground mb-4">
          Page not found
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md">
          That URL does not exist. Head back home or browse the writing.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link to="/" className="text-primary hover:underline underline-offset-4">
            Home
          </Link>
          <span className="text-muted-foreground" aria-hidden>
            ·
          </span>
          <Link to="/dsa" className="text-primary hover:underline underline-offset-4">
            DSA
          </Link>
          <span className="text-muted-foreground" aria-hidden>
            ·
          </span>
          <Link to="/blog" className="text-primary hover:underline underline-offset-4">
            Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
