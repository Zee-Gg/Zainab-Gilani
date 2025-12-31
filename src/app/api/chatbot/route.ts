import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { inputText } = await req.json();
    if (!inputText || typeof inputText !== 'string') {
      return NextResponse.json({ error: 'Invalid input provided.' }, { status: 400 });
    }

    // Call Groq API securely from the server
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey || apiKey.trim() === '') {
      console.error('GROQ_API_KEY is not set or empty');
      return NextResponse.json({ error: 'API key not configured.' }, { status: 500 });
    }

    console.log('Calling Groq API with input:', inputText.substring(0, 50));

    const requestBody = {
      model: 'llama-3.1-70b-versatile',
      messages: [
        {
          role: 'system',
          content: 'You are Zainab\'s AI assistant. Keep responses concise and friendly. Represent Zainab as a web developer and UI/UX designer.'
        },
        {
          role: 'user',
          content: inputText
        }
      ],
      max_tokens: 150,
      temperature: 0.7
    };

    console.log('Request body:', JSON.stringify(requestBody).substring(0, 100));

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    console.log('Groq response status:', groqRes.status);

    if (!groqRes.ok) {
      const errorText = await groqRes.text();
      console.error('Groq API error:', groqRes.status);
      console.error('Groq error response:', errorText);
      
      try {
        const errorData = JSON.parse(errorText);
        const errorMsg = errorData.error?.message || errorText;
        return NextResponse.json({ 
          error: `Groq API error: ${groqRes.status}`,
          details: errorMsg
        }, { status: 500 });
      } catch {
        return NextResponse.json({ 
          error: `Groq API error: ${groqRes.status}`,
          details: errorText.substring(0, 200)
        }, { status: 500 });
      }
    }

    const data = await groqRes.json();
    console.log('Groq response data received');
    
    const content = data.choices?.[0]?.message?.content;
    
    if (!content) {
      console.error('No content in Groq response:', JSON.stringify(data).substring(0, 200));
      return NextResponse.json({ error: 'No response content received.' }, { status: 500 });
    }

    console.log('Successfully generated response');
    return NextResponse.json({ content });
  } catch (error) {
    console.error('Chatbot error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Full error:', errorMessage);
    return NextResponse.json({ 
      error: `Internal server error`,
      details: errorMessage
    }, { status: 500 });
  }
}
