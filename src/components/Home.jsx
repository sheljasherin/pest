import { useState } from "react";

function home() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "നമസ്കാരം! നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?" },
  ]);

  const toggleChatbot = () => setShowChatbot(!showChatbot);

  // Malayalam chatbot responses
  const chatbotReplies = {
    "പീടികയെ എങ്ങനെ നിയന്ത്രിക്കാം?": "പീടിക നിയന്ത്രണത്തിനായി ജൈവ കീടനാശിനികളും അനുയോജ്യമായ കൃഷി രീതികളും പിന്തുടരാം.",
    "കൃഷി മെച്ചപ്പെടുത്താൻ എന്ത് ചെയ്യാം?": "നിങ്ങളുടെ കൃഷി മെച്ചപ്പെടുത്താൻ നല്ല ഗുണമേന്മയുള്ള വിത്തുകളും ജൈവ വളവും ഉപയോഗിക്കാം.",
    "വേനൽക്കാലത്ത് കൃഷി എങ്ങനെ സംരക്ഷിക്കാം?": "വേനൽക്കാലത്ത് ചെടികൾക്ക് ആവശ്യമായ ജലം നൽകുക, മുളചിംഗ് ഉപയോഗിക്കുക.",
    "ഇന്ന് കൃഷിയുമായി ബന്ധപ്പെട്ട വാർത്തകൾ?": "ഇപ്പോൾ പുതിയ കൃഷിയുമായി ബന്ധപ്പെട്ട വാർത്തകൾ കാണാനാവശ്യമായ ആപ്പുകൾ ഉപയോഗിക്കുക.",
  };

  // Handle user input
  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    const userMessage = { type: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);

    const reply = chatbotReplies[userInput] || "ക്ഷമിക്കണം, എനിക്ക് അതറിയില്ല.";
    setMessages((prev) => [...prev, { type: "bot", text: reply }]);

    setUserInput("");
  };

  return (
    <>
      <div
        className="max-w-screen-2xl container md:px-20 px-4 flex flex-col md:flex-row h-screen"
        style={{
          backgroundImage: "url('/src/assets/b.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-28 flex flex-col justify-center items-center text-center text-black">
          <div className="space-y-4">
            <h1 className="font-bold text-7xl text-white">
              Welcome, <span className="text-9xl text-lightgreen">Farmers!</span>
            </h1>
            <p className="text-xl text-white">
              Our tool helps you manage pests effectively, ensuring a healthier
              harvest and promoting sustainable farming. Let's protect your crops
              together.
            </p>
          </div>
        </div>
      </div>

      {/* Chatbot Icon */}
      <div
        className="fixed bottom-6 right-6 bg-white p-4 rounded-full cursor-pointer text-green"
        onClick={toggleChatbot}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            d="M12.5 0h-9A2.5 2.5 0 0 0 1 2.5v11A2.5 2.5 0 0 0 3.5 16H9v2l4-4h3.5a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 12.5 0zM9 13H3.5A1.5 1.5 0 0 1 2 11.5V2.5A1.5 1.5 0 0 1 3.5 1H12a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H9v2l-3-3v-1z"
          />
        </svg>
      </div>

      {/* Chatbot Modal */}
      {showChatbot && (
        <div className="fixed bottom-0 right-0 p-4 bg-white shadow-lg rounded-lg w-80 h-96 z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">🌾 കൃഷി സഹായി</h3>
            <button onClick={toggleChatbot}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  d="M4.293 3.293a1 1 0 0 1 1.414 0L8 5.586l2.293-2.293a1 1 0 0 1 1.414 1.414L9.414 7l2.293 2.293a1 1 0 0 1-1.414 1.414L8 8.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L6.586 7 4.293 4.707a1 1 0 0 1 0-1.414z"
                />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            <div className="h-40 overflow-y-auto border p-2 rounded-md bg-gray-100">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-md my-1 ${
                    msg.type === "user"
                      ? "bg-green-200 text-right"
                      : "bg-white text-left"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="നിങ്ങളുടെ ചോദ്യങ്ങൾ..."
              className="w-full p-3 mt-4 border rounded-md"
            />
            <button
              className="bg-green-500 text-white mt-3 p-3 w-full"
              onClick={handleSendMessage}
            >
              അയയ്ക്കുക
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default home;
