export const proxyErrorCatalog = {
  SERVICE_WORKER_NOT_READY: {
    title: 'Proxy service worker did not take control',
    message: 'The browser has not connected Nova to its proxy service worker.',
    nextStep: 'Reload Nova and wait until the proxy status says Ready before opening a site.',
  },
  SCRAMJET_REQUEST_BYPASSED: {
    title: 'Proxy request bypassed the service worker',
    message: 'Nova received its own Scramjet URL as a normal web request. The service worker did not intercept it.',
    nextStep: 'Reload Nova. If this repeats, clear site data for localhost and reopen the app.',
  },
  UPSTREAM_HTTP2_RESET: {
    title: 'The transport reset its HTTP/2 connection',
    message: 'The secure upstream request failed with an HTTP/2 protocol reset.',
    nextStep: 'Nova now uses Libcurl transport. Reload and retry; if it repeats, share the newest error details.',
  },
  UPSTREAM_HTTP_STATUS: {
    title: 'The website returned an HTTP error',
    message: 'The remote website returned an error status for this request.',
    nextStep: 'If the main page is a 404, try the site’s home page or a current page URL. A failed image or script may not stop the page from working.',
  },
  UPSTREAM_RESOURCE_FAILED: {
    title: 'Some site content could not load',
    message: 'One image, script, video, or other page resource failed. The main page may still work.',
    nextStep: 'If anything is missing, reload the site. If the page looks right, this resource failure may be harmless.',
  },
  UPSTREAM_REQUEST_FAILED: {
    title: 'The page request failed',
    message: 'Nova could not complete the main website page request.',
    nextStep: 'Reload the page and retry. If it repeats, share the full error shown here.',
  },
  PROXY_START_FAILED: {
    title: 'Proxy startup failed',
    message: 'Nova could not initialize the browser proxy.',
    nextStep: 'Reload the page and check the browser console for the underlying startup error.',
  },
  SCRIPT_ERROR: {
    title: 'Nova script error',
    message: 'A JavaScript error stopped part of Nova from working.',
    nextStep: 'Reload Nova. If it repeats, open this list and share the error details.',
  },
  UNHANDLED_REJECTION: {
    title: 'Nova background task failed',
    message: 'A background promise failed without a local error handler.',
    nextStep: 'Reload Nova. If it repeats, open this list and share the error details.',
  },
};

export function explainProxyError(code) {
  return proxyErrorCatalog[code] || {
    title: 'Unknown proxy error',
    message: 'Nova received an error it does not recognize yet.',
    nextStep: 'Copy the details from this list and share them so the error can be identified.',
  };
}
