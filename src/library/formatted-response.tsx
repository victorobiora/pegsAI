import TypingEffect from "./typing-effect";

const FormattedResponse = ({
  text,
  role,
}: {
  text: string;
  role: "user" | "assistant";
}) => {
  const finalFormat = (text: string) => {
    let plainText = "";
    let formattedText:JSX.Element[] = [];
  
    text.split("\n").forEach((line, index) => {
      // Handle Headings (### for larger headings)
      if (line.startsWith("### ")) {
        formattedText.push(
          <h2 key={index} className="text-2xl font-bold">
            {line.replace("### ", "")}
          </h2>
        );
        plainText += line.replace("### ", "") + "\n";
        return;
      }
  
      // Handle Subheadings (**bold text as standalone line**)
      if (/^\*\*.+\*\*$/.test(line.trim())) {
        formattedText.push(
          <h3 key={index} className="text-xl font-bold">
            {line.replace(/\*\*/g, "")}
          </h3>
        );
        plainText += line.replace(/\*\*/g, "") + "\n";
        return;
      }
  
      // Handle Inline Bold Text Correctly
      const formattedLine = (
        <p key={index}>
          {line.split(/(\*\*.*?\*\*)/).map((part, i) =>
            /^\*\*.*\*\*$/.test(part) ? (
              <strong key={i} className="font-bold">
                {part.replace(/\*\*/g, "")} {/* Boldens text but removes ** */}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
  
      // Extract plain text for TypingEffect but preserve bold words
      const plainLine = line
        .split(/(\*\*.*?\*\*)/)
        .map((part) => (/^\*\*.*\*\*$/.test(part) ? part.replace(/\*\*/g, "") : part))
        .join("");
  
      plainText += plainLine + "\n";
      formattedText.push(formattedLine);
    });
  
    return { plainText , formattedText };
  };
  
  const finalValue = finalFormat(text);

  const formattedText = finalValue.formattedText; 

  return <div className="space-y-4 text-white flex-wrap">
      <div>
        {role === "assistant" ? <TypingEffect text={finalValue.plainText} /> : formattedText}
      </div>
  </div>;
};

export default FormattedResponse;
