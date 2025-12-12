import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent');
  const iOSRegex = /iPhone|iPad|iPod/i;
  const destinationUrl = 'https://www2.younginglewood.com/'; // The domain you want to redirect to

  // Get the full URL object from the request
  const url = request.nextUrl;

  // Get the hostname (domain name without the port)
  const domainName = url.hostname;
  console.log('Domain Name:', domainName);

  if (userAgent && iOSRegex.test(userAgent) && domainName != 'www2.younginglewood.com') {
    // Construct the full destination URL including the original path and query parameters
    const url = new URL(request.nextUrl.pathname, destinationUrl);
    url.search = request.nextUrl.search;
    
    // Perform a temporary (307) or permanent (308) redirect
    // Use 307 for temporary redirects that are not cached by browsers
    return NextResponse.redirect(url); 
  }

  // If not iOS, continue to the original page
  return NextResponse.next();
}