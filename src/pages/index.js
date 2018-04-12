import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{ color: `tomato` }}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fres.cloudinary.com%2Fben2020%2Fimage%2Ffetch%2Fq_auto%2Fhttps%3A%2F%2Fd3n8a8pro7vhmx.cloudfront.net%2Fliberty4us%2Fpages%2F37%2Fmeta_images%2Foriginal%2Fdecleration-independence-min.jpg%3F1512420487" alt="" />
  </div>
)

export default IndexPage
