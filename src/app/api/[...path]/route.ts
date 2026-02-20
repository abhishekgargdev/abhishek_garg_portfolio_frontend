import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:3000';

async function proxyRequest(req: NextRequest): Promise<NextResponse> {
  // Strip the /api prefix to get the NestJS path
  const nestPath = req.nextUrl.pathname.replace(/^\/api/, '');
  const targetUrl = `${BACKEND_URL}${nestPath}${req.nextUrl.search}`;

  const headers = new Headers(req.headers);

  // Remove host header to avoid conflicts
  headers.delete('host');

  let body: BodyInit | undefined;

  const contentType = req.headers.get('content-type') ?? '';
  if (!['GET', 'HEAD'].includes(req.method)) {
    if (contentType.includes('multipart/form-data')) {
      // Let fetch handle FormData boundary automatically
      headers.delete('content-type');
      body = await req.formData();
    } else {
      body = await req.text();
    }
  }

  try {
    const backendResponse = await fetch(targetUrl, {
      method: req.method,
      headers,
      body,
      // Disable Next.js default cache — always fresh
      cache: 'no-store',
    });

    const responseData = await backendResponse.arrayBuffer();

    return new NextResponse(responseData, {
      status: backendResponse.status,
      statusText: backendResponse.statusText,
      headers: {
        'Content-Type': backendResponse.headers.get('content-type') ?? 'application/json',
      },
    });
  } catch (error) {
    console.error('[Proxy Error]', error);
    return NextResponse.json({ message: 'Failed to reach backend server' }, { status: 502 });
  }
}

export const GET = proxyRequest;
export const POST = proxyRequest;
export const PUT = proxyRequest;
export const PATCH = proxyRequest;
export const DELETE = proxyRequest;
