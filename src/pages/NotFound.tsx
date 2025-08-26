import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className='min-h-screen bg-background'>
      <Navigation />

      <main className='flex-1 flex items-center justify-center px-4 py-16'>
        <div className='text-center max-w-2xl mx-auto'>
          {/* Animated 404 */}
          <div className='relative mb-8'>
            <h1 className='text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-br from-primary via-accent to-success bg-clip-text animate-bounce-in'>
              404
            </h1>
            <div className='absolute -top-4 -right-4 animate-pulse'>
              <Heart className='w-8 h-8 text-accent fill-accent' />
            </div>
          </div>

          {/* Message */}
          <div className='animate-fade-in animation-delay-200'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Oops! This path leads nowhere
            </h2>
            <p className='text-lg text-muted-foreground mb-2'>
              It looks like the page you're looking for doesn't exist.
            </p>
            <p className='text-muted-foreground mb-8'>
              But don't worry—our mission to empower communities continues on
              every other page!
            </p>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400'>
            <Button asChild variant='hero' size='lg'>
              <Link to='/'>
                <Home className='w-5 h-5' />
                Return Home
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              onClick={() => window.history.back()}>
              <span className='cursor-pointer'>
                <ArrowLeft className='w-5 h-5' />
                Go Back
              </span>
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60'>
            <div className='text-center animate-fade-in animation-delay-600'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                <span className='text-2xl'>🏠</span>
              </div>
              <p className='text-sm text-muted-foreground'>Home</p>
            </div>
            <div className='text-center animate-fade-in animation-delay-700'>
              <div className='w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                <span className='text-2xl'>🌱</span>
              </div>
              <p className='text-sm text-muted-foreground'>Impact</p>
            </div>
            <div className='text-center animate-fade-in animation-delay-800'>
              <div className='w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                <span className='text-2xl'>🤝</span>
              </div>
              <p className='text-sm text-muted-foreground'>Partners</p>
            </div>
            <div className='text-center animate-fade-in animation-delay-900'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                <span className='text-2xl'>💬</span>
              </div>
              <p className='text-sm text-muted-foreground'>Stories</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
