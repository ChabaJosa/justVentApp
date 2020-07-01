import React from 'react'

const BlogContext = React.createContext()

// Not using export default here because 
// eventually we will use the BlogContext as the export default
export const BlogProvider = ( { children } ) => {
    return <BlogContext.Provider>
        {children}   {/* Children is something unrelated to Context, it's a different React feature */}
    </BlogContext.Provider>
}

