import { NextRequest, NextResponse } from 'next/server';
import { generateGuidanceCounselorResponse } from '@/lib/guidance-engine';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query = (body.query || '').trim();

    if (!query) {
      return NextResponse.json(
        { error: 'Please provide a valid question or career inquiry.' },
        { status: 400 }
      );
    }

    // Check if an external AI API key is configured in the environment
    const externalApiKey = process.env.CAREER_AI_API_KEY || process.env.OPENAI_API_KEY;

    if (externalApiKey && externalApiKey.startsWith('sk-')) {
      try {
        // External AI provider call (e.g. OpenAI format)
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${externalApiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              {
                role: 'system',
                content: 'You are an experienced, thoughtful, compassionate educational career counselor advising a student. Never use robotic or marketing cliches. Give realistic, practical guidance on subjects, degrees, entrance exams, and day-to-day realities. Keep your advice structured, encouraging, and honest.'
              },
              {
                role: 'user',
                content: query
              }
            ],
            temperature: 0.7,
            max_tokens: 650
          })
        });

        if (response.ok) {
          const data = await response.json();
          const aiText = data.choices?.[0]?.message?.content;
          if (aiText) {
            // Also retrieve contextual matched careers from the local directory
            const fallback = generateGuidanceCounselorResponse(query);
            return NextResponse.json({
              answer: aiText,
              matchedCareers: fallback.matchedCareers,
              followUpSuggestions: fallback.followUpSuggestions,
              source: 'external_counselor'
            });
          }
        }
      } catch (err) {
        console.warn('External AI call failed, falling back to built-in guidance engine:', err);
      }
    }

    // Default to the built-in domain counselor engine
    const guidanceResult = generateGuidanceCounselorResponse(query);
    return NextResponse.json({
      ...guidanceResult,
      source: 'built_in_advisor'
    });

  } catch (error) {
    console.error('Error in guidance API route:', error);
    return NextResponse.json(
      { error: 'An error occurred while generating career guidance.' },
      { status: 500 }
    );
  }
}
