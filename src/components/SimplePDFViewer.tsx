import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, X, Loader2 } from 'lucide-react';
import { Button } from './ui/button';

interface SimplePDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

const SimplePDFViewer: React.FC<SimplePDFViewerProps> = ({ isOpen, onClose, pdfUrl, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device on component mount
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Reset state when modal is opened
      setIsLoading(true);
      setHasError(false);
      // Disable body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to re-enable scroll if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const openInNewTab = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  }

  const showFallback = isMobile || hasError;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-6xl h-[90vh] bg-background rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
          <h2 className="text-lg font-semibold truncate pr-4">{title}</h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handleDownload} aria-label="Baixar PDF">
              <Download className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={openInNewTab} aria-label="Abrir em nova aba">
              <ExternalLink className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Fechar">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Body */}
        <div className="flex-grow relative overflow-hidden">
          {isLoading && !showFallback && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80">
              <Loader2 className="w-8 h-8 animate-spin mb-4 text-primary" />
              <p className="text-muted-foreground">Carregando PDF...</p>
            </div>
          )}

          {showFallback ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-muted">
                 <h3 className="text-xl font-semibold mb-2">
                    {hasError ? "Houve um erro ao carregar o PDF" : "Visualização indisponível no celular"}
                </h3>
                <p className="text-muted-foreground mb-6">
                    {hasError ? "Tente baixar ou abrir em uma nova aba." : "Para uma melhor experiência, por favor, use um computador."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={openInNewTab}>
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Abrir em Nova Aba
                    </Button>
                    <Button size="lg" variant="secondary" onClick={handleDownload}>
                        <Download className="w-5 h-5 mr-2" />
                        Baixar PDF
                    </Button>
                </div>
            </div>
          ) : (
            <iframe
              src={pdfUrl}
              className="w-full h-full border-none"
              title={title}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SimplePDFViewer; 