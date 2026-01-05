import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

/**
 * @param {Array} moods
 * @returns {Object}
 */
export const analyzeMoodPatterns = async (moods) => {
  if (!moods || moods.length === 0) {
    return { summary: "No mood data available to analyze." };
  }

  const moodText = moods
    .map((m) => `Date: ${new Date(m.date).toLocaleDateString()}, Mood: ${m.mood}, Note: ${m.note || "-"}`)
    .join("\n");

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant that analyzes user mood data and provides insights."
        },
        {
          role: "user",
          content: `Analyze the following user mood entries and provide a concise summary with patterns, advice, and observations:\n${moodText}`
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const summary = completion.choices[0].message.content.trim();
    return { summary };
  } catch (error) {
    console.error("Error analyzing moods:", error);
    return { summary: "Failed to analyze moods. Please try again later." };
  }
};
