export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorPayload = await safeParseJSON(await response.text());
      const fallbackMessage =
        typeof errorPayload?.error === "string"
          ? errorPayload.error
          : "I encountered a temporary error. Please try asking again.";
      return fallbackMessage;
    }

    const payload = await response.json();
    if (typeof payload?.reply === "string" && payload.reply.trim().length > 0) {
      return payload.reply;
    }

    return "I apologize, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a temporary error. Please try asking again.";
  }
};

const safeParseJSON = (input: string) => {
  try {
    return JSON.parse(input);
  } catch (error) {
    console.warn("Unable to parse API error response", error);
    return null;
  }
};