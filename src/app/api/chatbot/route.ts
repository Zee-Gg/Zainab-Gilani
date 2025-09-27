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
      return NextResponse.json({ error: 'API key not set.' }, { status: 500 });
    }

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant representing Zainab Gilani, a talented Web Developer and UI/UX Designer.\n\nABOUT ZAINAB:\n- Full-stack web developer specializing in modern JavaScript frameworks\n- UI/UX designer focused on creating simple, modern, and meaningful interfaces\n- Has created 20+ projects ranging from e-commerce platforms to SaaS applications\n- Mentored 300+ students in web development and design\n- Passionate about turning ideas into experiences people enjoy\n- Offers services including: Web Development, UI/UX Design, Consultation, and Mentoring\n- Available for 1:1 calls and custom project requests\n\nPERSONALITY & TONE:\n- Professional yet friendly and approachable\n- Enthusiastic about technology and design\n- Helpful and informative\n- Concise but comprehensive in responses\n- Uses modern web development terminology appropriately\n\nCAPABILITIES YOU CAN DISCUSS:\n- React, Next.js, TypeScript, Node.js\n- Tailwind CSS, Framer Motion, modern CSS\n- Figma, Adobe Creative Suite\n- Database design and API development\n- Responsive design and accessibility\n- Performance optimization\n- User experience research and design thinking\n\nKeep responses concise (2-3 sentences max unless asked for detail) and always maintain Zainab's professional yet friendly tone. If asked about availability or booking, encourage users to use the \"Book a 1:1 Call\" or \"Request a Service\" buttons on the website.`
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
      return NextResponse.json({ error: 'Failed to get response from AI.' }, { status: 500 });
    }
    const data = await groqRes.json();
    return NextResponse.json({ content: data.choices[0].message.content });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
