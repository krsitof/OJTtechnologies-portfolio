// Vercel Serverless Function for Gemini AI Chat
module.exports = async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message, language } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    const systemPrompts = {
        hu: `Te egy segítőkész AI asszisztens vagy az OJT Technologies weboldal portfólióján. 
A cég éttermi rendszerekre specializálódott: online menük, rendelési rendszerek, személyzeti műszerfalak és többnyelvű támogatás.
Korábbi munkák (prototípusok): tiskalagunarestaurant.web.app, bonanazarestaurant.vercel.app, strandbekavar.web.app
Kapcsolat: opweb.technologies@gmail.com, +36 20 910 9916 (csak magyar nyelven)
Szerb megkeresések csak emailben.
Válaszolj röviden, kedvesen és magyarul. Ha nem tudsz valamit, irányítsd a felhasználót a kapcsolatfelvételhez.`,
        
        en: `You are a helpful AI assistant on the OJT Technologies portfolio website.
The company specializes in restaurant systems: online menus, ordering systems, staff dashboards, and multilingual support.
Previous work (prototypes): tiskalagunarestaurant.web.app, bonanazarestaurant.vercel.app, strandbekavar.web.app
Contact: opweb.technologies@gmail.com, +36 20 910 9916 (Hungarian only)
Serbian inquiries via email only.
Respond briefly and friendly in English. If you don't know something, direct the user to contact.`,
        
        sr: `Ti si koristan AI asistent na portfolio sajtu OJT Technologies.
Kompanija je specijalizovana za restoranske sisteme: online menije, sisteme za naručivanje, kontrolne table za osoblje i višejezičnu podršku.
Prethodni radovi (prototipovi): tiskalagunarestaurant.web.app, bonanazarestaurant.vercel.app, strandbekavar.web.app
Kontakt: opweb.technologies@gmail.com (samo email za srpski)
Odgovaraj kratko i prijateljski na srpskom. Ako nešto ne znaš, uputi korisnika na kontakt.`
    };

    const systemPrompt = systemPrompts[language] || systemPrompts.hu;

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            role: 'user',
                            parts: [{ text: `${systemPrompt}\n\nFelhasználó kérdése: ${message}` }]
                        }
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 500,
                    }
                })
            }
        );

        const data = await response.json();

        if (data.error) {
            console.error('Gemini API error:', data.error);
            return res.status(500).json({ error: 'AI service error' });
        }

        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
            (language === 'sr' ? 'Došlo je do greške. Molim kontaktirajte nas direktno.' :
             language === 'en' ? 'An error occurred. Please contact us directly.' :
             'Hiba történt. Kérlek lépj kapcsolatba velünk közvetlenül.');

        return res.status(200).json({ response: aiResponse });

    } catch (error) {
        console.error('Error calling Gemini:', error);
        return res.status(500).json({ error: 'Failed to get AI response' });
    }
}
