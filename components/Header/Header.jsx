import React from 'react'

const Header = () => {
  return (
    <>
    <nav className="relative container mx-auto p-6">
        {/* Flex Container */}
        <div className="flex items-center justify-end space-x-4">            
            {/* <button id='menu-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button> */}
        </div>
    </nav>
            
    </>
  )
}

export default Header;