import React from "react";
import "/src/components/styles/CodeSymbol.css"; // Import the CSS file for styles

const CodeSymbol = () => {
  const numSymbols = 15; // Number of symbols on each side
  const symbols = Array.from({ length: numSymbols }, (_, index) => (
    <div key={index} className="code-symbol">
      &lt;/&gt;
    </div>
  ));

  return (
    <>
      {/* Left side symbols */}
      <div className="symbols-container left">{symbols}</div>
      
      {/* Right side symbols */}
      <div className="symbols-container right">{symbols}</div>
    </>
  );
};

export default CodeSymbol;
