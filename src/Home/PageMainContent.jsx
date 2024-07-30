import React from 'react'
import { Link } from 'react-router-dom'

function PageMainContent() {
  return (
    <>
     <div className="flex justify-between items-center px-7 py-4 max-md:flex-col max-md:text-center">
            <div className="max-md:my-4">
              <h1 className="text-4xl font-bold mb-3">Popular Tour Package</h1>
              <p>
                Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                venenatis hendrerit a id lectus.
              </p>
              <p> Suspendissendt blandit
              interdum. Sed pellentesque at nunc eget consectetur.</p>
            </div>
            <div className="max-md:my-4">
              <Link
                to="/viewalltour"
                className={`px-4 py-3 bg-purple-500 text-white rounded-xl`}
              >
                View All Tour
              </Link>
            </div>
          </div> 
    </>
  )
}

export default PageMainContent
