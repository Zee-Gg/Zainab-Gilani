import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  console.log('=== Chatbot API Called ===');
  
  try {
    const body = await req.json();
    console.log('Request body received:', typeof body);
    
    const { inputText } = body;
    
    if (!inputText || typeof inputText !== 'string') {
      console.error('Invalid input:', inputText);
      return NextResponse.json(
        { error: 'Invalid input provided.', status: 'error' }, 
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;
    console.log('API Key exists:', !!apiKey);
    
    if (!apiKey || apiKey.trim() === '') {
      console.error('GROQ_API_KEY is missing');
      return NextResponse.json(
        { error: 'API key not configured.', status: 'error' }, 
        { status: 500 }
      );
    }

    console.log('Input text:', inputText.substring(0, 30) + '...');

    const requestPayload = {
      model: 'llama-3.1-8b-instant',
      messages: [
        {
          role: 'system',
          content: `You are the AI assistant for Zainab Gilani's personal portfolio website. Your goal is to help visitors learn about Zainab, her projects, skills, and services.

          About Zainab Gilani:
          - A passionate Full Stack Developer and UI/UX Designer.
          - Specializes in building modern, responsive, and user-friendly web applications.
          - Experienced with Next.js, React, TypeScript, Tailwind CSS, and Node.js.
          - Focuses on creating seamless digital experiences that solve real-world problems.

          Projects:
          1. TechVision (Electronics Store):
             - A modern e-commerce platform for electronics.
             - Features: Product catalog, shopping cart, user authentication, and secure checkout.
             - Tech Stack: Next.js, Tailwind CSS, Stripe.
             - Image: /TV.png

          2. AskPDF (AI PDF Chat):
             - An AI-powered tool that allows users to chat with their PDF documents.
             - Features: PDF upload, text extraction, AI-based Q&A.
             - Tech Stack: Python, LangChain, OpenAI API.
             - Image: /AskPDF.png

          3. Lushscape (Gardening Store):
             - An online store for gardening supplies and plants.
             - Features: Beautiful UI, plant care guides, and inventory management.
             - Tech Stack: React, Node.js, MongoDB.
             - Image: /Lushscape.png

          4. SwiftLink (URL Shortener):
             - A fast and efficient URL shortening service.
             - Features: Custom aliases, analytics dashboard, and QR code generation.
             - Tech Stack: Next.js, PostgreSQL, Prisma.
             - Image: /SL.png

          5. DocuPrint (Printing Service):
             - A web app for ordering custom printing services.
             - Features: File upload, print customization, and order tracking.
             - Tech Stack: Vue.js, Firebase.
             - Image: /DP.png

          6. PixelPerfect (Design Portfolio):
             - A showcase of creative design work.
             - Features: Gallery view, project details, and contact form.
             - Tech Stack: HTML, CSS, JavaScript.
             - Image: /PP.png

          7. AutoBazaar (Car Marketplace):
             - A platform for buying and selling cars.
             - Features: Advanced search filters, user listings, and messaging system.
             - Tech Stack: MERN Stack (MongoDB, Express, React, Node.js).
             - Image: /AB.png

          Services:
          - Web Development: Building responsive and performant websites.
          - UI/UX Design: Creating intuitive and visually appealing interfaces.
          - Full Stack Solutions: End-to-end development from database to frontend.
          - API Integration: Connecting third-party services and APIs.

          Contact:
          - Encourage users to use the "Contact Me" section on the website.
          - Mention that Zainab is open to freelance opportunities and collaborations.

          Tone:
          - Professional, friendly, and helpful.
          - Keep responses concise (2-3 sentences) unless asked for detailed information.
          - If you don't know the answer, politely suggest contacting Zainab directly.`
        },
        {
          role: 'user',
          content: inputText
        }
      ],
      max_tokens: 150,
      temperature: 0.7
    };

    console.log('Making Groq API call...');

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestPayload)
    });

    console.log('Groq response status:', groqRes.status);

    if (!groqRes.ok) {
      const errorText = await groqRes.text();
      console.error('Groq API error response:', errorText);
      
      return NextResponse.json(
        { 
          error: `API returned ${groqRes.status}`,
          details: errorText,
          status: 'error'
        }, 
        { status: 500 }
      );
    }

    const groqData = await groqRes.json();
    console.log('Groq response received');

    const content = groqData.choices?.[0]?.message?.content;
    
    if (!content) {
      console.error('No content in response:', groqData);
      return NextResponse.json(
        { error: 'No response generated', status: 'error' }, 
        { status: 500 }
      );
    }

    console.log('Response generated successfully');
    return NextResponse.json({ 
      content,
      status: 'success'
    });

  } catch (error) {
    console.error('=== ERROR in chatbot API ===');
    console.error('Error type:', error instanceof Error ? 'Error' : typeof error);
    
    if (error instanceof SyntaxError) {
      console.error('JSON parsing error:', error.message);
      return NextResponse.json(
        { error: 'Invalid JSON in request', status: 'error' },
        { status: 400 }
      );
    }

    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error('Error message:', errorMsg);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: errorMsg,
        status: 'error'
      },
      { status: 500 }
    );
  }
}
