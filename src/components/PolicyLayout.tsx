import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface PolicyLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  lastUpdated?: string;
}

export function PolicyLayout({ 
  title, 
  subtitle, 
  children, 
  lastUpdated = 'August 14, 2025' 
}: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-background pt-8 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>
        
        <div className="bg-card rounded-lg shadow-sm border p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>}
          
          {lastUpdated && (
            <div className="text-sm text-muted-foreground mb-8 border-b pb-4">
              Last updated: {lastUpdated}
            </div>
          )}
          
          <div className="prose prose-slate max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-foreground">{title}</h2>
      <div className="space-y-4 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

interface PolicyTextProps {
  children: ReactNode;
  className?: string;
}

export function PolicyText({ children, className = '' }: PolicyTextProps) {
  return <p className={`text-muted-foreground leading-relaxed mb-4 ${className}`.trim()}>{children}</p>;
}
