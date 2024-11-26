import { useState, useEffect } from "react";

const GenerateLink = () => {
  const [inputs, setInputs] = useState([{ name: "", pronoun: "" }]);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // Update input values
  const handleInputChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  // Add a new input row
  const addInputRow = () => {
    setInputs([...inputs, { name: "", pronoun: "" }]);
  };

  // Remove an input row, only if more than one row remains
  const removeInputRow = index => {
    if (inputs.length > 1) {
      const newInputs = inputs.filter((_, i) => i !== index);
      setInputs(newInputs);
    }
  };

  // Generate multiple share links and reset inputs
  const generateLinks = () => {
    const generatedLinks = inputs
      .filter(input => input.name.trim() && input.pronoun.trim()) // Only generate links for completed inputs
      .map(
        input =>
          `${baseUrl}/?n=${encodeURIComponent(
            input.name
          )}&p=${encodeURIComponent(input.pronoun)}`
      );

    if (generatedLinks.length === 0) {
      alert("All names and pronouns must be filled.");
      return;
    }

    setLinks(generatedLinks);
    setInputs([{ name: "", pronoun: "" }]); // Clear inputs after generating links
    // Save generated links to localStorage
    localStorage.setItem("generatedLinks", JSON.stringify(generatedLinks));
  };

  // Copy link to clipboard
  const copyToClipboard = link => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Link copied to clipboard.");
      })
      .catch(error => {
        alert("Failed to copy link: " + error);
      });
  };

  // Share link on WhatsApp
  const shareOnWhatsApp = link => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      link
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Remove a specific link
  const removeLink = index => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
    // Update the localStorage with the new list of links
    localStorage.setItem("generatedLinks", JSON.stringify(newLinks));
  };

  // Load links from localStorage on component mount
  useEffect(() => {
    setLoading(true); // Start loading state
    const storedLinks = JSON.parse(localStorage.getItem("generatedLinks"));
    if (storedLinks) {
      setLinks(storedLinks);
    }
    setLoading(false); // Stop loading state once links are loaded
  }, []);

  if (loading)
    return (
      <div className="w-full h-[100dvh] flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  return (
    <div className="max-w-lg mx-auto p-6 pb-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Generate Links</h1>
      <p className="text-base text-gray-500 mb-6">
        Generate link untuk Anda bagikan.
      </p>

      <div className="space-y-4">
        {inputs.map((input, index) => (
          <div key={index} className="flex flex-col gap-2 items-center">
            {index > 0 && <hr className="w-full border-gray-300 mb-2" />}
            <input
              type="text"
              placeholder="Nama orang yang diundang"
              value={input.name}
              onChange={e => handleInputChange(index, "name", e.target.value)}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Pronoun (contoh: Bapak, Ibu, Saudara/i)"
              value={input.pronoun}
              onChange={e =>
                handleInputChange(index, "pronoun", e.target.value)
              }
              className="input input-bordered w-full"
            />
            <button
              onClick={() => removeInputRow(index)}
              className="btn btn-error btn-sm self-start"
              disabled={inputs.length === 1}
            >
              Remove
            </button>
          </div>
        ))}
        <button onClick={addInputRow} className="btn btn-outline w-full">
          Add Another
        </button>
        <button onClick={generateLinks} className="btn btn-primary w-full">
          Generate Links
        </button>
      </div>

      {/* Display the number of generated links if links are available */}
      {links.length > 0 && (
        <>
          <hr className="w-full border-gray-300 mt-6" />
          <h2 className="text-lg font-bold my-4">
            Results {links.length} Links
          </h2>
        </>
      )}

      <div className="space-y-3">
        {links.map((link, index) => (
          <div key={index} className="flex flex-col gap-2">
            <input
              type="text"
              value={link}
              readOnly
              className="input input-bordered w-full"
            />
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(link)}
                className="btn btn-success btn-sm"
              >
                Copy
              </button>
              <button
                onClick={() => shareOnWhatsApp(link)}
                className="btn btn-success btn-sm bg-green-500 hover:bg-green-600"
              >
                Share
              </button>
              <button
                onClick={() => removeLink(index)}
                className="btn btn-error btn-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateLink;
