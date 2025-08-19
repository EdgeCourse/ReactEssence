import React from 'react';
import './index.css';

// WITHOUT Children - Less flexible approach
const CardWithoutChildren = ({ title, content, buttonText }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-lg max-w-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {buttonText}
      </button>
    </div>
  );
};

// WITH Children - More flexible approach
const CardWithChildren = ({ title, children }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-lg max-w-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
};

// Main App component demonstrating both approaches
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          React Children vs No Children
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* WITHOUT Children Examples */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-red-600">
              WITHOUT Children (Less Flexible)
            </h2>
            
            <div className="space-y-4">
              <CardWithoutChildren 
                title="Simple Card"
                content="This card can only display plain text content."
                buttonText="Click Me"
              />
              
              <CardWithoutChildren 
                title="Another Card"
                content="I'm limited to the predefined structure."
                buttonText="Submit"
              />
            </div>
            
            <div className="mt-6 p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-800">Limitations:</h3>
              <ul className="text-red-700 text-sm mt-2 space-y-1">
                <li>• Can't add custom HTML elements</li>
                <li>• Can't include images or complex layouts</li>
                <li>• Need separate props for each piece of content</li>
                <li>• Hard to extend with new content types</li>
              </ul>
            </div>
          </div>

          {/* WITH Children Examples */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-green-600">
              WITH Children (More Flexible)
            </h2>
            
            <div className="space-y-4">
              <CardWithChildren title="Flexible Card">
                <p className="mb-4">This card can contain anything!</p>
                <img 
                  src="https://via.placeholder.com/150x100/4ade80/ffffff?text=Image" 
                  alt="Example" 
                  className="rounded mb-4 w-full"
                />
                <div className="flex gap-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
                    Save
                  </button>
                  <button className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600">
                    Cancel
                  </button>
                </div>
              </CardWithChildren>
              
              <CardWithChildren title="Rich Content">
                <div className="space-y-3">
                  <p>I can have <strong>formatted text</strong> and <em>styling</em>!</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Custom lists</li>
                    <li>Multiple elements</li>
                    <li>Complex layouts</li>
                  </ul>
                  <div className="bg-blue-50 p-2 rounded">
                    <span className="text-blue-800 text-xs">💡 Even nested components!</span>
                  </div>
                </div>
              </CardWithChildren>
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">Benefits:</h3>
              <ul className="text-green-700 text-sm mt-2 space-y-1">
                <li>• Can render any JSX content</li>
                <li>• Highly reusable and composable</li>
                <li>• Single responsibility principle</li>
                <li>• Easy to extend and maintain</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Code Comparison</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-red-600 mb-2">Without Children:</h3>
              <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`<CardWithoutChildren 
  title="My Card"
  content="Fixed content"
  buttonText="Click"
/>`}
              </pre>
            </div>
            
            <div>
              <h3 className="font-semibold text-green-600 mb-2">With Children:</h3>
              <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`<CardWithChildren title="My Card">
  <p>Any content!</p>
  <img src="..." />
  <button>Custom button</button>
</CardWithChildren>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}