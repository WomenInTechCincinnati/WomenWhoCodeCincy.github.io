/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 *  * https://www.gatsbyjs.com/docs/data-fetching/
 */
const fetch = require(`node-fetch`);
// You can delete this file if you're not using it
//build time data fetching
//happens when the site is deployed

exports.sourceNodes = async ({
    actions: {createNode},
    createContentDigest,
}) => {
   
    //gets data at build time
    const result = await fetch('http://my-json-server.typicode.com/WomenWhoCodeCincy/wwcode-cincy-database/women_who_code_cincinnati_information');
    const resultData = await result.json();
    createNode({

        links: {
            twitter: resultData.links.twitter,
            facebook: resultData.links.facebook,
            linkedIn:resultData.links.linkedIn,
            website:resultData.links.website,
            github:resultData.links.github,
            meetup: resultData.links.meetup,
        },
        email: resultData.email,
        id: 'contact-page',
        parent: null,
        children: [],
        internal: {
            type: 'Contact',
            contentDigest: createContentDigest(resultData)
        }
    })
}

