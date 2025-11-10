import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Import all catalog pages
import page1 from "@/assets/catalog/page-1.jpg";
import page2 from "@/assets/catalog/page-2.jpg";
import page3 from "@/assets/catalog/page-3.jpg";
import page4 from "@/assets/catalog/page-4.jpg";
import page5 from "@/assets/catalog/page-5.jpg";
import page6 from "@/assets/catalog/page-6.jpg";
import page7 from "@/assets/catalog/page-7.jpg";
import page8 from "@/assets/catalog/page-8.jpg";
import page9 from "@/assets/catalog/page-9.jpg";
import page10 from "@/assets/catalog/page-10.jpg";
import page11 from "@/assets/catalog/page-11.jpg";
import page12 from "@/assets/catalog/page-12.jpg";
import page13 from "@/assets/catalog/page-13.jpg";
import page14 from "@/assets/catalog/page-14.jpg";
import page15 from "@/assets/catalog/page-15.jpg";
import page16 from "@/assets/catalog/page-16.jpg";
import page17 from "@/assets/catalog/page-17.jpg";
import page18 from "@/assets/catalog/page-18.jpg";
import page19 from "@/assets/catalog/page-19.jpg";
import page20 from "@/assets/catalog/page-20.jpg";
import page21 from "@/assets/catalog/page-21.jpg";
import page22 from "@/assets/catalog/page-22.jpg";
import page23 from "@/assets/catalog/page-23.jpg";
import page24 from "@/assets/catalog/page-24.jpg";
import page25 from "@/assets/catalog/page-25.jpg";

const Catalog = () => {
  const [selectedPage, setSelectedPage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGES_PER_VIEW = 6;

  const catalogPages = [
    { pageNumber: 1, image: page1 },
    { pageNumber: 2, image: page2 },
    { pageNumber: 3, image: page3 },
    { pageNumber: 4, image: page4 },
    { pageNumber: 5, image: page5 },
    { pageNumber: 6, image: page6 },
    { pageNumber: 7, image: page7 },
    { pageNumber: 8, image: page8 },
    { pageNumber: 9, image: page9 },
    { pageNumber: 10, image: page10 },
    { pageNumber: 11, image: page11 },
    { pageNumber: 12, image: page12 },
    { pageNumber: 13, image: page13 },
    { pageNumber: 14, image: page14 },
    { pageNumber: 15, image: page15 },
    { pageNumber: 16, image: page16 },
    { pageNumber: 17, image: page17 },
    { pageNumber: 18, image: page18 },
    { pageNumber: 19, image: page19 },
    { pageNumber: 20, image: page20 },
    { pageNumber: 21, image: page21 },
    { pageNumber: 22, image: page22 },
    { pageNumber: 23, image: page23 },
    { pageNumber: 24, image: page24 },
    { pageNumber: 25, image: page25 },
  ];

  const totalPages = Math.ceil(catalogPages.length / PAGES_PER_VIEW);
  const startIndex = (currentPage - 1) * PAGES_PER_VIEW;
  const endIndex = startIndex + PAGES_PER_VIEW;
  const paginatedPages = catalogPages.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Product Catalog
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse our complete catalog of CNC designs and patterns. Click any page to view in detail.
            </p>
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {paginatedPages.map((page) => (
              <div
                key={page.pageNumber}
                className="group cursor-pointer rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                onClick={() => setSelectedPage(page.pageNumber)}
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                  <img
                    src={page.image}
                    alt={`Catalog Page ${page.pageNumber}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-sm font-medium text-foreground">
                      Click to view larger
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-center">
                    Page {page.pageNumber}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mb-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={handlePrevious}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={handleNext}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Design?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? We specialize in creating custom CNC designs tailored to your exact specifications.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Image Dialog */}
      <Dialog open={selectedPage !== null} onOpenChange={() => setSelectedPage(null)}>
        <DialogContent className="max-w-4xl w-full p-0">
          {selectedPage && (
            <div className="relative">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-lg font-semibold">Page {selectedPage}</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const currentIndex = catalogPages.findIndex(p => p.pageNumber === selectedPage);
                      if (currentIndex > 0) {
                        setSelectedPage(catalogPages[currentIndex - 1].pageNumber);
                      }
                    }}
                    disabled={selectedPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const currentIndex = catalogPages.findIndex(p => p.pageNumber === selectedPage);
                      if (currentIndex < catalogPages.length - 1) {
                        setSelectedPage(catalogPages[currentIndex + 1].pageNumber);
                      }
                    }}
                    disabled={selectedPage === catalogPages.length}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <img
                  src={catalogPages.find(p => p.pageNumber === selectedPage)?.image}
                  alt={`Catalog Page ${selectedPage}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Catalog;
