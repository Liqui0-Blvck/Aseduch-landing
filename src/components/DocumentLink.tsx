import type { ReactNode } from 'react';
import { FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import { openDocumentInViewer } from '../utils/documentUtils';

interface DocumentLinkProps {
  /** The URL or path to the document */
  url: string;
  /** The text to display for the link */
  children: ReactNode;
  /** Whether to show the document in a new tab (default: true) */
  newTab?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show a download button (default: false) */
  showDownload?: boolean;
  /** Whether to show an external link icon (default: true) */
  showExternalIcon?: boolean;
  /** The file name to use when downloading (optional) */
  downloadName?: string;
}

/**
 * A component for linking to documents with consistent behavior
 */
export function DocumentLink({
  url,
  children,
  newTab = true,
  className = 'text-blue-600 hover:underline',
  showDownload = false,
  showExternalIcon = true,
  downloadName,
}: DocumentLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    // Only handle the click if it's not a right-click or cmd/ctrl click
    if (e.metaKey || e.ctrlKey || e.button === 1) {
      return; // Let the browser handle the click (open in new tab)
    }

    e.preventDefault();
    openDocumentInViewer(url);
  };

  return (
    <div className="inline-flex items-center">
      <a
        href={url}
        onClick={handleClick}
        className={className}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        download={downloadName}
      >
        {children}
        {showExternalIcon && (
          <FaExternalLinkAlt className="inline-block ml-1 text-xs opacity-70" />
        )}
      </a>
      {showDownload && (
        <a
          href={url}
          download={downloadName}
          className="ml-2 text-gray-500 hover:text-gray-700"
          title="Descargar documento"
          aria-label="Descargar documento"
        >
          <FaDownload className="text-sm" />
        </a>
      )}
    </div>
  );
}

/**
 * A button that opens a document in the document viewer
 */
export function DocumentButton({
  url,
  children,
  className = 'text-blue-600 hover:text-blue-800 font-medium',
  icon: Icon = FaExternalLinkAlt,
  iconPosition = 'right',
}: Omit<DocumentLinkProps, 'showDownload' | 'showExternalIcon'> & {
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: 'left' | 'right';
}) {
  return (
    <button
      onClick={() => openDocumentInViewer(url)}
      className={`inline-flex items-center ${className}`}
    >
      {iconPosition === 'left' && Icon && (
        <Icon className="mr-2" />
      )}
      {children}
      {iconPosition === 'right' && Icon && (
        <Icon className="ml-2" />
      )}
    </button>
  );
}
