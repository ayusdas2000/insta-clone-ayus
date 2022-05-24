import React from 'react'

function Story({ img, username }) {
  return (
    <div>
      <img
        className="h-14 w-14 cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] hover:scale-110 transition transform duration-200 ease-out"
        src={img}
        alt="profile-pic"
      />
      <p className="w-14 truncate text-xs">{username}</p>
    </div>
  )
}

export default Story
