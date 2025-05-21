/**
 * Gets the URL for viewing a document in the document viewer
 * @param documentPath The path to the document (can be relative or absolute)
 * @returns URL for the document viewer
 */
export function getDocumentViewerUrl(documentPath: string): string {
  // If it's already a full URL, use it as is
  if (documentPath.startsWith('http') || documentPath.startsWith('blob:')) {
    return documentPath;
  }
  
  // If it's a relative path, make sure it starts with a slash
  const normalizedPath = documentPath.startsWith('/') ? documentPath : `/${documentPath}`;
  
  // Encode the full URL to handle special characters
  const fullUrl = `${window.location.origin}${normalizedPath}`;
  return `/documento/${encodeURIComponent(fullUrl)}`;
}

/**
 * Opens a document in a new tab using the document viewer
 * @param documentPath The path to the document
 */
export function openDocumentInViewer(documentPath: string): void {
  const viewerUrl = getDocumentViewerUrl(documentPath);
  window.open(viewerUrl, '_blank', 'noopener,noreferrer');
}
