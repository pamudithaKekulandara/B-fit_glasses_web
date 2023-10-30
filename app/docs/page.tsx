import Link from 'next/link';

export default function Docs() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome to Project Documents.</h1>
          </div>

         <div className="max-w-auto mx-auto text-center pb-12 md:pb-20">
                      

            <table className="table-auto mx-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Document</th>
                  <th className="px-4 py-2">Contributor</th>
                  <th className="px-4 py-2">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Project Registration Documents</td>
                  <td className="px-4 py-2">All</td>
                  <td className="px-4 py-2">
                          <a href={'docs/IT20256814_final_report.pdf'} download>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Download
                        </button>
                      </a>                     
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Status Document 1</td>
                  <td className="px-4 py-2">The Eagles</td>
                  <td className="px-4 py-2">
                    <a href={'docs/IT20256814_final_report.pdf'} download>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Download
                        </button>
                      </a>                      
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Progress Presentation 1</td>
                  <td className="px-4 py-2">Earth, Wind, and Fire</td>
                  <td className="px-4 py-2">
                    <a href={'docs/IT20256814_final_report.pdf'} download>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Download
                        </button>
                      </a>                      
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Research Paper</td>
                  <td className="px-4 py-2">Earth, Wind, and Fire</td>
                  <td className="px-4 py-2">
                    <a href={'docs/IT20256814_final_report.pdf'} download>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Download
                        </button>
                      </a>                      
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Progress Presentation 2</td>
                  <td className="px-4 py-2">Earth, Wind, and Fire</td>
                  <td className="px-4 py-2">
                    <a href={'docs/IT20256814_final_report.pdf'} download>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Download
                        </button>
                      </a>                      
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Final Report & Presentation 1</td>
                  <td className="px-4 py-2">Earth, Wind, and Fire</td>
                  <td className="px-4 py-2">
                    <a href={'docs/IT20256814_final_report.pdf'} download>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Download
                        </button>
                      </a>                      
                  </td>
                </tr>    
                <tr>
                  <td className="px-4 py-2">Status Document 2</td>
                  <td className="px-4 py-2">Earth, Wind, and Fire</td>
                  <td className="px-4 py-2">
                    <a href={'docs/IT20256814_final_report.pdf'} download>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Download
                        </button>
                      </a>                      
                  </td>
                </tr>    
                <tr>
                  <td className="px-4 py-2">Log Book</td>
                  <td className="px-4 py-2">Earth, Wind, and Fire</td>
                  <td className="px-4 py-2">
                    <a href={'docs/IT20256814_final_report.pdf'} download>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Download
                        </button>
                      </a>                      
                  </td>
                </tr>          
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}
