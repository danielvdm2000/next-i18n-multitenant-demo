import { NextRequest, NextResponse } from 'next/server'
import { getSubdomain } from 'tldts';

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) return;

  // Get the host
  const host = req.headers.get('host');
  if (typeof host !== 'string') throw new Error('No host found in request');

  // Get subdomain
  const subdomain = getSubdomain(host);

  // Rewrite the url
  const url = req.nextUrl;
  url.pathname = `/_sites/${subdomain}${url.pathname}`;
  return NextResponse.rewrite(url);
}