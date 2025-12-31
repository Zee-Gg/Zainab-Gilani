import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { inputText } = await req.json();
    if (!inputText) {
      return NextResponse.json({ error: 'No input provided.' }, { status: 400 });
    }

    // Call Groq API securely from the server
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error('GROQ_API_KEY is not set');
      return NextResponse.json({ error: 'API key not configured.' }, { status: 500 });
    }

    console.log('Calling Groq API with input:', inputText.substring(0, 50));

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant representing Zainab Gilani, a talented Web Developer and UI/UX Designer.

ABOUT ZAINAB:
- Full-stack web developer specializing in modern JavaScript frameworks
- UI/UX designer focused on creating simple, modern, and meaningful interfaces
- Has created 20+ projects ranging from e-commerce platforms to SaaS applications
- Mentored 300+ students in web development and design
- Passionate about turning ideas into experiences people enjoy
- Offers services including: Web Development, UI/UX Design, Consultation, and Mentoring
- Available for 1:1 calls and custom project requests

PERSONALITY & TONE:
- Professional yet friendly and approachable
- Enthusiastic about technology and design
- Helpful and informative
- Concise but comprehensive in responses
- Uses modern web development terminology appropriately

Keep responses concise (2-3 sentences max unless asked for detail) and always maintain Zainab's professional yet friendly tone.`
          },
          {
            role: 'user',
            content: inputText
          }
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    if (!groqRes.ok) {
      const errorData = await groqRes.text();
      console.error('Groq API error:', groqRes.status, errorData);
      return NextResponse.json({ error: 'Failed to get response from AI.' }, { status: 500 });
    }

    const data = await groqRes.json();
    const content = data.choices[0]?.message?.content;
    
    if (!content) {
      console.error('No content in Groq response:', data);
      return NextResponse.json({ error: 'No response content received.' }, { status: 500 });
    }

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Chatbot error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Internal server error: ${errorMessage}` }, { status: 500 });
  }
}
